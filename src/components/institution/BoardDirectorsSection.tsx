import React from "react";
import { BOARD_OF_DIRECTORS } from "@/data/institution";
import { DirectorAvatar } from "./DirectorAvatar";
import styles from "./BoardDirectorsSection.module.css";

export function BoardDirectorsSection() {
  return (
    <section className={styles.section} id="board" aria-label="Board of Directors">
      <div className={styles.decorLeft} aria-hidden="true" />
      <div className={styles.decorRight} aria-hidden="true" />

      <header className={styles.intro}>
        <p className={styles.eyebrow}>A Legacy of Silk {"&"} Leadership</p>
        <h2 className={styles.title}>
          Board of <span>Directors</span>
        </h2>
        <p className={styles.lead}>
          The Board of Directors provides strategic direction and oversight to Karnataka Silk
          Industries Corporation Limited, safeguarding its heritage and guiding its future.
        </p>
      </header>

      <div className={styles.timeline}>
        <ol className={styles.row}>
          {BOARD_OF_DIRECTORS.map((director) => (
            <li key={director.name} className={styles.profile}>
              <DirectorAvatar name={director.name} imageSrc={director.imageSrc} />
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
            </li>
          ))}
        </ol>
      </div>

      <footer className={styles.footerMark}>
        <p>Karnataka Silk Industries Corporation Limited</p>
      </footer>
    </section>
  );
}
