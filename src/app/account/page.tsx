import type { Metadata } from "next";
import { AccountPageClient } from "@/components/auth/AccountPageClient";

export const metadata: Metadata = {
  title: "My account",
  description: "Your KSIC Mysore Silk account and booking requests.",
};

export default function AccountPage() {
  return <AccountPageClient />;
}
