import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeritageSection } from "@/components/home/HeritageSection";
import { TimelineSection } from "@/components/home/TimelineSection";
import { MysoreSilkSubnav } from "@/components/mysore-silk/MysoreSilkSubnav";
import styles from "./Heritage.module.css";

export const metadata = {
  title: "Our Story · Mysore Silk | KSIC",
  description:
    "The cultural story of Mysore Silk: Tippu-era sericulture, royal patronage in Mysuru, and a living textile tradition.",
};

export default function HeritagePage() {
  return (
    <div className={styles.page}>
      <MysoreSilkSubnav activeHref="/heritage" />
      <HeritageSection />

      <section className={styles.storyChapter} aria-labelledby="archival-heading">
        <div className={styles.storyChapterInner}>
          <p className={styles.chapterKicker}>Archival Monograph</p>

          <div className={styles.folioGrid}>
            <header className={styles.folioLead}>
              <h1 id="archival-heading" className={styles.archivalTitle}>
                A royal legacy woven in <span>Mysuru.</span>
              </h1>
              <p className={styles.archivalLead}>
                Mysore Silk is older than the corporation that now stewards it: a textile tradition
                rooted in Karnataka sericulture, palace patronage, and the looms of Mysuru.
              </p>
            </header>

            <div id="patronage" className={styles.folioOrigins}>
              <p className={styles.originsEyebrow}>Origins · Before the corporation</p>

              <article className={styles.originStep}>
                <div className={styles.originHead}>
                  <p className={styles.originsYear}>18th c.</p>
                  <h3 className={styles.originsEraTitle}>Channapatna rearing</h3>
                </div>
                <p className={styles.originsBody}>
                  Silk rearing reaches back to Tipu Sultan’s unit at Channapatna and multivoltine
                  silkworm rearing, long before the Mysuru weaving works of 1912.
                </p>
              </article>

              <article className={styles.originStep}>
                <div className={styles.originHead}>
                  <p className={styles.originsYear}>1912</p>
                  <h3 className={styles.originsEraTitle}>Palace looms</h3>
                </div>
                <p className={styles.originsBody}>
                  Inspired by Swiss silk seen in Europe, the Maharaja began a weaving unit inside the
                  Mysore Palace. That royal workshop grew into the Mysore Silk Weaving Factory,
                  supplying the court and the armed forces.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.narrativeAlt} aria-label="Industrial expansion, 1932">
        <div className={styles.inner}>
          <div className={`${styles.split} ${styles.splitReverse}`}>
            <div className={styles.landscape}>
              <Image
                src="/assets/heritage/ksic-1932-jacquard.jpg"
                alt="Historical photograph of the Mysore Silk Weaving Factory, used as an illustration and not as proof of a loom count"
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
                className={`${styles.coverImage} ${styles.factoryPhoto}`}
              />
            </div>
            <div>
              <p className={styles.eyebrow}>1930 · Industrial expansion</p>
              <h2 className={styles.sectionTitle}>
                Looms, commercial weave,
                <br />
                modern machinery
              </h2>
              <p className={styles.body}>
                Factory operations expanded from 1930; commercial production followed after 1932. Swiss
                looms and preparatory machines made the Mysuru unit the first of its kind in India -
                the industrial spine behind the textile’s courtly reputation.
              </p>
              <p className={styles.body}>
                Between 1982 and 1986 the works received imported reeling and weaving machinery
                associated with Korea and Japan. How those works passed into KSIC’s custody is told in
                the{" "}
                <Link href="/our-heritage" className={styles.inlineLink}>
                  History of KSIC
                </Link>
                .
              </p>
              <div className={styles.statRow}>
                <p>
                  <strong>1912</strong>
                  <span>Weaving factory</span>
                </p>
                <p>
                  <strong>1932</strong>
                  <span>Commercial production</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TimelineSection />
    </div>
  );
}
