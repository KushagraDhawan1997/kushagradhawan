/**
 * Articles List Page
 *
 * This page displays a list of all articles with their metadata.
 * Articles are fetched from the filesystem using the getAllPosts utility function.
 * Each article is displayed as a card with title, description, date, and tags.
 */

import { getAllPosts } from "@/lib/articles";
import { Metadata } from "next";
import { ArticlesListSection } from "@/components/sections/articles-list-section";

/**
 * Metadata for the articles list page
 * This is used by Next.js for SEO and document head tags
 */
export const metadata: Metadata = {
  title: "Articles | Kushagra Dhawan",
  description: "Thoughts on design, development, and technology",
};

/**
 * ArticlesPage component
 *
 * Renders a list of all articles sorted by date (newest first).
 * If no articles are available, displays a "No articles yet" message.
 *
 * @returns React component for the articles list page
 */
export default function ArticlesPage() {
  // Fetch all articles from the filesystem
  const posts = getAllPosts();

  return (
    <>
      <ArticlesListSection posts={posts} />
    </>
  );
}
