import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://teamprint.kz";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/flags`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/sublimation`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/sport`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/textile`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/interior`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/cases`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/fabrics`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/for-partners`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/about`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contacts`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/blog`, priority: 0.7, changeFrequency: "weekly" as const },
  ];

  return staticPages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
