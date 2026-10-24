"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import { usePathname } from "next/navigation";
import {
  BOOKING_CHANGE_EVENT,
  BOOKING_OVERRIDE_KEY,
  disableOnlineBooking,
  enableOnlineBooking,
  getBookingServerSnapshot,
  getBookingSnapshot,
  hydrateBookingFromStorage,
  subscribeBooking,
} from "@/config/booking";

type BookingContextValue = {
  hydrated: boolean;
  bookingActive: boolean;
  enableBooking: () => { ok: boolean; error?: string };
  disableBooking: () => { ok: boolean; error?: string };
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bookingActive = useSyncExternalStore(
    subscribeBooking,
    getBookingSnapshot,
    getBookingServerSnapshot,
  );

  useEffect(() => {
    hydrateBookingFromStorage();

    const sync = () => hydrateBookingFromStorage();
    const onStorage = (event: StorageEvent) => {
      if (
        event.key === BOOKING_OVERRIDE_KEY ||
        event.key === `${BOOKING_OVERRIDE_KEY}:ping` ||
        event.key === null
      ) {
        sync();
      }
    };

    window.addEventListener(BOOKING_CHANGE_EVENT, sync);
    window.addEventListener("storage", onStorage);
    window.addEventListener("focus", sync);
    document.addEventListener("visibilitychange", sync);

    return () => {
      window.removeEventListener(BOOKING_CHANGE_EVENT, sync);
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("focus", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  // Re-read whenever the route changes (admin ↔ shop).
  useEffect(() => {
    hydrateBookingFromStorage();
  }, [pathname]);

  const enableBooking = useCallback(() => enableOnlineBooking(), []);
  const disableBooking = useCallback(() => disableOnlineBooking(), []);

  const value = useMemo<BookingContextValue>(
    () => ({
      hydrated: true,
      bookingActive,
      enableBooking,
      disableBooking,
    }),
    [bookingActive, enableBooking, disableBooking],
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
