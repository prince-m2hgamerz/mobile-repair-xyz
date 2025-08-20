import React from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '/home/prince-m2hgamerz/mobile-repair-xyz/src/pages/SupabaseClients.tsx';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const session = supabase.auth.getSession(); // or use hook

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
