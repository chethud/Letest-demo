"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import styles from "./AdminShell.module.css";

const LINKS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/cms", label: "CMS" },
  { href: "/admin/products", label: "Products" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/settings", label: "Settings" },
];

export function AdminShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { hydrated, isAdmin, user, logout } = useAuth();

  useEffect(() => {
    if (!hydrated) return;
    if (!isAdmin) router.replace("/admin/login");
  }, [hydrated, isAdmin, router]);

  if (!hydrated || !isAdmin) {
    return (
      <div className={styles.loginPage}>
        <p className={styles.muted}>Checking admin access…</p>
      </div>
    );
  }

  return (
    <div className={styles.shell}>
      <aside className={styles.side}>
        <Link href="/admin" className={styles.brand}>
          <span className={styles.brandMark}>Mysore Silk</span>
          <span className={styles.brandTitle}>KSIC Admin</span>
        </Link>
        <nav className={styles.nav} aria-label="Admin">
          {LINKS.map((link) => {
            const active =
              link.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink}${active ? ` ${styles.navActive}` : ""}`}
              >
                <span className={styles.navDot} aria-hidden />
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className={styles.sideFooter}>
          <Link href="/" className={styles.btnGhost}>
            View storefront
          </Link>
          <button
            type="button"
            className={styles.btn}
            onClick={() => {
              logout();
              router.push("/admin/login");
            }}
          >
            Sign out
          </button>
        </div>
      </aside>
      <div className={styles.main}>
        <header className={styles.top}>
          <div>
            <h1>{title}</h1>
            {subtitle ? <p className={styles.muted}>{subtitle}</p> : null}
          </div>
          {user?.email ? <p className={styles.userChip}>{user.email}</p> : null}
        </header>
        {children}
      </div>
    </div>
  );
}
