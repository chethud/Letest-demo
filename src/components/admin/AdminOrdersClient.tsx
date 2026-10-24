"use client";

import React from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { useOrders } from "@/context/OrdersContext";
import type { OrderStatus } from "@/lib/orders";
import styles from "./AdminShell.module.css";

const STATUSES: OrderStatus[] = ["new", "confirmed", "fulfilled", "cancelled"];

export function AdminOrdersClient() {
  const { orders, setStatus } = useOrders();

  return (
    <AdminShell
      title="Orders"
      subtitle="Booking requests captured from checkout in this browser."
    >
      <div className={styles.panel}>
        {orders.length === 0 ? (
          <p className={styles.muted}>No orders yet.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Reference</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Status</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <strong>{order.id}</strong>
                    <div className={styles.muted}>
                      {new Date(order.createdAt).toLocaleString()}
                    </div>
                  </td>
                  <td>
                    {order.customer.name}
                    <div className={styles.muted}>{order.customer.phone}</div>
                    <div className={styles.muted}>{order.customer.email}</div>
                  </td>
                  <td>
                    {order.itemCount}
                    <div className={styles.muted}>
                      {order.items
                        .map((line) => `${line.name} × ${line.quantity}`)
                        .join(", ")}
                    </div>
                  </td>
                  <td>
                    <span className={styles.statusPill}>{order.status}</span>
                  </td>
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) =>
                        setStatus(order.id, e.target.value as OrderStatus)
                      }
                    >
                      {STATUSES.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminShell>
  );
}
