"use client";

import React, { Suspense } from "react";
import {
  Badge,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  AspectRatio,
  Separator,
  Box,
} from "@kushagradhawan/kookie-ui";
import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "../../../mdx-components";
import NextImage from "next/image";
import { WebGLImageTracker } from "@/components/webgl";
interface ArticleContentProps {
  post: {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    image?: string;
    alt?: string;
    imagePrompt?: string;
  };
  formattedDate: string;
}

/**
 * ArticleContent component
 *
 * Client-side component that renders the article content using MDX components.
 * This component handles the interactive UI elements and styling.
 */
export function ArticleContent({ post, formattedDate }: ArticleContentProps) {
  // Provide KookieUI-aware MDX components
  const components = useMDXComponents({});

  // Statically map known slugs to MDX components so bundler includes them
  const MDXBySlug: Record<
    string,
    React.LazyExoticComponent<React.ComponentType<any>>
  > = {
    "about-me": React.lazy(
      () => import("../../../content/articles/about-me.mdx"),
    ),
    "about-kookie-ui": React.lazy(
      () => import("../../../content/articles/about-kookie-ui.mdx"),
    ),
    "about-kookie-ai": React.lazy(
      () => import("../../../content/articles/about-kookie-ai.mdx"),
    ),
    // "building-products-that-scale": React.lazy(() => import("../../../content/articles/building-products-that-scale.mdx")),
    "leadership-approaches": React.lazy(
      () => import("../../../content/articles/leadership-approaches.mdx"),
    ),
    "product-philosophy": React.lazy(
      () => import("../../../content/articles/product-philosophy.mdx"),
    ),
    "womp-spark-update": React.lazy(
      () => import("../../../content/articles/womp-spark-update.mdx"),
    ),
    "kookie-chatbar-update": React.lazy(
      () => import("../../../content/articles/kookie-chatbar-update.mdx"),
    ),
    "designers-own-the-experience-in-production": React.lazy(
      () =>
        import("../../../content/articles/designers-own-the-experience-in-production.mdx"),
    ),
    "queen-lukita-lore": React.lazy(
      () => import("../../../content/articles/queen-lukita-lore.mdx"),
    ),
    "on-ai": React.lazy(() => import("../../../content/articles/on-ai.mdx")),
    "kookie-blocks-streaming-markdown": React.lazy(
      () =>
        import("../../../content/articles/kookie-blocks-streaming-markdown.mdx"),
    ),
    "about-shell": React.lazy(
      () => import("../../../content/articles/about-shell.mdx"),
    ),
    "kookie-card": React.lazy(
      () => import("../../../content/articles/kookie-card.mdx"),
    ),
  };

  const MDXContent = MDXBySlug[post.slug];

  return (
    <Box>
      <Box px={{ initial: "4", sm: "6" }}>
        {/* Article header image */}
        {post.image && (
          <AspectRatio ratio={3 / 1}>
            <WebGLImageTracker
              id={`article-hero-${post.slug}`}
              src={post.image}
            >
              <Image
                as={NextImage}
                src={post.image}
                alt={post.alt || post.title}
                fill
                radius="none"
                sizes="(max-width: 768px) 100vw, 1200px"
                style={{ objectFit: "cover" }}
                priority
                decoding="async"
              />
            </WebGLImageTracker>
          </AspectRatio>
        )}
      </Box>
      <Container size="2">
        <Flex direction="column" gap="9" p="6">
          <article>
            {/* Article header with title, date, and tags */}
            <Flex direction="column" gap="6" py="8">
              {/* Publication date */}
              <Text size="2" color="gray">
                <time dateTime={post.date}>{formattedDate}</time>
              </Text>

              {/* Article title */}
              <Heading as="h1" size="9" weight="medium">
                {post.title}
              </Heading>

              {/* Tags list */}
              {post.tags.length > 0 && (
                <Flex gap="2" wrap="wrap">
                  {post.tags.map((tag: string) => (
                    <Badge highContrast key={tag} variant="soft" size="2">
                      {tag}
                    </Badge>
                  ))}
                </Flex>
              )}

              {/* Description */}
              <Text size="4" color="gray">
                {post.description}
              </Text>

              <Separator size="4"></Separator>
            </Flex>
            {/* Article content rendered via direct MDX import with provider */}
            {MDXContent ? (
              <MDXProvider components={components}>
                <Suspense fallback={<div>Loading article content...</div>}>
                  <Flex direction="column" gap="0">
                    <MDXContent />
                  </Flex>
                </Suspense>
              </MDXProvider>
            ) : (
              <Text size="3" color="gray">
                Article content not found for slug: {post.slug}
              </Text>
            )}
          </article>
        </Flex>
      </Container>
    </Box>
  );
}
