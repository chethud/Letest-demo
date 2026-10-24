"use client";

import React, { useEffect, useMemo, useState } from "react";
import { CatalogImage } from "@/components/common/CatalogImage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useOrders } from "@/context/OrdersContext";
import { useShop } from "@/context/ShopContext";
import { useOnlineBookingActive } from "@/hooks/useOnlineBookingActive";
import styles from "./CheckoutPage.module.css";

export function CheckoutPageClient() {
  const router = useRouter();
  const { cart, clearCart, hydrated, cartCount } = useShop();
  const { user, isAdmin } = useAuth();
  const { createOrder } = useOrders();
  const bookingActive = useOnlineBookingActive();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showroom, setShowroom] = useState("Bengaluru · M.G. Road");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmed, setConfirmed] = useState(false);
  const [refCode, setRefCode] = useState("");

  useEffect(() => {
    if (user?.name) setName(user.name);
    if (user?.email) setEmail(user.email);
  }, [user]);

  const summary = useMemo(
    () =>
      cart.map((line) => `${line.name} (${line.shadeName}) × ${line.quantity}`).join("; "),
    [cart],
  );

  if (!hydrated) {
    return (
      <div className={styles.page}>
        <div className={styles.content}>
          <p className={styles.muted}>Loading booking…</p>
        </div>
      </div>
    );
  }

  if (isAdmin) {
    return (
      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.locked}>
            <Lock size={22} aria-hidden />
            <h1>Admin cannot book</h1>
            <p>
              Admin accounts manage the catalogue and settings only. Sign out and
              use a customer account to place a booking.
            </p>
            <div className={styles.lockedActions}>
              <Link href="/admin">Back to admin</Link>
              <Link href="/collection">View shop</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!bookingActive) {
    return (
      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.locked}>
            <Lock size={22} aria-hidden />
            <h1>Booking temporarily unavailable</h1>
            <p>
              The admin has paused online booking (Turn booking off). Orders
              open again when booking is turned on in Admin → Settings.
            </p>
            <div className={styles.lockedActions}>
              <Link href="/collection">Continue shopping</Link>
              <button type="button" onClick={() => router.back()}>
                Go back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.locked}>
            <h1>Sign in to book</h1>
            <p>Create or sign in to a customer account to submit a booking request.</p>
            <div className={styles.lockedActions}>
              <Link href="/login?next=/checkout">Login</Link>
              <Link href="/signup?next=/checkout">Signup</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0 && !confirmed) {
    return (
      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.locked}>
            <h1>Your bag is empty</h1>
            <p>Add a saree to your bag before starting a booking request.</p>
            <Link href="/collection">Browse the collection</Link>
          </div>
        </div>
      </div>
    );
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Enter your name.";
    if (!phone.trim() || phone.replace(/\D/g, "").length < 8) {
      next.phone = "Enter a reachable phone number.";
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Enter a valid email, or leave blank.";
    }
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const order = createOrder({
      customer: {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        showroom,
        notes: notes.trim(),
        userEmail: user?.email,
      },
      items: cart,
    });
    setRefCode(order.id);
    setConfirmed(true);
    clearCart();
  }

  if (confirmed) {
    return (
      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.success}>
            <p className={styles.eyebrow}>Reservation request</p>
            <h1>Booking request recorded</h1>
            <p>
              Reference <strong>{refCode}</strong>. This is a demo confirmation only —
              no payment was taken and no showroom stock was reserved.
            </p>
            <p className={styles.muted}>Preferred showroom: {showroom}</p>
            <div className={styles.lockedActions}>
              <Link href="/account" className={styles.primaryLink}>
                View my bookings
              </Link>
              <Link href="/collection">Return to shop</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link href="/collection">Shop</Link>
          <span aria-hidden>/</span>
          <span>Checkout</span>
        </nav>

        <header className={styles.head}>
          <p className={styles.eyebrow}>Online booking</p>
          <h1>Continue to book</h1>
          <p className={styles.lead}>
            {cartCount} article{cartCount === 1 ? "" : "s"} in your bag. Submit a
            reservation request for showroom assistance.
          </p>
        </header>

        <div className={styles.layout}>
          <form className={styles.form} onSubmit={submit} noValidate>
            <label>
              Full name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
              {errors.name ? <span className={styles.error}>{errors.name}</span> : null}
            </label>
            <label>
              Phone
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                inputMode="tel"
              />
              {errors.phone ? <span className={styles.error}>{errors.phone}</span> : null}
            </label>
            <label>
              Email <span className={styles.optional}>(optional)</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                inputMode="email"
              />
              {errors.email ? <span className={styles.error}>{errors.email}</span> : null}
            </label>
            <label>
              Preferred showroom
              <select value={showroom} onChange={(e) => setShowroom(e.target.value)}>
                <option>Bengaluru · M.G. Road</option>
                <option>Mysuru · KSIC Showroom</option>
                <option>Bengaluru · Jayanagar</option>
                <option>Other / to be confirmed</option>
              </select>
            </label>
            <label>
              Notes
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Occasion, preferred visit date, or sizing notes"
              />
            </label>
            <button type="submit" className={styles.submit}>
              Submit booking request
            </button>
            <p className={styles.note}>
              Demo mode: no payment gateway is connected. Request summary: {summary}
            </p>
          </form>

          <aside className={styles.summary} aria-label="Bag summary">
            <h2>Bag</h2>
            <ul>
              {cart.map((line) => (
                <li key={line.key}>
                  <span className={styles.summaryThumb}>
                    <CatalogImage src={line.image} alt="" fill sizes="56px" />
                  </span>
                  <span>
                    <strong>{line.name}</strong>
                    <small>
                      {line.shadeName} · Qty {line.quantity}
                    </small>
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
