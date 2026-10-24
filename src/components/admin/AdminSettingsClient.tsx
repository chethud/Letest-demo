"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { useBooking } from "@/context/BookingContext";
import styles from "./AdminShell.module.css";

export function AdminSettingsClient() {
  const { bookingActive, enableBooking, disableBooking, hydrated } = useBooking();
  const [error, setError] = useState("");

  return (
    <AdminShell
      title="Settings"
      subtitle="Admin-only controls for this browser."
    >
      <div className={styles.panel}>
        <h2>Online booking</h2>
        <p className={styles.muted} style={{ margin: "0 0 0.85rem" }}>
          Status:{" "}
          <strong>
            {!hydrated
              ? "Checking…"
              : bookingActive
                ? "On — customers can book on the storefront"
                : "Off — customers see “Booking temporarily unavailable”"}
          </strong>
        </p>
        <p className={styles.muted} style={{ margin: "0 0 1rem" }}>
          Only admins can turn booking on or off here. When it is on, sign in as a
          customer (customer@gmail.com / Customer@2026) to bag and book — admin
          accounts cannot place orders.
        </p>
        {error ? (
          <p className={styles.loginError} style={{ marginBottom: "1rem" }}>
            {error}
          </p>
        ) : null}
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.btn}
            onClick={() => {
              const result = enableBooking();
              if (!result.ok) {
                setError(result.error);
                return;
              }
              setError("");
            }}
            disabled={!hydrated || bookingActive}
          >
            Turn booking on
          </button>
          <button
            type="button"
            className={styles.btnGhost}
            onClick={() => {
              const result = disableBooking();
              if (!result.ok) {
                setError(result.error);
                return;
              }
              setError("");
            }}
            disabled={!hydrated || !bookingActive}
          >
            Turn booking off
          </button>
          <Link href="/collection" className={styles.btnGhost}>
            Open shop
          </Link>
        </div>
      </div>
    </AdminShell>
  );
}
