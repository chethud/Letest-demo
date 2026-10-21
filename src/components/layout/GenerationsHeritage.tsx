"use client";

import React from "react";
import Link from "next/link";
import { RoyalZariVerificationLab } from "@/components/home/RoyalZariVerificationLab";
import styles from "./GenerationsHeritage.module.css";

export const GenerationsHeritage: React.FC = () => {
  return (
    <section className={styles.heritage} id="generations" aria-label="Heritage">
      <RoyalZariVerificationLab id="authenticity-lab" />

      <div className={styles.story}>
        <div className={styles.atmosphere} aria-hidden="true" />
        <figure className={styles.image}>
          <img
            src="/assets/heritage/three-generation-portrait.png"
            alt="Three generations of women in Mysore silk"
            className={styles.photo}
          />
        </figure>
        <div className={styles.panel}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Heritage</p>
            <h2 className={styles.title}>Silk for generations</h2>
            <p className={styles.lead}>
              You can buy the saree.
              <br />
              The years that follow are yours alone.
            </p>
            <Link href="/heritage" className={styles.cta}>
              Our Story <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
