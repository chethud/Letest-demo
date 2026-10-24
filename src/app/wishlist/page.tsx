import type { Metadata } from "next";
import { WishlistPageClient } from "@/components/shop/WishlistPageClient";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Saved KSIC Mysore Silk sarees on your device.",
};

export default function WishlistPage() {
  return <WishlistPageClient />;
}
