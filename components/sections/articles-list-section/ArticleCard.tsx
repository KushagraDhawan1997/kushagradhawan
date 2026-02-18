"use client";

import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import { ArticleProps } from "./ArticlesListGrid";
import {
  AspectRatio,
  Box,
  Flex,
  Image,
  Link,
  Text,
} from "@kushagradhawan/kookie-ui";
import { WebGLImageTracker } from "@/components/webgl";

interface ArticleCardProps {
  post: ArticleProps;
}

export function ArticleCard({ post }: ArticleCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const isAnnouncement = post.category === "announcement";

  return (
    <Link asChild highContrast underline="hover">
      <NextLink href={`/articles/${post.slug}`}>
        <Flex
          width="100%"
          gap="4"
          align={{ initial: "start", sm: "center" }}
          direction={{ initial: "column", sm: "row" }}
        >
          {post.image && !isAnnouncement && (
            <Box
              flexShrink="0"
              width={{ initial: "100%", sm: "240px" }}
              style={{
                overflow: "hidden",
              }}
            >
              <AspectRatio ratio={16 / 9}>
                <WebGLImageTracker
                  id={`article-${post.slug}`}
                  src={post.image}
                  borderRadius={0}
                >
                  <Image
                    as={NextImage}
                    src={post.image}
                    alt={post.alt || post.title}
                    fill
                    sizes="240px"
                    style={{ objectFit: "cover" }}
                    radius="none"
                    decoding="async"
                  />
                </WebGLImageTracker>
              </AspectRatio>
            </Box>
          )}
          <Flex direction="column" gap="3" flexGrow="1">
            <Flex direction="column" gap="1">
              <Text size="3" weight="medium">
                {post.title}
              </Text>
              <Text size="3" color="gray">
                {post.description}
              </Text>
            </Flex>
            <Text size="2" weight="regular" color="gray">
              {formattedDate}
            </Text>
          </Flex>
        </Flex>
      </NextLink>
    </Link>
  );
}
