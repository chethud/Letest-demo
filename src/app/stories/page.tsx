import React from "react";
import { JournalSubnav } from "@/components/journal/JournalSubnav";
import styles from "@/components/journal/JournalArticle.module.css";

export const metadata = {
  title: "Stories | KSIC Journal",
  description:
    "Stories from the world of Mysore Silk: heritage, craft, and the people who keep the weave alive.",
};

export default function StoriesPage() {
  return (
    <div className={styles.page}>
      <JournalSubnav activeHref="/stories" />
      <article className={styles.article}>
        <p className={styles.kicker}>Journal · Stories</p>
        <h1 className={styles.title}>
          Silk <span>Stories</span>
        </h1>
        <p className={styles.lead}>
          Narratives from Karnataka’s silk tradition, from royal patronage to the weavers and
          sericulture families who sustain Mysore Silk today.
        </p>
        <div className={styles.body}>
          <h2>A living legacy</h2>
          <p>
            Mysore Silk is more than cloth. It carries the memory of palace ateliers, state
            stewardship, and generations of hands that reel, dye, and weave mulberry filament into
            sarees recognised across India.
          </p>
          <h2>From cocoon to cloth</h2>
          <p>
            Each story begins in the mulberry garden and ends in the finished pallu. Along the way
            are farmers, reelers, and master weavers whose work is protected by Geographical
            Indication and by KSIC’s public mandate.
          </p>
          <h2>Continuing the narrative</h2>
          <p>
            Through KSIC, these stories remain public heritage, preserved not as museum pieces, but
            as living textiles worn for ceremony, celebration, and everyday dignity.
          </p>
        </div>
      </article>
    </div>
  );
}
