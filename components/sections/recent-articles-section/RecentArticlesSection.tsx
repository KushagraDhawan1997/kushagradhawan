"use client";

import {
  Button,
  Flex,
  Heading,
  Container,
  Section,
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

export function RecentArticlesSection({
  posts = [],
  title = "Sometimes, I write about things.",
  showAnnouncements = false,
}: RecentArticlesSectionProps) {
  const announcements = posts.filter((post) => post.category === "announcement").slice(0, 4);
  const articlesOnly = posts.filter((post) => post.category !== "announcement");
  const displayedPosts = articlesOnly.slice(0, 4);

  if (displayedPosts.length === 0 && announcements.length === 0) {
    return null;
  }

  return (
    <Section size="4">
      <Container size="4">
        <Flex direction="column" gap="8" py="6" px={{ initial: "4", sm: "6" }}>
          <Heading align="center" size="8" weight="medium">
            {title}
          </Heading>

          {showAnnouncements && announcements.length > 0 && (
            <Flex direction="column" gap="6">
              <Heading size="5" weight="medium">
                Announcements
              </Heading>
              <ArticlesListGrid posts={announcements} />
            </Flex>
          )}

          {displayedPosts.length > 0 && (
            <Flex direction="column" gap="6">
              {showAnnouncements && <Heading size="5" weight="medium">Articles</Heading>}
              <ArticlesListGrid posts={displayedPosts} />
            </Flex>
          )}

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
