import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { portfolioProjects } from "@/lib/data/portfolio";
import { services } from "@/lib/data/services";
import { news } from "@/lib/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/portfolio`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/insights`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const portfolioRoutes: MetadataRoute.Sitemap = portfolioProjects.map((project) => ({
    url: `${SITE_URL}/portfolio/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const insightRoutes: MetadataRoute.Sitemap = news.map((article) => ({
    url: `${SITE_URL}/insights/${article.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes, ...insightRoutes];
}
