import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { supabase } from '../SupabaseClients';
import { LayoutDashboard, CalendarDays, User, LogOut, Clock } from 'lucide-react';

export default function DashboardLayout() {
  const [email, setEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setEmail(user?.email ?? null);
    })();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <header className="h-14 bg-white border-b flex items-center justify-between px-4">
        <Link to="/" className="font-bold">MOBILE REPAIR XYZ</Link>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">{email}</div>
          <button onClick={signOut} className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-red-600">
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <aside className="bg-white border-r">
          <nav className="p-4 space-y-1">
            <NavLink
              end
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                  isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <LayoutDashboard className="w-4 h-4" /> Overview
            </NavLink>
            <NavLink
              to="/dashboard/appointments"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                  isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <CalendarDays className="w-4 h-4" /> Appointments
            </NavLink>
            <NavLink
              to="/dashboard/history"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                  isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <Clock className="w-4 h-4" /> History
            </NavLink>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                  isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <User className="w-4 h-4" /> Profile
            </NavLink>
          </nav>
        </aside>

        {/* Content */}
        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
