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

  return (
    <div className={styles.page}>
      <section className={styles.section} aria-label="Shareholders">
        <header className={styles.intro}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowRule} aria-hidden="true" />
            <span>Governance</span>
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

        <ol className={styles.list}>
          {SHAREHOLDERS.map((shareholder, index) => (
            <li
              key={shareholder.name}
              className={`${styles.card} ${
                shareholder.holding.includes("Equity") ? styles.cardFeatured : ""
              }`}
            >
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={styles.info}>
                <h2 className={styles.name}>{shareholder.name}</h2>
                <p className={styles.role}>{shareholder.role}</p>
                {shareholder.addressLines.length > 0 ? (
                  <address className={styles.address}>
                    {shareholder.addressLines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </address>
                ) : null}
              </div>
              <p className={styles.holding}>{shareholder.holding}</p>
            </li>
          ))}
        </ol>

        <aside className={styles.contact} aria-label="Registered office contact">
          <p className={styles.contactAddress}>
            {hq.building}, {hq.street}, {hq.city} {hq.pincode}
          </p>
          <div className={styles.contactMeta}>
            <a href={`mailto:${hq.email}`}>Email: {hq.email}</a>
            <span>Phone 1: {hq.phone1}</span>
            <span>Phone 2: {hq.phone2}</span>
            <span>Fax Number: {hq.phone2}</span>
          </div>
        </aside>
      </section>
    </div>
  );
}
