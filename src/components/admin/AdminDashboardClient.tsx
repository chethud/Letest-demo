"use client";

import React from "react";
import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { useCatalog } from "@/context/CatalogContext";
import { useOrders } from "@/context/OrdersContext";
import styles from "./AdminShell.module.css";

export function AdminDashboardClient() {
  const { products } = useCatalog();
  const { orders } = useOrders();
  const openOrders = orders.filter(
    (order) => order.status === "new" || order.status === "confirmed",
  ).length;

  return (
    <AdminShell
      title="Dashboard"
      subtitle="Overview of catalogue and orders in this browser."
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
          <strong>{orders.length}</strong>
          <span>Total orders</span>
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
            Settings
          </Link>
          <Link href="/collection" className={styles.btnGhost}>
            Open shop
          </Link>
        </div>
      </div>
    </AdminShell>
  );
}
