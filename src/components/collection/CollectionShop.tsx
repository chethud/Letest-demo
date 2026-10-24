"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, Heart, SlidersHorizontal, X } from "lucide-react";
import { COLLECTION_CATEGORIES, KSICProduct } from "@/data/collections";
import { useShop } from "@/context/ShopContext";
import { useCatalog } from "@/context/CatalogContext";
import styles from "./CollectionShop.module.css";

type ShopView = "all" | "new" | "bestsellers";
type SortBy = "newest" | "featured" | "name" | "color" | "weight-asc" | "weight-desc";

function matchesCategory(prod: KSICProduct, categoryId: string) {
  if (categoryId === "all") return true;
  const cat = COLLECTION_CATEGORIES.find((item) => item.id === categoryId);
  if (!cat) return false;
  const name = cat.name.toLowerCase();
  const category = prod.category.toLowerCase();
  return category === name || category.includes(name);
}

function parseView(raw: string | null): ShopView {
  if (raw === "new") return "new";
  if (raw === "bestsellers") return "bestsellers";
  return "all";
}

function statusLabel(status: KSICProduct["status"]) {
  if (status === "in_production") return "In stock";
  if (status === "heritage_reserve") return "Heritage reserve";
  return "Archived";
}

function statusRank(status: KSICProduct["status"]) {
  if (status === "in_production") return 0;
  if (status === "heritage_reserve") return 1;
  return 2;
}

const VIEW_COPY: Record<
  ShopView,
  { title: string; titleAccent: string; breadcrumb: string; lead: string }
> = {
  all: {
    title: "All",
    titleAccent: "Sarees.",
    breadcrumb: "Shop",
    lead: "Every authentic KSIC Mysore Silk saree in one shop. Use filters for category, colour, or bestsellers. Newest weaves stay on top.",
  },
  new: {
    title: "New",
    titleAccent: "Arrivals.",
    breadcrumb: "New Arrivals",
    lead: "Full catalogue, sorted with the newest loom additions first.",
  },
  bestsellers: {
    title: "Best",
    titleAccent: "Sellers.",
    breadcrumb: "Bestsellers",
    lead: "Our most sought-after Mysore Silk weaves from the same catalogue.",
  },
};

export type CollectionShopProps = {
  products: KSICProduct[];
  /** @deprecated Copy and filters are driven by ?view= */
  title?: string;
  titleAccent?: string;
  breadcrumbLabel?: string;
  description?: string;
  heroImage?: string;
  heroAlt?: string;
  readCategoryFromUrl?: boolean;
  omitHeaderOffset?: boolean;
};

