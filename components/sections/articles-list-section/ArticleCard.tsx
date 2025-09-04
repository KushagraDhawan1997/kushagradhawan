"use client";

import React from "react";
import Link from "next/link";
import { ArticleProps } from "./ArticlesListGrid";
import { Badge, Card, Flex, Heading, Text } from "@kushagradhawan/kookie-ui";

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
        <Flex direction="column" gap="4" p="4" style={{ height: "100%" }}>
          {/* Date at top */}
          <Text size="2" color="gray">
            {formattedDate}
          </Text>

          {/* Title */}
          <Heading size="3" weight="medium">
            {post.title}
          </Heading>

          {/* Description */}
          <Text size="3" color="gray" style={{ flex: 1 }}>
            {post.description}
          </Text>

          {/* Tags using Badge component */}
          {post.tags && post.tags.length > 0 && (
            <Flex gap="2" wrap="wrap" mt="auto" pt="4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="soft" highContrast size="1">
                  {tag}
                </Badge>
              ))}
            </Flex>
          )}
        </Flex>
      </Link>
    </Card>
  );
}
