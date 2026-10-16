"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ShieldCheck,
  Scan,
  Search,
  RefreshCw,
  Lock,
  FileCheck,
  Check,
  ArrowRight,
  Sun,
  Shield,
  Leaf,
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

const OFFICIAL_BATCHES: Record<string, Omit<VerificationResult, "certificationStatus">> = {
  "KSIC-MYS-1912-ROYAL": {
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
  },
  "KSIC-ZARI-2024-GOLDA": {
    serial: "KSIC-ZARI-2024-GOLDA",
    sareeTitle: "Kasuti Border Pure Gold Zari Saree",
    sareeTitleKn: "ಕಸೂತಿ ಅಂಚಿನ ಶುದ್ಧ ಚಿನ್ನದ ಜರಿ ಸೀರೆ",
    weaveDate: "Certified Batch: Mysuru Central Weaving Mill (Est. 1912)",
    loomId: "Authenticated Loom Track #KSIC-1912 · Verified Electronic Jacquard",
    giTag: "GI Certificate No. 11 (Government of India)",
    goldContent: "0.65% Certified 24-Karat Pure Gold",
    silverContent: "65.0% Hallmarked Fine Silver",
    silkPurity: "100% Natural Grade-A Mulberry Silk Core",
    hologramCode: "OPT-GANDABERUNDA-202441",
  },
  "KSIC-AMBART-9984-GI11": {
    serial: "KSIC-AMBART-9984-GI11",
    sareeTitle: "Golden Ambari Ceremonial Bridal Saree",
    sareeTitleKn: "ಚಿನ್ನದ ಅಂಬಾರಿ ಕಲ್ಯಾಣ ಮಹೋತ್ಸವ ಸೀರೆ",
    weaveDate: "Certified Batch: Mysuru Central Weaving Mill (Est. 1912)",
    loomId: "Authenticated Loom Track #KSIC-1912 · Verified Electronic Jacquard",
    giTag: "GI Certificate No. 11 (Government of India)",
    goldContent: "0.65% Certified 24-Karat Pure Gold",
    silverContent: "65.0% Hallmarked Fine Silver",
    silkPurity: "100% Natural Grade-A Mulberry Silk Core",
    hologramCode: "OPT-GANDABERUNDA-998411",
  },
};

const SAMPLE_CODES = [
  { code: "KSIC-MYS-1912-ROYAL", label: "Royal Durbar Crepe Saree" },
  { code: "KSIC-ZARI-2024-GOLDA", label: "Kasuti Border Pure Zari" },
  { code: "KSIC-AMBART-9984-GI11", label: "Golden Ambari Masterpiece" },
];

