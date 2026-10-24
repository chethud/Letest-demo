"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CartLine } from "@/context/ShopContext";
import {
  appendOrder,
  readOrders,
  updateOrderStatus,
  type OrderStatus,
  type ShopOrder,
} from "@/lib/orders";

type CreateOrderInput = {
  customer: ShopOrder["customer"];
  items: CartLine[];
};

type OrdersContextValue = {
  hydrated: boolean;
  orders: ShopOrder[];
  createOrder: (input: CreateOrderInput) => ShopOrder;
  setStatus: (id: string, status: OrderStatus) => void;
  refresh: () => void;
};

const OrdersContext = createContext<OrdersContextValue | null>(null);

export function OrdersProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [orders, setOrders] = useState<ShopOrder[]>([]);

  const refresh = useCallback(() => {
    setOrders(readOrders());
  }, []);

  useEffect(() => {
    refresh();
    setHydrated(true);
    const onChange = () => refresh();
    window.addEventListener("ksic-orders-change", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("ksic-orders-change", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, [refresh]);

  const createOrder = useCallback((input: CreateOrderInput) => {
    const order: ShopOrder = {
      id: `KSIC-${Date.now().toString(36).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      status: "new",
      customer: input.customer,
      items: input.items,
      itemCount: input.items.reduce((sum, line) => sum + line.quantity, 0),
    };
    appendOrder(order);
    setOrders(readOrders());
    return order;
  }, []);

  const setStatus = useCallback((id: string, status: OrderStatus) => {
    updateOrderStatus(id, status);
    setOrders(readOrders());
  }, []);

  const value = useMemo(
    () => ({ hydrated, orders, createOrder, setStatus, refresh }),
    [hydrated, orders, createOrder, setStatus, refresh],
  );

  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
}

export function useOrders() {
  const ctx = useContext(OrdersContext);
  if (!ctx) throw new Error("useOrders must be used within OrdersProvider");
  return ctx;
}
