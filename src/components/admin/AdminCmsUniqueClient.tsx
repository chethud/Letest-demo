"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminShell } from "./AdminShell";
import styles from "./AdminShell.module.css";
import { readImageFile } from "./cmsShared";
import {
  DEFAULT_CMS_HOME,
  DEFAULT_UNIQUE,
  DEFAULT_UNIQUE_PILLAR_COPY,
  DEFAULT_UNIQUE_PILLAR_IMAGES,
  UNIQUE_PILLAR_IDS,
  readCmsHome,
  writeCmsHome,
  type CmsHomeSettings,
  type CmsUniquePillarCopy,
  type UniquePillarId,
} from "@/lib/cmsHome";

const PILLAR_LABELS: Record<UniquePillarId, string> = {
  "wrinkle-resistant": "01 · Wrinkle-Resistant",
  "fluid-drape": "02 · Fluid Drape & Lightness",
  "pure-zari": "03 · Pure Gold & Silver Zari",
  "unique-code": "04 · Unique Code",
};

export function AdminCmsUniqueClient() {
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

  function setPillarImage(id: UniquePillarId, value: string) {
    setDraft((prev) => ({
      ...prev,
      uniquePillarImages: { ...prev.uniquePillarImages, [id]: value },
    }));
    setMessage("");
    setError("");
  }

  function setPillarCopy(id: UniquePillarId, partial: Partial<CmsUniquePillarCopy>) {
    setDraft((prev) => {
      const current = prev.uniquePillarCopy[id] ?? { title: "", short: "" };
      return {
        ...prev,
        uniquePillarCopy: {
          ...prev.uniquePillarCopy,
          [id]: { ...current, ...partial },
        },
      };
    });
    setMessage("");
    setError("");
  }

  function clearPillar(id: UniquePillarId) {
    setDraft((prev) => {
      const nextImages = { ...prev.uniquePillarImages };
      const nextCopy = { ...prev.uniquePillarCopy };
      delete nextImages[id];
      delete nextCopy[id];
      return {
        ...prev,
        uniquePillarImages: nextImages,
        uniquePillarCopy: nextCopy,
      };
    });
    setMessage("");
    setError("");
  }

  function save() {
    writeCmsHome(draft);
    setError("");
    setMessage("Saved — open #mysore-silk-unique on the homepage to preview.");
  }

  return (
    <AdminShell
      title="Essence of Mysore Silk"
      subtitle="Intro copy, pillar text, and pillar images."
    >
      <div className={styles.actions} style={{ marginBottom: "1rem" }}>
        <Link href="/admin/cms" className={styles.btnGhost}>
          ← Back to CMS
        </Link>
        <Link href="/#mysore-silk-unique" className={styles.btnGhost}>
          View section
        </Link>
      </div>

      <div className={styles.panel}>
        <h2>Intro copy</h2>
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
          Edit the intro and pillars, then Save. Reset restores that pillar only.
        </p>
        <form
          className={styles.form}
          style={{ maxWidth: "40rem", marginBottom: "1.25rem" }}
          onSubmit={(event) => {
            event.preventDefault();
            save();
          }}
        >
          <label>
            Eyebrow
            <input
              value={draft.uniqueEyebrow}
              placeholder={DEFAULT_UNIQUE.eyebrow}
              onChange={(e) => updateDraft({ uniqueEyebrow: e.target.value })}
            />
          </label>
          <label>
            Title
            <input
              value={draft.uniqueTitle}
              placeholder={DEFAULT_UNIQUE.title}
              onChange={(e) => updateDraft({ uniqueTitle: e.target.value })}
            />
          </label>
          <label>
            Lead paragraph
            <textarea
              value={draft.uniqueIntro}
              placeholder={DEFAULT_UNIQUE.intro}
              onChange={(e) => updateDraft({ uniqueIntro: e.target.value })}
            />
          </label>

          <h2 style={{ marginTop: "0.5rem" }}>Pillars</h2>
          <div className={styles.imageSlots} style={{ marginBottom: "1rem" }}>
            {UNIQUE_PILLAR_IDS.map((id) => {
              const imageValue = (draft.uniquePillarImages[id] ?? "").trim();
              const defaultSrc = DEFAULT_UNIQUE_PILLAR_IMAGES[id];
              const preview = imageValue || defaultSrc;
              const copy = draft.uniquePillarCopy[id] ?? { title: "", short: "" };
              const defaults = DEFAULT_UNIQUE_PILLAR_COPY[id];
              const isCustom =
                Boolean(imageValue) ||
                Boolean(copy.title.trim()) ||
                Boolean(copy.short.trim());

              return (
                <div key={id} className={styles.imageSlot}>
                  <p className={styles.imageSlotTitle}>
                    {PILLAR_LABELS[id]}
                    {!isCustom ? " · default" : ""}
                  </p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={preview} alt="" className={styles.imagePreview} />
                  <label>
                    Title
                    <input
                      value={copy.title}
                      placeholder={defaults.title}
                      onChange={(e) => setPillarCopy(id, { title: e.target.value })}
                    />
                  </label>
                  <label>
                    Short text
                    <textarea
                      value={copy.short}
                      placeholder={defaults.short}
                      onChange={(e) => setPillarCopy(id, { short: e.target.value })}
                    />
                  </label>
                  <label>
                    Image URL
                    <input
                      value={imageValue.startsWith("data:") ? "" : imageValue}
                      placeholder={defaultSrc}
                      onChange={(e) => setPillarImage(id, e.target.value)}
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
                          setPillarImage(id, await readImageFile(file));
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
                  {isCustom ? (
                    <button
                      type="button"
                      className={styles.btnGhost}
                      onClick={() => clearPillar(id)}
                    >
                      Reset pillar to default
                    </button>
                  ) : null}
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
