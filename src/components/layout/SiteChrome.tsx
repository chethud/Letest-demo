"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { ScrollAnimator } from "@/components/common/ScrollAnimator";
import { applyUiSettings, readUiSettings } from "@/lib/uiSettings";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  useEffect(() => {
    const sync = () => applyUiSettings(readUiSettings());
    sync();
    window.addEventListener("ksic-ui-settings-change", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("ksic-ui-settings-change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

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
