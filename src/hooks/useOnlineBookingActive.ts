"use client";

import { useEffect } from "react";
import { hydrateBookingFromStorage } from "@/config/booking";
import { useBooking } from "@/context/BookingContext";

/** True after booking storage has been read on the client. */
export function useBookingHydrated() {
  return useBooking().hydrated;
}

/**
 * Live booking flag from Admin → Settings.
 * False until storage is hydrated, so the shop never treats “loading” as off.
 */
export function useOnlineBookingActive() {
  const { bookingActive } = useBooking();

  useEffect(() => {
    hydrateBookingFromStorage();
  }, []);

  return bookingActive;
}
