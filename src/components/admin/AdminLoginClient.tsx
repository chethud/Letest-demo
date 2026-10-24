"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { flushSync } from "react-dom";
import { ADMIN_EMAIL, ADMIN_PASSWORD, useAuth } from "@/context/AuthContext";
import styles from "./AdminShell.module.css";

export function AdminLoginClient() {
  const router = useRouter();
  const { login, hydrated, isAdmin } = useAuth();
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState(ADMIN_PASSWORD);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (hydrated && isAdmin) router.replace("/admin");
  }, [hydrated, isAdmin, router]);

  function submit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    let result: { ok: true } | { ok: false; error: string } = {
      ok: false,
      error: "Sign-in failed.",
    };

    // Flush session into AuthContext before navigating so AdminShell does not bounce back.
    flushSync(() => {
      result = login(email, password);
    });

    if (!result.ok) {
      setError(result.error);
      setSubmitting(false);
      return;
    }

    router.replace("/admin");
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <p className={styles.muted} style={{ margin: 0 }}>
          Mysore Silk · Administration
        </p>
        <h1>Admin sign in</h1>
        <form className={styles.form} onSubmit={submit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </label>
          {error ? <p className={styles.loginError}>{error}</p> : null}
          <button type="submit" className={styles.btn} disabled={submitting}>
            {submitting ? "Signing in…" : "Enter dashboard"}
          </button>
        </form>
        <p className={styles.muted} style={{ marginTop: "1.15rem" }}>
          Demo: <strong>{ADMIN_EMAIL}</strong> / <strong>{ADMIN_PASSWORD}</strong>
          <br />
          <Link href="/">Back to storefront</Link>
        </p>
      </div>
    </div>
  );
}
