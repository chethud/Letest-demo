"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { INSTITUTIONAL_OVERVIEW } from "@/data/institution";
import { JOURNAL_LINKS, NAV_ITEMS, UTILITY_LINKS } from "@/data/navigation";

const EXPLORE_LINKS = NAV_ITEMS.map(({ label, href }) => ({ label, href }));

const MYSORE_SILK_LINKS = [
  ...(NAV_ITEMS.find((item) => item.id === "mysore-silk")?.children ?? []),
  ...UTILITY_LINKS.filter((link) => link.label === "Store Locator"),
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
                <li key={`${item.label}-${item.href}`}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.linkGroup} aria-label="Mysore Silk">
            <p className={styles.navColumnTitle}>Mysore Silk</p>
            <ul className={styles.navColumnList}>
              {MYSORE_SILK_LINKS.map((item) => (
                <li key={`${item.label}-${item.href}`}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.linkGroup} aria-label="Journal">
            <p className={styles.navColumnTitle}>Journal</p>
            <ul className={styles.navColumnList}>
              {JOURNAL_LINKS.map((item) => (
                <li key={`${item.label}-${item.href}`}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className={styles.officeCard}>
            <p className={styles.navColumnTitle}>Corporate Office</p>
            <p className={styles.officeAddress}>
              {INSTITUTIONAL_OVERVIEW.headOffice.building},
              <br />
              {INSTITUTIONAL_OVERVIEW.headOffice.street},
              <br />
              {INSTITUTIONAL_OVERVIEW.headOffice.city},{" "}
              {INSTITUTIONAL_OVERVIEW.headOffice.pincode},{" "}
              {INSTITUTIONAL_OVERVIEW.headOffice.state}
            </p>
            <p className={styles.officeLine}>
              <a href={`tel:${INSTITUTIONAL_OVERVIEW.headOffice.phone1.replace(/\s/g, "")}`}>
                {INSTITUTIONAL_OVERVIEW.headOffice.phone1}
              </a>
              <span aria-hidden="true"> · </span>
              <a href={`tel:${INSTITUTIONAL_OVERVIEW.headOffice.phone2.replace(/\s/g, "")}`}>
                {INSTITUTIONAL_OVERVIEW.headOffice.phone2}
              </a>
            </p>
            <p className={styles.officeLine}>
              <a href={`mailto:${INSTITUTIONAL_OVERVIEW.headOffice.email}`}>
                {INSTITUTIONAL_OVERVIEW.headOffice.email}
              </a>
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
