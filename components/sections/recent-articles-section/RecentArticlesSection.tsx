"use client";

import {
  Button,
  Flex,
  Heading,
  Section,
  Separator,
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
  showAnnouncements?: boolean;
}

/**
 * Recent articles section for the homepage.
 *
 * Displays a title on the left with announcements and articles
 * on the right, mirroring the experience section layout.
 */
export function RecentArticlesSection({
  posts = [],
  title = "Build notes, design decisions, and lessons from shipping.",
  showAnnouncements = false,
}: RecentArticlesSectionProps) {
  const announcements = posts
    .filter((post) => post.category === "announcement")
    .slice(0, 4);
  const articlesOnly = posts.filter((post) => post.category !== "announcement");
  const displayedPosts = articlesOnly.slice(0, 4);

  if (displayedPosts.length === 0 && announcements.length === 0) {
    return null;
  }

  return (
    <Section size="4">
      <Flex
        direction="column"
        align="start"
        gap={{ initial: "6", sm: "10" }}
        py={{ initial: "4", sm: "6" }}
        px={{ initial: "4", sm: "6" }}
      >
        <Flex direction="column" gap="2" width="100%">
          <Heading as="h2" size="3" weight="medium">
            Writing
          </Heading>
          <Separator size="4" />
        </Flex>
        <Flex
          direction={{ initial: "column", lg: "row" }}
          gap={{ initial: "6", md: "12" }}
          width="100%"
          align="stretch"
        >
          <Flex
            direction="column"
            flexShrink="0"
            maxWidth={{ initial: "100%", lg: "600px" }}
            position={{ initial: "static", lg: "sticky" }}
            top="96px"
            style={{ alignSelf: "flex-start" }}
          >
            <Heading
              align="left"
              size={{ initial: "8", sm: "9" }}
              weight="medium"
              style={{ textWrap: "balance" }}
            >
              {title}
            </Heading>
          </Flex>
          <Flex direction="column" justify="between" gap={{ initial: "6", sm: "8" }} width="100%">
            <Flex direction="column" gap={{ initial: "8", sm: "12" }} width="100%">
              {showAnnouncements && announcements.length > 0 && (
                <Flex direction="column" gap="6">
                  <Heading as="h3" size="3" weight="medium">
                    Announcements ({announcements.length})
                  </Heading>
                  <ArticlesListGrid posts={announcements} />
                </Flex>
              )}

              {displayedPosts.length > 0 && (
                <Flex direction="column" gap="6">
                  {showAnnouncements && (
                    <Heading as="h3" size="3" weight="medium">
                      Articles ({displayedPosts.length})
                    </Heading>
                  )}
                  <ArticlesListGrid posts={displayedPosts} />
                </Flex>
              )}
            </Flex>

            {articlesOnly.length > 4 && (
              <Flex justify="start">
                <Button asChild highContrast variant="soft" size="2">
                  <NextLink href="/articles">
                    View all articles
                    <HugeiconsIcon icon={ArrowRight01Icon} />
                  </NextLink>
                </Button>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
}
