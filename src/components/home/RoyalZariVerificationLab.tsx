"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  FlaskConical,
  Hash,
  HelpCircle,
  ExternalLink,
  Check,
  AlertCircle,
} from "lucide-react";
import styles from "./RoyalZariVerificationLab.module.css";
import { MYSORE_SILK_GI_DETAILS_URL } from "@/data/govIpPortals";
import {
  verifySareeSerial,
  type VerificationResponse,
} from "@/lib/verifySareeSerial";

export const RoyalZariVerificationLab: React.FC<{ id?: string }> = ({
  id = "authenticity-lab",
}) => {
  const helpId = useId();
  const helpRef = useRef<HTMLDivElement>(null);
  const helpButtonRef = useRef<HTMLButtonElement>(null);

  const [inputCode, setInputCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [result, setResult] = useState<VerificationResponse | null>(null);

  useEffect(() => {
    if (!helpOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        helpRef.current?.contains(target) ||
        helpButtonRef.current?.contains(target)
      ) {
        return;
      }
      setHelpOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setHelpOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [helpOpen]);

  const handleVerify = async (event?: React.FormEvent) => {
    event?.preventDefault();
    setIsVerifying(true);
    setResult(null);

    try {
      const response = await verifySareeSerial(inputCode);
      setResult(response);
    } catch {
      setResult({
        status: "error",
        message: "Unable to check this code right now. Please try again.",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <section
      id={id}
      className={styles.section}
      aria-label="Royal Zari Verification"
    >
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Royal Zari Verification</p>
            <h2 className={styles.heading}>
              Authenticity
              <br />
              you can <em className={styles.headingEm}>trust.</em>
            </h2>
            <p className={styles.lead}>
              Every authentic Mysore Silk saree carries a unique, micro-woven
              serial number and a guaranteed Royal Zari composition.
            </p>

            <form className={styles.form} onSubmit={handleVerify} noValidate>
              <div className={styles.formHeader}>
                <label className={styles.formLabel} htmlFor="saree-serial-code">
                  Enter your saree serial code
                </label>
                <div className={styles.helpWrap}>
                  <button
                    ref={helpButtonRef}
                    type="button"
                    className={styles.helpTrigger}
                    aria-expanded={helpOpen}
                    aria-controls={helpId}
                    onClick={() => setHelpOpen((open) => !open)}
                  >
                    Where to find the code?
                    <HelpCircle size={14} strokeWidth={1.75} aria-hidden="true" />
                  </button>
                  {helpOpen ? (
                    <div
                      id={helpId}
                      ref={helpRef}
                      className={styles.helpPanel}
                      role="region"
                      aria-label="Where to find the saree code"
                    >
                      <p>
                        Look for the serial number in the pallu — woven or
                        embroidered into the decorative end of the saree.
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className={styles.formRow}>
                <input
                  id="saree-serial-code"
                  type="text"
                  value={inputCode}
                  onChange={(event) => setInputCode(event.target.value)}
                  placeholder="e.g. KSIC-MYS-1912-ROYAL"
                  className={styles.input}
                  autoComplete="off"
                  spellCheck={false}
                  aria-describedby={result ? "verify-result" : undefined}
                />
                <button
                  type="submit"
                  className={styles.verifyBtn}
                  disabled={isVerifying}
                >
                  {isVerifying ? "Checking…" : "Verify →"}
                </button>
              </div>
            </form>

            <div id="verify-result" className={styles.result} aria-live="polite">
              {result?.status === "verified" ? (
                <div className={`${styles.resultBox} ${styles.resultSuccess}`}>
                  <p className={styles.resultStatus}>
                    <Check size={15} strokeWidth={2.4} aria-hidden="true" />
                    Verified authentic
                  </p>
                  <p className={styles.resultSerial}>{result.record.serial}</p>
                  <p className={styles.resultTitle}>{result.record.productName}</p>
                  <ul className={styles.resultFacts}>
                    <li>{result.record.zariNote}</li>
                    <li>{result.record.silkNote}</li>
                    <li>{result.record.giTag}</li>
                  </ul>
                </div>
              ) : null}

              {result?.status === "not_found" ? (
                <div className={`${styles.resultBox} ${styles.resultMiss}`}>
                  <p className={styles.resultStatus}>
                    <AlertCircle size={15} strokeWidth={2.1} aria-hidden="true" />
                    Code not matched
                  </p>
                  <p className={styles.resultCopy}>
                    We could not find <strong>{result.serial}</strong> in the
                    KSIC registry. Check the pallu marking again, or contact
                    KSIC support for help.
                  </p>
                  <Link href="/contact" className={styles.resultLink}>
                    Contact KSIC support
                  </Link>
                </div>
              ) : null}

              {result?.status === "error" ? (
                <div className={`${styles.resultBox} ${styles.resultMiss}`}>
                  <p className={styles.resultStatus}>
                    <AlertCircle size={15} strokeWidth={2.1} aria-hidden="true" />
                    Unable to verify
                  </p>
                  <p className={styles.resultCopy}>{result.message}</p>
                </div>
              ) : null}
            </div>
          </div>

          <figure className={styles.heroVisual}>
            <div className={styles.imageFrame}>
              <Image
                src="/assets/craft/royal-zari-verification-saree.jpg"
                alt="Ivory Mysore silk saree with a burgundy gold-zari pallu showing a woven serial marking"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 58vw"
                className={styles.sareeImage}
              />
              <div className={styles.serialCallout} aria-hidden="true">
                <span className={styles.serialLine} />
                <span className={styles.serialNote}>
                  Serial woven into the pallu
                </span>
              </div>
            </div>
            <figcaption className={styles.serialCaption}>
              Look for the serial number woven or embroidered into the decorative
              pallu end of the saree.
            </figcaption>
          </figure>
        </div>

        <ul className={styles.highlights}>
          <li className={styles.highlight}>
            <span className={styles.highlightIcon} aria-hidden="true">
              <ShieldCheck size={18} strokeWidth={1.6} />
            </span>
            <div>
              <h3 className={styles.highlightTitle}>Government Registered</h3>
              <p className={styles.highlightText}>
                GI Tag #11
                <br />
                Mysore Silk
              </p>
            </div>
          </li>
          <li className={styles.highlight}>
            <span className={styles.highlightIcon} aria-hidden="true">
              <FlaskConical size={18} strokeWidth={1.6} />
            </span>
            <div>
              <h3 className={styles.highlightTitle}>Certified Zari Composition</h3>
              <p className={styles.highlightText}>
                0.65% pure 24K gold, 65% pure silver
              </p>
            </div>
          </li>
          <li className={styles.highlight}>
            <span className={styles.highlightIcon} aria-hidden="true">
              <Hash size={18} strokeWidth={1.6} />
            </span>
            <div>
              <h3 className={styles.highlightTitle}>Unique Serial Number</h3>
              <p className={styles.highlightText}>
                Micro-woven into every saree’s pallu
              </p>
            </div>
          </li>
        </ul>

        <aside className={styles.giPanel}>
          <div className={styles.giEmblem}>
            <Image
              src="/assets/brand/karnataka-seal.svg"
              alt="Emblem of the Government of Karnataka"
              width={56}
              height={56}
            />
          </div>
          <div className={styles.giCopy}>
            <p className={styles.giEyebrow}>Protected Heritage</p>
            <h3 className={styles.giTitle}>GI Tag #11 – Mysore Silk</h3>
            <p className={styles.giText}>
              Recognised and registered under the Government of India as a
              Geographical Indication (GI).
            </p>
          </div>
          <a
            href={MYSORE_SILK_GI_DETAILS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.giLink}
          >
            View on Government of India Registers
            <ExternalLink size={14} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </aside>
      </div>
    </section>
  );
};
