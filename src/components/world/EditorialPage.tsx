import React from "react";
import Image from "next/image";
import styles from "./EditorialPage.module.css";

export type EditorialBlock = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

type EditorialPageProps = {
  kicker: string;
  title: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  blocks: EditorialBlock[];
  close: string;
  /** When a sticky About subnav already sits under the site header */
  omitHeaderOffset?: boolean;
};

export function EditorialPage({
  kicker,
  title,
  lead,
  heroImage,
  heroAlt,
  blocks,
  close,
  omitHeaderOffset = false,
}: EditorialPageProps) {
  return (
    <article className={`${styles.page} ${omitHeaderOffset ? styles.pageFlush : ""}`}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{kicker}</p>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.lead}>{lead}</p>
        </div>
        <div className={styles.media}>
          <Image src={heroImage} alt={heroAlt} fill priority sizes="(max-width: 860px) 100vw, 48vw" className={styles.image} />
        </div>
      </header>

      {blocks.map((block) => (
        <section key={block.title} className={styles.block}>
          <div className={styles.media}>
            <Image src={block.image} alt={block.alt} fill sizes="(max-width: 860px) 100vw, 46vw" className={styles.image} />
          </div>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>{block.eyebrow}</p>
            <h2 className={styles.blockTitle}>{block.title}</h2>
            <p className={styles.body}>{block.body}</p>
          </div>
        </section>
      ))}

      <p className={styles.close}>{close}</p>
    </article>
  );
}
