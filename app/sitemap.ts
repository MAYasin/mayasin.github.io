import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mayasin.github.io";

  return [
    {
      url: baseUrl,
      lastModified: "2026-01-03T11:00:00.000Z",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
