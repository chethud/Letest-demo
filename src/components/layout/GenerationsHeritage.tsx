"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HelpCircle, Check, AlertCircle, ExternalLink } from "lucide-react";
import styles from "./GenerationsHeritage.module.css";
import { MYSORE_SILK_GI_DETAILS_URL } from "@/data/govIpPortals";
import {
  verifySareeSerial,
  type VerificationResponse,
} from "@/lib/verifySareeSerial";

export const GenerationsHeritage: React.FC = () => {
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
    <section className={styles.heritage} id="generations" aria-label="Heritage">
      {/* Reference banner provides the full visual design; interactive controls sit on top. */}
      <div className={styles.sareeBanner} id="authenticity-lab">
        <Image
          src="/assets/heritage/mysore-silk-authenticity-woven-in-gold.png"
          alt="Royal Zari Verification — Authenticity you can trust. Enter your saree serial code to verify Mysore Silk."
          width={1675}
          height={939}
          sizes="100vw"
          className={styles.sareePhoto}
          priority
        />

        <h2 className={styles.srOnly}>Authenticity you can trust.</h2>

        <form
          className={styles.bannerForm}
          onSubmit={handleVerify}
          noValidate
          aria-label="Verify saree serial code"
        >
          <div className={styles.bannerFormHeader}>
            <label className={styles.bannerFormLabel} htmlFor="saree-serial-code">
              Enter your saree serial code
            </label>
            <div className={styles.bannerHelpWrap}>
              <button
                ref={helpButtonRef}
                type="button"
                className={styles.bannerHelpTrigger}
                aria-expanded={helpOpen}
                aria-controls={helpId}
                onClick={() => setHelpOpen((open) => !open)}
              >
                <HelpCircle size={14} strokeWidth={1.75} aria-hidden="true" />
                Where to find the code?
              </button>
              {helpOpen ? (
                <div
                  id={helpId}
                  ref={helpRef}
                  className={styles.bannerHelpPanel}
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

          <div className={styles.bannerFormRow}>
            <input
              id="saree-serial-code"
              type="text"
              value={inputCode}
              onChange={(event) => setInputCode(event.target.value)}
              placeholder="e.g. KSIC-MYS-1912-ROYAL"
              className={styles.bannerInput}
              autoComplete="off"
              spellCheck={false}
              aria-describedby={result ? "verify-result" : undefined}
            />
            <button
              type="submit"
              className={styles.bannerVerifyBtn}
              disabled={isVerifying}
            >
              {isVerifying ? "Checking…" : "Verify →"}
            </button>
          </div>
        </form>

        <div id="verify-result" className={styles.bannerResult} aria-live="polite">
          {result?.status === "verified" ? (
            <div className={`${styles.bannerResultBox} ${styles.bannerResultSuccess}`}>
              <p className={styles.bannerResultStatus}>
                <Check size={14} strokeWidth={2.4} aria-hidden="true" />
                Verified authentic
              </p>
              <p className={styles.bannerResultSerial}>{result.record.serial}</p>
              <p className={styles.bannerResultTitle}>{result.record.productName}</p>
            </div>
          ) : null}

          {result?.status === "not_found" ? (
            <div className={styles.bannerResultBox}>
              <p className={styles.bannerResultStatus}>
                <AlertCircle size={14} strokeWidth={2.1} aria-hidden="true" />
                Code not matched
              </p>
              <p className={styles.bannerResultCopy}>
                We could not find <strong>{result.serial}</strong> in the KSIC
                registry.
              </p>
            </div>
          ) : null}

          {result?.status === "error" ? (
            <div className={styles.bannerResultBox}>
              <p className={styles.bannerResultStatus}>
                <AlertCircle size={14} strokeWidth={2.1} aria-hidden="true" />
                Unable to verify
              </p>
              <p className={styles.bannerResultCopy}>{result.message}</p>
            </div>
          ) : null}
        </div>

        <a
          href={MYSORE_SILK_GI_DETAILS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bannerGiBtn}
        >
          View on Government of India Registers
          <ExternalLink size={14} strokeWidth={1.75} aria-hidden="true" />
        </a>
      </div>

      <div className={styles.atmosphere} aria-hidden="true" />
      <figure className={styles.image}>
        <img
          src="/assets/heritage/three-generation-portrait.png"
          alt="Three generations of women in Mysore silk"
          className={styles.photo}
        />
      </figure>
      <div className={styles.panel}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Heritage</p>
          <h2 className={styles.title}>Silk for generations</h2>
          <p className={styles.lead}>
            You can buy the saree.
            <br />
            The years that follow are yours alone.
          </p>
          <Link href="/heritage" className={styles.cta}>
            Our Story <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
