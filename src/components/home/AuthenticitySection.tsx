"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, QrCode, Sparkles, ArrowRight } from "lucide-react";
import styles from "./AuthenticitySection.module.css";
import { useLanguage } from "@/context/LanguageContext";

export const AuthenticitySection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className={`section-spacing ${styles.authenticitySection}`} id="authenticity" aria-label="Mysore Silk Authenticity Certificate">
      <div className="container-institutional">
        <div className={`${styles.certificateBox} reveal-scale`}>
          <div className={styles.certificateInnerBorder}>
            {/* Header Badge */}
            <div className={styles.certHeader}>
              <div>
                <span className="editorial-label">{t.authKicker}</span>
                <div className={styles.certBadgeNumber}>GI-11</div>
                <div className={styles.certBadgeLabel}>
                  {t.authBadge}
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "0.78rem", letterSpacing: "0.15em", color: "var(--color-text-muted)", textTransform: "uppercase" }}>
                  {t.authProprietorLabel}
                </span>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--color-burgundy)", marginTop: "4px" }}>
                  {lang === "kn" ? "ಕರ್ನಾಟಕ ರೇಷ್ಮೆ ಕೈಗಾರಿಕಾ ನಿಗಮ ನಿಯಮಿತ" : "Karnataka Silk Industries Corp. Ltd."}
                </div>
              </div>
            </div>

            {/* Certificate Content Grid */}
            <div className={styles.certGrid}>
              <div className="reveal-up">
                <h2 className={styles.headline}>
                  {t.authTitle}
                </h2>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-text-secondary)" }}>
                  {t.authDesc}
                </p>

                <div className={`${styles.certPillars} reveal-stagger`}>
                  <div className={styles.pillarItem}>
                    <div className={styles.pillarIconWrap}>
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <h3 className={styles.pillarTitle}>{t.authPillar1Title}</h3>
                      <p className={styles.pillarDesc}>
                        {t.authPillar1Desc}
                      </p>
                    </div>
                  </div>

                  <div className={styles.pillarItem}>
                    <div className={styles.pillarIconWrap}>
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h3 className={styles.pillarTitle}>{t.authPillar2Title}</h3>
                      <p className={styles.pillarDesc}>
                        {t.authPillar2Desc}
                      </p>
                    </div>
                  </div>

                  <div className={styles.pillarItem}>
                    <div className={styles.pillarIconWrap}>
                      <QrCode size={18} />
                    </div>
                    <div>
                      <h3 className={styles.pillarTitle}>{t.authPillar3Title}</h3>
                      <p className={styles.pillarDesc}>
                        {t.authPillar3Desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "32px" }}>
                  <Link href="/craft#authenticity" className="action-editorial action-editorial-burgundy">
                    <span>{t.authBtn}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Visual Macro */}
              <div className={`${styles.certMediaWrap} reveal-scale`}>
                <Image
                  src="/assets/craft/ksic-authenticity-hologram.jpg"
                  alt="Macro detail of authentic KSIC optical security hologram with Gandaberunda crest and micro-embroidered pure gold serial code"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.certImage}
                />
                <div className={styles.certSealTag}>
                  {t.authSealTag}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
