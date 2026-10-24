"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import styles from "./AuthForm.module.css";

export function SignupForm() {
  const router = useRouter();
  const { signup, hydrated } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const result = signup(name, email, password);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setError("");
    router.push("/account");
  }

  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.card}>
          <p className={styles.eyebrow}>Account</p>
          <h1 className={styles.title}>Create account</h1>
          <p className={styles.lead}>
            Save sarees, track booking requests, and continue where you left off.
          </p>
          <form className={styles.form} onSubmit={submit} noValidate>
            <label>
              Full name
              <input
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!hydrated}
              />
            </label>
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
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={!hydrated}
              />
            </label>
            {error ? <p className={styles.error}>{error}</p> : null}
            <button type="submit" className={styles.submit} disabled={!hydrated}>
              Create account
            </button>
          </form>
          <p className={styles.footer}>
            Already registered? <Link href="/login">Sign in</Link>
          </p>
          <p className={styles.note}>
            Demo signup only. Passwords are stored locally in this browser and are
            not bank-grade secure.
          </p>
        </div>
      </div>
    </div>
  );
}
