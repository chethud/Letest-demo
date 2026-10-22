import React from "react";
import { AboutSubnav } from "@/components/about/AboutSubnav";
import { SHAREHOLDERS } from "@/data/institution";
import styles from "./Shareholders.module.css";

export const metadata = {
  title: "Shareholders | KSIC",
  description:
    "Official shareholding information for Karnataka Silk Industries Corporation Limited.",
};

export default function ShareholdersPage() {
  const principal = SHAREHOLDERS.find((s) => s.holding.includes("Equity"));
  const nominees = SHAREHOLDERS.filter((s) => !s.holding.includes("Equity"));

  return (
    <div className={styles.page}>
      <AboutSubnav activeHref="/shareholders" />

      <section
        className={`section-spacing ${styles.hero}`}
        aria-labelledby="shareholders-heading"
      >
        <div className="container-institutional">
          <span className="editorial-label">Ownership {"&"} Stewardship</span>
          <h1 id="shareholders-heading" className={styles.title}>
            Shareholders
          </h1>
          <p className={styles.lead}>
            Official shareholding of Karnataka Silk Industries Corporation Limited, a Government of
            Karnataka undertaking under the Department of Sericulture.
          </p>
        </div>
      </section>

      <section className={`section-spacing ${styles.overview}`} aria-label="Ownership overview">
        <div className="container-institutional">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewItem}>
              <p className={styles.overviewLabel}>Principal equity</p>
              <p className={styles.overviewValue}>
                {principal?.holding ?? "Government of Karnataka"}
              </p>
              <p className={styles.overviewNote}>
                Held by His Excellency the Governor, for the State
              </p>
            </div>
            <div className={styles.overviewItem}>
              <p className={styles.overviewLabel}>Nominee officers</p>
              <p className={styles.overviewValue}>{nominees.length}</p>
              <p className={styles.overviewNote}>One equity share each, in official capacity</p>
            </div>
          </div>
        </div>
      </section>

      {principal ? (
        <section
          className={`section-spacing ${styles.principalSection}`}
          aria-labelledby="principal-heading"
        >
          <div className="container-institutional">
            <div className={styles.principalGrid}>
              <div className={styles.principalCopy}>
                <span className="editorial-label">Principal Shareholder</span>
                <h2 id="principal-heading" className="display-section">
                  {principal.name}
                </h2>
                <p className={styles.principalRole}>{principal.role}</p>
              </div>
              <aside className={styles.principalAside}>
                <p className={styles.asideLabel}>Equity holding</p>
                <p className={styles.asideValue}>{principal.holding}</p>
                <p className={styles.asideNote}>
                  Equity is held in the name of His Excellency the Governor of Karnataka, for and
                  on behalf of the Government of Karnataka.
                </p>
              </aside>
            </div>
          </div>
        </section>
      ) : null}

      <section
        className={`section-spacing ${styles.nomineesSection}`}
        aria-labelledby="nominees-heading"
      >
        <div className="container-institutional">
          <div className={styles.sectionIntro}>
            <span className="editorial-label">Held in Official Capacity</span>
            <h2 id="nominees-heading" className="display-section">
              Nominee Shareholders
            </h2>
            <p className={styles.sectionLead}>
              Six officers hold one equity share each as nominees of the Government of Karnataka.
            </p>
          </div>

          <ol className={styles.nomineeGrid}>
            {nominees.map((shareholder, index) => (
              <li key={shareholder.name} className={styles.nomineeCard}>
                <span className={styles.nomineeIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className={styles.nomineeBody}>
                  <div className={styles.nomineeTop}>
                    <h3 className={styles.nomineeName}>{shareholder.name}</h3>
                    <span className={styles.nomineeHolding}>{shareholder.holding}</span>
                  </div>
                  <p className={styles.nomineeRole}>{shareholder.role}</p>
                  {shareholder.addressLines.length > 0 ? (
                    <address className={styles.nomineeAddress}>
                      {shareholder.addressLines.join(", ")}
                    </address>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
