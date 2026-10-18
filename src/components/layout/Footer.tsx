"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { INSTITUTIONAL_OVERVIEW } from "@/data/institution";

const EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/heritage" },
  { label: "How It's Made", href: "/craft" },
  { label: "Shop", href: "/collection" },
];

const HOUSE_LINKS = [
  { label: "About KSIC", href: "/institution" },
  { label: "Store Locator", href: "/stores" },
  { label: "Contact Us", href: "/contact" },
];

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer} aria-label="Official Footer">
      <div className={styles.footerWrap}>
        <p className={styles.kicker}>Government of Karnataka · A heritage since 1912</p>

        <div className={styles.footerTopGrid}>
          <div className={styles.brandColumn}>
            <div className={styles.stateEmblemRow}>
              <Image
                src="/assets/brand/karnataka-seal.svg"
                alt="Emblem of the Government of Karnataka"
                width={56}
                height={56}
                className={styles.karnatakaSeal}
              />
              <Image
                src="/assets/brand/ksic-logo.png"
                alt="KSIC Mysore Silk"
                width={156}
                height={44}
                className={styles.ksicLogo}
              />
            </div>
            <p className={styles.brandLegalName}>
              <span className={styles.brandLegalLead}>Karnataka Silk Industries</span>
              <br />
              Corporation Limited
            </p>
            <p className={styles.brandNote}>Factory 1912 · KSIC 1980</p>
          </div>

          <nav className={styles.linkGroup} aria-label="Explore">
            <p className={styles.navColumnTitle}>Explore</p>
            <ul className={styles.navColumnList}>
              {EXPLORE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.linkGroup} aria-label="The House">
            <p className={styles.navColumnTitle}>The House</p>
            <ul className={styles.navColumnList}>
              {HOUSE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className={styles.officeCard}>
            <p className={styles.navColumnTitle}>Corporate Office</p>
            <p className={styles.officeAddress}>
              3rd & 4th Floor, Public Utility Building,
              <br />
              M.G. Road, Mayo Hall,
              <br />
              Bengaluru — 560 001, Karnataka
            </p>
            <p className={styles.officeLine}>
              <a href="tel:+918025586402">+91 80 25586402</a>
              <span aria-hidden="true"> · </span>
              <a href="tel:+918025586550">25586550</a>
            </p>
            <p className={styles.officeLine}>
              <a href="mailto:info@ksicsilk.com">info@ksicsilk.com</a>
            </p>
          </address>
        </div>

        <div className={styles.footerBottomRow}>
          <p>© {year} Karnataka Silk Industries Corporation Limited</p>
          <p className={styles.contactCin}>CIN {INSTITUTIONAL_OVERVIEW.corporateId}</p>
        </div>
      </div>
    </footer>
  );
};
