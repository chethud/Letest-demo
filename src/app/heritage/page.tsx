import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Award, Building, History } from "lucide-react";
import { HERITAGE_MILESTONES, HERITAGE_NARRATIVE } from "@/data/heritage";
import styles from "./Heritage.module.css";

export const metadata = {
  title: "Our Heritage · Since 1912 | KSIC",
  description: "The royal history of the Mysore Silk Weaving Factory founded in 1912 by Maharaja Nalvadi Krishnaraja Wadiyar. Over a century of unbroken textile stewardship.",
};

export default function HeritagePage() {
  return (
    <div className={styles.heritagePage}>
      {/* Editorial Header */}
      <section className="section-spacing" style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "var(--border-rule)" }}>
        <div className="container-institutional reveal-up">
          <span className="editorial-label">ARCHIVAL MONOGRAPH</span>
          <h1 className="display-hero" style={{ marginTop: "12px", marginBottom: "24px" }}>
            A ROYAL LEGACY
            <br />
            WOVEN IN MYSURU.
          </h1>
          <p className="subheadline" style={{ maxWidth: "780px" }}>
            Established in 1912 by Maharaja Sri Nalvadi Krishnaraja Wadiyar, the Mysore Silk Weaving Factory stands as one of India&apos;s oldest operating textile monuments.
          </p>
        </div>
      </section>

      {/* Narrative Section 1: The Royal Inception */}
      <section className="section-spacing" style={{ backgroundColor: "var(--color-bg-primary)", borderBottom: "var(--border-rule)" }}>
        <div className="container-institutional">
          <div className={styles.narrativeGrid}>
            <div className="reveal-left">
              <span className="editorial-label">1912 · ROYAL COURT PATRONAGE</span>
              <h2 className="display-section" style={{ marginBottom: "24px" }}>
                THE VISION OF SRI NALVADI KRISHNARAJA WADIYAR
              </h2>
              <p style={{ marginBottom: "18px" }}>
                During the enlightened reign of Sri Nalvadi Krishnaraja Wadiyar (1902–1940), the Kingdom of Mysore emerged as the most progressive model state in British India. Recognizing the natural sericulture bounty of the Cauvery basin, the Maharaja envisioned an industrial weaving unit to supply ceremonial silk regalia for the royal court and ornamental ceremonial uniforms for the state armed forces.
              </p>
              <p style={{ marginBottom: "24px" }}>
                In 1912, ten Swiss power looms along with specialized preparatory machinery were imported directly from Switzerland. This pioneering setup became the first modern mechanical silk weaving mill in the Indian subcontinent.
              </p>

              <div style={{ padding: "20px", backgroundColor: "var(--color-bg-subtle)", borderLeft: "3px solid var(--color-burgundy)", marginBottom: "32px" }}>
                <p style={{ fontStyle: "italic", fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-text-primary)", margin: 0 }}>
                  &ldquo;The silk produced in Mysore reflects the traditional splendor of our realm through its rich yet delicate motifs. The name Mysore Silk is a befitting tribute to its ancestry.&rdquo;
                </p>
              </div>
            </div>

            <div className={`reveal-scale ${styles.mediaFrame}`}>
              <Image
                src="/assets/heritage/nalvadi-krishnaraja-wadiyar.jpg"
                alt="Sri Nalvadi Krishnaraja Wadiyar Maharaja of Mysore"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section 2: Swiss Engineering on Mananthody Road */}
      <section className="section-spacing" style={{ backgroundColor: "var(--color-bg-paper)", borderBottom: "var(--border-rule)" }}>
        <div className="container-institutional">
          <div className={styles.narrativeGridReverse}>
            <div className={`reveal-scale ${styles.mediaFrameWide}`}>
              <Image
                src="/assets/heritage/ksic-1932-jacquard.jpg"
                alt="Swiss Jacquard power looms installed during 1932 industrial expansion at KSIC Silk Weaving Factory"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="reveal-right">
              <span className="editorial-label">1932 · INDUSTRIAL EXPANSION</span>
              <h2 className="display-section" style={{ marginBottom: "24px" }}>
                138 SWISS LOOMS & MODERN EXPANSION
              </h2>
              <p style={{ marginBottom: "18px" }}>
                Guided by Dewan Sir M. Visvesvaraya&apos;s celebrated motto &ldquo;Industrialise or Perish&rdquo;, the government expanded the factory premises in 1932. The capacity grew from the initial 10 looms to 138 specialized Swiss looms, alongside pirn winders, dobby attachments, and Jacquard heads.
              </p>
              <p style={{ marginBottom: "28px" }}>
                Following India&apos;s Independence in 1947, the Mysore State Sericulture Department took direct administrative charge. In 1980, the Government of Karnataka incorporated Karnataka Silk Industries Corporation Limited (KSIC) as an autonomous state undertaking to safeguard the craftsmanship and commercial viability of the historic factory.
              </p>

              <div style={{ display: "flex", gap: "24px" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.4rem", color: "var(--color-burgundy)" }}>138</div>
                  <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: "var(--color-text-muted)", textTransform: "uppercase" }}>Calibrated Looms</div>
                </div>
                <div style={{ borderLeft: "1px solid rgba(23, 21, 19, 0.15)", paddingLeft: "24px" }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.4rem", color: "var(--color-gold)" }}>100+</div>
                  <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: "var(--color-text-muted)", textTransform: "uppercase" }}>Years of Weaving</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Historical Chronology */}
      <section className="section-spacing" id="timeline" style={{ backgroundColor: "var(--color-bg-primary)" }}>
        <div className="container-institutional">
          <div className="reveal-up" style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 64px" }}>
            <span className="editorial-label" style={{ justifyContent: "center" }}>MILESTONES OF EXCELLENCE</span>
            <h2 className="display-section">THE CHRONOLOGICAL RECORD</h2>
            <p style={{ marginTop: "12px", color: "var(--color-text-secondary)" }}>
              Six defining epochs of Karnataka&apos;s premier textile institution.
            </p>
          </div>

          <div className="reveal-stagger" style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {HERITAGE_MILESTONES.map((m, idx) => (
              <div
                key={m.year}
                className={styles.timelineItem}
                style={{ borderBottom: idx !== HERITAGE_MILESTONES.length - 1 ? "1px solid rgba(23, 21, 19, 0.12)" : "none" }}
              >
                <div>
                  <div className={styles.timelineYear}>
                    {m.year}
                  </div>
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", color: "var(--color-text-primary)", marginBottom: "8px" }}>
                    {m.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
                    {m.description}
                  </p>
                </div>
                <div className={styles.timelineSignificance}>
                  <strong>Significance: </strong>
                  {m.significance}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-up" style={{ marginTop: "64px", textAlign: "center" }}>
            <Link href="/craft" className="action-editorial action-editorial-burgundy">
              <span>EXPLORE SILK CRAFTSMANSHIP</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
