import type { Metadata } from "next";
import { AdminProductsClient } from "@/components/admin/AdminProductsClient";

export const metadata: Metadata = {
  title: "Admin products",
  robots: { index: false, follow: false },
};

export default function AdminProductsPage() {
  return <AdminProductsClient />;
}
