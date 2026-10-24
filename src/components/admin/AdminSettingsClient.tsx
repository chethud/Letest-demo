"use client";

import React from "react";
import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { BOOKING_TEMPORARILY_UNAVAILABLE } from "@/config/booking";
import styles from "./AdminShell.module.css";

export function AdminSettingsClient() {
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
            {BOOKING_TEMPORARILY_UNAVAILABLE
              ? "Off — Booking temporarily unavailable"
              : "Configurable"}
          </strong>
        </p>
        <p className={styles.muted} style={{ margin: "0 0 1rem" }}>
          Online booking is paused for now. Customers see “Booking temporarily
          unavailable” on the storefront. They can still browse, enquire, and
          save to wishlist.
        </p>
        <div className={styles.actions}>
          <Link href="/collection" className={styles.btnGhost}>
            Open shop
          </Link>
        </div>
      </div>
    </AdminShell>
  );
}
