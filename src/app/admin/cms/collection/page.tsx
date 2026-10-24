import type { Metadata } from "next";
import { AdminCmsCollectionClient } from "@/components/admin/AdminCmsCollectionClient";

export const metadata: Metadata = {
  title: "CMS · Master Collection",
  robots: { index: false, follow: false },
};

export default function AdminCmsCollectionPage() {
  return <AdminCmsCollectionClient />;
}
