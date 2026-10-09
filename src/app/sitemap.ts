import { MetadataRoute } from "next";
import { KSIC_PRODUCTS } from "@/data/collections";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ksicsilk.karnataka.gov.in";

  const staticRoutes = [
    "",
    "/heritage",
    "/craft",
    "/collection",
    "/institution",
    "/stores",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const productRoutes = KSIC_PRODUCTS.map((prod) => ({
    url: `${baseUrl}/collection/${prod.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
