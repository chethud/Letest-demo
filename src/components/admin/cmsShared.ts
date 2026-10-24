import {
  COLLECTION_TILE_IDS,
  DEFAULT_COLLECTION_IMAGES,
  DEFAULT_HERO_IMAGES,
  type CollectionTileId,
} from "@/lib/cmsHome";

export const MAX_UPLOAD_BYTES = 2 * 1024 * 1024;

export type HeroSlot = {
  key: "heroSlide1Image" | "heroSlide2Image";
  label: string;
  hint: string;
  defaultSrc: string;
};

export const HERO_SLOTS: HeroSlot[] = [
  {
    key: "heroSlide1Image",
    label: "Home hero · Slide 1",
    hint: "Legacy craftsmanship slide (first image)",
    defaultSrc: DEFAULT_HERO_IMAGES[0],
  },
  {
    key: "heroSlide2Image",
    label: "Home hero · Slide 2",
    hint: "New arrivals slide (second image)",
    defaultSrc: DEFAULT_HERO_IMAGES[1],
  },
];

export const COLLECTION_LABELS: Record<CollectionTileId, { label: string; hint: string }> = {
  sarees: { label: "Sarees", hint: "Large mosaic tile — A legacy in every drape" },
  festive: { label: "Festive", hint: "For days that shine" },
  wedding: { label: "Wedding", hint: "Made for the moment" },
  menswear: { label: "Menswear", hint: "The considered classic" },
  gifts: { label: "Gifts", hint: "A keepsake of Karnataka" },
};

export { COLLECTION_TILE_IDS, DEFAULT_COLLECTION_IMAGES };

export function readImageFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (file.size > MAX_UPLOAD_BYTES) {
      reject(new Error("Please choose an image under 2 MB for this demo."));
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
