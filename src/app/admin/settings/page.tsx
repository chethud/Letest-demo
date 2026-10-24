import type { Metadata } from "next";
import { AdminSettingsClient } from "@/components/admin/AdminSettingsClient";

export const metadata: Metadata = {
  title: "Admin settings",
  robots: { index: false, follow: false },
};

export default function AdminSettingsPage() {
  return <AdminSettingsClient />;
}
