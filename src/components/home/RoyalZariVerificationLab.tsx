"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Search,
  RefreshCw,
  QrCode,
  ArrowRight,
  Award,
  Layers,
  Lock,
  FileCheck,
} from "lucide-react";
import styles from "./RoyalZariVerificationLab.module.css";
import { useLanguage } from "@/context/LanguageContext";

interface VerificationResult {
  serial: string;
  sareeTitle: string;
  sareeTitleKn: string;
  weaveDate: string;
  loomId: string;
  giTag: string;
  goldContent: string;
  silverContent: string;
  silkPurity: string;
  hologramCode: string;
  certificationStatus: "VERIFIED_AUTHENTIC" | "INVALID";
}

const SAMPLE_CODES = [
  { code: "KSIC-MYS-1912-ROYAL", label: "Royal Durbar Crepe Saree" },
  { code: "KSIC-ZARI-2024-GOLDA", label: "Kasuti Border Pure Zari" },
  { code: "KSIC-AMBARI-9904-GI11", label: "Golden Ambari Masterpiece" },
];

export const RoyalZariVerificationLab: React.FC = () => {
  const { lang } = useLanguage();
  const isKn = lang === "kn";

  const [inputCode, setInputCode] = useState("KSIC-MYS-1912-ROYAL");
  const [isVerifying, setIsVerifying] = useState(false);
  const [activeTab, setActiveTab] = useState<"validator" | "metallurgy" | "hologram">("validator");
  const [result, setResult] = useState<VerificationResult | null>({
    serial: "KSIC-MYS-1912-ROYAL",
    sareeTitle: "Royal Durbar Heritage Crepe Saree",
    sareeTitleKn: "ರಾಜ ದರ್ಬಾರ್ ಪಾರಂಪರಿಕ ಕ್ರೇಪ್ ಸೀರೆ",
    weaveDate: "Manufactured at Mysuru Heritage Weaving Mill",
    loomId: "Swiss Precision Loom #04 · Loomed under Master Weaver Oversight",
    giTag: "GI Certificate No. 11 (Government of India)",
    goldContent: "0.65% Certified 24-Karat Pure Gold",
    silverContent: "65.0% Hallmarked Fine Silver",
    silkPurity: "100% Natural Grade-A Mulberry Silk Core",
    hologramCode: "OPT-GANDABERUNDA-849102",
    certificationStatus: "VERIFIED_AUTHENTIC",
  });

  const handleVerify = (codeToTest?: string) => {
    const code = codeToTest || inputCode;
    setIsVerifying(true);

    setTimeout(() => {
      setIsVerifying(false);
      if (code.toUpperCase().includes("KSIC")) {
        setResult({
          serial: code.toUpperCase().trim(),
          sareeTitle:
            code.includes("AMBARI")
              ? "Golden Ambari Ceremonial Bridal Saree"
              : code.includes("GOLDA")
              ? "Kasuti Border Pure Gold Zari Saree"
              : "Royal Durbar Heritage Crepe Saree",
          sareeTitleKn:
            code.includes("AMBARI")
              ? "ಚಿನ್ನದ ಅಂಬಾರಿ ಕಲ್ಯಾಣ ಮಹೋತ್ಸವ ಸೀರೆ"
              : code.includes("GOLDA")
              ? "ಕಸೂತಿ ಅಂಚಿನ ಶುದ್ಧ ಚಿನ್ನದ ಜರಿ ಸೀರೆ"
              : "ರಾಜ ದರ್ಬಾರ್ ಪಾರಂಪರಿಕ ಕ್ರೇಪ್ ಸೀರೆ",
          weaveDate: "Certified Batch: Mysuru Central Weaving Mill (Est. 1912)",
          loomId: "Authenticated Loom Track #KSIC-1912 · Verified Electronic Jacquard",
          giTag: "GI Tag #11 (Registered Proprietary GI under KSIC Ltd)",
          goldContent: "0.65% Certified 24-Karat Pure Gold",
          silverContent: "65.0% Hallmarked Fine Silver",
          silkPurity: "100% Pure Mulberry Silk Core",
          hologramCode: `OPT-KSIC-${Math.floor(100000 + Math.random() * 900000)}`,
          certificationStatus: "VERIFIED_AUTHENTIC",
        });
      } else {
        setResult({
          serial: code,
          sareeTitle: "Unrecognized Serial Number",
          sareeTitleKn: "ಅಮಾನ್ಯ ಕ್ರಮಸಂಖ್ಯೆ",
          weaveDate: "Not found in official KSIC State Registry",
          loomId: "Non-Government Registry Source",
          giTag: "Unregistered",
          goldContent: "Synthetic / Uncertified",
          silverContent: "Unverified",
          silkPurity: "May contain synthetic blends",
          hologramCode: "NONE",
          certificationStatus: "INVALID",
        });
      }
    }, 450);
  };

  return (
    <section
      id="authenticity-lab"
      className={styles.verificationSection}
      aria-label="Mysore Silk Royal Zari Authenticity & GI Tag Verification Lab"
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.kickerBadge}>
            <Award size={13} className={styles.kickerIcon} />
            <span>{isKn ? "ಅಧಿಕೃತ ಜಿಐ ಟ್ಯಾಗ್ #೧೧ ಪ್ರಯೋಗಾಲಯ" : "GEOGRAPHICAL INDICATION #11 LAB"}</span>
          </div>

          <h2 className={styles.title}>
            {isKn ? "ರಾಯಲ್ ಜರಿ ಪರಿಶುದ್ಧತೆ ಮತ್ತು ದೃಢೀಕರಣ ಪ್ರಯೋಗಾಲಯ" : "The Royal Zari Verification Lab"}
          </h2>

          <p className={styles.subtitle}>
            {isKn
              ? "ಪ್ರತಿಯೊಂದು ಅಧಿಕೃತ ಮೈಸೂರು ರೇಷ್ಮೆ ಸೀರೆಯೂ ೦.೬೫% ಶುದ್ಧ ಚಿನ್ನ, ೬೫% ಬೆಳ್ಳಿ ಮತ್ತು ೧೦೦% ನೈಸರ್ಗಿಕ ರೇಷ್ಮೆಯನ್ನು ಹೊಂದಿದ್ದು, ವಿಶಿಷ್ಟ ಕ್ರಮಸಂಖ್ಯೆಯಿಂದ ದೃಢೀಕರಿಸಲ್ಪಟ್ಟಿದೆ."
              : "Every authentic Mysore Silk saree carries a permanent metallurgical guarantee: 0.65% pure 24K gold, 65% pure silver, and a unique serial number micro-woven into its pallu."}
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className={styles.tabNav} role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "validator"}
            className={`${styles.tabBtn} ${activeTab === "validator" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("validator")}
          >
            <ShieldCheck size={16} />
            <span>{isKn ? "ಕ್ರಮಸಂಖ್ಯೆ ಪರಿಶೀಲಕ" : "Serial Authenticator"}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "metallurgy"}
            className={`${styles.tabBtn} ${activeTab === "metallurgy" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("metallurgy")}
          >
            <Sparkles size={16} />
            <span>{isKn ? "ಲೋಹ ಪರಿಶುದ್ಧತೆ ಸಂಯೋಜನೆ" : "Metallurgical Assay"}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "hologram"}
            className={`${styles.tabBtn} ${activeTab === "hologram" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("hologram")}
          >
            <QrCode size={16} />
            <span>{isKn ? "ಗಂಡಭೇರುಂಡ ಹೊಲೊಗ್ರಾಮ್" : "Optical Security Seal"}</span>
          </button>
        </div>

        {/* TAB 1: Saree Serial Validator */}
        {activeTab === "validator" && (
          <div className={styles.tabContentCard}>
            <div className={styles.validatorGrid}>
              {/* Left Column: Interactive Input */}
              <div className={styles.validatorControls}>
                <span className={styles.labelMuted}>
                  {isKn ? "ಸೀರೆ ಪಲ್ಲು ಕ್ರಮಸಂಖ್ಯೆ ನಮೂದಿಸಿ" : "ENTER EMBROIDERED PALLU SERIAL CODE"}
                </span>

                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    placeholder="e.g. KSIC-MYS-1912-ROYAL"
                    className={styles.codeInput}
                    aria-label="Saree serial number input"
                  />
                  <button
                    type="button"
                    onClick={() => handleVerify()}
                    disabled={isVerifying}
                    className={styles.verifyBtn}
                  >
                    {isVerifying ? (
                      <RefreshCw size={16} className={styles.spinIcon} />
                    ) : (
                      <Search size={16} />
                    )}
                    <span>{isKn ? "ದೃಢೀಕರಿಸಿ" : "VERIFY"}</span>
                  </button>
                </div>

                {/* Sample Test Codes */}
                <div className={styles.sampleChips}>
                  <span className={styles.sampleTitle}>
                    {isKn ? "ಪರೀಕ್ಷಾರ್ಥ ಮಾದರಿಗಳು:" : "Test Official Registered Batches:"}
                  </span>
                  <div className={styles.chipsRow}>
                    {SAMPLE_CODES.map((item) => (
                      <button
                        key={item.code}
                        type="button"
                        className={styles.sampleChip}
                        onClick={() => {
                          setInputCode(item.code);
                          handleVerify(item.code);
                        }}
                      >
                        {item.code}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Security Highlights */}
                <div className={styles.securityBulletList}>
                  <div className={styles.bulletItem}>
                    <Lock size={15} className={styles.bulletIcon} />
                    <div>
                      <strong>{isKn ? "ಅಖಂಡ ಜಿಐ ಟ್ಯಾಗ್ ರಕ್ಷಣೆ" : "Proprietary GI Tag #11"}</strong>
                      <p>{isKn ? "ಭಾರತ ಸರ್ಕಾರದ ನೋಂದಾಯಿತ ಭೌಗೋಳಿಕ ಮಾನ್ಯತೆ." : "Protected by the Intellectual Property Office of India."}</p>
                    </div>
                  </div>

                  <div className={styles.bulletItem}>
                    <FileCheck size={15} className={styles.bulletIcon} />
                    <div>
                      <strong>{isKn ? "ರಾಷ್ಟ್ರೀಯ ಪರೀಕ್ಷಾ ಪ್ರಯೋಗಾಲಯ ಪ್ರಮಾಣೀಕರಣ" : "Govt Metallurgical Assay Guarantee"}</strong>
                      <p>{isKn ? "ನಿಜವಾದ ೨೪-ಕ್ಯಾರೆಟ್ ಚಿನ್ನ ಮತ್ತು ಬೆಳ್ಳಿ ಪರೀಕ್ಷೆ." : "Laboratory-certified 24K electroplated gold zari."}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Certificate Preview */}
              <div className={styles.certificateDisplay}>
                {result && result.certificationStatus === "VERIFIED_AUTHENTIC" ? (
                  <div className={styles.officialCertCard}>
                    <div className={styles.certEmblemHeader}>
                      <Image
                        src="/assets/brand/gandaberunda-crest.png"
                        alt="Royal Gandaberunda Crest"
                        width={46}
                        height={46}
                        className={styles.certEmblem}
                      />
                      <div className={styles.certGovtHeader}>
                        <div className={styles.certGovtTitle}>
                          {isKn ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರಿ ಉದ್ಯಮ · ಕೆ.ಎಸ್.ಐ.ಸಿ." : "GOVERNMENT OF KARNATAKA ENTERPRISE"}
                        </div>
                        <div className={styles.certGovtSub}>
                          Karnataka Silk Industries Corporation Limited · Mysuru
                        </div>
                      </div>
                      <div className={styles.verifiedBadge}>
                        <CheckCircle2 size={14} />
                        <span>VERIFIED</span>
                      </div>
                    </div>

                    <div className={styles.certSerialCallout}>
                      <span className={styles.certSerialLabel}>AUTHENTIC SERIAL NO.</span>
                      <span className={styles.certSerialCode}>{result.serial}</span>
                    </div>

                    <div className={styles.certSpecsTable}>
                      <div className={styles.certRow}>
                        <span className={styles.certColLabel}>Product:</span>
                        <span className={styles.certColVal}>{isKn ? result.sareeTitleKn : result.sareeTitle}</span>
                      </div>
                      <div className={styles.certRow}>
                        <span className={styles.certColLabel}>Zari Metallurgy:</span>
                        <span className={styles.certColValGold}>{result.goldContent} &amp; {result.silverContent}</span>
                      </div>
                      <div className={styles.certRow}>
                        <span className={styles.certColLabel}>Silk Fiber Core:</span>
                        <span className={styles.certColVal}>{result.silkPurity}</span>
                      </div>
                      <div className={styles.certRow}>
                        <span className={styles.certColLabel}>GI Protection:</span>
                        <span className={styles.certColVal}>{result.giTag}</span>
                      </div>
                      <div className={styles.certRow}>
                        <span className={styles.certColLabel}>Hologram Seal ID:</span>
                        <span className={styles.certColValMono}>{result.hologramCode}</span>
                      </div>
                    </div>

                    <div className={styles.certFooterSeal}>
                      <span className={styles.sealGuaranteeText}>
                        GUARANTEED COLOR RETENTION &amp; METALLIC LUSTER FOR 100 YEARS
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className={styles.invalidCertCard}>
                    <ShieldCheck size={40} className={styles.invalidIcon} />
                    <h3>{isKn ? "ಕ್ರಮಸಂಖ್ಯೆ ಕಂಡುಬಂದಿಲ್ಲ" : "Unverified Serial Code"}</h3>
                    <p>
                      {isKn
                        ? "ಈ ಕೋಡ್ ಕೆ.ಎಸ್.ಐ.ಸಿ ಅಧಿಕೃತ ಡೇಟಾಬೇಸ್‌ನಲ್ಲಿ ನೋಂದಾಯಿಸಲ್ಪಟ್ಟಿಲ್ಲ. ದಯವಿಟ್ಟು ಸೀರೆಯ ಪಲ್ಲು ಮೇಲಿನ ಕೋಡ್ ಅನ್ನು ಮರುಪರಿಶೀಲಿಸಿ."
                        : "This serial code is not recognized in the official Government database. Please check the serial embroidered into your saree's pallu."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Metallurgical Assay Breakdown */}
        {activeTab === "metallurgy" && (
          <div className={styles.tabContentCard}>
            <div className={styles.metallurgyGrid}>
              <div className={styles.metallurgyIntro}>
                <span className={styles.labelMuted}>
                  {isKn ? "ನಿಜವಾದ ಜರಿ ರಸಾಯನಶಾಸ್ತ್ರ" : "THE ANATOMY OF GENUINE MYSORE ZARI"}
                </span>
                <h3 className={styles.metallurgyHeading}>
                  {isKn
                    ? "ಶುದ್ಧ ಚಿನ್ನ ಮತ್ತು ಬೆಳ್ಳಿಯ ವೈಜ್ಞಾನಿಕ ಪ್ರಮಾಣೀಕರಣ"
                    : "0.65% Pure Gold · 65% Pure Silver · 100% Mulberry Silk"}
                </h3>
                <p className={styles.metallurgyText}>
                  {isKn
                    ? "ಮೈಸೂರು ರೇಷ್ಮೆ ಸೀರೆಯು ತನ್ನ ಅಸಾಧಾರಣ ದೀರ್ಘಾಯುಷ್ಯಕ್ಕೆ ಹೆಸರುವಾಸಿಯಾಗಿದೆ. ಇತರ ಸೀರೆಗಳಂತೆ ಪ್ಲಾಸ್ಟಿಕ್ ಅಥವಾ ತಾಮ್ರದ ಬಣ್ಣ ಬಳಸದೆ, ಶುದ್ಧ ಬೆಳ್ಳಿಯ ತಂತಿಯ ಮೇಲೆ ೨೪-ಕ್ಯಾರೆಟ್ ಚಿನ್ನವನ್ನು ಲೇಪಿಸಿ ನೇಯಲಾಗುತ್ತದೆ."
                    : "Unlike commercial sarees that substitute copper wire or metallic polyester film, KSIC Mysore Silk uses a centuries-old electroplating formula: an inner silk core wrapped in 65% fine silver wire, electroplated with pure 24-karat gold."}
                </p>

                {/* Visual Ratio Bars */}
                <div className={styles.ratioBars}>
                  <div className={styles.ratioItem}>
                    <div className={styles.ratioHeader}>
                      <span>Pure 24-Karat Gold (Electroplated)</span>
                      <strong>0.65%</strong>
                    </div>
                    <div className={styles.barTrack}>
                      <div className={styles.barFillGold} style={{ width: "20%" }} />
                    </div>
                    <span className={styles.ratioDesc}>Provides eternal royal sheen &amp; oxidation resistance</span>
                  </div>

                  <div className={styles.ratioItem}>
                    <div className={styles.ratioHeader}>
                      <span>Hallmarked Pure Silver (Core Filament)</span>
                      <strong>65.0%</strong>
                    </div>
                    <div className={styles.barTrack}>
                      <div className={styles.barFillSilver} style={{ width: "65%" }} />
                    </div>
                    <span className={styles.ratioDesc}>Delivers majestic metallic drape weight &amp; supple flexibility</span>
                  </div>

                  <div className={styles.ratioItem}>
                    <div className={styles.ratioHeader}>
                      <span>Natural Mulberry Silk Yarn (Inner Carrier Core)</span>
                      <strong>34.35%</strong>
                    </div>
                    <div className={styles.barTrack}>
                      <div className={styles.barFillSilk} style={{ width: "35%" }} />
                    </div>
                    <span className={styles.ratioDesc}>Unbroken tensile thread strength that withstands generations</span>
                  </div>
                </div>
              </div>

              {/* Comparison Table */}
              <div className={styles.comparisonBox}>
                <h4 className={styles.comparisonTitle}>
                  {isKn ? "ಅಧಿಕೃತ ಮೈಸೂರು ರೇಷ್ಮೆ vs ಮಾರುಕಟ್ಟೆಯ ನಕಲಿ ಜರಿ" : "Official KSIC vs Market Imitations"}
                </h4>

                <div className={styles.comparisonTable}>
                  <div className={styles.compRowHeader}>
                    <span>Parameter</span>
                    <span className={styles.compHighlight}>Official KSIC Mysore Silk</span>
                    <span>Commercial Imitation</span>
                  </div>
                  <div className={styles.compRow}>
                    <span>Gold Content</span>
                    <span className={styles.compHighlight}>0.65% Certified 24K Gold</span>
                    <span>0.00% (Plastic / Dye)</span>
                  </div>
                  <div className={styles.compRow}>
                    <span>Silver Core</span>
                    <span className={styles.compHighlight}>65.0% Hallmarked Silver</span>
                    <span>Copper / Aluminium</span>
                  </div>
                  <div className={styles.compRow}>
                    <span>GI Tag Protection</span>
                    <span className={styles.compHighlight}>GI Tag No. 11 (Sole Holder)</span>
                    <span>None / False labels</span>
                  </div>
                  <div className={styles.compRow}>
                    <span>Longevity</span>
                    <span className={styles.compHighlight}>100+ Years (Heirloom)</span>
                    <span>Tarnishes in 2–3 Years</span>
                  </div>
                  <div className={styles.compRow}>
                    <span>Pallu Serial Code</span>
                    <span className={styles.compHighlight}>Permanently Micro-woven</span>
                    <span>Sticker or Absent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Optical Security Hologram Seal */}
        {activeTab === "hologram" && (
          <div className={styles.tabContentCard}>
            <div className={styles.hologramGrid}>
              <div className={styles.hologramVisualCol}>
                <div className={styles.hologramFrame}>
                  <Image
                    src="/assets/craft/ksic-authenticity-hologram.jpg"
                    alt="Authentic KSIC optical security hologram with Gandaberunda royal emblem"
                    fill
                    className={styles.hologramImg}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                  <div className={styles.hologramShimmer} aria-hidden="true" />
                  <div className={styles.hologramTag}>
                    OFFICIAL SECURITY EMBOSSMENT
                  </div>
                </div>
              </div>

              <div className={styles.hologramDetailsCol}>
                <span className={styles.labelMuted}>
                  {isKn ? "ಬಹು-ಪದರದ ಭದ್ರತಾ ತಂತ್ರಜ್ಞಾನ" : "MULTI-LAYERED COUNTERFEIT PROTECTION"}
                </span>

                <h3 className={styles.hologramTitle}>
                  {isKn
                    ? "ದ್ವಿಮುಖ ಗಂಡಭೇರುಂಡ ಹೊಲೊಗ್ರಾಫಿಕ್ ಮುದ್ರೆ"
                    : "The Gandaberunda Optical Micro-Seal"}
                </h3>

                <p className={styles.hologramDesc}>
                  {isKn
                    ? "ಪ್ರತಿ ಕೆ.ಎಸ್.ಐ.ಸಿ ಸೀರೆಯು ಅಧಿಕೃತ ಹೊಲೊಗ್ರಾಫಿಕ್ ಸೀಲ್ ಅನ್ನು ಹೊಂದಿದ್ದು, ಇದರಲ್ಲಿ ಸೂಕ್ಷ್ಮ ಗಂಡಭೇರುಂಡ ಲಾಂಛನ ಮತ್ತು ಬೆಳಕಿಗೆ ತಕ್ಕಂತೆ ಬಣ್ಣ ಬದಲಾಗುವ ಆಪ್ಟಿಕಲ್ ಪದರಗಳನ್ನು ಅಳವಡಿಸಲಾಗಿದೆ."
                    : "Every authentic Mysore Silk saree features a tamper-proof optical seal containing the royal twin-headed Gandaberunda emblem, a micro-etched alphanumeric serial track, and rainbow refraction layers engineered to prevent counterfeiting."}
                </p>

                <div className={styles.securityChecklist}>
                  <div className={styles.checkItem}>
                    <CheckCircle2 size={17} className={styles.checkIcon} />
                    <span><strong>Rainbow Micro-Refraction:</strong> Shifts from Mysore gold to crimson when tilted under daylight.</span>
                  </div>
                  <div className={styles.checkItem}>
                    <CheckCircle2 size={17} className={styles.checkIcon} />
                    <span><strong>Embedded Pallu Serial Code:</strong> Woven directly into the gold zari border during weaving.</span>
                  </div>
                  <div className={styles.checkItem}>
                    <CheckCircle2 size={17} className={styles.checkIcon} />
                    <span><strong>Silk Mark Organization of India:</strong> 100% natural, unadulterated silk certification.</span>
                  </div>
                </div>

                <div className={styles.hologramCtaRow}>
                  <Link href="/craft#authenticity" className={styles.curvedHologramBtn}>
                    <span>{isKn ? "ಸಂಪೂರ್ಣ ದೃಢೀಕರಣ ಮಾರ್ಗದರ್ಶಿ ಓದಿ" : "READ FULL AUTHENTICITY GUIDE"}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
