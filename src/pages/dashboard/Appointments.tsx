import React, { useEffect, useMemo, useState } from 'react';
import { supabase } from '../SupabaseClients';
import type { RepairRequest, RepairStatus } from '../../types/appointments';
import StatusBadge from '../../components/StatusBadge';

export default function Appointments() {
  const [items, setItems] = useState<RepairRequest[]>([]);
  const [statusFilter, setStatusFilter] = useState<RepairStatus | 'all'>('all');
  const [query, setQuery] = useState('');

  const load = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data, error } = await supabase
      .from('repair_requests')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    if (!error) setItems((data ?? []) as RepairRequest[]);
  };

  useEffect(() => {
    load();
    const channel = supabase
      .channel('rr-appointments')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'repair_requests' }, load)
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  const filtered = useMemo(() => {
    return items.filter(r => {
      const matchStatus = statusFilter === 'all' ? true : r.status === statusFilter;
      const text = `${r.brand} ${r.model} ${r.customername} ${r.issueDescription}`.toLowerCase();
      const matchQuery = text.includes(query.toLowerCase());
      return matchStatus && matchQuery;
    });
  }, [items, statusFilter, query]);

  const cancel = async (id: string) => {
    await supabase.from('repair_requests').update({ status: 'canceled' }).eq('id', id);
    // RLS policy lets the user update their own rows.
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl md:text-2xl font-bold">Appointments</h1>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow border flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="flex gap-2 flex-wrap">
          {(['all','pending','accepted','in_progress','completed','canceled'] as const).map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s as any)}
              className={`px-3 py-1 rounded text-sm border ${statusFilter === s ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              {s.replace('_',' ')}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search brand, model, issue, name…"
          className="w-full md:w-72 border rounded-lg px-3 py-2 text-sm"
        />
      </div>

      {/* List */}
      <div className="bg-white rounded-xl shadow border divide-y">
        {filtered.length === 0 ? (
          <div className="p-6 text-sm text-gray-500">No appointments found.</div>
        ) : filtered.map((r) => (
          <div key={r.id} className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <StatusBadge status={r.status} />
                <div className="font-semibold">{r.brand} {r.model}</div>
              </div>
              <div className="text-sm text-gray-600">
                {r.issueDescription}
              </div>
              <div className="text-xs text-gray-500">
                {r.repairDate ? new Date(r.repairDate).toDateString() : ''} {r.preferredTimeSlot ? `• ${r.preferredTimeSlot}` : ''}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {(r.status === 'pending' || r.status === 'accepted') && (
                <button
                  onClick={() => cancel(r.id)}
                  className="text-sm px-3 py-2 rounded-md border hover:bg-red-50 text-red-600 border-red-200"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
