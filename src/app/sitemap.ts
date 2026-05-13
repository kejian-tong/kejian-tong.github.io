import type { MetadataRoute } from "next";
import { projectsData } from "@/utils/data/projects-data";
import { absoluteUrl, siteConfig } from "@/utils/data/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.lastUpdated);

  const routes = [
    "/",
    "/kejian-tong",
    // include all projects from data to avoid manual maintenance
    ...projectsData.map((p) => `/projects/${p.slug}`),
  ];

  return routes.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
  }));
}
