"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminShell } from "./AdminShell";
import styles from "./AdminShell.module.css";
import { readImageFile } from "./cmsShared";
import {
  DEFAULT_CMS_HOME,
  DEFAULT_GENERATIONS,
  readCmsHome,
  writeCmsHome,
  type CmsHomeSettings,
} from "@/lib/cmsHome";

export function AdminCmsGenerationsClient() {
  const [draft, setDraft] = useState<CmsHomeSettings>(DEFAULT_CMS_HOME);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setDraft(readCmsHome());
  }, []);

  function updateDraft(partial: Partial<CmsHomeSettings>) {
    setDraft((prev) => ({ ...prev, ...partial }));
    setMessage("");
    setError("");
  }

  function save() {
    writeCmsHome(draft);
    setError("");
    setMessage("Saved — open #generations on the homepage to preview.");
  }

  const imageValue = draft.generationsImage.trim();
  const imagePreview = imageValue || DEFAULT_GENERATIONS.image;

  return (
    <AdminShell
      title="Silk for generations"
      subtitle="Heritage portrait and story copy."
    >
      <div className={styles.actions} style={{ marginBottom: "1rem" }}>
        <Link href="/admin/cms" className={styles.btnGhost}>
          ← Back to CMS
        </Link>
        <Link href="/#generations" className={styles.btnGhost}>
          View section
        </Link>
      </div>

      <div className={styles.panel}>
        <h2>Portrait &amp; copy</h2>
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
        <p className={styles.muted} style={{ margin: "0 0 1rem" }}>
          Edit the portrait and copy, then Save. Reset restores the image only.
        </p>

        <form
          className={styles.form}
          style={{ maxWidth: "40rem" }}
          onSubmit={(event) => {
            event.preventDefault();
            save();
          }}
        >
          <div className={styles.imageSlot}>
            <p className={styles.imageSlotTitle}>
              Portrait image
              {!imageValue ? " · default" : ""}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imagePreview} alt="" className={styles.imagePreview} />
            <label>
              Image URL
              <input
                value={imageValue.startsWith("data:") ? "" : imageValue}
                placeholder={DEFAULT_GENERATIONS.image}
                onChange={(e) => updateDraft({ generationsImage: e.target.value })}
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
                    updateDraft({ generationsImage: await readImageFile(file) });
                  } catch (err) {
                    setError(
                      err instanceof Error ? err.message : "Could not upload that image.",
                    );
                  }
                }}
              />
            </label>
            {imageValue ? (
              <button
                type="button"
                className={styles.btnGhost}
                onClick={() => updateDraft({ generationsImage: "" })}
              >
                Reset image to default
              </button>
            ) : null}
          </div>

          <label>
            Eyebrow
            <input
              value={draft.generationsEyebrow}
              placeholder={DEFAULT_GENERATIONS.eyebrow}
              onChange={(e) => updateDraft({ generationsEyebrow: e.target.value })}
            />
          </label>
          <label>
            Title
            <input
              value={draft.generationsTitle}
              placeholder={DEFAULT_GENERATIONS.title}
              onChange={(e) => updateDraft({ generationsTitle: e.target.value })}
            />
          </label>
          <label>
            Lead (use a new line for a line break)
            <textarea
              value={draft.generationsLead}
              placeholder={DEFAULT_GENERATIONS.lead}
              onChange={(e) => updateDraft({ generationsLead: e.target.value })}
            />
          </label>
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
