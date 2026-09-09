import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://coeur.ai";
  const now = new Date();

  const routes = [
    "",
    "/demo",
    "/pricing",
    "/contact",
    "/privacy",
    "/terms",
    "/medical-disclaimer",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/demo" || route === "/pricing" ? 0.9 : 0.7,
  }));
}
