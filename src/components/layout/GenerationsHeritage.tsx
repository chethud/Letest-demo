import React from "react";
import Link from "next/link";
import styles from "./GenerationsHeritage.module.css";

export const GenerationsHeritage: React.FC = () => {
  return (
    <section className={styles.heritage} id="generations" aria-label="Heritage">
      <div className={styles.atmosphere} aria-hidden="true" />
      <figure className={styles.image}>
        <img
          src="/assets/heritage/generations.jpg"
          alt="Three generations of women in Mysore silk"
          className={styles.photo}
        />
      </figure>
      <div className={styles.panel}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Heritage</p>
          <h2 className={styles.title}>
            Three generations.
            <br />
            One piece of silk.
          </h2>
          <p className={styles.lead}>
            Some things are bought.
            <br />
            Some things are passed down.
          </p>
          <Link href="/heritage" className={styles.cta}>
            Our Story <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
