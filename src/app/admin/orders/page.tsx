import type { Metadata } from "next";
import { AdminOrdersClient } from "@/components/admin/AdminOrdersClient";

export const metadata: Metadata = {
  title: "Admin orders",
  robots: { index: false, follow: false },
};

export default function AdminOrdersPage() {
  return <AdminOrdersClient />;
}
