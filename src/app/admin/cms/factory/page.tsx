import type { Metadata } from "next";
import { AdminCmsFactoryClient } from "@/components/admin/AdminCmsFactoryClient";

export const metadata: Metadata = {
  title: "CMS · Video text",
  robots: { index: false, follow: false },
};

export default function AdminCmsFactoryPage() {
  return <AdminCmsFactoryClient />;
}
