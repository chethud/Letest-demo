"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./FactorySection.module.css";
import { INSTITUTIONAL_OVERVIEW } from "@/data/institution";
import { useLanguage } from "@/context/LanguageContext";

export const FactorySection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section
      className={styles.factorySection}
      id="factory"
      style={{ position: "relative", minHeight: "80vh", overflow: "hidden" }}
      aria-label="Mysore Silk Weaving Factory"
    >
      <div className={styles.factoryBgWrap} style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <Image
          src="/assets/factory/ksic-power-loom.jpg"
          alt="KSIC Mysore Silk Weaving Factory active Swiss power looms on Mananthody Road"
          fill
          sizes="100vw"
          className={styles.factoryImage}
        />
        <div className={styles.factoryOverlay} />
      </div>

      <div className={styles.contentContainer}>
        <div className="reveal-up">
          <span className={`editorial-label ${styles.factoryKicker}`}>
            {t.factoryKicker}
          </span>

          <h2 className={styles.factoryHeadline}>
            {t.factoryTitle}
          </h2>

          <p className={styles.factoryDescription}>
            {t.factoryDesc}
          </p>
        </div>

        {/* Verified Restrained Statistics */}
        <div className={`${styles.metricsGrid} reveal-stagger`}>
          {INSTITUTIONAL_OVERVIEW.keyMetrics.map((m) => {
            const label = lang === "kn" && (m as any).kannadaLabel ? (m as any).kannadaLabel : m.label;
            const detail = lang === "kn" && (m as any).kannadaDetail ? (m as any).kannadaDetail : m.detail;
            return (
              <div key={m.label} className={`${styles.metricItem} hover-lift`}>
                <div className={styles.metricValue}>{m.value}</div>
                <div className={styles.metricLabel}>{label}</div>
                <div className={styles.metricDetail}>{detail}</div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "48px" }}>
          <Link href="/institution" className="action-editorial action-editorial-gold">
            <span>{t.factoryBtn}</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};
