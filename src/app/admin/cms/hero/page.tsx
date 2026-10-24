import type { Metadata } from "next";
import { AdminCmsHeroClient } from "@/components/admin/AdminCmsHeroClient";

export const metadata: Metadata = {
  title: "CMS · Home hero",
  robots: { index: false, follow: false },
};

export default function AdminCmsHeroPage() {
  return <AdminCmsHeroClient />;
}
