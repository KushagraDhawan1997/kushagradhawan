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
import type { Metadata } from "next";

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
 * Generate per-article metadata for SEO and social sharing
 */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    const baseUrl = "https://kushagradhawan.com";
    const url = `${baseUrl}/articles/${post.slug}`;
    const imageUrl = post.image ? (post.image.startsWith("http") ? post.image : `${baseUrl}${post.image}`) : `${baseUrl}/kushagra-logo.png`;

    return {
      title: { absolute: post.title },
      description: post.description || undefined,
      alternates: {
        canonical: `/articles/${post.slug}`,
      },
      openGraph: {
        type: "article",
        url,
        title: post.title,
        description: post.description || undefined,
        publishedTime: new Date(post.date).toISOString(),
        tags: post.tags,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: post.alt || post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description || undefined,
        images: [imageUrl],
      },
    };
  } catch {
    return {};
  }
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

    const baseUrl = "https://kushagradhawan.com";
    const pageUrl = `${baseUrl}/articles/${post.slug}`;
    const imageUrl = post.image ? (post.image.startsWith("http") ? post.image : `${baseUrl}${post.image}`) : `${baseUrl}/kushagra-logo.png`;

    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline: post.title,
      description: post.description,
      image: [imageUrl],
      datePublished: new Date(post.date).toISOString(),
      dateModified: new Date(post.date).toISOString(),
      author: {
        "@type": "Person",
        name: "Kushagra Dhawan",
        url: baseUrl,
      },
      publisher: {
        "@type": "Person",
        name: "Kushagra Dhawan",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/kushagra-logo.png`,
        },
      },
      keywords: post.tags && post.tags.length ? post.tags.join(", ") : undefined,
    };

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
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
      </>
    );
  } catch {
    // Redirect to the not-found page if the article doesn't exist
    notFound();
  }
}
