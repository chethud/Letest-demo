import React from "react";
import Image from "next/image";
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
      <AboutSubnav activeHref="/about-us" />

      <section
        className="section-spacing"
        style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "var(--border-rule)" }}
      >
        <div className="container-institutional reveal-up">
          <div className={styles.heroBadge}>
            <Image
              src="/assets/brand/karnataka-seal.svg"
              alt="Seal of Karnataka"
              width={48}
              height={48}
              style={{ objectFit: "contain" }}
            />
            <span className="editorial-label" style={{ margin: 0 }}>
              GOVERNMENT OF KARNATAKA UNDERTAKING
            </span>
          </div>

          <h1 className={styles.pageTitle}>
            About <span>Us</span>
          </h1>

          <p className={styles.pageLead}>
            Mysore is rich for its royal heritage and grandeur, and the silk produced there reflects that
            traditional splendour through rich yet delicate motifs. The name Mysore Silk is a befitting
            tribute to its ancestry. Karnataka Silk Industries Corporation Limited (KSIC), the proud
            inheritor of this royal legacy, has treasured it for over seven decades, producing 100% pure
            silk with pure gold zari.
          </p>
        </div>
      </section>

      <section
        className="section-spacing"
        style={{ backgroundColor: "var(--color-bg-primary)", borderBottom: "var(--border-rule)" }}
      >
        <div className="container-institutional">
          <div className={styles.mandateGrid}>
            <div className="reveal-left">
              <span className="editorial-label">OUR LEGACY</span>
              <h2 className="display-section" style={{ marginBottom: "24px" }}>
                PROUD INHERITOR OF A ROYAL CRAFT
              </h2>
              <p className={styles.bodyCopy}>
                We manufacture quality silk products of varied designs for end-user consumption: the finest
                designer silk sarees, shirts, kurtas, silk dhotis and men’s ties. These products are made in
                our factories in Mysuru district, Karnataka, India.
              </p>
              <p className={styles.bodyCopy}>
                The silk weaving factory in Mysuru, presently owned by KSIC, was established in 1912 by Sri
                Nalvadi Krishnaraja Wodeyar, Maharaja of Mysore. Initially, silk fabrics were manufactured
                and supplied to meet the requirements of the royal family, with ornamental fabrics for their
                armed forces.
              </p>
              <p className={styles.bodyCopy}>
                {INSTITUTIONAL_OVERVIEW.mandate}
              </p>
            </div>

            <div className={styles.mandateAside}>
              <div className={`reveal-scale ${styles.addressBox}`}>
                <div className={styles.boxKicker}>HEADQUARTERS (CENTRAL OFFICE)</div>
                <h3 className={styles.boxTitle}>{INSTITUTIONAL_OVERVIEW.headOffice.building}</h3>
                <p className={styles.boxBody}>
                  {INSTITUTIONAL_OVERVIEW.headOffice.street}, {INSTITUTIONAL_OVERVIEW.headOffice.city},{" "}
                  {INSTITUTIONAL_OVERVIEW.headOffice.pincode}, Karnataka
                </p>
                <div className={styles.boxMeta}>
                  <div>
                    <strong>Telephone:</strong> {INSTITUTIONAL_OVERVIEW.headOffice.phone1} /{" "}
                    {INSTITUTIONAL_OVERVIEW.headOffice.phone2}
                  </div>
                  <div>
                    <strong>Official Email:</strong> {INSTITUTIONAL_OVERVIEW.headOffice.email}
                  </div>
                  <div>
                    <strong>Administrative Dept:</strong> Department of Sericulture, Govt of Karnataka
                  </div>
                </div>
              </div>

              <div className={styles.corporateMetaGrid}>
                <div>
                  <div className={styles.metaLabel}>Corporate Identification</div>
                  <div className={styles.metaValue}>{INSTITUTIONAL_OVERVIEW.corporateId}</div>
                </div>
                <div>
                  <div className={styles.metaLabel}>Incorporation Year</div>
                  <div className={styles.metaYear}>1980 (1912 Ancestry)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-spacing"
        style={{ backgroundColor: "var(--color-bg-primary)", borderBottom: "var(--border-rule)" }}
      >
        <div className="container-institutional">
          <div className={styles.sectionIntro}>
            <h2 className="display-section">CERTIFICATION {"&"} RECOGNITION</h2>
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
      </section>

      <section className="section-spacing" id="rti" style={{ backgroundColor: "var(--color-bg-primary)" }}>
        <div className="container-institutional">
          <div className={styles.rtiGrid}>
            <div className="reveal-left">
              <span className="editorial-label">PUBLIC DISCLOSURE {"&"} TRANSPARENCY</span>
              <h2 className="display-section" style={{ marginBottom: "20px" }}>
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
