"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  applyShopSection,
  createEmptyProduct,
  shopSectionOf,
  useCatalog,
  type AdminProduct,
  type ShopSection,
} from "@/context/CatalogContext";
import { AdminShell } from "@/components/admin/AdminShell";
import styles from "./AdminShell.module.css";

const emptyForm = (): AdminProduct => createEmptyProduct();

type ImageSlotKey = "hero" | "detail" | "pallu" | "texture";

const IMAGE_SLOTS: { key: ImageSlotKey; label: string; hint: string }[] = [
  { key: "hero", label: "Main hero image", hint: "Primary product photo" },
  { key: "detail", label: "Sub image · Detail", hint: "Close-up / weave detail" },
  { key: "pallu", label: "Sub image · Pallu", hint: "Pallu view" },
  { key: "texture", label: "Sub image · Texture", hint: "Texture / fabric shot" },
];

const MAX_UPLOAD_BYTES = 1.5 * 1024 * 1024;

function readImageFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (file.size > MAX_UPLOAD_BYTES) {
      reject(new Error("Please choose an image under 1.5 MB for this demo."));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      if (!result) reject(new Error("Could not read that image."));
      else resolve(result);
    };
    reader.onerror = () => reject(new Error("Could not read that image."));
    reader.readAsDataURL(file);
  });
}

