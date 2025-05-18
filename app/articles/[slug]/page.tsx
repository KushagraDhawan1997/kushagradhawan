/**
 * Article Page
 *
 * This page displays a single article based on the slug parameter.
 * It fetches the article content from the filesystem, parses the markdown,
 * and renders it as HTML with syntax highlighting and styling.
 */

import { SectionWrapper } from "@/components/generic/ui/section-wrapper";
import { getAllPosts, getPostBySlug } from "@/lib/articles";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMonochromaticGradient } from "@/lib/gradient";

/**
 * Generates metadata for the article page
 *
 * This function is used by Next.js for SEO optimization and document head tags.
 * It dynamically generates the metadata based on the article content.
 * If the article is not found, fallback metadata is returned.
 *
 * @param params - The route parameters including the slug
 * @returns Metadata object with title and description
 */

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    // Get slug from params
    const slug = params.slug;

    // Try to fetch the article data
    const post = await getPostBySlug(slug);

    // Generate OG image URL
    const ogImageUrl = new URL(`/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(post.description)}`, process.env.NEXT_PUBLIC_APP_URL || "https://kushagradhawan.com").toString();

    // Return enhanced metadata based on the article
    return {
      title: `${post.title} | Kushagra Dhawan`,
      description: post.description,
      keywords: [...post.tags, "Kushagra Dhawan", "article", "blog"],
      alternates: {
        canonical: `/articles/${slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.description,
        url: `https://kushagradhawan.com/articles/${slug}`,
        type: "article",
        publishedTime: post.date,
        authors: ["Kushagra Dhawan"],
        tags: post.tags,
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: [ogImageUrl],
      },
    };
  } catch {
    // Fallback metadata if article is not found
    return {
      title: "Article Not Found | Kushagra Dhawan",
      description: "The requested article could not be found.",
    };
  }
}

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
export default async function ArticlePage({ params }: { params: { slug: string } }) {
  try {
    // Get slug from params
    const slug = params.slug;

    // Try to fetch the article data
    const post = await getPostBySlug(slug);

    // Format the date for display
    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Get gradient styling for headline text
    const gradientText = getMonochromaticGradient();

    // Create JSON-LD structured data for the article
    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      author: {
        "@type": "Person",
        name: "Kushagra Dhawan",
        url: "https://kushagradhawan.com",
      },
      datePublished: post.date,
      dateModified: post.date,
      publisher: {
        "@type": "Person",
        name: "Kushagra Dhawan",
        url: "https://kushagradhawan.com",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://kushagradhawan.com/articles/${slug}`,
      },
      keywords: post.tags.join(", "),
      url: `https://kushagradhawan.com/articles/${slug}`,
    };

    return (
      <SectionWrapper noBorderTop>
        {/* Add structured data for the article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleJsonLd),
          }}
        />

        <main className="max-w-7xl mx-auto px-6">
          <article className="max-w-3xl mx-auto grid grid-flow-row gap-16">
            {/* Article header with title, date, and tags */}
            <header className="">
              {/* Publication date */}
              <div className="flex items-center text-neutral-600 dark:text-neutral-400 mb-4">
                <time dateTime={post.date}>{formattedDate}</time>
              </div>

              {/* Article title */}
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none pb-4 ${gradientText}`}>{post.title}</h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground font-medium mb-6">{post.description}</p>

              {/* Tags list */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="inline-block text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Article content rendered as HTML with styling */}
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </main>
      </SectionWrapper>
    );
  } catch {
    // Redirect to the not-found page if the article doesn't exist
    notFound();
  }
}
