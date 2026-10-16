"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { INSTITUTIONAL_OVERVIEW } from "@/data/institution";

const PAGE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/heritage" },
  { label: "How It's Made", href: "/craft" },
  { label: "Shop", href: "/collection" },
  { label: "About KSIC", href: "/institution" },
  { label: "Our Stores", href: "/stores" },
  { label: "Contact Us", href: "/contact" },
];

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer} aria-label="Official Footer">
      <div className={styles.footerWrap}>
        <div className={styles.footerTopGrid}>
          <div className={styles.brandColumn}>
            <div className={styles.stateEmblemRow}>
              <Image
                src="/assets/brand/karnataka-seal.svg"
                alt="Emblem of the Government of Karnataka"
                width={52}
                height={52}
                className={styles.karnatakaSeal}
              />
              <Image
                src="/assets/brand/ksic-logo.png"
                alt="KSIC Mysore Silk"
                width={148}
                height={42}
                className={styles.ksicLogo}
              />
            </div>
            <p className={styles.brandLegalName}>
              Karnataka Silk Industries
              <br />
              Corporation Limited
            </p>
            <p className={styles.brandNote}>Government of Karnataka · Factory 1912 · KSIC 1980</p>
          </div>

          <nav className={styles.pageNav} aria-label="Pages">
            <ul className={styles.navColumnList}>
              {PAGE_LINKS.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <ul className={styles.navColumnList}>
              {PAGE_LINKS.slice(4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className={styles.contactInfoGroup}>
            <p className={styles.navColumnTitle}>Corporate Office</p>
            <p>
              3rd & 4th Floor, Public Utility Building, M.G. Road, Mayo Hall,
              Bengaluru — 560 001, Karnataka, India
            </p>
            <p>
              <span className={styles.contactHighlight}>Phone:</span>{" "}
              <a href="tel:+918025586402">+91 80 25586402</a>
              {" / "}
              <a href="tel:+918025586550">25586550</a>
            </p>
            <p>
              <span className={styles.contactHighlight}>Email:</span>{" "}
              <a href="mailto:info@ksicsilk.com">info@ksicsilk.com</a>
            </p>
            <p className={styles.contactCin}>CIN: {INSTITUTIONAL_OVERVIEW.corporateId}</p>
          </address>
        </div>

        <div className={styles.footerBottomRow}>
          <p>© {year} Karnataka Silk Industries Corporation Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
