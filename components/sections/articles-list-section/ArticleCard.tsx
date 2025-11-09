"use client";

import React from "react";
import Link from "next/link";
import { ArticleProps } from "./ArticlesListGrid";
import { AspectRatio, Badge, Box, Card, Flex, Heading, Image, Inset, Text } from "@kushagradhawan/kookie-ui";

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

  return (
    <Card asChild size="3" variant="soft" style={{ height: "100%" }}>
      <Link href={`/articles/${post.slug}`}>
        <Flex direction="column" gap="4" p="1" style={{ height: "100%" }}>
          {/* Article image */}
          {post.image && (
            <Inset clip="padding-box">
              <AspectRatio ratio={16 / 10}>
                <Image src={post.image} alt={post.alt || post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </AspectRatio>
            </Inset>
          )}

          <Flex direction="column" gap="3" p="1" pt="5" style={{ flex: 1 }}>
            {/* Date at top */}
            <Text size="2" color="gray">
              {formattedDate}
            </Text>

            {/* Title */}
            <Heading size="4" weight="medium">
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
                size="4"
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

            {/* Tags using Badge component */}
            {/* {post.tags && post.tags.length > 0 && (
            <Flex gap="2" wrap="wrap" mt="auto" pt="4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="soft" highContrast size="1">
                  {tag}
                </Badge>
              ))}
            </Flex>
          )} */}
          </Flex>
        </Flex>
      </Link>
    </Card>
  );
}
