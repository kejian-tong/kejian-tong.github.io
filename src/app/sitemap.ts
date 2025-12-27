import type { MetadataRoute } from "next";
import { projectsData } from "@/utils/data/projects-data";

const SITE_URL = "https://kejian-tong.github.io";

function canonicalize(path: string) {
  let p = path.startsWith("/") ? path : `/${path}`;
  if (p !== "/") p = p.replace(/\/+$/, "");
  return p === "/" ? SITE_URL : `${SITE_URL}${p}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "/",
    // include all projects from data to avoid manual maintenance
    ...projectsData.map((p) => `/projects/${p.slug}`),
  ];

  return routes.map((path) => ({
    url: canonicalize(path),
    lastModified,
  }));
}
