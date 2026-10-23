import React from "react";
import { CheckCircle2 } from "lucide-react";
import { QUALITY_CHECKPOINTS } from "@/data/qualityCheckpoints";
import styles from "./QualityCareSections.module.css";

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
          <div className={styles.careGrid}>
            <div className="reveal-left">
              <span className="editorial-label">Identification and care</span>
              <h2 id={`${careId}-heading`} className={`display-section ${styles.careTitle}`}>
                What the supplied accounts actually say
              </h2>
              <p className={styles.careCopy}>
                Each saree is described as carrying a unique identification number and a hologram. This
                website does not check those numbers.
              </p>
              <p className={styles.careCopy}>
                Care notes below are taken from the Madhurya article. No washing temperature or extra
                chemical instruction is added.
              </p>

              <div className={styles.carePoints}>
                <div className={styles.carePoint}>
                  <CheckCircle2 size={18} color="var(--color-burgundy)" aria-hidden="true" />
                  <div>
                    <strong>Dry clean: </strong>
                    <span>Madhurya recommends dry cleaning to help preserve the shine.</span>
                  </div>
                </div>
                <div className={styles.carePoint}>
                  <CheckCircle2 size={18} color="var(--color-burgundy)" aria-hidden="true" />
                  <div>
                    <strong>Store: </strong>
                    <span>Keep the saree in soft muslin or cotton, away from sunlight and moisture.</span>
                  </div>
                </div>
                <div className={styles.carePoint}>
                  <CheckCircle2 size={18} color="var(--color-burgundy)" aria-hidden="true" />
                  <div>
                    <strong>In use: </strong>
                    <span>
                      Avoid spraying perfume directly on the saree, and refold a stored saree every few
                      months.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`reveal-scale ${styles.preservationBox}`}>
              <p className={styles.preservationTitle}>Preservation Guidelines</p>
              <ul className={styles.preservationList}>
                <li>Dry clean, to help preserve the shine.</li>
                <li>Store in soft muslin or cotton.</li>
                <li>Keep away from sunlight and moisture.</li>
                <li>Do not spray perfume directly on the saree.</li>
                <li>Refold a stored saree every few months.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
