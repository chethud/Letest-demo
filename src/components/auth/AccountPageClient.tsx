"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useOrders } from "@/context/OrdersContext";
import styles from "./AuthForm.module.css";
import accountStyles from "./AccountPage.module.css";

export function AccountPageClient() {
  const router = useRouter();
  const { user, hydrated, logout, isAdmin } = useAuth();
  const { orders } = useOrders();

  useEffect(() => {
    if (!hydrated) return;
    if (!user) router.replace("/login?next=/account");
    if (isAdmin) router.replace("/admin");
  }, [hydrated, user, isAdmin, router]);

  if (!hydrated || !user || isAdmin) {
    return (
      <div className={styles.page}>
        <div className={styles.wrap}>
          <p className={styles.lead}>Loading account…</p>
        </div>
      </div>
    );
  }

  const mine = orders.filter(
    (order) =>
      order.customer.userEmail === user.email ||
      order.customer.email.toLowerCase() === user.email.toLowerCase(),
  );

  return (
    <div className={styles.page}>
      <div className={accountStyles.wrap}>
        <header className={accountStyles.head}>
          <div>
            <p className={styles.eyebrow}>My account</p>
            <h1 className={styles.title}>{user.name}</h1>
            <p className={styles.lead}>{user.email}</p>
          </div>
          <button type="button" className={accountStyles.logout} onClick={logout}>
            Sign out
          </button>
        </header>

        <section className={accountStyles.section}>
          <h2>Booking requests</h2>
          {mine.length === 0 ? (
            <p className={styles.lead}>
              No booking requests yet.{" "}
              <Link href="/collection">Browse the collection</Link>
            </p>
          ) : (
            <ul className={accountStyles.list}>
              {mine.map((order) => (
                <li key={order.id}>
                  <strong>{order.id}</strong>
                  <span>{new Date(order.createdAt).toLocaleString()}</span>
                  <span className={accountStyles.status}>{order.status}</span>
                  <span>{order.itemCount} article(s)</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <p className={accountStyles.links}>
          <Link href="/wishlist">Wishlist</Link>
          <Link href="/collection">Shop</Link>
        </p>
      </div>
    </div>
  );
}
