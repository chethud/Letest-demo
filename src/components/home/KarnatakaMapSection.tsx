"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle, ShieldCheck } from "lucide-react";
import styles from "./KarnatakaMapSection.module.css";
import { KARNATAKA_DISTRICT_PATHS } from "@/data/karnatakaMapData";

interface Hub {
  id: string;
  name: string;
  kannadaName: string;
  role: string;
  location: string;
  description: string;
  keyStats: { label: string; value: string }[];
  cx: number;
  cy: number;
  labelXOffset: number;
  labelYOffset: number;
}

const HUBS: Hub[] = [
  {
    id: "mysuru",
    name: "Mysuru · Silk Weaving Factory",
    kannadaName: "ಮೈಸೂರು ರೇಷ್ಮೆ ನೇಯ್ಗೆ ಕಾರ್ಖಾನೆ",
    role: "Primary Weaving & Processing Campus (Estd 1912)",
    location: "Mananthody Road, Ashokapuram, Mysuru 570008",
    description:
      "The historic manufacturing campus founded in 1912 by Maharaja Nalvadi Krishnaraja Wadiyar. Operating 138 specialized Swiss-built power looms, pure gold zari warping, and continuous master jacquard weaving with over 114 years of living royal heritage.",
    keyStats: [
      { label: "FOUNDED", value: "1912 (114 Years Heritage)" },
      { label: "LOOMS", value: "138 Swiss Power Looms" },
      { label: "ZARI METALLURGY", value: "Certified 24K Pure Gold & 65% Silver" },
      { label: "WEAVES", value: "Crepe de Chine, Georgette, Centenary Zari" },
    ],
    cx: 982.3,
    cy: 2086.7,
    labelXOffset: -160,
    labelYOffset: 12,
  },
  {
    id: "tnarasipura",
    name: "T. Narasipura · Silk Filature",
    kannadaName: "ಟಿ. ನರಸೀಪುರ ರೇಷ್ಮೆ ಫಿಲೇಚರ್ ಘಟಕ",
    role: "Cocoon Reeling & Raw Silk Division",
    location: "Banks of River Cauvery & Kapila Confluence, Mysuru Dist.",
    description:
      "Procures raw mulberry cocoons from certified sericulture farmers across the Cauvery belt. Continuous filament silk reeling (26–28 denier) utilizes the naturally soft, mineral-balanced water of the Cauvery basin for chemical-free sericin extraction.",
    keyStats: [
      { label: "DIVISION", value: "Primary Cocoon Reeling & Filature" },
      { label: "WATER SOURCE", value: "Cauvery-Kapila Basin (Naturally Soft)" },
      { label: "YARN GRADE", value: "100% Pure Mulberry Silk (26–28 Denier)" },
      { label: "SUPPLY", value: "Direct raw silk feed to Mysuru Looms" },
    ],
    cx: 1048.0,
    cy: 2110.0,
    labelXOffset: 34,
    labelYOffset: 16,
  },
  {
    id: "channapatna",
    name: "Channapatna · Spun Silk Mills",
    kannadaName: "ಚನ್ನಪಟ್ಟಣ ಸ್ಪನ್ ಸಿಲ್ಕ್ ಮಿಲ್ಸ್",
    role: "Spun Silk Infrastructure (Estd 1936)",
    location: "Spun Silk Mills Premises, BM Road, Channapatna 562160",
    description:
      "Specialized infrastructure unit converting natural silk noils and combing fibers into high-count spun silk yarn. Manufactures durable silk stoles, neckties, blended fabrics, and hosts an active highway showroom.",
    keyStats: [
      { label: "FOUNDED", value: "1936 (Pioneering Spun Silk Unit)" },
      { label: "PROCESS", value: "Conversion of silk noils into spun yarn" },
      { label: "PRODUCTS", value: "Pure Silk Ties, Stoles & Blended Weaves" },
      { label: "FACILITY", value: "Active Mill & Highway Showcase Store" },
    ],
    cx: 1195.0,
    cy: 1920.0,
    labelXOffset: -140,
    labelYOffset: -22,
  },
  {
    id: "bengaluru",
    name: "Bengaluru · Corporate Headquarters",
    kannadaName: "ಬೆಂಗಳೂರು ಕೇಂದ್ರ ಕಚೇರಿ",
    role: "Apex Governance & Quality Assurance",
    location: "3rd & 4th Floor, Public Utility Building, M.G. Road 560001",
    description:
      "Central executive offices of KSIC Ltd. Oversees GI-11 legal stewardship, statewide retail distribution, laboratory testing for 24-carat gold zari purity, and the historic Jubilee showroom on M.G. Road.",
    keyStats: [
      { label: "ROLE", value: "Corporate Headquarters & Governance" },
      { label: "GI REGISTRY", value: "GI-11 Sole Registered Proprietor" },
      { label: "NETWORK", value: "18+ Official Showrooms across India" },
      { label: "QUALITY", value: "Zari Metallurgical Assay & Laser Codes" },
    ],
    cx: 1290.2,
    cy: 1853.1,
    labelXOffset: 36,
    labelYOffset: -6,
  },
];

