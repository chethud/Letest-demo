"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./InstitutionSection.module.css";
import { INSTITUTIONAL_OVERVIEW } from "@/data/institution";
import { useLanguage } from "@/context/LanguageContext";

export const InstitutionSection: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className={`section-spacing ${styles.institutionSection}`} id="institution" aria-label="KSIC Institutional Governance">
      <div className="container-institutional">
        <div className={`${styles.centerWrap} reveal-up`}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <Image
              src="/assets/brand/karnataka-seal.svg"
              alt="Government of Karnataka Seal"
              width={64}
              height={64}
              style={{ objectFit: "contain" }}
            />
          </div>

          <span className="editorial-label" style={{ justifyContent: "center" }}>
            {lang === "kn"
              ? "ಕರ್ನಾಟಕ ರೇಷ್ಮೆ ಕೈಗಾರಿಕಾ ನಿಗಮ ನಿಯಮಿತ"
              : "KARNATAKA SILK INDUSTRIES CORPORATION LIMITED"}
          </span>

          <h2 className={styles.statement}>
            {lang === "kn" ? (
              <>
                ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಉದ್ಯಮ
                <br />
                ಶತಮಾನದ ರಾಜಪರಂಪರೆಯ ಅಮರ ಸಂರಕ್ಷಣೆ.
              </>
            ) : (
              <>
                A GOVERNMENT OF KARNATAKA ENTERPRISE
                <br />
                CARRYING FORWARD A LIVING TEXTILE LEGACY.
              </>
            )}
          </h2>

          <div className={styles.kannadaStatement}>
            {INSTITUTIONAL_OVERVIEW.kannadaName}
          </div>

          <p className={styles.factualSummary}>
            {lang === "kn"
              ? "1980 ರಲ್ಲಿ ಕರ್ನಾಟಕ ಸರ್ಕಾರದಿಂದ ರೇಷ್ಮೆ ಇಲಾಖೆಯಡಿ ಸ್ಥಾಪಿಸಲ್ಪಟ್ಟ ಕೆ.ಎಸ್.ಐ.ಸಿ, 1912 ರಲ್ಲಿ ಆರಂಭಗೊಂಡ ಮೈಸೂರು ರೇಷ್ಮೆ ನೇಯ್ಗೆ ಕಾರ್ಖಾನೆಯ ಏಕೈಕ ಸಂರಕ್ಷಕ ಸಂಸ್ಥೆಯಾಗಿದೆ. ಲಕ್ಷಾಂತರ ರೇಷ್ಮೆ ಕೃಷಿಕರ ಬದುಕನ್ನು ಬೆಂಬಲಿಸುತ್ತಾ, ಯಾವುದೇ ಕಲಬೆರಕೆಯಿಲ್ಲದ ಶುದ್ಧ ಬಂಗಾರದ ಜರಿ ರೇಷ್ಮೆ ಸೀರೆಗಳನ್ನು ಸಾರ್ವಜನಿಕರಿಗೆ ಒದಗಿಸುತ್ತಿದೆ."
              : "Incorporated in 1980 by the Government of Karnataka, KSIC operates under the Department of Sericulture. The corporation acts as the custodian of the royal Mysore Silk Weaving Factory (founded in 1912), guaranteeing sustainable livelihoods to sericulture farmers and providing the public with authenticated, zero-adulteration gold zari silks."}
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "48px", flexWrap: "wrap" }}>
            <Link href="/institution" className="action-editorial action-editorial-burgundy">
              <span>{lang === "kn" ? "ಆಡಳಿತ ಮಂಡಳಿ & ನೀತಿ" : "BOARD & GOVERNANCE"}</span>
              <ArrowRight size={15} />
            </Link>
            <Link href="/institution#rti" className="action-editorial">
              <span>{lang === "kn" ? "ಮಾಹಿತಿ ಹಕ್ಕು & ಸನ್ನದು" : "RTI & CITIZEN CHARTER"}</span>
            </Link>
          </div>

          {/* Verified Official Certifications */}
          <div className={`${styles.certsRow} reveal-stagger`}>
            {INSTITUTIONAL_OVERVIEW.certifications.map((cert) => (
              <div key={cert.code} className={`${styles.certItem} hover-lift`}>
                <div className={styles.certCode}>{cert.code}</div>
                <div className={styles.certTitle}>{cert.title}</div>
                <div className={styles.certAuthority}>
                  {cert.authority} · {cert.validity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
