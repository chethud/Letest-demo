"use client";

import React, { useMemo, useState } from "react";
import {
  createEmptyProduct,
  useCatalog,
  type AdminProduct,
} from "@/context/CatalogContext";
import { useShop } from "@/context/ShopContext";
import { AdminShell } from "@/components/admin/AdminShell";
import styles from "./AdminShell.module.css";

const emptyForm = (): AdminProduct => createEmptyProduct();

export function AdminProductsClient() {
  const { products, upsertProduct, deleteProduct } = useCatalog();
  const { addToCart } = useShop();
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

  return (
    <AdminShell title="Products" subtitle="Create, edit, feature, and stock articles.">
      <div className={styles.actions} style={{ marginBottom: "1rem" }}>
        <button
          type="button"
          className={styles.btn}
          onClick={() => setEditing(emptyForm())}
        >
          Add product
        </button>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search catalogue"
          style={{
            minHeight: "2rem",
            padding: "0.35rem 0.65rem",
            border: "1px solid rgba(122,21,48,0.18)",
            minWidth: "12rem",
          }}
        />
      </div>

      {editing ? (
        <div className={styles.panel} style={{ marginBottom: "1.25rem" }}>
          <h2>{editing.adminManaged && editing.id.startsWith("admin-") ? "New product" : "Edit product"}</h2>
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
            <div className={styles.row2}>
              <label>
                Primary colour
                <input
                  value={editing.primaryColor}
                  onChange={(e) =>
                    setEditing({ ...editing, primaryColor: e.target.value })
                  }
                />
              </label>
              <label>
                Hero image URL
                <input
                  value={editing.images.hero}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      images: { ...editing.images, hero: e.target.value },
                    })
                  }
                />
              </label>
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
            <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <input
                type="checkbox"
                checked={editing.featured}
                onChange={(e) =>
                  setEditing({ ...editing, featured: e.target.checked })
                }
              />
              Featured / bestseller
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
      ) : null}

      <div className={styles.panel}>
        <h2>Catalogue ({filtered.length})</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Article</th>
              <th>Status</th>
              <th>Stock</th>
              <th>Featured</th>
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
                <td>{product.status}</td>
                <td>{product.stockQty ?? "—"}</td>
                <td>{product.featured ? "Yes" : "No"}</td>
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
                      className={styles.btnGhost}
                      onClick={() =>
                        addToCart({
                          product,
                          quantity: 1,
                          shadeName: product.primaryColor || "Standard",
                          shadeHex: "#7a1530",
                          openDrawer: true,
                        })
                      }
                    >
                      Add to bag
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
