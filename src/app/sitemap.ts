import type { MetadataRoute } from "next";
import { projectsData } from "@/utils/data/projects-data";
import { absoluteUrl } from "@/utils/data/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

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
