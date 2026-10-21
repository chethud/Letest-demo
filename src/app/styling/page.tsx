import React from "react";
import { JournalSubnav } from "@/components/journal/JournalSubnav";
import styles from "@/components/journal/JournalArticle.module.css";

export const metadata = {
  title: "Styling | KSIC Journal",
  description:
    "Styling Mysore Silk — how to wear, drape, and care for authentic KSIC sarees and textiles.",
};

export default function StylingPage() {
  return (
    <div className={styles.page}>
      <JournalSubnav activeHref="/styling" />
      <article className={styles.article}>
        <p className={styles.kicker}>Journal · Styling</p>
        <h1 className={styles.title}>
          Silk <span>Styling</span>
        </h1>
        <p className={styles.lead}>
          Guidance on draping, pairing, and caring for authentic Mysore Silk — so the cloth looks
          as considered as it is crafted.
        </p>
        <div className={styles.body}>
          <h2>Drape with intention</h2>
          <p>
            A Mysore Silk saree rewards a clean drape: even pleats, a well-set pallu, and jewellery
            that complements rather than competes with the zari border. The fabric’s natural sheen
            does most of the work.
          </p>
          <h2>Colour and occasion</h2>
          <p>
            Deep crimsons and ivory suit ceremonial settings; softer pastels and jewel tones carry
            easily into festive evenings. Choose contrast borders when you want the architecture of
            the weave to lead.
          </p>
          <h2>Care that preserves</h2>
          <p>
            Dry-clean when needed, store folded in breathable cloth away from moisture, and avoid
            harsh chemicals on zari. Proper care keeps pure silk and precious metal thread luminous
            for generations.
          </p>
        </div>
      </article>
    </div>
  );
}
