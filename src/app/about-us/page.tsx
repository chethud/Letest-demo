import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AboutSubnav } from "@/components/about/AboutSubnav";
import { INSTITUTIONAL_OVERVIEW } from "@/data/institution";
import styles from "./AboutUs.module.css";

export const metadata = {
  title: "About Us | KSIC",
  description:
    "About Karnataka Silk Industries Corporation Limited (KSIC): royal Mysore Silk legacy since 1912, pure silk with gold zari, GI Tag #11, and institutional stewardship.",
};

const DISTINCTIONS = [
  {
    label: "GI Tag #11",
    detail:
      "Geographical Indication Registration for ‘Mysore Silk’ under the Geographical Indication of Goods.",
  },
  {
    label: "ISO 9001:2015",
    detail: "Quality management certification for authentic silk manufacturing standards.",
  },
  {
    label: "EMS 14001:2015",
    detail: "Environmental management system certification.",
  },
  {
    label: "OHSAS 18001:2007",
    detail: "Occupational health and safety certification within a Combined Integrated Management System by M/s. TUV Rheinland.",
  },
];

export default function AboutUsPage() {
  return (
    <div className={styles.page}>
      <AboutSubnav activeHref="/about-us" contentClassName={styles.content} />

      <section className={styles.storyBand} aria-label="About KSIC">
        <div className={`${styles.content} reveal-up`}>
          <div className={styles.storyIntro}>
            <div className={styles.heroBadge}>
              <Image
                src="/assets/brand/karnataka-seal.svg"
                alt="Seal of Karnataka"
                width={56}
                height={56}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className={styles.storyKicker}>Government of Karnataka Undertaking</p>
            <h1 className={styles.pageTitle}>
              About <span>Us</span>
            </h1>
            <div className={styles.leadSplit}>
              <p className={styles.pageLead}>
                Mysore is rich for its royal heritage and grandeur, and the silk produced there reflects that
                traditional splendour through rich yet delicate motifs. The name Mysore Silk is a befitting
                tribute to its ancestry. Karnataka Silk Industries Corporation Limited (KSIC) produces 100%
                pure silk with pure gold zari under that name.
              </p>
              <p className={styles.pageLead}>
                As a Government of Karnataka undertaking under the Department of Sericulture, KSIC safeguards
                GI-tagged Mysore Silk for the state: certified pure zari, transparent provenance, and a living
                link between Karnataka’s sericulture farmers and the looms of Mysuru.
              </p>
            </div>
          </div>

          <div className={styles.legacySplit}>
            <div className={styles.legacyTitleCol}>
              <span className={styles.legacyLabel}>Our Legacy</span>
              <h2 className={styles.legacyHeading}>Proud inheritor of a royal craft</h2>
              <ul className={styles.storyStats}>
                <li>
                  <span className={styles.statValue}>1912</span>
                  <span className={styles.statLabel}>Factory established</span>
                </li>
                <li>
                  <span className={styles.statValue}>1980</span>
                  <span className={styles.statLabel}>KSIC formed</span>
                </li>
              </ul>
            </div>
            <div className={styles.legacyCopy}>
              <p className={styles.bodyCopy}>
                Among India’s largest silk producers, KSIC manufactures quality silk products of varied
                designs for end-user consumption: the finest designer silk sarees, shirts, kurtas, silk
                dhotis and men’s ties, made in our factories in Mysuru district, Karnataka, with the full
                process kept in house.
              </p>
              <p className={styles.bodyCopy}>
                The Mysuru weaving works date to 1912; KSIC has held them since 1980.{" "}
                <Link href="/our-heritage" className={styles.inlineLink}>
                  Read the brief history of KSIC
                </Link>
                .
              </p>
              <p className={styles.storyMission}>{INSTITUTIONAL_OVERVIEW.mandate}</p>
            </div>
          </div>

          <div className={styles.certBlock} id="certification">
            <div className={styles.sectionIntro}>
              <h2 className={`display-section ${styles.sectionHeading}`}>
                CERTIFICATION {"&"} RECOGNITION
              </h2>
              <p className={styles.sectionLead}>
                Having gained widespread recognition for authentic silk manufacturing, KSIC holds
                Geographical Indication Registration (GI-11) for Mysore Silk and multiple management-system
                certifications.
              </p>
            </div>

            <ul className={styles.distinctionGrid}>
              {DISTINCTIONS.map((item) => (
                <li key={item.label} className={styles.distinction}>
                  <h3 className={styles.distinctionLabel}>{item.label}</h3>
                  <p className={styles.distinctionDetail}>{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <section className={styles.rtiBand} id="rti">
        <div className={styles.content}>
          <div className={styles.rtiGrid}>
            <div className="reveal-left">
              <span className="editorial-label">PUBLIC DISCLOSURE {"&"} TRANSPARENCY</span>
              <h2 className={`display-section ${styles.sectionHeading}`}>
                RIGHT TO INFORMATION (RTI) ACT, 2005
              </h2>
              <p className={styles.bodyCopy}>
                In compliance with Section 4(1)(b) of the Right to Information Act 2005, Karnataka Silk
                Industries Corporation Limited ensures full institutional accountability and citizen access
                to public information.
              </p>

              <div className={styles.rtiCards}>
                <div className={styles.rtiCard}>
                  <div className={styles.rtiCardLabel}>PUBLIC INFORMATION OFFICER (PIO)</div>
                  <div className={styles.rtiCardTitle}>General Manager (Administration)</div>
                  <div className={styles.rtiCardMeta}>
                    KSIC Head Office, Public Utility Building, M.G. Road, Bengaluru 560001
                  </div>
                </div>

                <div className={styles.rtiCard}>
                  <div className={styles.rtiCardLabel}>APPELLATE AUTHORITY</div>
                  <div className={styles.rtiCardTitle}>Managing Director, KSIC Ltd</div>
                  <div className={styles.rtiCardMeta}>
                    Public Utility Building, M.G. Road, Bengaluru 560001
                  </div>
                </div>
              </div>
            </div>

            <div id="charter" className={styles.charterBox}>
              <div className={styles.charterKicker}>CITIZEN’S CHARTER</div>
              <h3 className={styles.boxTitle}>Our Commitment to Patrons</h3>
              <p className={styles.charterBody}>
                KSIC commits to providing genuine Mysore Silk sarees woven solely from natural mulberry silk
                and authenticated zari. Customers are entitled to full provenance disclosure, replacement in
                case of manufacturing defect, and courteous service across all government outlets.
              </p>

              <a
                href="https://rti.karnataka.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className={`action-editorial action-editorial-burgundy ${styles.charterCta}`}
              >
                <span>VISIT KARNATAKA RTI PORTAL</span>
                <ArrowRight size={15} />
              </a>

              <div id="tenders" className={styles.tendersBlock}>
                <div className={styles.tendersLabel}>TENDERS {"&"} NOTIFICATIONS</div>
                <p className={styles.charterBody}>
                  All procurement of raw silk cocoons, silver-gold zari alloys, and factory capital machinery
                  is governed through the Karnataka e-Procurement portal (e-RTI {"&"} KPP Act).
                </p>
                <a
                  href="https://kppp.karnataka.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-editorial action-editorial-burgundy"
                >
                  <span>KARNATAKA PUBLIC PROCUREMENT PORTAL</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
