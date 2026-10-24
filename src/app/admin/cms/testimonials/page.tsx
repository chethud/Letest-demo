import type { Metadata } from "next";
import { AdminCmsTestimonialsClient } from "@/components/admin/AdminCmsTestimonialsClient";

export const metadata: Metadata = {
  title: "CMS · Testimonials",
  robots: { index: false, follow: false },
};

export default function AdminCmsTestimonialsPage() {
  return <AdminCmsTestimonialsClient />;
}
