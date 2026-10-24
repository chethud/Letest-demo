"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ADMIN_EMAIL, ADMIN_PASSWORD, useAuth } from "@/context/AuthContext";
import styles from "./AdminShell.module.css";

export function AdminLoginClient() {
  const router = useRouter();
  const { login, logout, hydrated, isAdmin } = useAuth();
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (hydrated && isAdmin) router.replace("/admin");
  }, [hydrated, isAdmin, router]);

  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (
      email.trim().toLowerCase() !== ADMIN_EMAIL ||
      password !== ADMIN_PASSWORD
    ) {
      setError("Use admin@gmail.com and the admin password.");
      return;
    }
    const result = login(email, password);
    if (!result.ok) {
      setError(result.error);
      logout();
      return;
    }
    setError("");
    router.push("/admin");
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <p className={styles.muted}>KSIC administration</p>
        <h1 style={{ margin: "0.35rem 0 0.75rem", color: "#7a1530", fontWeight: 500 }}>
          Admin sign in
        </h1>
        <form className={styles.form} onSubmit={submit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </label>
          {error ? (
            <p style={{ margin: 0, color: "#7a1530", fontSize: "0.84rem" }}>{error}</p>
          ) : null}
          <button type="submit" className={styles.btn}>
            Enter dashboard
          </button>
        </form>
        <p className={styles.muted} style={{ marginTop: "1rem" }}>
          Demo gate only. <Link href="/">Back to storefront</Link>
        </p>
      </div>
    </div>
  );
}
