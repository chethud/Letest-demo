import type { Metadata } from "next";
import { AdminCmsClient } from "@/components/admin/AdminCmsClient";

export const metadata: Metadata = {
  title: "Admin CMS",
  robots: { index: false, follow: false },
};

export default function AdminCmsPage() {
  return <AdminCmsClient />;
}
