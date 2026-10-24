"use client";

import React, { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import {
  clearBookingOverride,
  getEffectiveBookingFlags,
  isOnlineBookingActive,
  writeBookingOverride,
  type BookingFlags,
} from "@/config/booking";
import styles from "./AdminShell.module.css";

export function AdminSettingsClient() {
  const [flags, setFlags] = useState<BookingFlags>(() =>
    typeof window === "undefined"
      ? {
          bookingEnabled: false,
          inventoryValidationConfigured: false,
          paymentConfigured: false,
        }
      : getEffectiveBookingFlags(),
  );
  const [active, setActive] = useState(false);

  useEffect(() => {
    const sync = () => {
      setFlags(getEffectiveBookingFlags());
      setActive(isOnlineBookingActive());
    };
    sync();
    window.addEventListener("ksic-booking-change", sync);
    return () => window.removeEventListener("ksic-booking-change", sync);
  }, []);

  function turnBookingOn() {
    writeBookingOverride({
      bookingEnabled: true,
      inventoryValidationConfigured: true,
      paymentConfigured: true,
    });
  }

  function turnBookingOff() {
    clearBookingOverride();
  }

  return (
    <AdminShell
      title="Settings"
      subtitle="Runtime controls for this browser (demo override)."
    >
      <div className={styles.panel}>
        <h2>Online booking</h2>
        <p className={styles.muted} style={{ margin: "0 0 0.85rem" }}>
          Status:{" "}
          <strong>{active ? "On — customers can book" : "Off — booking locked"}</strong>
        </p>
        <ul className={styles.muted} style={{ margin: "0 0 1rem", paddingLeft: "1.1rem" }}>
          <li>bookingEnabled: {String(flags.bookingEnabled)}</li>
          <li>
            inventoryValidationConfigured: {String(flags.inventoryValidationConfigured)}
          </li>
          <li>paymentConfigured: {String(flags.paymentConfigured)}</li>
        </ul>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.btn}
            onClick={turnBookingOn}
            disabled={active}
          >
            Turn booking on
          </button>
          <button
            type="button"
            className={styles.btnGhost}
            onClick={turnBookingOff}
            disabled={!active}
          >
            Turn booking off
          </button>
        </div>
      </div>
    </AdminShell>
  );
}