export const RoyalZariVerificationLab: React.FC<{ id?: string }> = ({ id = "authenticity-lab" }) => {
  const { lang } = useLanguage();
  const isKn = lang === "kn";

  const [inputCode, setInputCode] = useState("KSIC-MYS-1912-ROYAL");
  const [isVerifying, setIsVerifying] = useState(false);
  const [activeTab, setActiveTab] = useState<"validator" | "hologram">("validator");
  const [result, setResult] = useState<VerificationResult | null>({
    ...OFFICIAL_BATCHES["KSIC-MYS-1912-ROYAL"],
    certificationStatus: "VERIFIED_AUTHENTIC",
  });

  const handleVerify = (codeToTest?: string) => {
    const code = (codeToTest !== undefined ? codeToTest : inputCode).trim().toUpperCase();
    setIsVerifying(true);

    setTimeout(() => {
      setIsVerifying(false);
      const official = OFFICIAL_BATCHES[code];
      if (official) {
        setResult({
          ...official,
          certificationStatus: "VERIFIED_AUTHENTIC",
        });
      } else {
        setResult({
          serial: code || "—",
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
    }, 400);
  };

  return (
    <section
      id={id}
      className={styles.verificationSection}
      aria-label="Mysore Silk Royal Zari Authenticity & GI Tag Verification Lab"
    >
      <div className={styles.container}>
        {/* Upper Introduction */}
        <div className={styles.header}>
          <div className={styles.eyebrowBadge}>
            <MapPin size={13} className={styles.eyebrowIcon} />
            <span>
              {isKn
                ? "ಭೌಗೋಳಿಕ ಮಾನ್ಯತೆ #೧೧ ಪ್ರಯೋಗಾಲಯ"
                : "GEOGRAPHICAL INDICATION #11 LAB"}
            </span>
          </div>

          <h2 className={styles.mainHeading}>
            {isKn ? (
              <>
                <span className={styles.burgundyWord}>ರಾಯಲ್ ಜರಿ</span> ಪರಿಶೀಲನಾ ಪ್ರಯೋಗಾಲಯ
              </>
            ) : (
              <>
                The <span className={styles.burgundyWord}>Royal Zari</span> Verification Lab
              </>
            )}
          </h2>

          <p className={styles.supportingText}>
            {isKn
              ? "ಪ್ರತಿಯೊಂದು ಅಧಿಕೃತ ಮೈಸೂರು ರೇಷ್ಮೆ ಸೀರೆಯೂ ಶಾಶ್ವತ ಲೋಹೀಯ ಗ್ಯಾರಂಟಿ ಹೊಂದಿದೆ: ೦.೬೫% ಶುದ್ಧ ೨೪ ಕ್ಯಾರೆಟ್ ಚಿನ್ನ, ೬೫% ಶುದ್ಧ ಬೆಳ್ಳಿ ಮತ್ತು ಪಲ್ಲು ಮೇಲೆ ಮೈಕ್ರೋ-ನೇಯ್ದ ವಿಶಿಷ್ಟ ಕ್ರಮಸಂಖ್ಯೆ."
              : "Every authentic Mysore Silk saree carries a permanent metallurgical guarantee: 0.65% pure 24K gold, 65% pure silver, and a unique serial number micro-woven into its pallu."}
          </p>
        </div>

        {/* Authentication Controls (Tabs) */}
        <div className={styles.authControls} role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "validator"}
            className={`${styles.tabPill} ${
              activeTab === "validator" ? styles.tabPillActive : styles.tabPillInactive
            }`}
            onClick={() => setActiveTab("validator")}
          >
            <ShieldCheck size={16} />
            <span>{isKn ? "ಕ್ರಮಸಂಖ್ಯೆ ಪರಿಶೀಲಕ" : "SERIAL AUTHENTICATOR"}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "hologram"}
            className={`${styles.tabPill} ${
              activeTab === "hologram" ? styles.tabPillActive : styles.tabPillInactive
            }`}
            onClick={() => setActiveTab("hologram")}
          >
            <Scan size={16} />
            <span>{isKn ? "ದೃಗ್ವಿಜ್ಞಾನ ಭದ್ರತಾ ಮುದ್ರೆ" : "OPTICAL SECURITY SEAL"}</span>
          </button>
        </div>

        {/* TAB 1: Serial Authenticator Form & Certificate */}
        {activeTab === "validator" && (
          <div className={styles.verificationDeck}>
            {/* Left Card: Input & Security Features */}
            <div className={styles.inputCard}>
              <div className={styles.inputEyebrowRow}>
                <span className={styles.eyebrowDash}>—</span>
                <span className={styles.inputCardLabel}>
                  {isKn
                    ? "ಕಸೂತಿ ಪಲ್ಲು ಸೀರಿಯಲ್ ಕೋಡ್ ನಮೂದಿಸಿ"
                    : "ENTER EMBROIDERED PALLU SERIAL CODE"}
                </span>
              </div>

              {/* Input + Verify Button Group */}
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleVerify();
                  }}
                  placeholder="KSIC-MYS-1912-ROYAL"
                  className={styles.serialInput}
                  aria-label="Saree Serial Number"
                />
                <button
                  type="button"
                  onClick={() => handleVerify()}
                  disabled={isVerifying}
                  className={styles.verifyCtaBtn}
                >
                  {isVerifying ? (
                    <RefreshCw size={15} className={styles.spinIcon} />
                  ) : (
                    <Search size={15} />
                  )}
                  <span>{isKn ? "ದೃಢೀಕರಿಸಿ" : "VERIFY"}</span>
                </button>
              </div>

              {/* Test Official Registered Batches */}
              <div className={styles.testBatchesBlock}>
                <span className={styles.testBatchesLabel}>
                  {isKn ? "ಪರೀಕ್ಷಾರ್ಥ ಅಧಿಕೃತ ಬ್ಯಾಚ್‌ಗಳು:" : "Test Official Registered Batches:"}
                </span>
                <div className={styles.chipsRow}>
                  {SAMPLE_CODES.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      className={`${styles.batchChip} ${
                        inputCode === item.code ? styles.batchChipActive : ""
                      }`}
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

              {/* Diamond Divider */}
              <div className={styles.diamondDivider} aria-hidden="true">
                <span className={styles.dividerLine} />
                <span className={styles.diamondIcon}>❖</span>
                <span className={styles.dividerLine} />
              </div>

              {/* Two Trust Feature Highlights */}
              <div className={styles.trustFeaturesList}>
                <div className={styles.trustFeatureItem}>
                  <div className={styles.trustIconCircle}>
                    <Lock size={16} strokeWidth={1.75} />
                  </div>
                  <div className={styles.trustText}>
                    <h4 className={styles.trustTitle}>
                      {isKn ? "ಮಾಲೀಕತ್ವದ ಜಿಐ ಟ್ಯಾಗ್ #೧೧" : "Proprietary GI Tag #11"}
                    </h4>
                    <p className={styles.trustDesc}>
                      {isKn
                        ? "ಭಾರತದ ಬೌದ್ಧಿಕ ಆಸ್ತಿ ಕಚೇರಿಯಿಂದ ರಕ್ಷಿಸಲ್ಪಟ್ಟಿದೆ."
                        : "Protected by the Intellectual Property Office of India."}
                    </p>
                  </div>
                </div>

                <div className={styles.trustFeatureItem}>
                  <div className={styles.trustIconCircle}>
                    <FileCheck size={16} strokeWidth={1.75} />
                  </div>
                  <div className={styles.trustText}>
                    <h4 className={styles.trustTitle}>
                      {isKn
                        ? "ಸರ್ಕಾರಿ ಲೋಹಶಾಸ್ತ್ರೀಯ ಖಾತರಿ"
                        : "Govt Metallurgical Assay Guarantee"}
                    </h4>
                    <p className={styles.trustDesc}>
                      {isKn
                        ? "ಪ್ರಯೋಗಾಲಯ-ಪ್ರಮಾಣೀಕೃತ ೨೪K ಎಲೆಕ್ಟ್ರೋಪ್ಲೇಟೆಡ್ ಚಿನ್ನದ ಜರಿ."
                        : "Laboratory-certified 24K electroplated gold zari."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Official Luxury Heritage Certificate */}
            <div className={styles.certificateCard}>
              {result && result.certificationStatus === "VERIFIED_AUTHENTIC" ? (
                <div className={styles.certBody}>
                  {/* Left Column of Certificate: Sculpted Gandaberunda Emblem */}
                  <div className={styles.certEmblemColumn}>
                    <div className={styles.emblemWrapper}>
                      <Image
                        src="/assets/brand/gandaberunda-royal-sculpted.png"
                        alt="Authentic Sculpted Royal Gandaberunda Emblem of Mysore"
                        width={154}
                        height={271}
                        className={styles.sculptedGandaberundaImg}
                        priority
                      />
                    </div>
                  </div>

                  {/* Right Column of Certificate: Official Details */}
                  <div className={styles.certDetailsColumn}>
                    {/* Header Enterprise Bar */}
                    <div className={styles.certEnterpriseRow}>
                      <div className={styles.certEnterpriseInfo}>
                        <div className={styles.certEnterpriseTitle}>
                          {isKn
                            ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರಿ ಉದ್ಯಮ"
                            : "GOVERNMENT OF KARNATAKA ENTERPRISE"}
                        </div>
                        <div className={styles.certEnterpriseSub}>
                          Karnataka Silk Industries Corporation Limited · Mysuru
                        </div>
                      </div>

                      <div className={styles.verifiedStatusBadge}>
                        <Check size={13} strokeWidth={2.8} />
                        <span>VERIFIED</span>
                      </div>
                    </div>

                    {/* Authentic Serial Callout Bar */}
                    <div className={styles.serialCalloutBox}>
                      <span className={styles.serialCalloutLabel}>
                        AUTHENTIC SERIAL NO.
                      </span>
                      <span className={styles.serialCalloutValue}>
                        {result.serial}
                      </span>
                    </div>

                    {/* 5-Row Specifications Table */}
                    <div className={styles.specsTable}>
                      <div className={styles.specRow}>
                        <span className={styles.specLabel}>Product:</span>
                        <span className={styles.specVal}>
                          {isKn ? result.sareeTitleKn : result.sareeTitle}
                        </span>
                      </div>

                      <div className={styles.specRow}>
                        <span className={styles.specLabel}>Zari Metallurgy:</span>
                        <span className={styles.specValZariBurgundy}>
                          0.65% Certified 24-Karat Pure Gold &amp; 65.0% Hallmarked Fine Silver
                        </span>
                      </div>

                      <div className={styles.specRow}>
                        <span className={styles.specLabel}>Silk Fiber Core:</span>
                        <span className={styles.specVal}>{result.silkPurity}</span>
                      </div>

                      <div className={styles.specRow}>
                        <span className={styles.specLabel}>GI Protection:</span>
                        <span className={styles.specVal}>{result.giTag}</span>
                      </div>

                      <div className={styles.specRow}>
                        <span className={styles.specLabel}>Hologram Seal ID:</span>
                        <span className={styles.specValMono}>{result.hologramCode}</span>
                      </div>
                    </div>

                    {/* Diamond line divider */}
                    <div className={styles.certInnerDivider} aria-hidden="true">
                      <span className={styles.certDividerLine} />
                      <span className={styles.certDiamondFlourish}>❖</span>
                      <span className={styles.certDividerLine} />
                    </div>

                    {/* Footer 100-Year Guarantee */}
                    <div className={styles.certGuaranteeFooter}>
                      <span className={styles.guaranteeDiamond}>❖</span>
                      <span className={styles.guaranteeText}>
                        GUARANTEED COLOR RETENTION &amp; METALLIC LUSTER FOR 100 YEARS
                      </span>
                      <span className={styles.guaranteeDiamond}>❖</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.invalidCertificateBox}>
                  <div className={styles.invalidIconCircle}>
                    <ShieldCheck size={36} className={styles.invalidShieldIcon} />
                  </div>
                  <h3 className={styles.invalidTitle}>
                    {isKn ? "ಅಮಾನ್ಯ ಕ್ರಮಸಂಖ್ಯೆ" : "Unverified Serial Code"}
                  </h3>
                  <p className={styles.invalidDesc}>
                    {isKn
                      ? "ಈ ಕೋಡ್ ಕೆ.ಎಸ್.ಐ.ಸಿ ಅಧಿಕೃತ ಡೇಟಾಬೇಸ್‌ನಲ್ಲಿ ನೋಂದಾಯಿಸಲ್ಪಟ್ಟಿಲ್ಲ. ದಯವಿಟ್ಟು ಸೀರೆಯ ಪಲ್ಲು ಮೇಲಿನ ಕೋಡ್ ಅನ್ನು ಮರುಪರಿಶೀಲಿಸಿ."
                      : "This serial code is not recognized in the official Government database. Please check the serial micro-woven into your saree's pallu."}
                  </p>
                  <div className={styles.invalidSuggestionRow}>
                    <button
                      type="button"
                      className={styles.resetCodeBtn}
                      onClick={() => {
                        setInputCode("KSIC-MYS-1912-ROYAL");
                        handleVerify("KSIC-MYS-1912-ROYAL");
                      }}
                    >
                      {isKn ? "ಪರೀಕ್ಷಾರ್ಥ ಕೋಡ್ ಲೋಡ್ ಮಾಡಿ" : "Load Official Sample: KSIC-MYS-1912-ROYAL"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: Optical Security Hologram Seal */}
        {activeTab === "hologram" && (
          <div className={styles.hologramCard}>
            <div className={styles.hologramGrid}>
              <div className={styles.hologramVisualCol}>
                <div className={styles.sealFrame}>
                  <span className={`${styles.sealCorner} ${styles.sealCornerTl}`} aria-hidden="true" />
                  <span className={`${styles.sealCorner} ${styles.sealCornerTr}`} aria-hidden="true" />
                  <span className={`${styles.sealCorner} ${styles.sealCornerBl}`} aria-hidden="true" />
                  <span className={`${styles.sealCorner} ${styles.sealCornerBr}`} aria-hidden="true" />
                  <div className={styles.sealPhoto}>
                    <Image
                      src="/assets/craft/ksic-gandaberunda-optical-seal.jpg"
                      alt="Holographic Gandaberunda authenticity seal on crimson Mysore silk with gold zari, serial MS 2024 - A1739"
                      width={912}
                      height={496}
                      className={styles.sealImage}
                      sizes="(max-width: 960px) 92vw, 46vw"
                    />
                    <div className={styles.sealCaption}>
                      <span aria-hidden="true">—</span>
                      <span>OFFICIAL SECURITY EMBOSSEMENT</span>
                      <span aria-hidden="true">—</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.hologramDetailsCol}>
                <p className={styles.sealEyebrow}>Multi-layered counterfeit protection</p>
                <h3 className={styles.hologramTitle}>The Gandaberunda Optical Micro-Seal</h3>
                <p className={styles.hologramDesc}>
                  Every authentic Mysore Silk saree features a tamper-proof optical seal containing the royal twin-headed Gandaberunda emblem, a micro-etched alphanumeric serial track, and rainbow refraction layers engineered to prevent counterfeiting.
                </p>

                <ul className={styles.securityChecklist}>
                  <li className={styles.featureRow}>
                    <span className={styles.featureIcon} aria-hidden="true">
                      <Sun size={18} strokeWidth={1.5} />
                    </span>
                    <span className={styles.featureDivider} aria-hidden="true" />
                    <span>
                      <span className={styles.featureTitle}>Rainbow Micro-Refraction</span>
                      <span className={styles.featureText}>Shifts from Mysore gold to crimson when tilted under daylight.</span>
                    </span>
                  </li>
                  <li className={styles.featureRow}>
                    <span className={styles.featureIcon} aria-hidden="true">
                      <Shield size={18} strokeWidth={1.5} />
                    </span>
                    <span className={styles.featureDivider} aria-hidden="true" />
                    <span>
                      <span className={styles.featureTitle}>Embedded Pallu Serial Code</span>
                      <span className={styles.featureText}>Woven directly into the gold zari border during weaving.</span>
                    </span>
                  </li>
                  <li className={styles.featureRow}>
                    <span className={styles.featureIcon} aria-hidden="true">
                      <Leaf size={18} strokeWidth={1.5} />
                    </span>
                    <span className={styles.featureDivider} aria-hidden="true" />
                    <span>
                      <span className={styles.featureTitle}>Silk Mark Organization of India</span>
                      <span className={styles.featureText}>100% natural, unadulterated mulberry silk certification.</span>
                    </span>
                  </li>
                </ul>

                <Link href="/authenticity" className={styles.curvedHologramBtn}>
                  <span>Read full authenticity guide</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
