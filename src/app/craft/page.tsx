import React from "react";
import Image from "next/image";
import { MysoreSilkSubnav } from "@/components/mysore-silk/MysoreSilkSubnav";
import { CraftStageStills } from "@/components/craft/CraftStageStills";
import { CRAFT_STAGES } from "@/data/craft";
import { SILK_VARIETIES, SILK_VARIETY_INTRO } from "@/data/silkTypes";
import { KSIC_IN_HOUSE, KSIC_ZERO_WASTE } from "@/data/ksicPractice";
import styles from "./Craft.module.css";

export const metadata = {
  title: "Craft & Technical Monograph · From Cocoon to Silk | KSIC",
  description: "From cocoon to saree: Ramanagara, T. Narasipura reeling, twisting, weaving in Mysore, degumming, dyeing, and finishing.",
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

                    {stage.summary ? (
                      <p className={styles.stageSummary}>{stage.summary}</p>
                    ) : null}

                    <p className={styles.stageDetails}>
                      {stage.details}
                    </p>

                    <div className={styles.stageSpecBox}>
                      {stage.technicalSpec.includes("\n") ? (
                        <>
                          <p className={styles.stageSpecLead}>
                            <strong>Technical Spec: </strong>
                            <span>{stage.technicalSpec.split("\n")[0]}</span>
                          </p>
                          <p className={styles.stageSpecExtra}>
                            {stage.technicalSpec.split("\n").slice(1).join("\n")}
                          </p>
                        </>
                      ) : (
                        <p className={styles.stageSpecLead}>
                          <strong>Technical Spec: </strong>
                          <span>{stage.technicalSpec}</span>
                        </p>
                      )}
                    </div>

                    {stage.stills?.length ? (
                      <CraftStageStills
                        stills={stage.stills}
                        stageLabel={`Stage ${stage.step} · ${stage.name}`}
                      />
                    ) : null}
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

      <section
        id="silk-varieties"
        className={`section-spacing ${styles.varietiesBand}`}
        aria-labelledby="silk-varieties-heading"
      >
        <div className="container-institutional">
          <div className={`reveal-up ${styles.varietiesIntro}`}>
            <span className="editorial-label">Silk varieties</span>
            <h2 id="silk-varieties-heading" className={`display-section ${styles.varietiesHeading}`}>
              Multivoltine and bivoltine · a short history
            </h2>
            <p className={styles.varietiesLead}>{SILK_VARIETY_INTRO}</p>
          </div>

          <div className={styles.varietiesGrid}>
            {SILK_VARIETIES.map((variety) => (
              <article key={variety.id} className={styles.varietyCard}>
                <p className={styles.varietyEra}>{variety.era}</p>
                <h3 className={styles.varietyLabel}>{variety.label}</h3>
                <p className={styles.varietyColour}>
                  Natural colour · <span>{variety.colour}</span>
                </p>
                <p className={styles.varietyBody}>{variety.details}</p>
              </article>
            ))}
          </div>

          <p className={`reveal-up ${styles.practiceNotes}`}>
            {KSIC_IN_HOUSE} {KSIC_ZERO_WASTE}
          </p>
        </div>
      </section>

      {/* Pure Zari Metallurgy Section */}
      <section className="section-spacing" id="zari" style={{ backgroundColor: "var(--color-bg-paper)", borderBottom: "var(--border-rule)" }}>
        <div className="container-institutional">
          <div className="reveal-up" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "56px" }}>
            <span className="editorial-label" style={{ justifyContent: "center" }}>ZARI SPECIFICATION</span>
            <h2 className="display-section">65% SILVER, 0.65% GOLD</h2>
            <p style={{ marginTop: "12px", color: "var(--color-text-secondary)" }}>
              KSIC zari is specified as 65% pure silver and 0.65% gold on genuine gold and silver thread.
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
                The ribbon is specified as 65% pure silver, giving the border its lasting lustre.
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
                The gold share is specified as 0.65% genuine gold, enough for a quiet, lasting gleam.
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
                Pure mulberry silk: smooth to the touch, light in the drape, with a natural sheen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
