import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { MysoreSilkSubnav } from "@/components/mysore-silk/MysoreSilkSubnav";
import { CRAFT_STAGES } from "@/data/craft";
import styles from "./Craft.module.css";

export const metadata = {
  title: "Craft & Technical Monograph · From Cocoon to Silk | KSIC",
  description: "From cocoon to saree: Ramanagara, T. Narasipura reeling, twisting, weaving in Mysore, degumming, dyeing, and finishing, as described in the supplied sources.",
};

export default function CraftPage() {
  return (
    <div className={styles.craftPage}>
      <MysoreSilkSubnav activeHref="/craft" />
      {/* Header */}
      <section className={`section-spacing ${styles.hero}`}>
        <div className="container-institutional reveal-up">
          <h1 className="display-hero" style={{ marginTop: "0", marginBottom: "0" }}>
            FROM COCOON TO SILK.
          </h1>
        </div>
      </section>

      {/* 7 Stages Deep Dive */}
      <section id="stages" className="section-spacing" style={{ backgroundColor: "var(--color-bg-primary)", borderBottom: "var(--border-rule)" }}>
        <div className="container-institutional">
          <div className={styles.stagesList}>
            {CRAFT_STAGES.map((stage, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={stage.step}
                  id={`stage-${stage.step}`}
                  className={`${styles.stageCard} ${isEven ? "" : styles.stageCardEven}`}
                >
                  <div className={`${isEven ? "reveal-left" : "reveal-right"} ${styles.textContent}`}>
                    <div className={styles.stageHeader}>
                      <span className={styles.stageNumber}>
                        {stage.step}
                      </span>
                    </div>

                    <h2 className={styles.stageTitle}>
                      {stage.title}
                    </h2>

                    <p className={styles.stageSummary}>
                      {stage.summary}
                    </p>

                    <p className={styles.stageDetails}>
                      {stage.details}
                    </p>

                    <div className={styles.stageSpecBox}>
                      <strong>Technical Spec: </strong>
                      {stage.technicalSpec}
                    </div>
                  </div>

                  <div className={`reveal-scale ${styles.mediaContent}`}>
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div className={styles.mediaBadge}>
                      STAGE {stage.step} · {stage.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pure Zari Metallurgy Section */}
      <section className="section-spacing" id="zari" style={{ backgroundColor: "var(--color-bg-paper)", borderBottom: "var(--border-rule)" }}>
        <div className="container-institutional">
          <div className="reveal-up" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "56px" }}>
            <span className="editorial-label" style={{ justifyContent: "center" }}>ZARI SPECIFICATION</span>
            <h2 className="display-section">65% SILVER, 0.65% GOLD</h2>
            <p style={{ marginTop: "12px", color: "var(--color-text-secondary)" }}>
              Zari is specified as 65% pure silver and 0.65% gold. Madhurya describes genuine gold and silver zari. Neither figure is extended into a no-tarnish guarantee.
            </p>
          </div>

          <div className={`reveal-stagger ${styles.metallurgyGrid}`}>
            <div className={`hover-lift ${styles.metallurgyCard}`}>
              <div className={styles.metallurgyStat} style={{ color: "var(--color-burgundy)" }}>
                65%
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", marginBottom: "12px" }}>
                Pure Silver Ribbon
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                The supplied specification is 65% pure silver. The sources do not add a silk-core construction or a comparison with copper and polyester.
              </p>
            </div>

            <div className={`hover-lift ${styles.metallurgyCard}`}>
              <div className={styles.metallurgyStat} style={{ color: "var(--color-gold)" }}>
                0.65%
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", marginBottom: "12px" }}>
                Gold, as specified
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                The gold share is specified as 0.65%. Madhurya describes genuine gold zari. Electroplating, 24-carat baths, and a claim that the metal will never flake are not in those accounts.
              </p>
            </div>

            <div className={`hover-lift ${styles.metallurgyCard}`}>
              <div className={styles.metallurgyStat} style={{ color: "var(--color-text-primary)" }}>
                100%
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", marginBottom: "12px" }}>
                Pure mulberry silk
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                Madhurya describes pure mulberry silk with a smooth feel, a light drape, and a natural sheen. It does not add a lifespan or a durability guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Silk Identification & Burning Test */}
      <section className="section-spacing" id="care" style={{ backgroundColor: "var(--color-bg-primary)" }}>
        <div className="container-institutional">
          <div className={styles.burningGrid}>
            <div className="reveal-left">
              <span className="editorial-label">IDENTIFICATION AND CARE</span>
              <h2 className="display-section" style={{ marginBottom: "20px" }}>
                WHAT THE SUPPLIED ACCOUNTS ACTUALLY SAY
              </h2>
              <p style={{ marginBottom: "16px" }}>
                Each saree is described as carrying a unique identification number and a hologram. This website does not check those numbers.
              </p>
              <p style={{ marginBottom: "24px" }}>
                Care notes below are taken from the Madhurya article. No washing temperature or extra chemical instruction is added.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} color="var(--color-burgundy)" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <div>
                    <strong>Dry clean: </strong>
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      Madhurya recommends dry cleaning to help preserve the shine.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} color="var(--color-burgundy)" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <div>
                    <strong>Store: </strong>
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      Keep the saree in soft muslin or cotton, away from sunlight and moisture.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} color="var(--color-burgundy)" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <div>
                    <strong>In use: </strong>
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      Avoid spraying perfume directly on the saree, and refold a stored saree every few months.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`reveal-scale ${styles.preservationBox}`}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "var(--color-burgundy)", marginBottom: "16px" }}>
                Preservation Guidelines
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                <li>• Dry clean, to help preserve the shine.</li>
                <li>• Store in soft muslin or cotton.</li>
                <li>• Keep away from sunlight and moisture.</li>
                <li>• Do not spray perfume directly on the saree.</li>
                <li>• Refold a stored saree every few months.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
