"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  CUSTOMER_EMAIL,
  CUSTOMER_PASSWORD,
  useAuth,
} from "@/context/AuthContext";
import styles from "./AuthForm.module.css";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, hydrated } = useAuth();
  const [email, setEmail] = useState(CUSTOMER_EMAIL);
  const [password, setPassword] = useState(CUSTOMER_PASSWORD);
  const [error, setError] = useState("");

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const result = login(email, password);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setError("");
    const next = searchParams.get("next");
    if (email.trim().toLowerCase() === "admin@gmail.com") {
      router.push(next?.startsWith("/admin") ? next : "/admin");
      return;
    }
    router.push(next && next.startsWith("/") ? next : "/account");
  }

  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.card}>
          <p className={styles.eyebrow}>Account</p>
          <h1 className={styles.title}>Sign in</h1>
          <p className={styles.lead}>
            Access your KSIC wishlist bookings and saved preferences.
          </p>
          <form className={styles.form} onSubmit={submit} noValidate>
            <label>
              Email
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!hydrated}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={!hydrated}
              />
            </label>
            {error ? <p className={styles.error}>{error}</p> : null}
            <button type="submit" className={styles.submit} disabled={!hydrated}>
              Sign in
            </button>
          </form>
          <p className={styles.footer}>
            New here? <Link href="/signup">Create an account</Link>
          </p>
          <p className={styles.note}>
            Demo customer: {CUSTOMER_EMAIL} / {CUSTOMER_PASSWORD}
            <br />
            Admin (cannot book): admin@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
