import React from "react";
import { QUALITY_CHECKPOINTS } from "@/data/qualityCheckpoints";
import styles from "./QualityCareSections.module.css";

const CARE_PRACTICES = [
  {
    label: "Dry clean",
    detail: "Dry clean to help preserve the shine of the silk and zari.",
  },
  {
    label: "Store",
    detail: "Keep the saree in soft muslin or cotton, away from sunlight and moisture.",
  },
  {
    label: "In use",
    detail:
      "Do not spray perfume directly on the cloth. Refold a stored saree every few months.",
  },
] as const;

type QualityCareSectionsProps = {
  /** Prefix ids when the same blocks appear twice on one journey (e.g. home vs craft). */
  idPrefix?: string;
};

export function QualityCareSections({ idPrefix = "" }: QualityCareSectionsProps) {
  const qualityId = `${idPrefix}quality`;
  const careId = `${idPrefix}care`;

  return (
    <>
      <section
        id={qualityId}
        className={styles.qualityBand}
        aria-labelledby={`${qualityId}-heading`}
      >
        <div className="container-institutional">
          <header className={`reveal-up ${styles.qualityHeader}`}>
            <p className={styles.qualityEyebrow}>Quality checkpoints</p>
            <h2 id={`${qualityId}-heading`} className={styles.qualityHeading}>
              Checked at every decisive stage
            </h2>
          </header>

          <ol className={styles.qualityStrip}>
            {QUALITY_CHECKPOINTS.map((point, index) => (
              <li key={point.stage} className={styles.qualityStep}>
                <span className={styles.qualityIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className={styles.qualityCopy}>
                  <p className={styles.qualityStage}>{point.stage}</p>
                  <h3 className={styles.qualityCheck}>{point.check}</h3>
                  <p className={styles.qualityDetail}>{point.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id={careId}
        className={`section-spacing ${styles.careBand}`}
        aria-labelledby={`${careId}-heading`}
      >
        <div className="container-institutional">
          <header className={styles.careHeader}>
            <span className="editorial-label">After purchase</span>
            <h2 id={`${careId}-heading`} className={`display-section ${styles.careTitle}`}>
              Identification and care
            </h2>
          </header>

          <div className={styles.careSplit}>
            <div className={styles.careCol}>
              <p className={styles.careColLabel}>Identification</p>
              <h3 className={styles.careColTitle}>Unique number and hologram</h3>
              <p className={styles.careColBody}>
                Each finished saree carries a unique identification number and a hologram so its
                authenticity can be checked against KSIC’s records.
              </p>
              <p className={styles.careDisclaimer}>
                This website does not check those numbers. Bring the saree or its details to a KSIC
                showroom for verification.
              </p>
            </div>

            <div className={styles.careCol}>
              <p className={styles.careColLabel}>Care</p>
              <h3 className={styles.careColTitle}>Keep the lustre</h3>
              <ol className={styles.careList}>
                {CARE_PRACTICES.map((practice, index) => (
                  <li key={practice.label} className={styles.careItem}>
                    <span className={styles.careIndex} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className={styles.careItemLabel}>{practice.label}</p>
                      <p className={styles.careItemDetail}>{practice.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
