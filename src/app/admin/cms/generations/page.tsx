import type { Metadata } from "next";
import { AdminCmsGenerationsClient } from "@/components/admin/AdminCmsGenerationsClient";

export const metadata: Metadata = {
  title: "CMS · Generations",
  robots: { index: false, follow: false },
};

export default function AdminCmsGenerationsPage() {
  return <AdminCmsGenerationsClient />;
}
