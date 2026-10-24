"use client";

import React from "react";
import Link from "next/link";
import { CatalogImage } from "@/components/common/CatalogImage";
import { RoyalZariVerificationLab } from "@/components/home/RoyalZariVerificationLab";
import { GandaberundaArt } from "@/components/brand/GandaberundaArt";
import { useCmsHome } from "@/hooks/useCmsHome";
import { resolveGenerationsContent } from "@/lib/cmsHome";
import { MangoBorderRail } from "./MysoreBorderMotifs";
import styles from "./GenerationsHeritage.module.css";

export const GenerationsHeritage: React.FC = () => {
  const cms = resolveGenerationsContent(useCmsHome());
  const leadLines = cms.lead.split("\n").filter(Boolean);

  return (
    <section className={styles.heritage} id="generations" aria-label="Heritage">
      <RoyalZariVerificationLab id="authenticity-lab" />

      <div className={styles.story}>
        <div className={styles.atmosphere} aria-hidden="true" />
        <figure className={styles.image}>
          <CatalogImage
            src={cms.image}
            alt="Three generations of women in Mysore silk"
            fill
            sizes="(max-width: 900px) 100vw, 60vw"
            className={styles.photo}
          />
        </figure>
        <div className={styles.panel}>
          <MangoBorderRail className={styles.borderTop} count={5} />
          <GandaberundaArt
            variant="outline"
            role="watermark"
            size="lg"
            placement="center"
            className={styles.panelMark}
          />
          <div className={styles.copy}>
            <p className={styles.eyebrow}>{cms.eyebrow}</p>
            <h2 className={styles.title}>{cms.title}</h2>
            <p className={styles.lead}>
              {leadLines.map((line, index) => (
                <React.Fragment key={`${line}-${index}`}>
                  {index > 0 ? <br /> : null}
                  {line}
                </React.Fragment>
              ))}
            </p>
            <Link href="/heritage" className={styles.cta}>
              Our Story <span aria-hidden="true">→</span>
            </Link>
          </div>
          <MangoBorderRail className={styles.borderBottom} count={5} />
        </div>
      </div>
    </section>
  );
};
