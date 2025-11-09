/**
 * Article Page
 *
 * This page displays a single article based on the slug parameter.
 * It fetches the article content from the filesystem and renders it
 * using KookieUI components and custom markdown styling that matches
 * the design system.
 */

import { getAllPosts, getPostBySlug } from "@/lib/articles";
import { notFound } from "next/navigation";
import { ArticleContent } from "./ArticleContent";

/**
 * Generates static paths for all articles
 *
 * This function enables static generation of all article pages at build time.
 * It returns an array of objects with the slugs of all articles.
 *
 * @returns Array of objects with slug parameters
 */
export async function generateStaticParams() {
  // Get all articles to generate their pages at build time
  const posts = getAllPosts();

  // Return an array of slug objects
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * ArticlePage component
 *
 * Renders a single article with its content and metadata.
 * Includes formatted date, tags, and the article content.
 * If the article is not found, it redirects to the not-found page.
 *
 * @param props - The component props
 * @param props.params - Object containing route parameters
 * @param props.params.slug - The unique identifier for the article
 * @returns React component for the article page
 */
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  try {
    // Get slug from params
    const { slug } = await params;

    // Try to fetch the article data
    const post = await getPostBySlug(slug);

    // Format the date for display
    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return (
      <ArticleContent
        post={{
          slug: post.slug,
          title: post.title,
          description: post.description,
          date: post.date,
          tags: post.tags,
          image: post.image,
          alt: post.alt,
        }}
        formattedDate={formattedDate}
      />
    );
  } catch {
    // Redirect to the not-found page if the article doesn't exist
    notFound();
  }
}
