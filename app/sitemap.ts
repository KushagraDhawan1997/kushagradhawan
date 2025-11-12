import { getAllPosts } from "@/lib/articles";
import { MetadataRoute } from "next";

export const runtime = "nodejs";
// Next.js requires a numeric literal here (no expressions)
export const revalidate = 86400; // 24h

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base URL
  const baseUrl = "https://kushagradhawan.com";

  // Get all articles
  const articles = getAllPosts();

  // Create sitemap entries for all articles
  const articleEntries = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Define static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Combine all entries
  return [...routes, ...articleEntries];
}
