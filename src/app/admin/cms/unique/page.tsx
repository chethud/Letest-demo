import type { Metadata } from "next";
import { AdminCmsUniqueClient } from "@/components/admin/AdminCmsUniqueClient";

export const metadata: Metadata = {
  title: "CMS · Essence of Mysore Silk",
  robots: { index: false, follow: false },
};

export default function AdminCmsUniquePage() {
  return <AdminCmsUniqueClient />;
}
