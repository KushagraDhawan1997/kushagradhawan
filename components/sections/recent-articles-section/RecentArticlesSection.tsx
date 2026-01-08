"use client";

import {
  Button,
  Flex,
  Text,
  Heading,
  Container,
  Section,
  Link,
  Callout,
} from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import {
  ArticlesListGrid,
  ArticleProps,
} from "@/components/sections/articles-list-section/ArticlesListGrid";
import NextLink from "next/link";

export interface RecentArticlesSectionProps {
  posts?: ArticleProps[];
  title?: string;
  showCallout?: boolean;
}

export function RecentArticlesSection({
  posts = [],
  title = "Sometimes, I write about things.",
  showCallout = true,
}: RecentArticlesSectionProps) {
  // Filter out announcements and limit to first 4 articles
  const articlesOnly = posts.filter((post) => post.category !== "announcement");
  const displayedPosts = articlesOnly.slice(0, 4);

  if (displayedPosts.length === 0) {
    return null;
  }

  return (
    <Section size="4">
      <Container size="4">
        <Flex direction="column" gap="8" py="6" px={{ initial: "4", sm: "6" }}>
          <Heading align="center" size="8" weight="medium">
            {title}
          </Heading>

          {/* Callout for Spark update - only show if requested */}
          {showCallout && (
            <Flex justify="center">
              <Link
                href="/articles/womp-spark-update"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Callout.Root
                  highContrast
                  variant="outline"
                  color="gray"
                  size="2"
                  style={{ cursor: "pointer" }}
                >
                  <Callout.Text align="center">
                    Read about the latest update to{" "}
                    <span style={{ textDecoration: "underline" }}>
                      Womp Spark
                    </span>
                    . Now generate images and 3D meshes using advanced frontier
                    models
                  </Callout.Text>
                </Callout.Root>
              </Link>
            </Flex>
          )}

          <ArticlesListGrid posts={displayedPosts} />

          {articlesOnly.length > 4 && (
            <Flex justify="center">
              <Button asChild highContrast variant="soft" size="2">
                <NextLink href="/articles">
                  <Flex align="center" gap="2">
                    View all articles
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={16}
                      color="currentColor"
                    />
                  </Flex>
                </NextLink>
              </Button>
            </Flex>
          )}
        </Flex>
      </Container>
    </Section>
  );
}
