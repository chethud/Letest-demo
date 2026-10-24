"use client";

import React from "react";
import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { useCatalog } from "@/context/CatalogContext";
import { useOrders } from "@/context/OrdersContext";
import { useShop } from "@/context/ShopContext";
import { useOnlineBookingActive } from "@/hooks/useOnlineBookingActive";
import styles from "./AdminShell.module.css";

export function AdminDashboardClient() {
  const { products } = useCatalog();
  const { orders } = useOrders();
  const { cartCount, wishlistCount } = useShop();
  const openOrders = orders.filter(
    (order) => order.status === "new" || order.status === "confirmed",
  ).length;
  const bookingOn = useOnlineBookingActive();

  return (
    <AdminShell
      title="Dashboard"
      subtitle="Demo e-commerce control plane for this browser."
    >
      <div className={styles.grid}>
        <div className={styles.stat}>
          <strong>{products.length}</strong>
          <span>Products</span>
        </div>
        <div className={styles.stat}>
          <strong>{openOrders}</strong>
          <span>Open orders</span>
        </div>
        <div className={styles.stat}>
          <strong>{cartCount}</strong>
          <span>Bag items</span>
        </div>
        <div className={styles.stat}>
          <strong>{wishlistCount}</strong>
          <span>Wishlist</span>
        </div>
      </div>

      <div className={styles.panel}>
        <h2>Quick actions</h2>
        <div className={styles.actions}>
          <Link href="/admin/products" className={styles.btn}>
            Manage products
          </Link>
          <Link href="/admin/orders" className={styles.btnGhost}>
            Review orders
          </Link>
          <Link href="/admin/settings" className={styles.btnGhost}>
            Booking settings
          </Link>
          <Link href="/collection" className={styles.btnGhost}>
            Open shop
          </Link>
        </div>
        <p className={styles.muted} style={{ marginTop: "1rem" }}>
          Online booking is currently <strong>{bookingOn ? "enabled" : "locked"}</strong>{" "}
          in this browser.
        </p>
      </div>
    </AdminShell>
  );
}
