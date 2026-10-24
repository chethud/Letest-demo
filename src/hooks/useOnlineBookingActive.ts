"use client";

import { useEffect, useState } from "react";
import { isOnlineBookingActive } from "@/config/booking";

export function useOnlineBookingActive() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const sync = () => setActive(isOnlineBookingActive());
    sync();
    window.addEventListener("ksic-booking-change", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("ksic-booking-change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return active;
}
