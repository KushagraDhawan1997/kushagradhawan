"use client";

import React from "react";
import Link from "next/link";
import { ArticleProps } from "./ArticlesListGrid";
import { AspectRatio, Badge, Box, Card, Flex, Heading, Image, Inset, Text } from "@kushagradhawan/kookie-ui";
import { AIImageWithPrompt } from "@/components/generic";

interface ArticleCardProps {
  post: ArticleProps;
}

export function ArticleCard({ post }: ArticleCardProps) {
  // Format the date for display
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Derive a thumbnail path for article images in public/articles
  const deriveThumb = (src?: string) => {
    if (!src || !src.startsWith("/articles/")) return undefined;
    const match = src.match(/^\/articles\/([^\.]+)\.(png|jpg|jpeg|webp)$/i);
    if (!match) return undefined;
    const base = match[1];
    // Prefer 800w thumb as primary for sharper card rendering; include 400w for small viewports
    return {
      src: `/articles/thumbs/${base}-thumb-800.webp`,
      srcSet: `/articles/thumbs/${base}-thumb-400.webp 400w, /articles/thumbs/${base}-thumb-800.webp 800w`,
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    };
  };
  const thumb = deriveThumb(post.image);

  return (
    <Link href={`/articles/${post.slug}`}>
      <Flex direction="column" gap="4" p="1" style={{ height: "100%" }}>
        {/* Article image */}
        {post.image && (
          <Inset clip="padding-box">
            <AspectRatio ratio={16 / 10}>
              {post.imagePrompt ? (
                <AIImageWithPrompt prompt={post.imagePrompt}>
                  <Image
                    src={thumb?.src || post.image}
                    alt={post.alt || post.title}
                    srcSet={thumb?.srcSet}
                    sizes={thumb?.sizes}
                    radius="none"
                    width="100%"
                    height="100%"
                    fit="cover"
                  />
                </AIImageWithPrompt>
              ) : (
                <Image
                  src={thumb?.src || post.image}
                  alt={post.alt || post.title}
                  srcSet={thumb?.srcSet}
                  sizes={thumb?.sizes}
                  radius="none"
                  width="100%"
                  height="100%"
                  fit="cover"
                />
              )}
            </AspectRatio>
          </Inset>
        )}

        <Flex direction="column" gap="2" p="1" style={{ flex: 1 }}>
          {/* Date  */}
          <Text size="2" color="gray">
            {formattedDate}
          </Text>

          {/* Title */}
          <Heading size="3" weight="medium">
            {post.title}
          </Heading>

          {/* Description */}
          <Box
            as="div"
            style={{
              flex: 1,
              minHeight: 0,
            }}
          >
            <Text
              size="3"
              color="gray"
              as="p"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                margin: 0,
              }}
            >
              {post.description}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Link>
  );
}
