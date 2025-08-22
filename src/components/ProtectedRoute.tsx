import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../pages/SupabaseClients";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireRole?: "user" | "admin"; // optional role
}

export default function ProtectedRoute({ children, requireRole }: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        // not logged in → redirect
        setIsAllowed(false);
        setLoading(false);
        return;
      }

      const user = session.user;

      // fetch role from profiles table
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Error fetching role:", error);
        setIsAllowed(false);
        setLoading(false);
        return;
      }

      // role check
      if (!requireRole || profile?.role === requireRole) {
        setIsAllowed(true);
      } else {
        setIsAllowed(false);
      }

      setLoading(false);
    };

    checkAuth();
  }, [requireRole]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!isAllowed) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
