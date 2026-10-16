import React from "react";
import Image from "next/image";
import { HeritageSection } from "@/components/home/HeritageSection";
import { TimelineSection } from "@/components/home/TimelineSection";
import { HeritageScroll } from "./HeritageScroll";
import styles from "./Heritage.module.css";

export const metadata = {
  title: "Our Heritage · Since 1912 | KSIC",
  description: "The documented history of Mysore Silk: eighteenth-century sericulture, the 1912 weaving factory, and KSIC from 1980.",
};

export default function HeritagePage() {
  return (
    <div className={styles.page}>
      <HeritageSection />
      <HeritageScroll>
        <section className={`${styles.panel} ${styles.hero}`} aria-label="Archival monograph">
          <div className={styles.inner}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>Archival Monograph</p>
                <h1 className={styles.heroTitle}>
                  A royal legacy
                  <br />
                  woven in <span>Mysuru.</span>
                </h1>
                <p className={styles.heroLead}>
                  In 1912, under Maharaja Sri Nalvadi Krishnaraja Wadiyar, the Mysore Silk Weaving Factory was established to produce premium silk fabrics for the royal family and the armed forces.
                </p>
              </div>
              <div className={styles.heroMedia}>
                <Image
                  src="/assets/heritage/mysore-palace-heritage.jpg"
                  alt="Mysore Palace, the royal seat associated with the founding of Mysore Silk"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 46vw"
                  className={styles.coverImage}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="patronage" className={`${styles.panel} ${styles.narrative}`} aria-label="Royal court patronage, 1912">
          <div className={styles.inner}>
            <div className={styles.split}>
              <div>
                <p className={styles.eyebrow}>1912 · Royal Court Patronage</p>
                <h2 className={styles.sectionTitle}>The vision of Sri Nalvadi Krishnaraja Wadiyar</h2>
                <p className={styles.body}>
                  The 1912 factory wove premium silk for the royal family and the armed forces. Silk rearing in the region is older, traced to Tippu Sultan&apos;s unit at Channapatna in the eighteenth century.
                </p>
                <p className={styles.body}>
                  The Maharaja took an interest in Swiss silk, and weaving linked with the Mysore Palace drew on European practice.
                </p>
              </div>
              <div className={styles.portrait}>
                <Image
                  src="/assets/heritage/nalvadi-krishnaraja-wadiyar.jpg"
                  alt="Sri Nalvadi Krishnaraja Wadiyar, Maharaja of Mysore"
                  fill
                  sizes="(max-width: 900px) 100vw, 42vw"
                  className={`${styles.coverImage} ${styles.portraitImage}`}
                />
              </div>
            </div>
          </div>
        </section>
      </HeritageScroll>

      <section className={styles.narrativeAlt} aria-label="Industrial expansion, 1932">
        <div className={styles.inner}>
          <div className={`${styles.split} ${styles.splitReverse}`}>
            <div className={styles.landscape}>
              <Image
                src="/assets/heritage/ksic-1932-jacquard.jpg"
                alt="Historical photograph of the Mysore Silk Weaving Factory, used as an illustration and not as proof of a loom count"
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
                className={styles.coverImage}
              />
            </div>
            <div>
              <p className={styles.eyebrow}>1930 · Factory expansion</p>
              <h2 className={styles.sectionTitle}>From the royal factory to KSIC</h2>
              <p className={styles.body}>
                The KSIC note says factory operations were expanded from 1930, and that commercial production was brought into operation after 1932. Those statements are left in that order.
              </p>
              <p className={styles.body}>
                In 1980 the corporation was established under the Companies Act. The note associates that transition with modernisation supported by the World Bank, and records that the Mysore Silk Weaving Factory and the other listed silk units were transferred to KSIC in the same year. Between 1982 and 1986 it records imported reeling and weaving machinery associated with Korea and Japan.
              </p>
              <div className={styles.statRow}>
                <p>
                  <strong>1912</strong>
                  <span>Weaving factory</span>
                </p>
                <p>
                  <strong>1980</strong>
                  <span>KSIC incorporated</span>
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
