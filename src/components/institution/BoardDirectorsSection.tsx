import React from "react";
import { BOARD_OF_DIRECTORS } from "@/data/institution";
import { DirectorAvatar } from "./DirectorAvatar";
import styles from "./BoardDirectorsSection.module.css";

export function BoardDirectorsSection() {
  return (
    <section className={styles.section} id="board" aria-label="Board of Directors">
      <div className={styles.botanical} aria-hidden="true" />

      <div className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span>Governance</span>
            <span className={styles.eyebrowRule} aria-hidden="true" />
          </p>
          <h2 className={styles.title}>
            Board of <span>Directors</span>
          </h2>
          <p className={styles.lead}>
            The Board of Directors provides strategic direction and oversight to Karnataka Silk
            Industries Corporation Limited, safeguarding its heritage and guiding its future.
          </p>
        </div>
      </div>

      <ol className={styles.grid}>
        {BOARD_OF_DIRECTORS.map((director, index) => (
          <li key={director.name} className={styles.card}>
            <span className={styles.cornerMotif} aria-hidden="true" />
            <span className={styles.index} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={styles.divider} aria-hidden="true" />
            <div className={styles.avatarSlot}>
              <DirectorAvatar name={director.name} imageSrc={director.imageSrc} />
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{director.name}</h3>
              <p className={styles.role}>{director.role}</p>
              <address className={styles.address}>
                {director.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
            </div>
          </li>
        ))}
      </ol>

      <div className={styles.crimsonBar} aria-hidden="true" />
    </section>
  );
}