import { useLanguage } from "@/context/LanguageContext";

export const KarnatakaMapSection: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<string>("mysuru");
  const { lang } = useLanguage();
  const active = HUBS.find((h) => h.id === selectedHub) || HUBS[0];

  return (
    <section
      className={`section-spacing ${styles.karnatakaSection}`}
      id="karnataka"
      aria-label="Geographical Roots in Karnataka"
    >
      <div className="container-institutional">
        <div className={styles.layoutGrid}>
          {/* Narrative Column */}
          <div className={`${styles.narrativeCol} reveal-left`}>
            <span className="editorial-label">
              {lang === "kn" ? "ಭೌಗೋಳಿಕ ಅಸ್ಮಿತೆ" : "GEOGRAPHICAL IDENTITY"}
            </span>
            <h2 className={styles.headline}>
              {lang === "kn" ? "ಕರ್ನಾಟಕದ ಮಣ್ಣಿನ ಬೇರುಗಳು." : "ROOTED IN KARNATAKA."}
            </h2>
            <p className={styles.leadParagraph}>
              {lang === "kn"
                ? "ಮೈಸೂರು ರೇಷ್ಮೆಯನ್ನು ಕರ್ನಾಟಕದ ಭೌಗೋಳಿಕತೆಯಿಂದ ಬೇರ್ಪಡಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ. 114 ಕ್ಕೂ ಹೆಚ್ಚು ವರ್ಷಗಳ ರಾಜಪರಂಪರೆ, ಕಾವೇರಿ ಕಣಿವೆಯ ನೈಸರ್ಗಿಕ ಮೃದು ನೀರು, ರಾಜ್ಯದ ರೇಷ್ಮೆ ಕೃಷಿಕರ ಬೈವೋಲ್ಟಿನ್ ಮಲ್ಬರಿ ಗೂಡುಗಳು ಮತ್ತು ಮೈಸೂರು ನೇಯ್ಗೆ ಶಾಲೆಯ ವಿಶಿಷ್ಟ ಹವಾಮಾನವು ಈ ರೇಷ್ಮೆಗೆ ಅಪ್ರತಿಮ ಕ್ರೇಪ್ ವಿನ್ಯಾಸವನ್ನು ನೀಡಿದೆ."
                : "Mysore Silk cannot be disassociated from the geography of Karnataka. Over 114 years of royal stewardship, the natural water chemistry of the Cauvery basin, certified bivoltine mulberry cocoons from regional farmers, and the calibrated micro-climate of the Mysuru weaving sheds impart its distinct, unreplicable pebble-crepe character."}
            </p>

            {/* Operational Hubs Accordion / Cards */}
            <div className={`${styles.hubsList} reveal-stagger`} role="tablist" aria-label="KSIC Karnataka Facilities">
              {HUBS.map((hub) => {
                const isSelected = hub.id === selectedHub;
                return (
                  <div
                    key={hub.id}
                    className={`${styles.hubItem} ${isSelected ? styles.hubItemActive : ""}`}
                    onClick={() => setSelectedHub(hub.id)}
                    role="tab"
                    aria-selected={isSelected}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setSelectedHub(hub.id);
                      }
                    }}
                  >
                    <div className={styles.hubHeader}>
                      <div>
                        <span className={styles.hubName}>{lang === "kn" ? hub.kannadaName : hub.name}</span>
                        <div className={styles.hubKannada}>{hub.kannadaName}</div>
                      </div>
                      <span className={styles.hubRole}>{hub.role}</span>
                    </div>

                    <p className={styles.hubDescription}>{hub.description}</p>

                    {isSelected && (
                      <div className={styles.hubStatsGrid}>
                        {hub.keyStats.map((st) => (
                          <div key={st.label} className={styles.statBadge}>
                            <span className={styles.statLabel}>{st.label}</span>
                            <span className={styles.statValue}>{st.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: "36px" }}>
              <Link href="/stores" className="action-editorial action-editorial-burgundy">
                <span>{lang === "kn" ? "ಸಂಪೂರ್ಣ ಮಳಿಗೆ ಮಾಹಿತಿ & ನಕ್ಷೆ" : "VIEW COMPLETE STORE DIRECTORY & MAP"}</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Authentic Karnataka Geographical Map Frame */}
          <div className={`${styles.mapFrame} reveal-scale`}>
            <div className={styles.mapHeaderRow}>
              <div className={styles.mapTag}>
                {lang === "kn" ? "ಕರ್ನಾಟಕ ಕಾರ್ಯಾಚರಣೆ ಕೇಂದ್ರಗಳು" : "KARNATAKA OPERATIONAL SITES"}
              </div>
              <div className={styles.mapStateSeal}>
                <ShieldCheck size={13} />
                <span>{lang === "kn" ? "ಜಿಐ-11 ನೋಂದಾಯಿತ ವ್ಯಾಪ್ತಿ" : "GI-11 REGISTERED TERRITORY"}</span>
              </div>
            </div>

            {/* 100% Authentic Karnataka Geographical Vector Map */}
            <div className={styles.svgContainer}>
              <svg
                className={styles.karnatakaSvg}
                viewBox="-75 -65 1620 2390"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Official Geographical Map of Karnataka showing KSIC manufacturing and governance centers"
              >
                {/* 30 Authentic Karnataka District Boundaries */}
                <g className={styles.districtsGroup} strokeLinejoin="round">
                  {KARNATAKA_DISTRICT_PATHS.map((dPath, idx) => (
                    <path
                      key={idx}
                      d={dPath}
                      className={styles.districtPath}
                    />
                  ))}
                </g>

                {/* Natural Cauvery River Basin Trajectory */}
                <path
                  d="M 640 2050 Q 820 2040 960 2075 T 1050 2110 T 1150 2150 T 1280 2200"
                  className={styles.cauveryRiverPath}
                />
                <text
                  x="720"
                  y="2035"
                  className={styles.riverText}
                >
                  CAUVERY RIVER BASIN
                </text>

                {/* Operational Hub Markers */}
                {HUBS.map((hub) => {
                  const isSelected = hub.id === selectedHub;
                  return (
                    <g
                      key={hub.id}
                      onClick={() => setSelectedHub(hub.id)}
                      className={styles.hubMarkerGroup}
                      style={{ cursor: "pointer" }}
                    >
                      {/* Active Ripple Animation */}
                      {isSelected && (
                        <>
                          <circle
                            cx={hub.cx}
                            cy={hub.cy}
                            r="68"
                            className={styles.markerRippleOuter}
                          />
                          <circle
                            cx={hub.cx}
                            cy={hub.cy}
                            r="42"
                            className={styles.markerRippleInner}
                          />
                        </>
                      )}

                      {/* Main Node Dot */}
                      <circle
                        cx={hub.cx}
                        cy={hub.cy}
                        r={isSelected ? "22" : "15"}
                        className={`${styles.markerDot} ${
                          isSelected ? styles.markerDotActive : styles.markerDotInactive
                        }`}
                      />

                      {/* Node Center Pip */}
                      <circle
                        cx={hub.cx}
                        cy={hub.cy}
                        r={isSelected ? "8" : "5"}
                        fill="#FFFFFF"
                      />

                      {/* Map Location Label */}
                      <text
                        x={hub.cx + hub.labelXOffset}
                        y={hub.cy + hub.labelYOffset}
                        className={`${styles.mapPinLabel} ${
                          isSelected ? styles.mapPinLabelActive : styles.mapPinLabelInactive
                        }`}
                      >
                        {hub.id === "mysuru"
                          ? "Mysuru (Estd 1912)"
                          : hub.id === "bengaluru"
                          ? "Bengaluru (HQ)"
                          : hub.id === "tnarasipura"
                          ? "T. Narasipura (Reeling)"
                          : "Channapatna (Spun Mills)"}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Map Legend Banner */}
            <div className={styles.mapLegend}>
              <div className={styles.legendDot} />
              <span>
                ACTIVE FACILITY: <strong>{active.name}</strong> ({active.role})
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
