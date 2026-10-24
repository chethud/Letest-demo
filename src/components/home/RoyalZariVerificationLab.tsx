"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HelpCircle,
  Check,
  AlertCircle,
  X,
  ArrowRight,
} from "lucide-react";
import styles from "./RoyalZariVerificationLab.module.css";
import {
  MYSORE_SILK_GI_APPLICATION,
  MYSORE_SILK_NTH_ZARI_TEST,
} from "@/data/govIpPortals";
import {
  verifySareeSerial,
  type VerificationResponse,
} from "@/lib/verifySareeSerial";

type CredModal = "gi" | "nth" | null;

export const RoyalZariVerificationLab: React.FC<{ id?: string }> = ({
  id = "authenticity-lab",
}) => {
  const helpId = useId();
  const giDetailsId = useId();
  const nthDetailsId = useId();
  const helpRef = useRef<HTMLDivElement>(null);
  const helpButtonRef = useRef<HTMLButtonElement>(null);
  const credCloseRef = useRef<HTMLButtonElement>(null);

  const [inputCode, setInputCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [credOpen, setCredOpen] = useState<CredModal>(null);
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

  useEffect(() => {
    if (!credOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    credCloseRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCredOpen(null);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [credOpen]);

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
      <div className={styles.hero}>
        <div className={styles.heroVisual} aria-hidden="true">
          <Image
            src="/assets/heritage/authenticity-hero-ivory-crimson.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.sareeImage}
          />
        </div>

        <div className={styles.heroCopy}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>Royal Zari Verification</p>
            <h2 className={styles.heading}>
              Authenticity you can{" "}
              <em className={styles.headingEm}>trust.</em>
            </h2>
            <p className={styles.lead}>
              Every authentic Mysore Silk saree carries a unique, micro-woven serial
              number and a guaranteed Royal Zari composition.
            </p>
          </div>

          <div className={styles.heroVerify}>
          <form
            id="saree-serial-form"
            className={styles.form}
            onSubmit={handleVerify}
            noValidate
          >
            <div className={styles.formHeader}>
              <label className={styles.formLabel} htmlFor={`${id}-serial-code`}>
                Enter your saree serial code
              </label>
              <div
                className={styles.helpWrap}
                onMouseEnter={() => setHelpOpen(true)}
                onMouseLeave={() => setHelpOpen(false)}
              >
                <button
                  ref={helpButtonRef}
                  type="button"
                  className={styles.helpTrigger}
                  aria-expanded={helpOpen}
                  aria-controls={helpId}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setHelpOpen((open) => !open);
                  }}
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
                    onMouseEnter={() => setHelpOpen(true)}
                  >
                    <div className={styles.helpFigure}>
                      <Image
                        src="/assets/craft/unique-04-unique-code.jpg"
                        alt="Unique identification code on an authentic KSIC Mysore Silk pallu"
                        fill
                        sizes="232px"
                        className={styles.helpImage}
                      />
                    </div>
                    <p>
                      Look for the serial number in the pallu, woven or embroidered
                      into the decorative end of the saree.
                    </p>
                    <button
                      type="button"
                      className={styles.helpClose}
                      onClick={() => setHelpOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className={styles.formRow}>
              <input
                id={`${id}-serial-code`}
                type="text"
                value={inputCode}
                onChange={(event) => setInputCode(event.target.value)}
                placeholder="e.g. KSIC-MYS-1912-ROYAL"
                className={styles.input}
                autoComplete="off"
                spellCheck={false}
                aria-describedby={result ? `${id}-verify-result` : undefined}
              />
              <button
                type="submit"
                className={styles.verifyBtn}
                disabled={isVerifying || !inputCode.trim()}
              >
                {isVerifying ? "Checking…" : "Verify →"}
              </button>
            </div>
          </form>

          <div
            id={`${id}-verify-result`}
            className={styles.result}
            aria-live="polite"
          >
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
                  We could not find <strong>{result.serial}</strong> in the KSIC
                  registry. Check the pallu marking again, or contact KSIC support
                  for help.
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
        </div>
      </div>

      <div className={styles.lower}>
        <div className={styles.credStrip} aria-label="Authenticity credentials">
          <aside className={styles.credItem}>
            <div className={styles.credEmblem}>
              <Image
                src="/assets/brand/emblem-of-india.svg"
                alt=""
                width={36}
                height={56}
              />
            </div>
            <div className={styles.credCopy}>
              <p className={styles.giKicker}>Protected Heritage</p>
              <h3 className={styles.giTitle}>GI Tag #11 - Mysore Silk</h3>
              <p className={styles.giText}>
                Registered under the Government of India as a Geographical Indication.
              </p>
            </div>
            <button
              type="button"
              className={styles.credAction}
              aria-haspopup="dialog"
              aria-expanded={credOpen === "gi"}
              aria-controls={giDetailsId}
              onClick={() => setCredOpen("gi")}
            >
              View registration details
              <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" />
            </button>
          </aside>

          <aside className={styles.credItem}>
            <div className={styles.credEmblem}>
              <Image
                src="/assets/brand/emblem-of-india.svg"
                alt=""
                width={36}
                height={56}
              />
            </div>
            <div className={styles.credCopy}>
              <p className={styles.giKicker}>Metal Assay</p>
              <h3 className={styles.giTitle}>National Test House · Zari</h3>
              <p className={styles.giText}>
                Zari assayed at NTH Chennai: 65% silver and 0.65% gold.
              </p>
            </div>
            <button
              type="button"
              className={styles.credAction}
              aria-haspopup="dialog"
              aria-expanded={credOpen === "nth"}
              aria-controls={nthDetailsId}
              onClick={() => setCredOpen("nth")}
            >
              View metal testing details
              <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" />
            </button>
          </aside>
        </div>
      </div>

      {credOpen === "gi" ? (
        <div
          className={styles.giModalBackdrop}
          onClick={() => setCredOpen(null)}
          role="presentation"
        >
          <div
            id={giDetailsId}
            className={styles.giModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${giDetailsId}-title`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.giModalHeader}>
              <div>
                <p className={styles.giModalEyebrow}>Government of India · GI Register</p>
                <h3 id={`${giDetailsId}-title`} className={styles.giModalTitle}>
                  {MYSORE_SILK_GI_APPLICATION.title}
                </h3>
              </div>
              <button
                ref={credCloseRef}
                type="button"
                className={styles.giModalClose}
                aria-label="Close GI registration details"
                onClick={() => setCredOpen(null)}
              >
                <X size={18} strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>

            <div className={styles.giModalBody}>
              <dl className={styles.giDetails}>
                {MYSORE_SILK_GI_APPLICATION.fields.map((field) => (
                  <div key={field.label} className={styles.giDetailRow}>
                    <dt>{field.label}</dt>
                    <dd
                      className={
                        field.label === "Status"
                          ? styles.giStatus
                          : field.label === "Geographical Indications"
                            ? styles.giName
                            : undefined
                      }
                    >
                      {field.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <aside className={styles.giLogoCard}>
                <p className={styles.giLogoLabel}>GI Certificate</p>
                <div className={styles.giLogoFrame}>
                  <Image
                    src="/assets/heritage/ksic-2005-gi-certificate.jpg"
                    alt="Mysore Silk GI certificate, GIR-11"
                    width={480}
                    height={640}
                    className={styles.giLogoImage}
                  />
                </div>
                <p className={styles.giLogoCaption}>
                  {MYSORE_SILK_GI_APPLICATION.geographicalIndication}
                </p>
              </aside>
            </div>
          </div>
        </div>
      ) : null}

      {credOpen === "nth" ? (
        <div
          className={styles.giModalBackdrop}
          onClick={() => setCredOpen(null)}
          role="presentation"
        >
          <div
            id={nthDetailsId}
            className={styles.giModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${nthDetailsId}-title`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.giModalHeader}>
              <div>
                <p className={styles.giModalEyebrow}>
                  Government of India · {MYSORE_SILK_NTH_ZARI_TEST.laboratory}
                </p>
                <h3 id={`${nthDetailsId}-title`} className={styles.giModalTitle}>
                  {MYSORE_SILK_NTH_ZARI_TEST.title}
                </h3>
              </div>
              <button
                ref={credCloseRef}
                type="button"
                className={styles.giModalClose}
                aria-label="Close metal testing details"
                onClick={() => setCredOpen(null)}
              >
                <X size={18} strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>

            <div className={styles.giModalBody}>
              <dl className={styles.giDetails}>
                {MYSORE_SILK_NTH_ZARI_TEST.fields.map((field) => (
                  <div key={field.label} className={styles.giDetailRow}>
                    <dt>{field.label}</dt>
                    <dd
                      className={
                        field.label === "Silver content" || field.label === "Gold content"
                          ? styles.giName
                          : undefined
                      }
                    >
                      {field.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <aside className={styles.giLogoCard}>
                <p className={styles.giLogoLabel}>Zari Metallurgy</p>
                <div className={styles.giLogoFrame}>
                  <Image
                    src="/assets/craft/06-pure-gold-silver-zari.jpg"
                    alt="Pure gold and silver zari thread"
                    width={480}
                    height={480}
                    className={styles.giLogoImage}
                  />
                </div>
                <p className={styles.giLogoCaption}>65% silver · 0.65% gold</p>
              </aside>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};
