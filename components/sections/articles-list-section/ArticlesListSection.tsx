"use client";

import { useState } from "react";
import {
  Flex,
  Heading,
  Link as KUILink,
  Section,
  Separator,
  Text,
} from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, ArrowDown01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { ArticlesListGrid, ArticleProps } from "./ArticlesListGrid";

export interface ArticlesListSectionProps {
  posts: ArticleProps[];
}

/**
 * Full articles listing section for the /articles route.
 *
 * Displays a sticky title on the left with announcements and
 * articles on the right, matching the homepage section layout.
 */
const INITIAL_COUNT = 4;

export function ArticlesListSection({ posts }: ArticlesListSectionProps) {
  const [showAllAnnouncements, setShowAllAnnouncements] = useState(false);
  const [showAllArticles, setShowAllArticles] = useState(false);

  const announcements = posts.filter(
    (post) => post.category === "announcement",
  );
  const articles = posts.filter((post) => post.category !== "announcement");

  const hasMoreAnnouncements = announcements.length > INITIAL_COUNT;
  const visibleAnnouncements = showAllAnnouncements
    ? announcements
    : announcements.slice(0, INITIAL_COUNT);

  const hasMoreArticles = articles.length > INITIAL_COUNT;
  const visibleArticles = showAllArticles
    ? articles
    : articles.slice(0, INITIAL_COUNT);

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
          <Heading size="3" weight="medium">
            Articles
          </Heading>
          <Separator size="4" />
        </Flex>
        <Flex
          direction={{ initial: "column", md: "row" }}
          gap={{ initial: "6", md: "12" }}
          width="100%"
          align="stretch"
        >
          <Flex
            direction="column"
            gap="8"
            flexShrink="0"
            maxWidth={{ initial: "100%", md: "400px", lg: "600px" }}
            position={{ initial: "static", md: "sticky" }}
            top="96px"
            style={{ alignSelf: "flex-start" }}
          >
            <Heading
              align="left"
              size={{ initial: "8", sm: "9" }}
              weight="medium"
              style={{ textWrap: "balance" }}
            >
              On product, design systems, and the craft of shipping software.
            </Heading>
            <Flex gap="4">
              <KUILink
                href="https://medium.com/@kushagradhawan"
                target="_blank"
                size="2"
                highContrast
              >
                <Flex align="center" gap="1" asChild>
                  <span>
                    Medium
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
                  </span>
                </Flex>
              </KUILink>
              <KUILink
                href="https://dev.to/kushagradhawan"
                target="_blank"
                size="2"
                highContrast
              >
                <Flex align="center" gap="1" asChild>
                  <span>
                    Dev.to
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
                  </span>
                </Flex>
              </KUILink>
            </Flex>
          </Flex>
          <Flex direction="column" gap={{ initial: "8", sm: "12" }} width="100%">
            {announcements.length > 0 && (
              <Flex direction="column" gap="6">
                <Heading size="3" weight="medium">
                  Announcements ({announcements.length})
                </Heading>
                <ArticlesListGrid posts={visibleAnnouncements} />
                {hasMoreAnnouncements && (
                  <KUILink
                    size="2"
                    highContrast
                    onClick={() => setShowAllAnnouncements((prev) => !prev)}
                    style={{ cursor: "pointer" }}
                  >
                    <Flex align="center" gap="1" asChild>
                      <span>
                        {showAllAnnouncements
                          ? "Show less"
                          : `${announcements.length - INITIAL_COUNT} more`}
                        <HugeiconsIcon
                          icon={showAllAnnouncements ? ArrowUp01Icon : ArrowDown01Icon}
                          size={14}
                        />
                      </span>
                    </Flex>
                  </KUILink>
                )}
              </Flex>
            )}

            {articles.length > 0 ? (
              <Flex direction="column" gap="6">
                <Heading size="3" weight="medium">
                  Articles ({articles.length})
                </Heading>
                <ArticlesListGrid posts={visibleArticles} />
                {hasMoreArticles && (
                  <KUILink
                    size="2"
                    highContrast
                    onClick={() => setShowAllArticles((prev) => !prev)}
                    style={{ cursor: "pointer" }}
                  >
                    <Flex align="center" gap="1" asChild>
                      <span>
                        {showAllArticles
                          ? "Show less"
                          : `${articles.length - INITIAL_COUNT} more`}
                        <HugeiconsIcon
                          icon={showAllArticles ? ArrowUp01Icon : ArrowDown01Icon}
                          size={14}
                        />
                      </span>
                    </Flex>
                  </KUILink>
                )}
              </Flex>
            ) : (
              <Flex direction="column" gap="2" align="center" py={{ initial: "8", sm: "12" }}>
                <Heading size="3" weight="medium">
                  No articles yet
                </Heading>
                <Text color="gray">Check back soon for new content!</Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
}