export default function CollectionShop({
  products,
  heroImage = "/assets/heritage/hero-new-arrivals.png",
  heroAlt = "Crimson Mysore silk with gold zari",
  omitHeaderOffset = false,
}: CollectionShopProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const view = parseView(searchParams.get("view"));
  const copy = VIEW_COPY[view];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [bestsellersOnly, setBestsellersOnly] = useState(view === "bestsellers");
  const [sortBy, setSortBy] = useState<SortBy>(view === "bestsellers" ? "featured" : "newest");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { isWishlisted, toggleWishlist } = useShop();
  const { products: catalogProducts, hydrated: catalogHydrated } = useCatalog();
  const sourceProducts = catalogHydrated ? catalogProducts : products;

  // Keep local filter/sort in sync when Shop subnav changes the URL view
  useEffect(() => {
    const nextView = parseView(searchParams.get("view"));
    setBestsellersOnly(nextView === "bestsellers");
    setSortBy(nextView === "bestsellers" ? "featured" : "newest");

    const category = searchParams.get("category");
    if (category && COLLECTION_CATEGORIES.some((item) => item.id === category)) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const setViewInUrl = (nextView: ShopView, category = selectedCategory) => {
    const params = new URLSearchParams(searchParams.toString());
    if (nextView === "all") params.delete("view");
    else params.set("view", nextView);

    if (category && category !== "all") params.set("category", category);
    else params.delete("category");

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const colors = useMemo(() => {
    const set = new Set(sourceProducts.map((p) => p.primaryColor).filter(Boolean));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [sourceProducts]);

  const categoryCounts = useMemo(() => {
    const base = bestsellersOnly ? sourceProducts.filter((p) => p.featured) : sourceProducts;
    const counts: Record<string, number> = { all: base.length };
    COLLECTION_CATEGORIES.forEach((cat) => {
      counts[cat.id] = base.filter((prod) => matchesCategory(prod, cat.id)).length;
    });
    return counts;
  }, [sourceProducts, bestsellersOnly]);

  const filteredProducts = useMemo(() => {
    const list = sourceProducts.filter((prod) => {
      if (bestsellersOnly && !prod.featured) return false;
      if (!matchesCategory(prod, selectedCategory)) return false;
      if (selectedColor !== "all" && prod.primaryColor !== selectedColor) return false;
      if (selectedStatus !== "all" && prod.status !== selectedStatus) return false;
      return true;
    });

    const sorted = [...list];
    if (sortBy === "newest") {
      sorted.sort(
        (a, b) =>
          statusRank(a.status) - statusRank(b.status) ||
          Number(b.featured) - Number(a.featured) ||
          a.name.localeCompare(b.name),
      );
    } else if (sortBy === "featured") {
      sorted.sort((a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name));
    } else if (sortBy === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "color") {
      sorted.sort((a, b) => a.primaryColor.localeCompare(b.primaryColor));
    } else if (sortBy === "weight-asc") {
      sorted.sort(
        (a, b) =>
          (a.weightGrams ?? Number.POSITIVE_INFINITY) - (b.weightGrams ?? Number.POSITIVE_INFINITY),
      );
    } else if (sortBy === "weight-desc") {
      sorted.sort((a, b) => (b.weightGrams ?? 0) - (a.weightGrams ?? 0));
    }
    return sorted;
  }, [sourceProducts, bestsellersOnly, selectedCategory, selectedColor, selectedStatus, sortBy]);

  const activeFilterCount =
    (selectedCategory !== "all" ? 1 : 0) +
    (selectedColor !== "all" ? 1 : 0) +
    (selectedStatus !== "all" ? 1 : 0) +
    (bestsellersOnly ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedColor("all");
    setSelectedStatus("all");
    setBestsellersOnly(false);
    setSortBy("newest");
    setViewInUrl("all", "all");
  };

  const toggleBestsellers = (on: boolean) => {
    setBestsellersOnly(on);
    setSortBy(on ? "featured" : "newest");
    setViewInUrl(on ? "bestsellers" : view === "new" ? "new" : "all");
  };

  return (
    <div className={`${styles.page}${omitHeaderOffset ? ` ${styles.pageFlush}` : ""}`}>
      <header className={styles.shopHeader}>
        <div className={styles.shopHeaderInner}>
          <div className={styles.shopHeaderCopy}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/collection">Shop</Link>
              {view !== "all" ? (
                <>
                  <span aria-hidden="true">/</span>
                  <span>{copy.breadcrumb}</span>
                </>
              ) : null}
            </nav>
            <h1 className={styles.title}>
              {copy.title} <span>{copy.titleAccent}</span>
            </h1>
            <p className={styles.lead}>{copy.lead}</p>
          </div>
          <figure className={styles.shopHeaderVisual}>
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 40vw"
              className={styles.shopHeaderImage}
            />
          </figure>
        </div>
      </header>

      <div className={styles.shopBody}>
        <button
          type="button"
          className={styles.mobileFiltersBtn}
          aria-expanded={filtersOpen}
          onClick={() => setFiltersOpen(true)}
        >
          <SlidersHorizontal size={16} strokeWidth={1.75} aria-hidden="true" />
          Filters
          {activeFilterCount > 0 ? <span className={styles.filterBadge}>{activeFilterCount}</span> : null}
        </button>

        {filtersOpen ? (
          <button
            type="button"
            className={styles.filtersBackdrop}
            aria-label="Close filters"
            onClick={() => setFiltersOpen(false)}
          />
        ) : null}

        <aside
          className={`${styles.sidebar}${filtersOpen ? ` ${styles.sidebarOpen}` : ""}`}
          aria-label="Shop filters"
        >
          <div className={styles.sidebarHead}>
            <p className={styles.sidebarTitle}>Filters</p>
            <button
              type="button"
              className={styles.sidebarClose}
              aria-label="Close filters"
              onClick={() => setFiltersOpen(false)}
            >
              <X size={18} strokeWidth={1.75} />
            </button>
          </div>

          {activeFilterCount > 0 ? (
            <button type="button" className={styles.clearFilters} onClick={clearFilters}>
              Clear all ({activeFilterCount})
            </button>
          ) : null}

          <div className={styles.filterGroup}>
            <p className={styles.filterHeading}>Shop focus</p>
            <ul className={styles.filterList}>
              <li>
                <button
                  type="button"
                  className={`${styles.filterOption} ${!bestsellersOnly && view !== "new" ? styles.filterOptionActive : ""}`}
                  onClick={() => {
                    setBestsellersOnly(false);
                    setSortBy("newest");
                    setViewInUrl("all");
                  }}
                >
                  <span>All sarees</span>
                  <span>{sourceProducts.length}</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`${styles.filterOption} ${view === "new" && !bestsellersOnly ? styles.filterOptionActive : ""}`}
                  onClick={() => {
                    setBestsellersOnly(false);
                    setSortBy("newest");
                    setViewInUrl("new");
                  }}
                >
                  <span>New arrivals</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`${styles.filterOption} ${bestsellersOnly ? styles.filterOptionActive : ""}`}
                  onClick={() => toggleBestsellers(true)}
                >
                  <span>Bestsellers</span>
                  <span>{sourceProducts.filter((p) => p.featured).length}</span>
                </button>
              </li>
            </ul>
          </div>

          <div className={styles.filterGroup}>
            <p className={styles.filterHeading}>Category</p>
            <ul className={styles.filterList}>
              <li>
                <button
                  type="button"
                  className={`${styles.filterOption} ${selectedCategory === "all" ? styles.filterOptionActive : ""}`}
                  onClick={() => {
                    setSelectedCategory("all");
                    setViewInUrl(bestsellersOnly ? "bestsellers" : view === "new" ? "new" : "all", "all");
                  }}
                >
                  <span>All categories</span>
                  <span>{categoryCounts.all}</span>
                </button>
              </li>
              {COLLECTION_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    className={`${styles.filterOption} ${selectedCategory === cat.id ? styles.filterOptionActive : ""}`}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setViewInUrl(
                        bestsellersOnly ? "bestsellers" : view === "new" ? "new" : "all",
                        cat.id,
                      );
                    }}
                  >
                    <span>{cat.name}</span>
                    <span>{categoryCounts[cat.id] ?? 0}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {colors.length > 0 ? (
            <div className={styles.filterGroup}>
              <p className={styles.filterHeading}>Colour</p>
              <ul className={styles.filterList}>
                <li>
                  <button
                    type="button"
                    className={`${styles.filterOption} ${selectedColor === "all" ? styles.filterOptionActive : ""}`}
                    onClick={() => setSelectedColor("all")}
                  >
                    <span>All colours</span>
                  </button>
                </li>
                {colors.map((color) => (
                  <li key={color}>
                    <button
                      type="button"
                      className={`${styles.filterOption} ${selectedColor === color ? styles.filterOptionActive : ""}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      <span className={styles.colorDot} aria-hidden="true" />
                      <span>{color}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className={styles.filterGroup}>
            <p className={styles.filterHeading}>Availability</p>
            <ul className={styles.filterList}>
              {(
                [
                  ["all", "Any status"],
                  ["in_production", "In stock"],
                  ["heritage_reserve", "Heritage reserve"],
                  ["archived", "Archived"],
                ] as const
              ).map(([value, label]) => (
                <li key={value}>
                  <button
                    type="button"
                    className={`${styles.filterOption} ${selectedStatus === value ? styles.filterOptionActive : ""}`}
                    onClick={() => setSelectedStatus(value)}
                  >
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className={styles.applyFilters}
            onClick={() => setFiltersOpen(false)}
          >
            Show {filteredProducts.length} result{filteredProducts.length === 1 ? "" : "s"}
          </button>
        </aside>

        <section className={styles.main} aria-label="Shop products">
          <div className={styles.toolbar}>
            <p className={styles.count}>
              Showing <strong>{filteredProducts.length}</strong> of {sourceProducts.length} article
              {sourceProducts.length === 1 ? "" : "s"}
              {bestsellersOnly ? " · Bestsellers" : null}
              {view === "new" && !bestsellersOnly ? " · Newest first" : null}
            </p>
            <label className={styles.sort}>
              <span className={styles.sortLabel}>Sort by</span>
              <span className={styles.sortControl}>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value as SortBy)}
                  aria-label="Sort products"
                >
                  <option value="newest">Newest first</option>
                  <option value="featured">Bestsellers first</option>
                  <option value="name">Name A-Z</option>
                  <option value="color">Colour A-Z</option>
                  <option value="weight-asc">Weight: Light to Heavy</option>
                  <option value="weight-desc">Weight: Heavy to Light</option>
                </select>
                <ChevronDown size={14} strokeWidth={2} aria-hidden="true" />
              </span>
            </label>
          </div>

          {filteredProducts.length === 0 ? (
            <div className={styles.empty}>
              <p>No articles match these filters.</p>
              <button type="button" className={styles.clearFilters} onClick={clearFilters}>
                Clear filters
              </button>
            </div>
          ) : (
            <ul className={styles.grid}>
              {filteredProducts.map((prod) => {
                const hoverSrc = prod.images.detail || prod.images.pallu || prod.images.hero;
                const hasHover = Boolean(prod.images.detail || prod.images.pallu);
                return (
                  <li key={prod.id} className={styles.card}>
                    <div className={styles.mediaWrap}>
                      <Link href={`/collection/${prod.slug}`} className={styles.media}>
                        <Image
                          src={prod.images.hero}
                          alt={prod.name}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 25vw"
                          className={`${styles.image} ${styles.imagePrimary}`}
                        />
                        {hasHover ? (
                          <Image
                            src={hoverSrc}
                            alt=""
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 25vw"
                            className={`${styles.image} ${styles.imageSecondary}`}
                          />
                        ) : null}
                        {prod.featured ? <span className={styles.featuredTag}>Bestseller</span> : null}
                      </Link>
                      <button
                        type="button"
                        className={`${styles.wish}${isWishlisted(prod.id) ? ` ${styles.wishActive}` : ""}`}
                        aria-label={
                          isWishlisted(prod.id)
                            ? `Remove ${prod.name} from saved`
                            : `Save ${prod.name}`
                        }
                        aria-pressed={isWishlisted(prod.id)}
                        onClick={() => toggleWishlist(prod)}
                      >
                        <Heart
                          size={15}
                          strokeWidth={1.5}
                          fill={isWishlisted(prod.id) ? "currentColor" : "none"}
                        />
                      </button>
                      <Link href={`/collection/${prod.slug}`} className={styles.quickView}>
                        View details
                      </Link>
                    </div>

                    <div className={styles.meta}>
                      <p className={styles.cardCategory}>{prod.category}</p>
                      <Link href={`/collection/${prod.slug}`} className={styles.name}>
                        {prod.name}
                      </Link>
                      <p className={styles.cardAttrs}>
                        {prod.primaryColor}
                        {prod.weightGrams ? ` · ${prod.weightGrams}g` : ""}
                      </p>
                      <div className={styles.cardFooter}>
                        <span
                          className={`${styles.stock} ${
                            prod.status === "in_production" ? styles.stockIn : styles.stockOther
                          }`}
                        >
                          {statusLabel(prod.status)}
                        </span>
                        {prod.articleNumber ? (
                          <span className={styles.sku}>{prod.articleNumber}</span>
                        ) : null}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