export function AdminProductsClient() {
  const { products, upsertProduct, deleteProduct } = useCatalog();
  const [editing, setEditing] = useState<AdminProduct | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter((item) =>
      [item.name, item.articleNumber, item.category, item.primaryColor]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [products, query]);

  function save(event: React.FormEvent) {
    event.preventDefault();
    if (!editing) return;
    upsertProduct(editing);
    setEditing(null);
  }

  const isNew =
    !!editing && editing.adminManaged && editing.id.startsWith("admin-");

  if (editing) {
    return (
      <AdminShell
        title={isNew ? "New product" : "Edit product"}
        subtitle={editing.name || "Create, edit, feature, and stock articles."}
      >
        <div className={styles.actions} style={{ marginBottom: "1rem" }}>
          <button
            type="button"
            className={styles.btnGhost}
            onClick={() => setEditing(null)}
          >
            ← Back to catalogue
          </button>
        </div>

        <div className={styles.panel}>
          <h2>{isNew ? "New product" : "Edit product"}</h2>
          <form className={styles.form} onSubmit={save}>
            <div className={styles.row2}>
              <label>
                Name
                <input
                  value={editing.name}
                  onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                  required
                />
              </label>
              <label>
                Article number
                <input
                  value={editing.articleNumber}
                  onChange={(e) =>
                    setEditing({ ...editing, articleNumber: e.target.value })
                  }
                  required
                />
              </label>
            </div>
            <div className={styles.row2}>
              <label>
                Slug
                <input
                  value={editing.slug}
                  onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                  required
                />
              </label>
              <label>
                Category
                <input
                  value={editing.category}
                  onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                />
              </label>
            </div>
            <label>
              Tagline
              <input
                value={editing.tagline}
                onChange={(e) => setEditing({ ...editing, tagline: e.target.value })}
              />
            </label>
            <label>
              Description
              <textarea
                value={editing.description}
                onChange={(e) =>
                  setEditing({ ...editing, description: e.target.value })
                }
              />
            </label>
            <label>
              Primary colour
              <input
                value={editing.primaryColor}
                onChange={(e) =>
                  setEditing({ ...editing, primaryColor: e.target.value })
                }
              />
            </label>

            <div>
              <p className={styles.imageSlotTitle} style={{ marginBottom: "0.65rem" }}>
                Product images
              </p>
              <p className={styles.muted} style={{ margin: "0 0 0.85rem" }}>
                Set one main hero image and up to three sub images. All appear in the
                product gallery on the storefront.
              </p>
              <div className={styles.imageSlots}>
                {IMAGE_SLOTS.map((slot) => {
                  const value = editing.images[slot.key] || "";
                  const isData = value.startsWith("data:");
                  return (
                    <div key={slot.key} className={styles.imageSlot}>
                      <p className={styles.imageSlotTitle}>
                        {slot.label}
                        {slot.key === "hero" ? " · required" : ""}
                      </p>
                      <p className={styles.muted} style={{ margin: 0 }}>
                        {slot.hint}
                      </p>
                      {value ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={value} alt="" className={styles.imagePreview} />
                      ) : (
                        <div className={styles.imageEmpty}>No image yet</div>
                      )}
                      <label>
                        Image URL
                        <input
                          value={isData ? "" : value}
                          placeholder={isData ? "Uploaded from device" : "/assets/…"}
                          onChange={(e) =>
                            setEditing({
                              ...editing,
                              images: {
                                ...editing.images,
                                [slot.key]: e.target.value,
                              },
                            })
                          }
                        />
                      </label>
                      <label>
                        Upload from device
                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/webp,image/gif"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            e.target.value = "";
                            if (!file) return;
                            try {
                              const dataUrl = await readImageFile(file);
                              setEditing((current) =>
                                current
                                  ? {
                                      ...current,
                                      images: {
                                        ...current.images,
                                        [slot.key]: dataUrl,
                                      },
                                    }
                                  : current,
                              );
                            } catch (error) {
                              window.alert(
                                error instanceof Error
                                  ? error.message
                                  : "Could not upload that image.",
                              );
                            }
                          }}
                        />
                      </label>
                      {value && slot.key !== "hero" ? (
                        <button
                          type="button"
                          className={styles.btnGhost}
                          onClick={() =>
                            setEditing({
                              ...editing,
                              images: {
                                ...editing.images,
                                [slot.key]: undefined,
                              },
                            })
                          }
                        >
                          Remove image
                        </button>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.row2}>
              <label>
                Status
                <select
                  value={editing.status}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      status: e.target.value as AdminProduct["status"],
                    })
                  }
                >
                  <option value="in_production">In production</option>
                  <option value="heritage_reserve">Heritage reserve</option>
                  <option value="archived">Archived</option>
                </select>
              </label>
              <label>
                Stock qty
                <input
                  type="number"
                  min={0}
                  value={editing.stockQty ?? 0}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      stockQty: Number(e.target.value) || 0,
                    })
                  }
                />
              </label>
            </div>
            <label>
              Shop section
              <select
                value={shopSectionOf(editing)}
                onChange={(e) =>
                  setEditing(
                    applyShopSection(editing, e.target.value as ShopSection),
                  )
                }
              >
                <option value="standard">Standard catalogue (All sarees)</option>
                <option value="bestseller">Bestseller</option>
                <option value="new_arrival">New arrival</option>
              </select>
            </label>
            <div className={styles.actions}>
              <button type="submit" className={styles.btn}>
                Save product
              </button>
              <button
                type="button"
                className={styles.btnGhost}
                onClick={() => setEditing(null)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell title="Products" subtitle="Create, edit, feature, and stock articles.">
      <div className={styles.toolbar}>
        <Link href="/admin" className={styles.btnGhost}>
          ← Back to dashboard
        </Link>
        <button
          type="button"
          className={styles.btn}
          onClick={() => setEditing(emptyForm())}
        >
          Add product
        </button>
        <input
          className={styles.searchField}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search catalogue"
        />
      </div>

      <div className={styles.panel}>
        <h2>Catalogue ({filtered.length})</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Article</th>
              <th>Status</th>
              <th>Stock</th>
              <th>Shop section</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((product) => (
              <tr key={product.id}>
                <td>
                  <strong>{product.name}</strong>
                  <div className={styles.muted}>{product.articleNumber}</div>
                </td>
                <td>
                  <span className={styles.statusPill}>{product.status}</span>
                </td>
                <td>{product.stockQty ?? "—"}</td>
                <td>
                  {shopSectionOf(product) === "bestseller"
                    ? "Bestseller"
                    : shopSectionOf(product) === "new_arrival"
                      ? "New arrival"
                      : "Standard"}
                </td>
                <td>
                  <div className={styles.actions}>
                    <button
                      type="button"
                      className={styles.btnGhost}
                      onClick={() => setEditing(product)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className={styles.btnDanger}
                      onClick={() => {
                        if (
                          window.confirm(
                            `Remove ${product.name} from the catalogue in this browser?`,
                          )
                        ) {
                          deleteProduct(product.id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
