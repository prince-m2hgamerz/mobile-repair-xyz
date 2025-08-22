import React, { useEffect, useState } from 'react';
import { supabase } from '../SupabaseClients';
import type { RepairRequest } from '../../types/appointments';
import StatusBadge from '../../components/StatusBadge';

export default function History() {
  const [items, setItems] = useState<RepairRequest[]>([]);

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase
        .from('repair_requests')
        .select('*')
        .eq('user_id', user.id)
        .in('status', ['completed','canceled'])
        .order('updated_at', { ascending: false });
      setItems((data ?? []) as RepairRequest[]);
    };

    load();
    const channel = supabase
      .channel('rr-history')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'repair_requests' }, load)
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-xl md:text-2xl font-bold">History</h1>
      <div className="bg-white rounded-xl shadow border divide-y">
        {items.length === 0 ? (
          <div className="p-6 text-sm text-gray-500">No completed/canceled requests yet.</div>
        ) : items.map(r => (
          <div key={r.id} className="p-4">
            <div className="flex items-center gap-2">
              <StatusBadge status={r.status} />
              <div className="font-semibold">{r.brand} {r.model}</div>
            </div>
            <div className="text-sm text-gray-600">{r.issueDescription}</div>
            <div className="text-xs text-gray-500">
              Booked: {new Date(r.created_at).toLocaleString()} • Updated: {new Date(r.updated_at).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
