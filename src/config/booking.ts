/**
 * Online booking stays off until a real booking service, inventory check,
 * and payment integration exist.
 *
 * Static defaults live here. Admin settings can override at runtime via
 * localStorage (`ksic-booking-override-v1`) for the current browser.
 *
 * Cart and wishlist keep working while booking is locked.
 */
export const bookingConfig = {
  bookingEnabled: false,
  inventoryValidationConfigured: false,
  paymentConfigured: false,
};

export const BOOKING_OVERRIDE_KEY = "ksic-booking-override-v1";

export type BookingFlags = {
  bookingEnabled: boolean;
  inventoryValidationConfigured: boolean;
  paymentConfigured: boolean;
};

export function readBookingOverride(): BookingFlags | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(BOOKING_OVERRIDE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as BookingFlags;
  } catch {
    return null;
  }
}

export function writeBookingOverride(flags: BookingFlags) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(BOOKING_OVERRIDE_KEY, JSON.stringify(flags));
  window.dispatchEvent(new Event("ksic-booking-change"));
}

export function clearBookingOverride() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(BOOKING_OVERRIDE_KEY);
  window.dispatchEvent(new Event("ksic-booking-change"));
}

export function getEffectiveBookingFlags(): BookingFlags {
  const override = readBookingOverride();
  return override ?? { ...bookingConfig };
}

export function isOnlineBookingActive() {
  const flags = getEffectiveBookingFlags();
  return (
    flags.bookingEnabled &&
    flags.inventoryValidationConfigured &&
    flags.paymentConfigured
  );
}
