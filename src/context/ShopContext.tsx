"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import type { KSICProduct } from "@/data/collections";
import { useAuth } from "@/context/AuthContext";
import {
  getBookingServerSnapshot,
  getBookingSnapshot,
  subscribeBooking,
} from "@/config/booking";

const CART_KEY = "ksic-shop-cart-v1";
const WISHLIST_KEY = "ksic-shop-wishlist-v1";

export type CartBlockReason = "login" | "booking_off" | "admin" | null;

export type CartLine = {
  key: string;
  productId: string;
  slug: string;
  name: string;
  articleNumber: string;
  image: string;
  category: string;
  shadeName: string;
  shadeHex: string;
  quantity: number;
};

export type WishlistLine = {
  productId: string;
  slug: string;
  name: string;
  articleNumber: string;
  image: string;
  category: string;
};

type AddToCartInput = {
  product: KSICProduct;
  quantity: number;
  shadeName: string;
  shadeHex: string;
  openDrawer?: boolean;
};

type ShopContextValue = {
  hydrated: boolean;
  cart: CartLine[];
  wishlist: WishlistLine[];
  cartCount: number;
  wishlistCount: number;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  /** True only for signed-in customers when online booking is on (not admins). */
  canAddToCart: boolean;
  cartBlockReason: CartBlockReason;
  addToCart: (input: AddToCartInput) => boolean;
  updateCartQuantity: (key: string, quantity: number) => void;
  removeFromCart: (key: string) => void;
  clearCart: () => void;
  isWishlisted: (productId: string) => boolean;
  toggleWishlist: (product: KSICProduct) => void;
  removeFromWishlist: (productId: string) => void;
};

const ShopContext = createContext<ShopContextValue | null>(null);

function cartKey(productId: string, shadeName: string) {
  return `${productId}::${shadeName}`;
}

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as T;
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function toWishlistLine(product: KSICProduct): WishlistLine {
  return {
    productId: product.id,
    slug: product.slug,
    name: product.name,
    articleNumber: product.articleNumber,
    image: product.images.hero,
    category: product.category,
  };
}

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const { user, isAdmin, hydrated: authHydrated } = useAuth();
  const bookingActive = useSyncExternalStore(
    subscribeBooking,
    getBookingSnapshot,
    getBookingServerSnapshot,
  );
  const [hydrated, setHydrated] = useState(false);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<WishlistLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    setCart(readJson<CartLine[]>(CART_KEY, []));
    setWishlist(readJson<WishlistLine[]>(WISHLIST_KEY, []));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  // Priority: auth ready → booking off → login → admin role → open for customers
  const cartBlockReason: CartBlockReason = !authHydrated
    ? null
    : !bookingActive
      ? "booking_off"
      : !user
        ? "login"
        : isAdmin
          ? "admin"
          : null;

  const canAddToCart =
    cartBlockReason === null &&
    authHydrated &&
    bookingActive &&
    Boolean(user) &&
    !isAdmin;

  const addToCart = useCallback(
    ({ product, quantity, shadeName, shadeHex, openDrawer = true }: AddToCartInput) => {
      if (!user || isAdmin || !bookingActive) return false;

      const key = cartKey(product.id, shadeName);
      const qty = Math.min(9, Math.max(1, quantity));
      setCart((prev) => {
        const existing = prev.find((line) => line.key === key);
        if (existing) {
          return prev.map((line) =>
            line.key === key
              ? { ...line, quantity: Math.min(9, line.quantity + qty) }
              : line,
          );
        }
        return [
          ...prev,
          {
            key,
            productId: product.id,
            slug: product.slug,
            name: product.name,
            articleNumber: product.articleNumber,
            image: product.images.hero,
            category: product.category,
            shadeName,
            shadeHex,
            quantity: qty,
          },
        ];
      });
      if (openDrawer) setCartOpen(true);
      return true;
    },
    [user, isAdmin, bookingActive],
  );

  const updateCartQuantity = useCallback((key: string, quantity: number) => {
    const next = Math.min(9, Math.max(0, quantity));
    setCart((prev) => {
      if (next <= 0) return prev.filter((line) => line.key !== key);
      return prev.map((line) => (line.key === key ? { ...line, quantity: next } : line));
    });
  }, []);

  const removeFromCart = useCallback((key: string) => {
    setCart((prev) => prev.filter((line) => line.key !== key));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const isWishlisted = useCallback(
    (productId: string) => wishlist.some((item) => item.productId === productId),
    [wishlist],
  );

  const toggleWishlist = useCallback((product: KSICProduct) => {
    setWishlist((prev) => {
      if (prev.some((item) => item.productId === product.id)) {
        return prev.filter((item) => item.productId !== product.id);
      }
      return [...prev, toWishlistLine(product)];
    });
  }, []);

  const removeFromWishlist = useCallback((productId: string) => {
    setWishlist((prev) => prev.filter((item) => item.productId !== productId));
  }, []);

  const cartCount = useMemo(
    () => cart.reduce((sum, line) => sum + line.quantity, 0),
    [cart],
  );

  const value = useMemo<ShopContextValue>(
    () => ({
      hydrated,
      cart,
      wishlist,
      cartCount,
      wishlistCount: wishlist.length,
      cartOpen,
      setCartOpen,
      canAddToCart,
      cartBlockReason,
      addToCart,
      updateCartQuantity,
      removeFromCart,
      clearCart,
      isWishlisted,
      toggleWishlist,
      removeFromWishlist,
    }),
    [
      hydrated,
      cart,
      wishlist,
      cartCount,
      cartOpen,
      canAddToCart,
      cartBlockReason,
      addToCart,
      updateCartQuantity,
      removeFromCart,
      clearCart,
      isWishlisted,
      toggleWishlist,
      removeFromWishlist,
    ],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) {
    throw new Error("useShop must be used within ShopProvider");
  }
  return ctx;
}
