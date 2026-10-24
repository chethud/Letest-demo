/**
 * Online booking flag — controlled only from Admin → Settings.
 * Stored in localStorage + cookie so every tab/page stays in sync.
 */

export const BOOKING_OVERRIDE_KEY = "ksic-booking-override-v1";
export const BOOKING_COOKIE = "ksic_booking_on";
export const BOOKING_CHANGE_EVENT = "ksic-booking-change";

export type BookingFlags = {
  bookingEnabled: boolean;
  inventoryValidationConfigured: boolean;
  paymentConfigured: boolean;
};

export type BookingPersistResult = { ok: true } | { ok: false; error: string };

export const bookingConfig: BookingFlags = {
  bookingEnabled: false,
  inventoryValidationConfigured: false,
  paymentConfigured: false,
};

type Listener = () => void;

let memoryEnabled: boolean | null = null;
const listeners = new Set<Listener>();

function flagsFromEnabled(enabled: boolean): BookingFlags {
  return {
    bookingEnabled: enabled,
    inventoryValidationConfigured: enabled,
    paymentConfigured: enabled,
  };
}

function readCookie(): boolean | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${BOOKING_COOKIE}=(1|0)(?:;|$)`),
  );
  if (!match) return null;
  return match[1] === "1";
}

function writeCookie(enabled: boolean) {
  if (typeof document === "undefined") return;
  document.cookie = `${BOOKING_COOKIE}=${enabled ? "1" : "0"}; path=/; max-age=31536000; SameSite=Lax`;
}

function readLocalFlag(): boolean | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(BOOKING_OVERRIDE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<BookingFlags>;
      if (typeof parsed.bookingEnabled === "boolean") return parsed.bookingEnabled;
    }
  } catch {
    /* ignore */
  }
  try {
    const raw = window.sessionStorage.getItem(BOOKING_OVERRIDE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<BookingFlags>;
      if (typeof parsed.bookingEnabled === "boolean") return parsed.bookingEnabled;
    }
  } catch {
    /* ignore */
  }
  return null;
}

function readStorageEnabled(): boolean | null {
  if (typeof window === "undefined") return null;

  const fromLocal = readLocalFlag();
  const fromCookie = readCookie();

  // Prefer localStorage; heal a stale cookie so shop and admin never disagree.
  if (fromLocal !== null) {
    if (fromCookie !== fromLocal) writeCookie(fromLocal);
    return fromLocal;
  }
  if (fromCookie !== null) return fromCookie;
  return null;
}

function persistEnabled(enabled: boolean): BookingPersistResult {
  if (typeof window === "undefined") {
    return { ok: false, error: "Booking can only be changed in the browser." };
  }

  writeCookie(enabled);
  const raw = JSON.stringify(flagsFromEnabled(enabled));

  let stored = false;
  try {
    window.localStorage.setItem(BOOKING_OVERRIDE_KEY, raw);
    stored = true;
  } catch {
    /* quota */
  }
  try {
    window.sessionStorage.setItem(BOOKING_OVERRIDE_KEY, raw);
    stored = true;
  } catch {
    /* quota */
  }

  // Cookie alone is enough for cross-page sync.
  if (!stored && readCookie() === null) {
    return {
      ok: false,
      error:
        "Could not save booking setting. Clear site data (CMS uploads may have filled storage) and try again.",
    };
  }

  return { ok: true };
}

function emit() {
  listeners.forEach((listener) => listener());
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(BOOKING_CHANGE_EVENT));
    try {
      window.localStorage.setItem(`${BOOKING_OVERRIDE_KEY}:ping`, String(Date.now()));
    } catch {
      /* ignore */
    }
  }
}

/** Call on client boot and whenever storage may have changed. */
export function hydrateBookingFromStorage() {
  const stored = readStorageEnabled();
  memoryEnabled = stored === null ? false : stored;
  emit();
  return memoryEnabled;
}

export function getBookingSnapshot() {
  if (memoryEnabled === null) {
    if (typeof window === "undefined") return false;
    memoryEnabled = readStorageEnabled() ?? false;
  }
  return memoryEnabled;
}

export function getBookingServerSnapshot() {
  return false;
}

export function subscribeBooking(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function isOnlineBookingActive() {
  return getBookingSnapshot() === true;
}

export function readBookingOverride(): BookingFlags | null {
  const stored = readStorageEnabled();
  if (stored === null && memoryEnabled === null) return null;
  return flagsFromEnabled(memoryEnabled ?? stored ?? false);
}

export function getEffectiveBookingFlags(): BookingFlags {
  return flagsFromEnabled(isOnlineBookingActive());
}

export function enableOnlineBooking(): BookingPersistResult {
  const result = persistEnabled(true);
  memoryEnabled = true;
  emit();
  return result;
}

export function disableOnlineBooking(): BookingPersistResult {
  const result = persistEnabled(false);
  memoryEnabled = false;
  emit();
  return result;
}

export function writeBookingOverride(flags: BookingFlags): BookingPersistResult {
  return flags.bookingEnabled ? enableOnlineBooking() : disableOnlineBooking();
}

export function clearBookingOverride(): BookingPersistResult {
  return disableOnlineBooking();
}
