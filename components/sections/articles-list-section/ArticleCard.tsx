"use client";

import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import { ArticleProps } from "./ArticlesListGrid";
import {
  AspectRatio,
  Card,
  Flex,
  Heading,
  Image,
  Inset,
  Text,
} from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { News01Icon, Book03Icon } from "@hugeicons/core-free-icons";

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

  const isAnnouncement = post.category === "announcement";

  const content = (
    <Flex direction="column" gap="4" p="1" style={{ height: "100%" }}>
      {/* Article image */}
      {post.image && (
        <Inset clip="padding-box">
          <AspectRatio ratio={4 / 3}>
            <Image
              as={NextImage}
              src={post.image}
              alt={post.alt || post.title}
              fill
              radius="none"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </AspectRatio>
        </Inset>
      )}

      <Flex direction="column" gap="4" p="1" style={{ flex: 1 }}>
        <Flex direction="column" gap="1">
          {/* Title */}
          <Heading size="3" weight="medium">
            {post.title}
          </Heading>

          {/* Description */}
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
        </Flex>

        {/* Date and category */}
        <Flex align="center" gap="2">
          <HugeiconsIcon
            icon={isAnnouncement ? News01Icon : Book03Icon}
            size={14}
            color="var(--gray-11)"
          />
          <Text size="2" color="gray">
            {formattedDate}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );

  return (
    <Link href={`/articles/${post.slug}`}>
      {isAnnouncement ? (
        <Card variant="outline" style={{ height: "100%" }}>
          {content}
        </Card>
      ) : (
        content
      )}
    </Link>
  );
}
