"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Castle, Heart, Landmark, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import styles from "./Header.module.css";
import { KSIC_PRODUCTS } from "@/data/collections";

type NavLink = { label: string; href: string };

type NavItem = {
  id: string;
  label: string;
  href: string;
  children?: NavLink[];
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  {
    id: "mysore-silk",
    label: "Mysore Silk",
    href: "/heritage",
    children: [
      { label: "The Story", href: "/heritage" },
      { label: "The Craft", href: "/craft" },
      { label: "Authenticity", href: "/authenticity" },
    ],
  },
  {
    id: "world",
    label: "The World of KSIC",
    href: "/institution",
    children: [
      { label: "Our Heritage", href: "/our-heritage" },
      { label: "The Archive", href: "/the-archive" },
    ],
  },
  {
    id: "journal",
    label: "Journal",
    href: "/heritage",
    children: [
      { label: "Stories", href: "/heritage" },
      { label: "Culture", href: "/heritage#timeline" },
      { label: "Styling", href: "/collection" },
    ],
  },
  {
    id: "shop",
    label: "Shop",
    href: "/collection",
    children: [
      { label: "New Arrivals", href: "/new-arrivals" },
      { label: "Collections", href: "/collection" },
      { label: "Bestsellers", href: "/bestsellers" },
    ],
  },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [pinnedMenu, setPinnedMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [utilityHidden, setUtilityHidden] = useState(false);

  useEffect(() => {
    setOpenMenu(null);
    setPinnedMenu(null);
    setSearchOpen(false);
    setSearchQuery("");
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setUtilityHidden(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setPinnedMenu(null);
        setSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    const onPointerDown = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
        setPinnedMenu(null);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, []);

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return KSIC_PRODUCTS.slice(0, 5);
    return KSIC_PRODUCTS.filter((product) =>
      [product.name, product.articleNumber, product.category, product.collection]
        .join(" ")
        .toLowerCase()
        .includes(query)
    ).slice(0, 6);
  }, [searchQuery]);

  const pathOf = (href: string) => href.split("?")[0].split("#")[0];

  const isActive = (href: string) => {
    const path = pathOf(href);
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const activeId =
    NAV_ITEMS.find((item) => isActive(item.href))?.id ??
    NAV_ITEMS.find((item) => item.children?.some((child) => pathOf(child.href) === pathname))?.id;

  return (
    <>
      <header ref={headerRef} className={styles.headerContainer}>
        <div className={`${styles.utilityBar} ${utilityHidden ? styles.utilityBarHidden : ""}`}>
          <div className={styles.utilityInner}>
            <p className={styles.utilityHeritage}>
              <span className={styles.utilityFact}>
                <Landmark size={13} strokeWidth={1.5} aria-hidden="true" />
                <span>Government of Karnataka Undertaking</span>
              </span>
              <span className={styles.utilitySep} aria-hidden="true" />
              <span className={styles.utilityFact}>
                <Castle size={13} strokeWidth={1.5} aria-hidden="true" />
                <span>A Heritage Since 1912</span>
              </span>
            </p>
            <nav className={styles.utilityLinks} aria-label="Helpful links">
              <Link href="/stores" className={styles.utilityLink}>
                Store Locator
              </Link>
              <Link href="/contact" className={styles.utilityLink}>Track Order</Link>
              <Link href="/contact" className={styles.utilityLink}>Help</Link>
            </nav>
          </div>
        </div>

        <nav className={styles.navMain} aria-label="Main Navigation">
          <Link href="/" className={styles.brandLink} aria-label="KSIC Mysore Silk Home">
            <Image
              src="/assets/brand/ksic-logo.png"
              alt="KSIC Mysore Silk"
              width={210}
              height={64}
              priority
              className={styles.brandLogo}
            />
          </Link>

          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => {
              const active = item.id === activeId;
              const menuOpen = openMenu === item.id;
              return (
                <li
                  key={item.id}
                  className={styles.navItem}
                  onMouseEnter={() => {
                    if (item.children && !pinnedMenu) setOpenMenu(item.id);
                  }}
                  onMouseLeave={() => {
                    if (item.children && pinnedMenu !== item.id) setOpenMenu(null);
                  }}
                >
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        className={`${styles.navTrigger} ${active ? styles.navActive : ""}`}
                        aria-expanded={menuOpen}
                        aria-haspopup="true"
                        onClick={() => {
                          if (pinnedMenu === item.id) {
                            setPinnedMenu(null);
                            setOpenMenu(null);
                            return;
                          }
                          setPinnedMenu(item.id);
                          setOpenMenu(item.id);
                        }}
                      >
                        {item.label}
                      </button>
                      <div className={`${styles.dropdown} ${menuOpen ? styles.dropdownOpen : ""}`}>
                        <div className={styles.dropdownPanel}>
                          {item.children.map((child) => (
                            <Link
                              key={child.href + child.label}
                              href={child.href}
                              className={styles.dropdownLink}
                              onClick={() => {
                                setOpenMenu(null);
                                setPinnedMenu(null);
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={item.href} className={`${styles.navPlain} ${active ? styles.navActive : ""}`}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className={styles.iconRow}>
            <button
              type="button"
              className={styles.iconButton}
              aria-label="Search the collection"
              aria-expanded={searchOpen}
              onClick={() => {
                setSearchOpen((open) => !open);
                setOpenMenu(null);
              }}
            >
              <Search size={19} strokeWidth={1.5} />
            </button>
            <Link href="/contact" className={`${styles.iconButton} ${styles.iconDesktop}`} aria-label="Account">
              <User size={19} strokeWidth={1.5} />
            </Link>
            <Link href="/collection?category=heritage-bridal-series" className={`${styles.iconButton} ${styles.iconDesktop}`} aria-label="Wishlist">
              <Heart size={19} strokeWidth={1.5} />
            </Link>
            <Link href="/stores" className={`${styles.iconButton} ${styles.bagButton}`} aria-label="Shopping bag">
              <ShoppingBag size={19} strokeWidth={1.5} />
              <span className={styles.cartBadge}>0</span>
            </Link>

            {searchOpen && (
              <div className={styles.searchPanel}>
                <input
                  className={styles.searchInput}
                  type="search"
                  value={searchQuery}
                  placeholder="Search sarees"
                  autoFocus
                  onChange={(event) => setSearchQuery(event.target.value)}
                  aria-label="Search sarees"
                />
                <ul className={styles.searchList}>
                  {searchResults.length === 0 ? (
                    <li className={styles.searchEmpty}>No matching articles</li>
                  ) : (
                    searchResults.map((product) => (
                      <li key={product.id}>
                        <Link href={`/collection/${product.slug}`} className={styles.searchResult}>
                          <span>{product.name}</span>
                          <small>{product.category}</small>
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            )}
          </div>

          <button
            type="button"
            className={styles.mobileHamburgerBtn}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <div
        className={`${styles.mobileDrawerBackdrop} ${isMobileMenuOpen ? styles.mobileDrawerBackdropOpen : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileDrawerOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className={styles.drawerHeader}>
          <Link href="/" className={styles.drawerBrandLink} onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/assets/brand/ksic-logo.png"
              alt="KSIC Mysore Silk"
              width={132}
              height={40}
              className={styles.drawerLogo}
            />
          </Link>
          <button type="button" className={styles.drawerCloseBtn} onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
            <X size={18} />
          </button>
        </div>

        <nav className={styles.drawerNav}>
          {NAV_ITEMS.map((item) => (
            <div key={item.id} className={styles.drawerGroup}>
              <Link
                href={item.href}
                className={`${styles.drawerLink} ${isActive(item.href) ? styles.drawerLinkActive : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className={styles.drawerChildren}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href + child.label}
                      href={child.href}
                      className={styles.drawerChildLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.drawerFooter}>
          <Link href="/stores" onClick={() => setIsMobileMenuOpen(false)}>Store Locator</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Track Order</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Help</Link>
        </div>
      </aside>
    </>
  );
};
