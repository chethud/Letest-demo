"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { ScrollAnimator } from "@/components/common/ScrollAnimator";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <ScrollAnimator />
      <Header />
      <CartDrawer />
      <main id="main-content" style={{ minHeight: "100vh" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
