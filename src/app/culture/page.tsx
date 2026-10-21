import React from "react";
import { JournalSubnav } from "@/components/journal/JournalSubnav";
import styles from "@/components/journal/JournalArticle.module.css";

export const metadata = {
  title: "Culture | KSIC Journal",
  description:
    "The culture around Mysore Silk — ceremony, craftsmanship, and Karnataka’s sericulture traditions.",
};

export default function CulturePage() {
  return (
    <div className={styles.page}>
      <JournalSubnav activeHref="/culture" />
      <article className={styles.article}>
        <p className={styles.kicker}>Journal · Culture</p>
        <h1 className={styles.title}>
          Silk <span>Culture</span>
        </h1>
        <p className={styles.lead}>
          How Mysore Silk shapes ceremony, identity, and craft culture across Karnataka — from
          temple borders to bridal wardrobes.
        </p>
        <div className={styles.body}>
          <h2>Ceremony and cloth</h2>
          <p>
            In Karnataka, silk marks life’s thresholds: weddings, festivals, and state occasions.
            The weight of pure mulberry silk and the gleam of authentic zari are part of how
            tradition is worn in public.
          </p>
          <h2>Motifs with meaning</h2>
          <p>
            Borders, buttas, and pallu compositions draw from temple architecture, flora, and royal
            emblems. These patterns are not decoration alone — they are a visual language of place
            and patronage.
          </p>
          <h2>A culture of care</h2>
          <p>
            Guarding authenticity — through GI recognition, verified zari standards, and transparent
            provenance — is cultural work as much as industrial work. KSIC holds that trust for the
            public.
          </p>
        </div>
      </article>
    </div>
  );
}
