"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { KSIC_PRODUCTS, type KSICProduct } from "@/data/collections";
import { readJson, writeJson } from "@/lib/storage";

const CATALOG_KEY = "ksic-catalog-overrides-v1";

export type AdminProduct = KSICProduct & {
  stockQty?: number;
  /** True when created/edited via admin (not only base seed). */
  adminManaged?: boolean;
};

type CatalogOverrideStore = {
  /** Full product records keyed by id (creates + edits). */
  byId: Record<string, AdminProduct>;
  /** Soft-deleted base product ids. */
  deletedIds: string[];
};

type CatalogContextValue = {
  hydrated: boolean;
  products: AdminProduct[];
  getBySlug: (slug: string) => AdminProduct | undefined;
  getById: (id: string) => AdminProduct | undefined;
  upsertProduct: (product: AdminProduct) => void;
  deleteProduct: (id: string) => void;
  setFeatured: (id: string, featured: boolean) => void;
  setStatus: (id: string, status: KSICProduct["status"]) => void;
  setStockQty: (id: string, stockQty: number) => void;
};

const CatalogContext = createContext<CatalogContextValue | null>(null);

const emptyStore = (): CatalogOverrideStore => ({ byId: {}, deletedIds: [] });

function mergeCatalog(store: CatalogOverrideStore): AdminProduct[] {
  const base = KSIC_PRODUCTS.filter((item) => !store.deletedIds.includes(item.id)).map(
    (item) => {
      const override = store.byId[item.id];
      return override ? { ...item, ...override, adminManaged: true } : { ...item };
    },
  );

  const baseIds = new Set(KSIC_PRODUCTS.map((item) => item.id));
  const created = Object.values(store.byId).filter(
    (item) => !baseIds.has(item.id) && !store.deletedIds.includes(item.id),
  );

  return [...created, ...base];
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

export function createEmptyProduct(): AdminProduct {
  const stamp = Date.now().toString(36);
  return {
    id: `admin-${stamp}`,
    slug: `article-admin-${stamp}`,
    articleNumber: `Article ADM-${stamp.toUpperCase()}`,
    name: "New Mysore Silk Saree",
    category: "Mysore Silk Sarees",
    collection: "Admin Catalogue",
    tagline: "Added from the KSIC admin dashboard.",
    description: "Describe the weave, colour, and border for this article.",
    material: "Pure mulberry silk",
    zari: "Certified Pure Zari: 65% pure silver and 0.65% gold",
    dimensions: "5.5 meters length + 0.8 meter matching blouse piece · 45 inches width",
    weaveType: "Pebble Crepe",
    borderMotif: "Temple border",
    primaryColor: "Classic Red",
    authenticity: {
      giTag: "GI-11 (Registered Proprietor: KSIC Ltd)",
      serialCodePattern: "Embroidered unique alphanumeric code on pallu reverse",
      hologramType: "Tamper-evident KSIC Optical Hologram",
      silkPurityMark: "100% Pure Silk Guaranteed by Government of Karnataka",
    },
    availability: "Showroom enquiry",
    showroomAvailability: ["Bengaluru · M.G. Road"],
    status: "in_production",
    images: {
      hero: "/assets/collection/editorial-sarees.jpg",
    },
    featured: false,
    stockQty: 10,
    adminManaged: true,
  };
}

export function CatalogProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [store, setStore] = useState<CatalogOverrideStore>(emptyStore);

  useEffect(() => {
    setStore(readJson<CatalogOverrideStore>(CATALOG_KEY, emptyStore()));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    writeJson(CATALOG_KEY, store);
  }, [store, hydrated]);

  const products = useMemo(() => mergeCatalog(store), [store]);

  const getBySlug = useCallback(
    (slug: string) => products.find((item) => item.slug === slug),
    [products],
  );

  const getById = useCallback(
    (id: string) => products.find((item) => item.id === id),
    [products],
  );

  const upsertProduct = useCallback((product: AdminProduct) => {
    setStore((prev) => {
      const slug =
        product.slug?.trim() ||
        slugify(product.name || product.articleNumber || product.id);
      const nextProduct: AdminProduct = {
        ...product,
        slug,
        adminManaged: true,
      };
      return {
        ...prev,
        deletedIds: prev.deletedIds.filter((id) => id !== nextProduct.id),
        byId: { ...prev.byId, [nextProduct.id]: nextProduct },
      };
    });
  }, []);

  const deleteProduct = useCallback((id: string) => {
    setStore((prev) => {
      const nextById = { ...prev.byId };
      delete nextById[id];
      const isBase = KSIC_PRODUCTS.some((item) => item.id === id);
      return {
        byId: nextById,
        deletedIds: isBase
          ? Array.from(new Set([...prev.deletedIds, id]))
          : prev.deletedIds,
      };
    });
  }, []);

  const setFeatured = useCallback(
    (id: string, featured: boolean) => {
      const current = getById(id);
      if (!current) return;
      upsertProduct({ ...current, featured });
    },
    [getById, upsertProduct],
  );

  const setStatus = useCallback(
    (id: string, status: KSICProduct["status"]) => {
      const current = getById(id);
      if (!current) return;
      upsertProduct({ ...current, status });
    },
    [getById, upsertProduct],
  );

  const setStockQty = useCallback(
    (id: string, stockQty: number) => {
      const current = getById(id);
      if (!current) return;
      upsertProduct({ ...current, stockQty: Math.max(0, Math.floor(stockQty)) });
    },
    [getById, upsertProduct],
  );

  const value = useMemo<CatalogContextValue>(
    () => ({
      hydrated,
      products,
      getBySlug,
      getById,
      upsertProduct,
      deleteProduct,
      setFeatured,
      setStatus,
      setStockQty,
    }),
    [
      hydrated,
      products,
      getBySlug,
      getById,
      upsertProduct,
      deleteProduct,
      setFeatured,
      setStatus,
      setStockQty,
    ],
  );

  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  );
}

export function useCatalog() {
  const ctx = useContext(CatalogContext);
  if (!ctx) throw new Error("useCatalog must be used within CatalogProvider");
  return ctx;
}
