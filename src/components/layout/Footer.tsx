"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { INSTITUTIONAL_OVERVIEW } from "@/data/institution";

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

          <nav aria-label="Heritage and craft">
            <p className={styles.navColumnTitle}>Heritage & Craft</p>
            <ul className={styles.navColumnList}>
              <li><Link href="/heritage">The 1912 Legacy</Link></li>
              <li><Link href="/heritage#timeline">Historical Timeline</Link></li>
              <li><Link href="/craft">From Cocoon to Silk</Link></li>
              <li><Link href="/craft#zari">Zari specification</Link></li>
              <li><Link href="/craft#factory">Silk Weaving Factory</Link></li>
            </ul>
          </nav>

          <nav aria-label="Catalogue and stores">
            <p className={styles.navColumnTitle}>Catalogue & Stores</p>
            <ul className={styles.navColumnList}>
              <li><Link href="/collection">The House of KSIC</Link></li>
              <li><Link href="/#authenticity">Identification and GIR-11</Link></li>
              <li><Link href="/stores">Showroom Network</Link></li>
              <li><Link href="/stores?city=Mysuru">Mysuru Factory Store</Link></li>
              <li><Link href="/stores?city=Bengaluru">Bengaluru Jubilee</Link></li>
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
          <nav className={styles.footerSecondaryLinks} aria-label="Institutional information">
            <Link href="/institution#rti">Right to Information (RTI)</Link>
            <Link href="/institution#charter">Citizen’s Charter</Link>
            <Link href="/institution#tenders">Tenders & Notifications</Link>
            <Link href="/contact">Privacy Policy</Link>
            <Link href="/contact">Accessibility Statement</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
