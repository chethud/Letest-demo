"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { demoHash } from "@/lib/demoHash";
import { readJson, writeJson } from "@/lib/storage";

const USERS_KEY = "ksic-users-v1";
const SESSION_KEY = "ksic-session-v1";

export const ADMIN_EMAIL = "admin@gmail.com";
export const ADMIN_PASSWORD = "Admin@2026";
/** Demo customer — use this to test bag/booking (admin cannot book). */
export const CUSTOMER_EMAIL = "customer@gmail.com";
export const CUSTOMER_PASSWORD = "Customer@2026";

export type UserRole = "admin" | "customer";

export type SessionUser = {
  email: string;
  name: string;
  role: UserRole;
};

type StoredUser = {
  email: string;
  name: string;
  passwordHash: string;
  role: "customer";
  createdAt: string;
};

type AuthContextValue = {
  hydrated: boolean;
  user: SessionUser | null;
  isAdmin: boolean;
  login: (email: string, password: string) => { ok: true } | { ok: false; error: string };
  signup: (
    name: string,
    email: string,
    password: string,
  ) => { ok: true } | { ok: false; error: string };
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [user, setUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    setUser(readJson<SessionUser | null>(SESSION_KEY, null));
    setHydrated(true);
  }, []);

  const persistSession = useCallback((session: SessionUser | null) => {
    setUser(session);
    if (session) writeJson(SESSION_KEY, session);
    else if (typeof window !== "undefined") {
      window.localStorage.removeItem(SESSION_KEY);
    }
  }, []);

  const login = useCallback(
    (email: string, password: string) => {
      const normalized = normalizeEmail(email);
      if (!normalized || !password) {
        return { ok: false as const, error: "Enter email and password." };
      }

      if (normalized === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        persistSession({
          email: ADMIN_EMAIL,
          name: "KSIC Admin",
          role: "admin",
        });
        return { ok: true as const };
      }

      if (normalized === CUSTOMER_EMAIL && password === CUSTOMER_PASSWORD) {
        persistSession({
          email: CUSTOMER_EMAIL,
          name: "Demo Customer",
          role: "customer",
        });
        return { ok: true as const };
      }

      const users = readJson<StoredUser[]>(USERS_KEY, []);
      const found = users.find((item) => item.email === normalized);
      if (!found || found.passwordHash !== demoHash(password)) {
        return { ok: false as const, error: "Invalid email or password." };
      }

      persistSession({
        email: found.email,
        name: found.name,
        role: "customer",
      });
      return { ok: true as const };
    },
    [persistSession],
  );

  const signup = useCallback(
    (name: string, email: string, password: string) => {
      const trimmedName = name.trim();
      const normalized = normalizeEmail(email);
      if (!trimmedName) return { ok: false as const, error: "Enter your name." };
      if (!normalized || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
        return { ok: false as const, error: "Enter a valid email address." };
      }
      if (password.length < 6) {
        return { ok: false as const, error: "Password must be at least 6 characters." };
      }
      if (normalized === ADMIN_EMAIL || normalized === CUSTOMER_EMAIL) {
        return { ok: false as const, error: "This email is reserved. Use another address." };
      }

      const users = readJson<StoredUser[]>(USERS_KEY, []);
      if (users.some((item) => item.email === normalized)) {
        return { ok: false as const, error: "An account with this email already exists." };
      }

      const next: StoredUser = {
        email: normalized,
        name: trimmedName,
        passwordHash: demoHash(password),
        role: "customer",
        createdAt: new Date().toISOString(),
      };
      writeJson(USERS_KEY, [...users, next]);
      persistSession({
        email: next.email,
        name: next.name,
        role: "customer",
      });
      return { ok: true as const };
    },
    [persistSession],
  );

  const logout = useCallback(() => {
    persistSession(null);
  }, [persistSession]);

  const value = useMemo<AuthContextValue>(
    () => ({
      hydrated,
      user,
      isAdmin: user?.role === "admin",
      login,
      signup,
      logout,
    }),
    [hydrated, user, login, signup, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
