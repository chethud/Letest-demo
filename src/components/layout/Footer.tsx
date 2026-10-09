"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { INSTITUTIONAL_OVERVIEW } from "@/data/institution";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className={styles.footerContainer} aria-label="Official Footer">
      <div className={styles.footerWrap}>
        <div className={`${styles.footerTopGrid} reveal-stagger`}>
          {/* Brand & Authority Column */}
          <div className={styles.brandColumn}>
            <div className={styles.stateEmblemRow}>
              <Image
                src="/assets/brand/karnataka-seal.svg"
                alt="Emblem of Government of Karnataka"
                width={48}
                height={48}
                className={styles.karnatakaSeal}
              />
              <Image
                src="/assets/brand/ksic-logo.png"
                alt="KSIC Mysore Silk"
                width={140}
                height={40}
                className={styles.ksicLogoWhite}
              />
            </div>
            <div>
              <div className={styles.brandLegalName}>
                {lang === "kn" ? t.footerEnterpriseTitle : "Karnataka Silk Industries Corporation Limited"}
              </div>
              <div className={styles.brandKannadaTitle}>
                {INSTITUTIONAL_OVERVIEW.kannadaName}
              </div>
            </div>
            <p className={styles.brandDescription}>
              {lang === "kn"
                ? "1912 ರಲ್ಲಿ ಮಹಾರಾಜ ಶ್ರೀ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್ ಅವರಿಂದ ಸ್ಥಾಪಿಸಲ್ಪಟ್ಟ ರಾಜ ಮೈಸೂರು ರೇಷ್ಮೆ ನೇಯ್ಗೆ ಪರಂಪರೆಯನ್ನು ಮುಂದುವರಿಸುತ್ತಿರುವ ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಉದ್ಯಮ. ಭೌಗೋಳಿಕ ಸೂಚ್ಯಂಕ ಜಿಐ-11 ರ ಏಕೈಕ ನೋಂದಾಯಿತ ಮಾಲೀಕರು."
                : "A Government of Karnataka Enterprise carrying forward the royal Mysore Silk weaving legacy established in 1912 by Maharaja Sri Nalvadi Krishnaraja Wadiyar. Sole registered proprietor of Geographical Indication GI-11."}
            </p>
          </div>

          {/* Primary Navigation */}
          <div>
            <div className={styles.navColumnTitle}>
              {lang === "kn" ? "ಪರಂಪರೆ & ಕಲೆ" : "HERITAGE & CRAFT"}
            </div>
            <ul className={styles.navColumnList}>
              <li className={styles.navColumnItem}>
                <Link href="/heritage">{lang === "kn" ? "1912 ರ ಪರಂಪರೆ" : "The 1912 Legacy"}</Link>
              </li>
              <li className={styles.navColumnItem}>
                <Link href="/heritage#timeline">{lang === "kn" ? "ಐತಿಹಾಸಿಕ ಕಾಲಕ್ರಮ" : "Historical Timeline"}</Link>
              </li>
              <li className={styles.navColumnItem}>
                <Link href="/craft">{lang === "kn" ? "ಗೂಡಿನಿಂದ ರೇಷ್ಮೆಯವರೆಗೆ" : "From Cocoon to Silk"}</Link>
              </li>
              <li className={styles.navColumnItem}>
                <Link href="/craft#zari">{lang === "kn" ? "ಶುದ್ಧ ಬಂಗಾರದ ಜರಿ ಮಾನದಂಡ" : "Pure Gold Zari Standard"}</Link>
              </li>
              <li className={styles.navColumnItem}>
                <Link href="/craft#factory">{lang === "kn" ? "ರೇಷ್ಮೆ ನೇಯ್ಗೆ ಕಾರ್ಖಾನೆ" : "Silk Weaving Factory"}</Link>
              </li>
            </ul>
          </div>

          {/* Catalogue & Locations */}
          <div>
            <div className={styles.navColumnTitle}>
              {lang === "kn" ? "ಕ್ಯಾಟಲಾಗ್ & ಮಳಿಗೆಗಳು" : "CATALOGUE & STORES"}
            </div>
            <ul className={styles.navColumnList}>
              <li className={styles.navColumnItem}>
                <Link href="/collection">{lang === "kn" ? "ಕೆ.ಎಸ್.ಐ.ಸಿ ಸಂಗ್ರಹ" : "The House of KSIC"}</Link>
              </li>
              <li className={styles.navColumnItem}>
                <Link href="/collection#authenticity">{lang === "kn" ? "ಜಿಐ-11 ದೃಢೀಕರಣ" : "GI-11 Verification"}</Link>
              </li>
              <li className={styles.navColumnItem}>
                <Link href="/stores">{lang === "kn" ? "ರಾಜ್ಯ ಮಳಿಗೆಗಳ ಜಾಲ" : "Showroom Network"}</Link>
              </li>
              <li className={styles.navColumnItem}>
                <Link href="/stores?city=Mysuru">{lang === "kn" ? "ಮೈಸೂರು ಫ್ಯಾಕ್ಟರಿ ಮಳಿಗೆ" : "Mysuru Factory Store"}</Link>
              </li>
              <li className={styles.navColumnItem}>
                <Link href="/stores?city=Bengaluru">{lang === "kn" ? "ಬೆಂಗಳೂರು ಜ್ಯೂಬಿಲಿ ಮಳಿಗೆ" : "Bengaluru Jubilee"}</Link>
              </li>
            </ul>
          </div>

          {/* Institutional Contact */}
          <div>
            <div className={styles.navColumnTitle}>
              {lang === "kn" ? "ಪ್ರಧಾನ ಕಛೇರಿ" : "CORPORATE OFFICE"}
            </div>
            <div className={styles.contactInfoGroup}>
              <p>
                {lang === "kn"
                  ? "3 ಮತ್ತು 4 ನೇ ಮಹಡಿ, ಪಬ್ಲಿಕ್ ಯುಟಿಲಿಟಿ ಬಿಲ್ಡಿಂಗ್, ಎಂ.ಜಿ. ರಸ್ತೆ, ಮೇಯೋ ಹಾಲ್, ಬೆಂಗಳೂರು — 560 001, ಕರ್ನಾಟಕ"
                  : "3rd & 4th Floor, Public Utility Building, M.G. Road, Mayo Hall, Bengaluru — 560 001, Karnataka, India"}
              </p>
              <p>
                <span className={styles.contactHighlight}>{lang === "kn" ? "ದೂರವಾಣಿ:" : "Phone:"}</span>{" "}
                <a href="tel:+918025586402">+91 80 25586402</a> / <a href="tel:+918025586550">25586550</a>
                <br />
                <span className={styles.contactHighlight}>{lang === "kn" ? "ಇಮೇಲ್:" : "Email:"}</span>{" "}
                <a href="mailto:info@ksicsilk.com">info@ksicsilk.com</a>
              </p>
              <p className={styles.contactCin}>
                CIN: {INSTITUTIONAL_OVERVIEW.corporateId}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Governance */}
        <div className={`${styles.footerBottomRow} reveal-up`}>
          <div>
            {lang === "kn"
              ? `© ${new Date().getFullYear()} ಕರ್ನಾಟಕ ರೇಷ್ಮೆ ಕೈಗಾರಿಕಾ ನಿಗಮ ನಿಯಮಿತ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.`
              : `© ${new Date().getFullYear()} Karnataka Silk Industries Corporation Limited. All rights reserved.`}
          </div>
          <div className={styles.footerSecondaryLinks}>
            <Link href="/institution#rti">{lang === "kn" ? "ಮಾಹಿತಿ ಹಕ್ಕು (RTI)" : "Right to Information (RTI)"}</Link>
            <Link href="/institution#charter">{lang === "kn" ? "ನಾಗರಿಕ ಸನ್ನದು" : "Citizen’s Charter"}</Link>
            <Link href="/institution#tenders">{lang === "kn" ? "ಟೆಂಡರ್‌ಗಳು" : "Tenders & Notifications"}</Link>
            <Link href="/contact">{lang === "kn" ? "ಗೌಪ್ಯತಾ ನೀತಿ" : "Privacy Policy"}</Link>
            <Link href="/contact">{lang === "kn" ? "ಪ್ರವೇಶಸಾಧ್ಯತೆ" : "Accessibility Statement"}</Link>
          </div>
        </div>
      </div>

      <Image
        src="/assets/brand/karnataka-seal.svg"
        alt=""
        width={500}
        height={500}
        aria-hidden="true"
        className={styles.institutionalWatermark}
      />
    </footer>
  );
};
