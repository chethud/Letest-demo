import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AboutSubnav } from "@/components/about/AboutSubnav";
import { OurHeritageTimeline } from "./OurHeritageTimeline";
import styles from "./OurHeritage.module.css";

export const metadata = {
  title: "Our Heritage · Brief History of KSIC | KSIC",
  description:
    "Brief history of Karnataka Silk Industries Corporation Limited: the 1912 Mysuru weaving factory, state stewardship, incorporation in 1980, GI-11, and the 2012 centenary.",
};

/**
 * Sourced from KSIC’s published brief history - institutional passages only.
 * Product catalogue, denier specs, and marketing claims belong on About / Craft / Authenticity.
 */
const FACTS = [
  {
    value: "1912",
    label: "Silk weaving factory established in Mysuru by Sri Nalvadi Krishnaraja Wodeyar",
  },
  {
    value: "1980",
    label: "Factory handed over to KSIC Ltd., a Government of Karnataka enterprise",
  },
  {
    value: "2012",
    label: "KSIC Silk Weaving Factory completes 100 years - first Govt. industry in Karnataka to mark a centenary",
  },
];

const PILLARS = [
  {
    eyebrow: "Custody of the name",
    title: "GI-11 · Sole proprietor",
    body: "KSIC obtained Geographical Indication Registration (GI-11) for ‘Mysore Silk’ under the Geographical Indication of Goods (Registration and Protection) Act, 1999. As per this registration, KSIC is the sole proprietor for the name Mysore Silk.",
    image: "/assets/heritage/ksic-2005-gi-certificate.jpg",
    alt: "Geographical Indication certificate held by KSIC",
  },
  {
    eyebrow: "Integrated works",
    title: "Cocoon to cloth, under one roof",
    body: "KSIC is among India’s largest silk producers, and commands the entire gamut of silk production — from reeling cocoons to weaving pure silk fabric of various shades and designs — all under one roof. From start to finish, nothing is outsourced.",
    image: "/assets/factory/ksic-factory-heritage-cinematic.jpg",
    alt: "KSIC silk production works",
  },
  {
    eyebrow: "Public recognition",
    title: "Chief Minister’s Ratna Award",
    body: "In 2016-17 KSIC received the Chief Minister’s Ratna Award for best marketing of its products - recognition of how the corporation takes Mysore Silk to market while remaining a state enterprise.",
    image: "/assets/heritage/ksic-1980-incorporation.jpg",
    alt: "KSIC as a Government of Karnataka enterprise",
  },
];

export default function OurHeritagePage() {
  return (
    <div className={styles.page}>
      <AboutSubnav activeHref="/our-heritage" />

      <section className={`section-spacing ${styles.hero}`} aria-labelledby="heritage-heading">
        <div className="container-institutional">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className="editorial-label">About Us · Our Heritage</span>
              <h1 id="heritage-heading" className={styles.title}>
                Brief History of KSIC
              </h1>
              <p className={styles.lead}>
                This is the institutional history of Karnataka Silk Industries Corporation Limited:
                the Mysuru weaving works founded in 1912, succession through the Sericulture
                Department, incorporation in 1980, and custody of GI-11 for Mysore Silk.
              </p>
            </div>
            <div className={styles.heroMedia}>
              <Image
                src="/assets/heritage/ksic-1912-foundation.jpg"
                alt="Historical foundation of the Mysuru silk weaving works later held by KSIC"
                fill
                priority
                sizes="(max-width: 960px) 100vw, 46vw"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`section-spacing ${styles.facts}`} aria-label="KSIC heritage facts">
        <div className="container-institutional">
          <div className={styles.factGrid}>
            {FACTS.map((fact) => (
              <article key={fact.value} className={styles.factCard}>
                <p className={styles.factValue}>{fact.value}</p>
                <p className={styles.factLabel}>{fact.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section-spacing ${styles.feature}`} aria-labelledby="origin-heading">
        <div className="container-institutional">
          <div className={styles.featureGrid}>
            <div className={styles.featureMedia}>
              <Image
                src="/assets/heritage/ksic-1932-jacquard.jpg"
                alt="Historical photograph of the Mysore silk weaving factory works"
                fill
                sizes="(max-width: 960px) 100vw, 46vw"
                className={styles.featureImage}
              />
            </div>
            <div className={styles.featureCopy}>
              <span className="editorial-label">The works KSIC inherited</span>
              <h2 id="origin-heading" className="display-section">
                A factory founded for a royal court
              </h2>
              <p className={styles.featureBody}>
                The silk weaving factory in Mysuru, presently owned by KSIC, was established in 1912
                by Sri Nalvadi Krishnaraja Wodeyar, Maharaja of Mysore. Initially, silk fabrics were
                manufactured and supplied to meet the requirements of the royal family, with
                ornamental fabrics for their armed forces. The unit began with 10 looms and grew to
                138; Swiss looms and preparatory machines made it the first of its kind in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section-spacing ${styles.feature}`} aria-labelledby="transfer-heading">
        <div className="container-institutional">
          <div className={`${styles.featureGrid} ${styles.featureGridReverse}`}>
            <div className={`${styles.featureMedia} ${styles.featureMediaPortrait}`}>
              <Image
                src="/assets/heritage/nalvadi-krishnaraja-wadiyar.jpg"
                alt="Sri Nalvadi Krishnaraja Wadiyar, Maharaja of Mysore"
                fill
                sizes="(max-width: 960px) 100vw, 46vw"
                className={`${styles.featureImage} ${styles.featureImageHead}`}
              />
            </div>
            <div className={styles.featureCopy}>
              <span className="editorial-label">From department to corporation</span>
              <h2 id="transfer-heading" className="display-section">
                Independence, then KSIC
              </h2>
              <p className={styles.featureBody}>
                After India gained Independence, the Mysore State Sericulture Department took
                control of the silk weaving factory. In 1980 the factory was handed over to
                Karnataka Silk Industries Corporation Limited - a Government of Karnataka enterprise,
                popularly known as KSIC.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section-spacing ${styles.pillars}`} aria-labelledby="pillars-heading">
        <div className="container-institutional">
          <div className={styles.sectionIntro}>
            <span className="editorial-label">Institutional standing</span>
            <h2 id="pillars-heading" className="display-section">
              What KSIC holds in public trust
            </h2>
            <p className={styles.sectionLead}>
              Legal custody of the Mysore Silk name, integrated production under one roof, and
              public recognition - drawn from KSIC’s own brief history. Management-system
              certifications are listed on{" "}
              <Link href="/about-us#certification" className={styles.inlineLink}>
                About Us
              </Link>
              .
            </p>
          </div>

          <div className={styles.pillarGrid}>
            {PILLARS.map((pillar) => (
              <article key={pillar.title} className={styles.pillarCard}>
                <div className={styles.pillarMedia}>
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="(max-width: 960px) 100vw, 33vw"
                    className={styles.pillarImage}
                  />
                </div>
                <div className={styles.pillarCopy}>
                  <p className={styles.pillarEyebrow}>{pillar.eyebrow}</p>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarBody}>{pillar.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <OurHeritageTimeline />
    </div>
  );
}
