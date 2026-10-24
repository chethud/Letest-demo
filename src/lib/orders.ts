import type { CartLine } from "@/context/ShopContext";
import { readJson, writeJson } from "@/lib/storage";

export const ORDERS_KEY = "ksic-orders-v1";

export type OrderStatus = "new" | "confirmed" | "fulfilled" | "cancelled";

export type ShopOrder = {
  id: string;
  createdAt: string;
  status: OrderStatus;
  customer: {
    name: string;
    phone: string;
    email: string;
    showroom: string;
    notes: string;
    userEmail?: string;
  };
  items: CartLine[];
  itemCount: number;
};

export function readOrders(): ShopOrder[] {
  return readJson<ShopOrder[]>(ORDERS_KEY, []);
}

export function writeOrders(orders: ShopOrder[]) {
  writeJson(ORDERS_KEY, orders);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("ksic-orders-change"));
  }
}

export function appendOrder(order: ShopOrder) {
  const next = [order, ...readOrders()];
  writeOrders(next);
  return order;
}

export function updateOrderStatus(id: string, status: OrderStatus) {
  const next = readOrders().map((order) =>
    order.id === id ? { ...order, status } : order,
  );
  writeOrders(next);
}
