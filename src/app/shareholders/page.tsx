import React from "react";
import { INSTITUTIONAL_OVERVIEW, SHAREHOLDERS } from "@/data/institution";
import styles from "./Shareholders.module.css";

export const metadata = {
  title: "Shareholders | KSIC",
  description:
    "Official shareholding information for Karnataka Silk Industries Corporation Limited.",
};

export default function ShareholdersPage() {
  const hq = INSTITUTIONAL_OVERVIEW.headOffice;
  const principal = SHAREHOLDERS.find((s) => s.holding.includes("Equity"));
  const nominees = SHAREHOLDERS.filter((s) => !s.holding.includes("Equity"));

  return (
    <div className={styles.page}>
      <section className={styles.section} aria-label="Shareholders">
        <div className={styles.decorLeft} aria-hidden="true" />
        <div className={styles.decorRight} aria-hidden="true" />

        <header className={styles.intro}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowRule} aria-hidden="true" />
            <span>Ownership {"&"} Stewardship</span>
            <span className={styles.eyebrowRule} aria-hidden="true" />
          </p>
          <h1 className={styles.title}>
            Share<span>holders</span>
          </h1>
          <p className={styles.lead}>
            Official shareholding of Karnataka Silk Industries Corporation Limited, a Government of
            Karnataka undertaking under the Department of Sericulture.
          </p>
        </header>

        {principal ? (
          <article className={styles.principal}>
            <p className={styles.principalLabel}>Principal Shareholder</p>
            <h2 className={styles.principalName}>{principal.name}</h2>
            <p className={styles.principalRole}>{principal.role}</p>
            <p className={styles.principalHolding}>{principal.holding}</p>
          </article>
        ) : null}

        <div className={styles.nominees}>
          <div className={styles.nomineesHead}>
            <p className={styles.nomineesEyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              <span>Held in Official Capacity</span>
              <span className={styles.eyebrowRule} aria-hidden="true" />
            </p>
            <h2 className={styles.nomineesTitle}>Nominee Shareholders</h2>
            <p className={styles.nomineesLead}>
              Six officers hold one equity share each as nominees of the Government of Karnataka.
            </p>
          </div>

          <ol className={styles.grid}>
            {nominees.map((shareholder, index) => (
              <li key={shareholder.name} className={styles.card}>
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.rail} aria-hidden="true" />
                <div className={styles.info}>
                  <div className={styles.nameRow}>
                    <h3 className={styles.name}>{shareholder.name}</h3>
                    <span className={styles.holding}>{shareholder.holding}</span>
                  </div>
                  <p className={styles.role}>{shareholder.role}</p>
                  {shareholder.addressLines.length > 0 ? (
                    <address className={styles.address}>
                      {shareholder.addressLines.join(", ")}
                    </address>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className={styles.contact} aria-label="Registered office contact">
          <p className={styles.contactLabel}>Registered Office</p>
          <p className={styles.contactAddress}>
            {hq.building}, {hq.street}, {hq.city} {hq.pincode}
          </p>
          <div className={styles.contactMeta}>
            <a href={`mailto:${hq.email}`}>{hq.email}</a>
            <span aria-hidden="true">·</span>
            <span>{hq.phone1}</span>
            <span aria-hidden="true">·</span>
            <span>{hq.phone2}</span>
            <span aria-hidden="true">·</span>
            <span>Fax {hq.phone2}</span>
          </div>
        </aside>

        <footer className={styles.footerMark}>
          <span className={styles.footerRule} aria-hidden="true" />
          <p>Karnataka Silk Industries Corporation Limited</p>
          <span className={styles.footerRule} aria-hidden="true" />
        </footer>
      </section>
    </div>
  );
}
