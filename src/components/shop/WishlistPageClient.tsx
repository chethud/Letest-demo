"use client";

import React from "react";
import { CatalogImage } from "@/components/common/CatalogImage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { useCatalog } from "@/context/CatalogContext";
import { useShop } from "@/context/ShopContext";
import {
  useBookingHydrated,
  useOnlineBookingActive,
} from "@/hooks/useOnlineBookingActive";
import styles from "./WishlistPage.module.css";

export function WishlistPageClient() {
  const router = useRouter();
  const bookingActive = useOnlineBookingActive();
  const bookingHydrated = useBookingHydrated();
  const { wishlist, hydrated, removeFromWishlist, addToCart, canAddToCart, cartBlockReason } =
    useShop();
  const { getById } = useCatalog();
  const bookingOff = bookingHydrated && !bookingActive;

  function moveToBag(productId: string) {
    if (!bookingHydrated || bookingOff) return;
    if (cartBlockReason === "login") {
      router.push("/login?next=/wishlist");
      return;
    }
    if (!canAddToCart) return;
    const product = getById(productId);
    if (!product) return;
    const added = addToCart({
      product,
      quantity: 1,
      shadeName: product.primaryColor || "Standard",
      shadeHex: "#7a1530",
    });
    if (added) removeFromWishlist(productId);
  }

  const addLabel = !bookingHydrated
    ? "Checking…"
    : bookingOff
      ? "Booking off"
      : cartBlockReason === "login"
        ? "Sign in to add"
        : cartBlockReason === "admin"
          ? "Admin cannot bag"
          : "Add to bag";

  const addEnabled =
    bookingHydrated &&
    bookingActive &&
    (canAddToCart || cartBlockReason === "login");

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link href="/collection">Shop</Link>
          <span aria-hidden>/</span>
          <span>Wishlist</span>
        </nav>

        <header className={styles.head}>
          <p className={styles.eyebrow}>Saved articles</p>
          <h1>Wishlist</h1>
          <p className={styles.lead}>
            Articles you save stay on this device until you remove them.
          </p>
        </header>

        {!hydrated ? (
          <p className={styles.emptyNote}>Loading saved articles…</p>
        ) : wishlist.length === 0 ? (
          <div className={styles.empty}>
            <Heart size={28} strokeWidth={1.25} aria-hidden />
            <p>No saved sarees yet.</p>
            <Link href="/collection" className={styles.browse}>
              Browse the collection
            </Link>
          </div>
        ) : (
          <ul className={styles.grid}>
            {wishlist.map((item) => (
              <li key={item.productId} className={styles.card}>
                <Link href={`/collection/${item.slug}`} className={styles.media}>
                  <CatalogImage
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 700px) 50vw, 25vw"
                  />
                </Link>
                <div className={styles.meta}>
                  <p className={styles.category}>{item.category}</p>
                  <Link href={`/collection/${item.slug}`} className={styles.name}>
                    {item.name}
                  </Link>
                  <p className={styles.sku}>{item.articleNumber}</p>
                  <div className={styles.actions}>
                    <button
                      type="button"
                      className={styles.addBtn}
                      disabled={!addEnabled}
                      onClick={() => moveToBag(item.productId)}
                    >
                      <ShoppingBag size={14} aria-hidden />
                      {addLabel}
                    </button>
                    <button
                      type="button"
                      className={styles.removeBtn}
                      aria-label={`Remove ${item.name} from wishlist`}
                      onClick={() => removeFromWishlist(item.productId)}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
