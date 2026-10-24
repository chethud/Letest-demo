"use client";

import React, { useEffect } from "react";
import { CatalogImage } from "@/components/common/CatalogImage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { useOnlineBookingActive } from "@/hooks/useOnlineBookingActive";
import styles from "./CartDrawer.module.css";

export function CartDrawer() {
  const router = useRouter();
  const {
    cart,
    cartOpen,
    setCartOpen,
    updateCartQuantity,
    removeFromCart,
    cartCount,
    canAddToCart,
  } = useShop();
  const bookingActive = useOnlineBookingActive();

  useEffect(() => {
    if (!cartOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCartOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [cartOpen, setCartOpen]);

  function continueToBook() {
    if (!bookingActive || cart.length === 0) return;
    setCartOpen(false);
    router.push("/checkout");
  }

  return (
    <>
      <div
        className={`${styles.backdrop} ${cartOpen ? styles.backdropOpen : ""}`}
        onClick={() => setCartOpen(false)}
        aria-hidden={!cartOpen}
      />
      <aside
        className={`${styles.drawer} ${cartOpen ? styles.drawerOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        aria-hidden={!cartOpen}
      >
        <div className={styles.head}>
          <div>
            <p className={styles.eyebrow}>Your bag</p>
            <h2>
              {cartCount === 0
                ? "Empty"
                : `${cartCount} article${cartCount === 1 ? "" : "s"}`}
            </h2>
          </div>
          <button
            type="button"
            className={styles.close}
            onClick={() => setCartOpen(false)}
            aria-label="Close bag"
          >
            <X size={18} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className={styles.empty}>
            <ShoppingBag size={28} strokeWidth={1.25} aria-hidden />
            <p>Your bag is empty.</p>
            <Link
              href="/collection"
              className={styles.browseLink}
              onClick={() => setCartOpen(false)}
            >
              Browse the collection
            </Link>
          </div>
        ) : (
          <ul className={styles.list}>
            {cart.map((line) => (
              <li key={line.key} className={styles.line}>
                <Link
                  href={`/collection/${line.slug}`}
                  className={styles.thumb}
                  onClick={() => setCartOpen(false)}
                >
                  <CatalogImage
                    src={line.image}
                    alt=""
                    fill
                    sizes="72px"
                    className={styles.thumbImage}
                  />
                </Link>
                <div className={styles.meta}>
                  <Link
                    href={`/collection/${line.slug}`}
                    onClick={() => setCartOpen(false)}
                  >
                    {line.name}
                  </Link>
                  <p>
                    {line.articleNumber}
                    <span aria-hidden> · </span>
                    <span
                      className={styles.shadeDot}
                      style={{ backgroundColor: line.shadeHex }}
                      aria-hidden
                    />
                    {line.shadeName}
                  </p>
                  <div className={styles.lineActions}>
                    <div className={styles.stepper}>
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        disabled={line.quantity <= 1}
                        onClick={() =>
                          updateCartQuantity(line.key, line.quantity - 1)
                        }
                      >
                        <Minus size={12} />
                      </button>
                      <span>{line.quantity}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        disabled={!canAddToCart || line.quantity >= 9}
                        onClick={() =>
                          updateCartQuantity(line.key, line.quantity + 1)
                        }
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <button
                      type="button"
                      className={styles.remove}
                      onClick={() => removeFromCart(line.key)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.footer}>
          <button
            type="button"
            className={styles.bookBtn}
            disabled={!bookingActive || cart.length === 0}
            aria-disabled={!bookingActive || cart.length === 0}
            onClick={continueToBook}
          >
            {!bookingActive ? <Lock size={14} aria-hidden /> : null}
            <span>
              {bookingActive
                ? "Continue to book"
                : "Booking temporarily unavailable"}
            </span>
          </button>
          <p className={styles.note}>
            {bookingActive
              ? "Booking opens a showroom reservation request. Payment is not taken online."
              : "The admin has paused online booking. Turn it on in Admin → Settings to take orders again."}
          </p>
          <Link
            href="/wishlist"
            className={styles.secondaryLink}
            onClick={() => setCartOpen(false)}
          >
            View saved wishlist
          </Link>
        </div>
      </aside>
    </>
  );
}
