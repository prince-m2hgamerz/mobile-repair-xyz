import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { supabase } from '../pages/SupabaseClients';
import { Menu, X, Smartphone, Wrench, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false); // policy dropdown
  const [isDashboardOpen, setIsDashboardOpen] = useState(false); // dashboard dropdown
  const [user, setUser] = useState<any>(null);
  const location = useLocation();

  // track auth
  const [isAuthed, setIsAuthed] = useState(false);
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setIsAuthed(true);
        setUser(data.user);
      }
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setIsAuthed(!!s?.user);
      setUser(s?.user ?? null);
    });
    return () => {
      sub.subscription.unsubscribe();
    };
  }, []);

  // main navigation
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Book Repair', href: '/request' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // policy links
  const policyLinks = [
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Refund Policy', href: '/refund' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsAuthed(false);
    window.location.href = '/login';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-xl font-bold text-gray-900">
                MOBILE REPAIR XYZ
              </span>
              <Wrench className="h-4 w-4 text-blue-600" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Dropdown for Policy Pages */}
            <div className="relative">
              <button
                onClick={() => setIsPolicyOpen(!isPolicyOpen)}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Policies
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isPolicyOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border">
                  {policyLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsPolicyOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Auth Section */}
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsDashboardOpen(!isDashboardOpen)}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isDashboardOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border">
                    <Link
                      to="/dashboard"
                      onClick={() => setIsDashboardOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* CTA */}
            <Link
  to="/request"
  className="block w-full md:w-auto md:inline-block text-center mt-3 md:mt-0 
             bg-blue-600 text-white px-4 py-2 md:px-3 md:py-1.5 
             rounded-lg text-sm md:text-xs font-medium 
             hover:bg-blue-700 transition duration-200 transform hover:scale-105 md:ml-4"
>
  Get Quick Repair
</Link>


          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Policies Dropdown (Mobile inline) */}
              <div className="border-t mt-2 pt-2">
                <span className="block px-3 py-2 text-gray-500 text-sm font-semibold">
                  Policies
                </span>
                {policyLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-5 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Auth Buttons Mobile */}
              {!user ? (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <div className="border-t mt-2 pt-2">
                  <span className="block px-3 py-2 text-gray-500 text-sm font-semibold">
                    Account
                  </span>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-5 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100"
                  >
                    My Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-5 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}

<Link
  to="/request"
  onClick={() => setIsMenuOpen(false)}
  className="block w-full md:w-auto md:inline-block mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-blue-700 text-center md:ml-4"
>
  Get Quick Repairm
</Link>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
