"use client";

import { useSyncExternalStore } from "react";
import {
  getBookingServerSnapshot,
  getBookingSnapshot,
  hydrateBookingFromStorage,
  subscribeBooking,
} from "@/config/booking";
import { useBooking } from "@/context/BookingContext";
import { useEffect } from "react";

/** True after BookingProvider has mounted (always true when using provider). */
export function useBookingHydrated() {
  return useBooking().hydrated;
}

/**
 * Live booking flag from Admin → Settings.
 * Uses the same external store as the admin toggle (always in sync).
 */
export function useOnlineBookingActive() {
  useEffect(() => {
    hydrateBookingFromStorage();
  }, []);

  return useSyncExternalStore(
    subscribeBooking,
    getBookingSnapshot,
    getBookingServerSnapshot,
  );
}
