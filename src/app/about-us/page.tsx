import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { INSTITUTIONAL_OVERVIEW } from "@/data/institution";
import styles from "./AboutUs.module.css";

export const metadata = {
  title: "About Us | KSIC",
  description:
    "About Karnataka Silk Industries Corporation Limited (KSIC) — mandate, headquarters, corporate stewardship, and RTI disclosures.",
};

export default function AboutUsPage() {
  return (
    <div className={styles.page}>
      <section
        className="section-spacing"
        style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "var(--border-rule)" }}
      >
        <div className="container-institutional reveal-up">
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
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
            Karnataka Silk Industries Corporation Limited — established in 1980 under the Department of
            Sericulture, Government of Karnataka, to safeguard the royal legacy of the Mysore Silk Weaving
            Factory and advance sericulture welfare across the state.
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
              <span className="editorial-label">MANDATE {"&"} OBJECTIVES</span>
              <h2 className="display-section" style={{ marginBottom: "24px" }}>
                PRESERVING UNADULTERATED TEXTILE EXCELLENCE
              </h2>
              <p
                style={{
                  fontSize: "1.08rem",
                  lineHeight: 1.75,
                  color: "var(--color-text-secondary)",
                  marginBottom: "20px",
                }}
              >
                {INSTITUTIONAL_OVERVIEW.mandate}
              </p>
              <p
                style={{
                  fontSize: "1.02rem",
                  lineHeight: 1.7,
                  color: "var(--color-text-secondary)",
                  marginBottom: "32px",
                }}
              >
                Unlike commercial fashion corporations, KSIC operates with a public sector covenant: zero
                compromise on pure mulberry filament count, zero dilution of pure gold and silver zari
                composition, and full lifetime traceability for every customer.
              </p>

              <div className={styles.corporateMetaGrid}>
                <div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.15em",
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    Corporate Identification
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.95rem",
                      color: "var(--color-text-primary)",
                      marginTop: "4px",
                    }}
                  >
                    {INSTITUTIONAL_OVERVIEW.corporateId}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.15em",
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    Incorporation Year
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.4rem",
                      color: "var(--color-burgundy)",
                    }}
                  >
                    1980 (1912 Ancestry)
                  </div>
                </div>
              </div>
            </div>

            <div className={`reveal-scale ${styles.addressBox}`}>
              <div
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.18em",
                  color: "var(--color-burgundy)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                HEADQUARTERS (CENTRAL OFFICE)
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.6rem",
                  color: "var(--color-text-primary)",
                  marginBottom: "12px",
                }}
              >
                {INSTITUTIONAL_OVERVIEW.headOffice.building}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                }}
              >
                {INSTITUTIONAL_OVERVIEW.headOffice.street}, {INSTITUTIONAL_OVERVIEW.headOffice.city},{" "}
                {INSTITUTIONAL_OVERVIEW.headOffice.pincode}, Karnataka
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  fontSize: "0.88rem",
                  borderTop: "1px solid rgba(23, 21, 19, 0.1)",
                  paddingTop: "16px",
                }}
              >
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
          </div>
        </div>
      </section>

      <section className="section-spacing" id="rti" style={{ backgroundColor: "var(--color-bg-secondary)" }}>
        <div className="container-institutional">
          <div className={styles.rtiGrid}>
            <div className="reveal-left">
              <span className="editorial-label">PUBLIC DISCLOSURE {"&"} TRANSPARENCY</span>
              <h2 className="display-section" style={{ marginBottom: "20px" }}>
                RIGHT TO INFORMATION (RTI) ACT, 2005
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--color-text-secondary)",
                  marginBottom: "24px",
                }}
              >
                In compliance with Section 4(1)(b) of the Right to Information Act 2005, Karnataka Silk
                Industries Corporation Limited ensures full institutional accountability and citizen access
                to public information.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                <div
                  style={{
                    padding: "16px",
                    border: "1px solid rgba(23, 21, 19, 0.12)",
                    backgroundColor: "var(--color-bg-paper)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--color-burgundy)",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                    }}
                  >
                    PUBLIC INFORMATION OFFICER (PIO)
                  </div>
                  <div style={{ fontWeight: 600, color: "var(--color-text-primary)", marginTop: "4px" }}>
                    General Manager (Administration)
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
                    KSIC Head Office, Public Utility Building, M.G. Road, Bengaluru 560001
                  </div>
                </div>

                <div
                  style={{
                    padding: "16px",
                    border: "1px solid rgba(23, 21, 19, 0.12)",
                    backgroundColor: "var(--color-bg-paper)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--color-burgundy)",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                    }}
                  >
                    APPELLATE AUTHORITY
                  </div>
                  <div style={{ fontWeight: 600, color: "var(--color-text-primary)", marginTop: "4px" }}>
                    Managing Director, KSIC Ltd
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
                    Public Utility Building, M.G. Road, Bengaluru 560001
                  </div>
                </div>
              </div>

              <a
                href="https://rti.karnataka.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="action-editorial action-editorial-burgundy"
              >
                <span>VISIT KARNATAKA RTI PORTAL</span>
                <ArrowRight size={15} />
              </a>
            </div>

            <div id="charter" className={styles.charterBox}>
              <div
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.16em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: "12px",
                }}
              >
                CITIZEN’S CHARTER
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.6rem",
                  color: "var(--color-text-primary)",
                  marginBottom: "16px",
                }}
              >
                Our Commitment to Patrons
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.65,
                  marginBottom: "20px",
                }}
              >
                KSIC commits to providing genuine Mysore Silk sarees woven solely from natural mulberry silk
                and authenticated zari. Customers are entitled to full provenance disclosure, replacement in
                case of manufacturing defect, and courteous service across all government outlets.
              </p>

              <div id="tenders" style={{ borderTop: "1px solid rgba(23, 21, 19, 0.12)", paddingTop: "20px" }}>
                <div
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.16em",
                    color: "var(--color-burgundy)",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  TENDERS {"&"} NOTIFICATIONS
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "16px",
                  }}
                >
                  All procurement of raw silk cocoons, silver-gold zari alloys, and factory capital machinery
                  is governed through the Karnataka e-Procurement portal (e-RTI {"&"} KPP Act).
                </p>
                <a
                  href="https://kppp.karnataka.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-link"
                  style={{ fontSize: "0.78rem" }}
                >
                  <span>KARNATAKA PUBLIC PROCUREMENT PORTAL</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
