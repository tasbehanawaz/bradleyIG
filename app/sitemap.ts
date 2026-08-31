import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const publicRoutes = [
  "/",
  "/about",
  "/companies",
  "/how-we-operate",
  "/identic-ai",
  "/leadership",
  "/letters",
  "/letters/a-message-from-joseph-m-bradley",
  "/news",
  "/governance",
  "/contact",
  "/investor-information",
  "/privacy",
  "/terms",
  "/accessibility",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicRoutes.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/letters/") ? 0.7 : 0.8,
  }));
}
