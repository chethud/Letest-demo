import type { Metadata } from "next";
import { SignupForm } from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Create account",
  description: "Create a KSIC Mysore Silk customer account.",
};

export default function SignupPage() {
  return <SignupForm />;
}
