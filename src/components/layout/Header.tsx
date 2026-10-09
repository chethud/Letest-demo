"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShieldCheck, Menu, X, ArrowRight, Globe } from "lucide-react";
import styles from "./Header.module.css";
import { useLanguage } from "@/context/LanguageContext";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isAtTop, setIsAtTop] = useState(true);
  const [isInHero, setIsInHero] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, toggleLang, t } = useLanguage();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isHome) {
      setIsInHero(false);
      setIsAtTop(false);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsAtTop(scrollY <= 20);

      const heroEl = document.getElementById("hero-section");
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        // As long as the hero section bottom is > 90px from top, we are inside hero
        setIsInHero(rect.bottom > 90);
      } else {
        setIsInHero(scrollY < window.innerHeight - 90);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isHome]);

  const navLeft = [
    { label: t.navHeritage, href: "/heritage" },
    { label: t.navCraft, href: "/craft" },
    { label: t.navCollection, href: "/collection" },
  ];

  const navRight = [
    { label: t.navInstitution, href: "/institution" },
    { label: t.navStores, href: "/stores" },
    { label: t.navContact, href: "/contact" },
  ];

  const allNavItems = [...navLeft, ...navRight];

  // Dynamic header state:
  // - In hero section at top: transparent
  // - In hero section while scrolling: subtle frosted glass
  // - Outside hero section or on inner pages: solid institutional parchment
  const headerStateClass = isHome && isInHero
    ? (isAtTop ? styles.headerTransparentTop : styles.headerTransparentScrolling)
    : styles.headerScrolled;

  return (
    <>
      <header className={`${styles.headerContainer} ${headerStateClass}`}>
        {/* 1. Official Institutional Top Credential Banner */}
        <div className={styles.topBadge}>
          <div className={styles.topBadgeWrap}>
            <span className={styles.topBadgeState}>
              <ShieldCheck size={12} style={{ display: "inline-block", flexShrink: 0 }} />
              <span className={styles.topBadgeDesktopText}>{t.topBannerGovt}</span>
              <span className={styles.topBadgeMobileText}>
                {lang === "kn" ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರ · 1912 ರಿಂದ · GI-11" : "Govt. of Karnataka · Estd. 1912 · GI-11"}
              </span>
            </span>
            <div className={styles.topBadgeRight}>
              <span>{t.topBannerState}</span>
              <span>{t.topBannerCities}</span>
            </div>
          </div>
        </div>

        {/* 2. Primary Navigation Bar with Centered Royal Brand Logo */}
        <nav className={styles.navMain} aria-label="Main Navigation">
          {/* Mobile Left: Language Switcher Button */}
          <button
            type="button"
            onClick={toggleLang}
            className={styles.mobileLangButton}
            aria-label={lang === "en" ? "ಕನ್ನಡಕ್ಕೆ ಬದಲಿಸಿ" : "Switch to English"}
          >
            <Globe size={14} className={styles.mobileGlobeIcon} />
            <span className={styles.mobileLangLabel}>{lang === "en" ? "ಕನ್ನಡ" : "EN"}</span>
          </button>

          {/* Desktop Left Navigation Group */}
          <ul className={`${styles.navLinksList} ${styles.navGroupLeft}`}>
            {navLeft.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className={styles.navLinkItem}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className={styles.activeDot} />}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Center Brand Identity: Official KSIC Mysore Silk Seal */}
          <Link href="/" className={styles.brandGroupCenter} aria-label="KSIC Mysore Silk Home">
            <Image
              src="/assets/brand/ksic-logo.png"
              alt="KSIC Mysore Silk Seal Estd 1912"
              width={175}
              height={48}
              priority
              className={styles.brandLogoImg}
            />
          </Link>

          {/* Desktop Right Navigation Group */}
          <ul className={`${styles.navLinksList} ${styles.navGroupRight}`}>
            {navRight.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className={styles.navLinkItem}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className={styles.activeDot} />}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Right: Hamburger Toggle Button */}
          <button
            type="button"
            className={styles.mobileHamburgerBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={23} className={styles.hamburgerIcon} />
            ) : (
              <Menu size={23} className={styles.hamburgerIcon} />
            )}
          </button>
        </nav>
      </header>

      {/* 3. Mobile Navigation Drawer & Backdrop */}
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
        {/* Drawer Header */}
        <div className={styles.drawerHeader}>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={styles.drawerBrandLink}>
            <Image
              src="/assets/brand/ksic-logo.png"
              alt="KSIC Mysore Silk"
              width={135}
              height={38}
              className={styles.drawerLogoImg}
            />
          </Link>
          <button
            type="button"
            className={styles.drawerCloseBtn}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Govt Credential Strip */}
        <div className={styles.drawerCredentialStrip}>
          <ShieldCheck size={13} style={{ flexShrink: 0 }} />
          <span>
            {lang === "kn"
              ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರ · 1912 ರಿಂದ · GI-11 ಪ್ರಮಾಣೀಕೃತ"
              : "Govt. of Karnataka · Estd. 1912 · GI-11 Certified"}
          </span>
        </div>

        {/* Navigation Links */}
        <nav className={styles.drawerNav}>
          <ul className={styles.drawerList}>
            {allNavItems.map((item, index) => {
              const isActive = pathname === item.href;
              const numStr = `0${index + 1}`;
              return (
                <li key={item.href} className={styles.drawerItem}>
                  <Link
                    href={item.href}
                    className={`${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className={styles.drawerItemNum}>{numStr}</span>
                    <span className={styles.drawerItemLabel}>{item.label}</span>
                    <ArrowRight size={15} className={styles.drawerItemArrow} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer Footer with Language Selection & Royal Heritage Note */}
        <div className={styles.drawerFooter}>
          <div className={styles.drawerLangRow}>
            <span className={styles.drawerLangLabel}>
              {lang === "kn" ? "ಭಾಷೆ / Language:" : "Language:"}
            </span>
            <div className={styles.drawerLangBtnGroup}>
              <button
                type="button"
                className={`${styles.drawerLangBtn} ${lang === "en" ? styles.drawerLangBtnActive : ""}`}
                onClick={() => setLang("en")}
              >
                English
              </button>
              <button
                type="button"
                className={`${styles.drawerLangBtn} ${lang === "kn" ? styles.drawerLangBtnActive : ""}`}
                onClick={() => setLang("kn")}
              >
                ಕನ್ನಡ
              </button>
            </div>
          </div>

          <div className={styles.drawerHeritageNote}>
            <p className={styles.drawerHeritageTitle}>
              Karnataka Silk Industries Corporation
            </p>
            <p className={styles.drawerHeritageSub}>
              Pure Silk &bull; 100% Pure Gold Zari &bull; Mysuru
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
