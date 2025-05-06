"use client";
import type React from "react";
import { createContext, useState, useContext, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export default function ClientBody({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticatedState] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On mount, check localStorage for auth flag
    if (typeof window !== 'undefined' && localStorage.getItem('umrah-admin-auth') === '1') {
      setIsAuthenticatedState(true);
    }
    setLoading(false);
  }, []);

  const setIsAuthenticated = (auth: boolean) => {
    setIsAuthenticatedState(auth);
    if (typeof window !== 'undefined') {
      if (auth) {
        localStorage.setItem('umrah-admin-auth', '1');
      } else {
        localStorage.removeItem('umrah-admin-auth');
      }
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loading, setLoading }}>
      <div className="antialiased">{children}</div>
    </AuthContext.Provider>
  );
}
