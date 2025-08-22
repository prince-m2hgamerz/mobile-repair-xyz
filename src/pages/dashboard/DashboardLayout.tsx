import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { supabase } from '../SupabaseClients';
import { LayoutDashboard, CalendarDays, User, LogOut, Clock } from 'lucide-react';

// Custom WhatsApp SVG Icon
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="h-6 w-6"
    fill="currentColor"
  >
    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.828.738 5.463 2.016 7.792L0 32l8.36-2.023A15.933 15.933 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.462 23.9c-.317.887-1.852 1.697-2.59 1.805-.686.103-1.532.144-2.398-.143-3.219-.891-5.272-3.16-6.827-5.227-.377-.516-.8-.532-1.386-.57-.57-.037-1.46-.17-2.221-1.08-.763-.914-1.344-2.056-1.34-3.84.004-1.784 1.37-2.824 1.858-3.202.482-.37 1.057-.462 1.41-.462.356 0 .654.008.939.008.317 0 .703-.122 1.11.91.406 1.034 1.376 3.36 1.5 3.6.123.24.207.523.037.843-.17.32-.256.518-.5.803-.246.287-.524.63-.747.854-.246.246-.5.52-.177 1.03.317.513 1.414 2.322 3.047 3.764 2.034 1.786 2.964 1.546 3.495 1.446.529-.1 1.68-.687 1.918-1.354.238-.667.238-1.238.17-1.354-.07-.118-.256-.18-.537-.318z"/>
  </svg>
);

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

      {/* Floating WhatsApp Button with Label */}
<a
  href="https://wa.me/919891176282"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 z-50 transition-transform transform hover:scale-110"
>
  <WhatsAppIcon />
  <span className="hidden md:inline-block font-semibold">Chat with us</span>
</a>
    </div>
  );
}
