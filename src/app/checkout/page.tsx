import type { Metadata } from "next";
import { CheckoutPageClient } from "@/components/shop/CheckoutPageClient";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Book KSIC Mysore Silk sarees for showroom reservation.",
};

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}
