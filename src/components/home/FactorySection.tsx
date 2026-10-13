"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./FactorySection.module.css";
import { useLanguage } from "@/context/LanguageContext";

export const FactorySection: React.FC = () => {
  const { lang } = useLanguage();
  const isKn = lang === "kn";

  const STATS = [
    {
      value: "1912",
      label: isKn ? "ಸ್ಥಾಪನೆಯ ವರ್ಷ" : "YEAR ESTABLISHED",
      desc: isKn
        ? "ಮಹಾರಾಜ ಶ್ರೀ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್ ಅವರಿಂದ"
        : "By Maharaja Sri Nalvadi Krishnaraja Wadiyar",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z" />
        </svg>
      ),
    },
    {
      value: "138",
      label: isKn ? "ಸ್ವಿಸ್ ಪವರ್ ಲೂಮ್‌ಗಳು" : "SWISS POWER LOOMS",
      desc: isKn
        ? "ಕ್ಯಾಲಿಬ್ರೇಟೆಡ್ ನಿಖರ ನೇಯ್ಗೆ ಯಂತ್ರೋಪಕರಣಗಳು"
        : "Calibrated precision weaving machinery",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 4h16v3H4zM4 17h16v3H4zM6 7v10M10 7v10M14 7v10M18 7v10M2 12h20" />
        </svg>
      ),
    },
    {
      value: "100%",
      label: isKn ? "ಶುದ್ಧ ನೈಸರ್ಗಿಕ ರೇಷ್ಮೆ" : "PURE NATURAL SILK",
      desc: isKn
        ? "ಹಾಸು ಮತ್ತು ಹೊಕ್ಕು ಮಲ್ಬರಿ ಫಿಲಮೆಂಟ್ ಗ್ಯಾರಂಟಿ"
        : "Warp and weft mulberry filament guarantee",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M11 20A7 7 0 0 1 4 13C4 7 11 3 20 4c1 9-3 16-9 16z" />
          <path d="M4 20l7-7" />
        </svg>
      ),
    },
    {
      value: "0.65%",
      label: isKn ? "೨೪K ಚಿನ್ನದ ಜರಿ" : "24K GOLD ZARI",
      desc: isKn
        ? "೬೫% ಶುದ್ಧ ಬೆಳ್ಳಿ ರಿಬ್ಬನ್ ಮೇಲೆ ವಿದ್ಯುತ್ ಲೇಪಿತ"
        : "Electroplated over 65% pure silver ribbon",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 4h12M6 20h12M8 4v16M16 4v16M8 8h8M8 12h8M8 16h8" />
          <rect x="5" y="3" width="14" height="2" rx="0.5" />
          <rect x="5" y="19" width="14" height="2" rx="0.5" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="factory"
      className={styles.factorySection}
      aria-label="Mysore Silk Weaving Factory Heritage"
    >
      <div className={styles.container}>
        {/* Main Content (Aligned Left, uncluttered over dark workshop shadow) */}
        <div className={styles.heroContent}>
          {/* Eyebrow with gold dash */}
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowText}>
              {isKn
                ? "ರೇಷ್ಮೆ ನೇಯ್ಗೆ ಕಾರ್ಖಾನೆ · ಮಾನಂದವಾಡಿ ರಸ್ತೆ, ಮೈಸೂರು"
                : "THE SILK WEAVING FACTORY · MANANTHODY ROAD, MYSURU"}
            </span>
          </div>

          {/* Headline */}
          <h2 className={styles.headline}>
            {isKn ? (
              <>
                ಪರಂಪರೆ ಇಂದಿಗೂ <br />
                ಜೀವಂತವಾಗಿ <br />
                <span className={styles.goldWord}>ನೇಯಲ್ಪಡುತ್ತಿದೆ.</span>
              </>
            ) : (
              <>
                WHERE THE <br />
                LEGACY IS STILL <br />
                BEING <span className={styles.goldWord}>WOVEN.</span>
              </>
            )}
          </h2>

          {/* Description */}
          <p className={styles.description}>
            {isKn
              ? "೧೯೧೨ ರಲ್ಲಿ ಮಹಾರಾಜ ಶ್ರೀ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್ ಅವರಿಂದ ಸ್ಥಾಪಿಸಲ್ಪಟ್ಟ ಮೈಸೂರು ರೇಷ್ಮೆ ನೇಯ್ಗೆ ಕಾರ್ಖಾನೆಯು ಭಾರತದ ಅತ್ಯಂತ ಪುರಾತನ ಯಂತ್ರ-ನೇಯ್ಗೆ ಘಟಕವಾಗಿದೆ. ಶತಮಾನದಷ್ಟು ಹಳೆಯದಾದ ಸ್ವಿಸ್-ನಿರ್ಮಿತ ಜಕಾರ್ಡ್ ಪವರ್ ಲೂಮ್‌ಗಳು ಮಾನಂದವಾಡಿ ರಸ್ತೆಯಲ್ಲಿ ಇಂದಿಗೂ ಸಕ್ರಿಯವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದ್ದು, ರಾಷ್ಟ್ರದ ಅಖಂಡ ಜವಳಿ ಪರಂಪರೆಯನ್ನು ಕಾಪಾಡಿಕೊಂಡು ಬರುತ್ತಿವೆ."
              : "Established in 1912 by Maharaja Sri Nalvadi Krishnaraja Wadiyar, the Mysore Silk Weaving Factory is the oldest operating machine-weaving unit in India. Century-old Swiss-built Jacquard power looms continue to run on Mananthody Road, preserving unbroken textile heritage for the nation."}
          </p>

          {/* Primary CTA */}
          <div className={styles.ctaWrapper}>
            <Link href="/institution" className={styles.primaryCtaBtn}>
              <span>{isKn ? "ಕಾರ್ಖಾನೆಯ ಪರಂಪರೆ ತಿಳಿಯಿರಿ" : "ABOUT FACTORY HERITAGE"}</span>
              <ArrowRight size={14} className={styles.ctaArrow} />
            </Link>
          </div>
        </div>

        {/* Heritage Statistics Strip */}
        <div className={styles.statsStrip} role="list">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`${styles.statColumn} ${
                idx !== STATS.length - 1 ? styles.statDivider : ""
              }`}
              role="listitem"
            >
              <div className={styles.statIconWrap}>{stat.icon}</div>
              <div className={styles.statNumber}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statDesc}>{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Divider Line with Central Diamond Flourish */}
        <div className={styles.bottomDecorativeLine} aria-hidden="true">
          <span className={styles.bottomLineSegment} />
          <div className={styles.bottomFlourish}>
            <svg
              width="36"
              height="18"
              viewBox="0 0 36 18"
              fill="none"
              stroke="#C5A059"
              strokeWidth="1.2"
            >
              <path d="M18 2 L25 9 L18 16 L11 9 Z" fill="none" />
              <path d="M18 5 L22 9 L18 13 L14 9 Z" fill="#C5A059" />
              <path d="M3 9 L11 9 M25 9 L33 9" strokeWidth="1" />
            </svg>
          </div>
          <span className={styles.bottomLineSegment} />
        </div>
      </div>
    </section>
  );
};
