import React, { useEffect, useState } from 'react';
import { supabase } from '../SupabaseClients';

export default function Profile() {
  const [email, setEmail] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [saving, setSaving] = useState(false);

  // Load profile info from last request (simple approach) or store a dedicated profile table if you prefer
  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      setEmail(user.email ?? '');
      const { data } = await supabase
        .from('repair_requests')
        .select('customername, mobilenumber')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();
      if (data) {
        setCustomerName(data.customername ?? '');
        setMobileNumber(data.mobilenumber ?? '');
      }
    })();
  }, []);

  // This example writes a "profile snapshot" into a new row (or you can create a true profiles table)
  const save = async () => {
    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    // Write a no-op appointment or create a dedicated "profiles" table. Recommended: create profiles table.
    await supabase.from('repair_requests').insert({
      user_id: user.id,
      customername: customerName,
      mobilenumber: mobileNumber,
      status: 'pending', // harmless; consider switching to a dedicated "profiles" table later
    });
    setSaving(false);
    alert('Saved (demo). For production, create a proper profiles table.');
  };

  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="text-xl md:text-2xl font-bold">Profile</h1>

      <div className="bg-white p-4 rounded-xl shadow border space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input disabled value={email} className="w-full border rounded-lg px-3 py-2 bg-gray-100" />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Full Name</label>
          <input value={customerName} onChange={e => setCustomerName(e.target.value)} className="w-full border rounded-lg px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Mobile Number</label>
          <input value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} className="w-full border rounded-lg px-3 py-2" />
        </div>
        <button onClick={save} disabled={saving} className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          {saving ? 'Saving…' : 'Save'}
        </button>
      </div>
    </div>
  );
}
