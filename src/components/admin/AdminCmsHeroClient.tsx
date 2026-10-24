"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminShell } from "./AdminShell";
import styles from "./AdminShell.module.css";
import { HERO_SLOTS, readImageFile } from "./cmsShared";
import {
  DEFAULT_CMS_HOME,
  readCmsHome,
  writeCmsHome,
  type CmsHomeSettings,
} from "@/lib/cmsHome";

export function AdminCmsHeroClient() {
  const [draft, setDraft] = useState<CmsHomeSettings>(() =>
    typeof window === "undefined" ? DEFAULT_CMS_HOME : readCmsHome(),
  );
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setDraft(readCmsHome());
  }, []);

  function setHeroSlot(key: (typeof HERO_SLOTS)[number]["key"], value: string) {
    setDraft((prev) => ({ ...prev, [key]: value }));
    setMessage("");
    setError("");
  }

  function clearHeroSlot(key: (typeof HERO_SLOTS)[number]["key"]) {
    setDraft((prev) => ({ ...prev, [key]: "" }));
    setMessage("");
    setError("");
  }

  function save() {
    writeCmsHome(draft);
    setError("");
    setMessage("Saved — open the homepage to see the change.");
  }

  return (
    <AdminShell
      title="Home hero images"
      subtitle="Change the two rotating homepage hero backgrounds."
    >
      <div className={styles.actions} style={{ marginBottom: "1rem" }}>
        <Link href="/admin/cms" className={styles.btnGhost}>
          ← Back to CMS
        </Link>
        <Link href="/" className={styles.btnGhost}>
          View homepage
        </Link>
      </div>

      <div className={styles.panel}>
        <h2>Hero slides</h2>
        <p className={styles.muted} style={{ margin: "0 0 1rem" }}>
          Upload from your device or paste an image URL, then Save. Reset restores that
          slide only.
        </p>

        {message ? (
          <p className={styles.statusPill} style={{ marginBottom: "1rem" }}>
            {message}
          </p>
        ) : null}
        {error ? (
          <p className={styles.loginError} style={{ marginBottom: "1rem" }}>
            {error}
          </p>
        ) : null}

        <form
          className={styles.form}
          style={{ maxWidth: "none" }}
          onSubmit={(event) => {
            event.preventDefault();
            save();
          }}
        >
          <div className={styles.imageSlots}>
            {HERO_SLOTS.map((slot) => {
              const value = draft[slot.key].trim();
              const preview = value || slot.defaultSrc;
              const isCustom = Boolean(value);

              return (
                <div key={slot.key} className={styles.imageSlot}>
                  <p className={styles.imageSlotTitle}>
                    {slot.label}
                    {!isCustom ? " · default" : ""}
                  </p>
                  <p className={styles.muted} style={{ margin: 0, fontSize: "0.78rem" }}>
                    {slot.hint}
                  </p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={preview} alt="" className={styles.imagePreview} />
                  <label>
                    Image URL
                    <input
                      value={value.startsWith("data:") ? "" : value}
                      placeholder={slot.defaultSrc}
                      onChange={(e) => setHeroSlot(slot.key, e.target.value)}
                    />
                  </label>
                  <label>
                    Upload from device
                    <input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        e.target.value = "";
                        if (!file) return;
                        try {
                          const dataUrl = await readImageFile(file);
                          setHeroSlot(slot.key, dataUrl);
                        } catch (err) {
                          setError(
                            err instanceof Error
                              ? err.message
                              : "Could not upload that image.",
                          );
                        }
                      }}
                    />
                  </label>
                  <div className={styles.actions}>
                    {isCustom ? (
                      <button
                        type="button"
                        className={styles.btnGhost}
                        onClick={() => clearHeroSlot(slot.key)}
                      >
                        Reset to default
                      </button>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.actions}>
            <button type="submit" className={styles.btn}>
              Save
            </button>
          </div>
        </form>
      </div>
    </AdminShell>
  );
}
