import React, { useEffect, useMemo, useState } from 'react';
import { supabase } from '../SupabaseClients';
import type { RepairRequest } from '../../types/appointments';
import StatusBadge from '../../components/StatusBadge';
import { Link } from 'react-router-dom';

export default function Overview() {
  const [items, setItems] = useState<RepairRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let channel: ReturnType<typeof supabase.channel> | null = null;

    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data, error } = await supabase
        .from('repair_requests')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      if (!error) setItems((data ?? []) as RepairRequest[]);
      setLoading(false);
    };

    load();

    channel = supabase
      .channel('rr-overview')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'repair_requests' }, load)
      .subscribe();

    return () => {
      if (channel) supabase.removeChannel(channel);
    };
  }, []);

  const counts = useMemo(() => {
    const c = { total: 0, pending: 0, accepted: 0, in_progress: 0, completed: 0, canceled: 0 };
    for (const r of items) {
      c.total += 1;
      const key = (r.status ?? 'pending') as keyof typeof c;
      if (key in c) c[key] += 1;
    }
    return c;
  }, [items]);

  const nextAppt = useMemo(() => {
    const upcoming = items
      .filter(r => ['pending','accepted','in_progress'].includes(r.status))
      .sort((a, b) => new Date(a.repairDate ?? a.created_at).getTime() - new Date(b.repairDate ?? b.created_at).getTime());
    return upcoming[0];
  }, [items]);

  return (
    <div className="space-y-6">
      <h1 className="text-xl md:text-2xl font-bold">Overview</h1>

      {/* KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: 'Total', value: counts.total },
          { label: 'Pending', value: counts.pending },
          { label: 'Accepted', value: counts.accepted },
          { label: 'In-progress', value: counts.in_progress },
          { label: 'Completed', value: counts.completed },
          { label: 'Canceled', value: counts.canceled },
        ].map(k => (
          <div key={k.label} className="bg-white rounded-xl p-4 shadow border">
            <div className="text-sm text-gray-500">{k.label}</div>
            <div className="text-2xl font-bold">{k.value}</div>
          </div>
        ))}
      </div>

      {/* Next appointment */}
      <div className="bg-white rounded-xl p-4 shadow border">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Next Appointment</h2>
          <Link to="/dashboard/appointments" className="text-sm text-blue-600">View all</Link>
        </div>
        {loading ? (
          <div className="text-gray-500 text-sm mt-2">Loading…</div>
        ) : nextAppt ? (
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <StatusBadge status={nextAppt.status} />
              <div className="font-medium">{nextAppt.brand} {nextAppt.model}</div>
            </div>
            <div className="text-sm text-gray-600 mt-1">{nextAppt.issueDescription}</div>
            <div className="text-sm text-gray-600 mt-1">
              {nextAppt.repairDate ? new Date(nextAppt.repairDate).toDateString() : ''} {nextAppt.preferredTimeSlot ? `• ${nextAppt.preferredTimeSlot}` : ''}
            </div>
            <div className="text-sm text-gray-500 mt-1">{nextAppt.address}</div>
          </div>
        ) : (
          <div className="text-gray-500 text-sm mt-2">No upcoming appointments.</div>
        )}
      </div>
    </div>
  );
}
