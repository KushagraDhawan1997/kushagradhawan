"use client";

import { Container, Flex, Heading, Section, Text } from "@kushagradhawan/kookie-ui";
import { ArticlesListGrid, ArticleProps } from "./ArticlesListGrid";

export interface ArticlesListSectionProps {
  posts: ArticleProps[];
}

export function ArticlesListSection({ posts }: ArticlesListSectionProps) {
  const announcements = posts.filter((post) => post.category === "announcement");
  const articles = posts.filter((post) => post.category !== "announcement");

  return (
    <Section>
      <Container size="4">
        <Flex direction="column" gap="9" p="6">
          <Flex direction="column" align="center" gap="6">
            <Text size="1" color="gray" weight="medium">
              ARTICLES
            </Text>
            <Heading size="8" weight="medium" align="center" style={{ maxWidth: "64rem" }}>
              Genuinely useful thoughts, sandwiched between the appropriate number of keywords. It&apos;s part of the game we all play.
            </Heading>
          </Flex>

          {announcements.length > 0 && (
            <Flex direction="column" gap="6">
              <Heading size="5" weight="medium">
                Announcements
              </Heading>
              <ArticlesListGrid posts={announcements} />
            </Flex>
          )}

          {articles.length > 0 ? (
            <Flex direction="column" gap="6">
              <Heading size="5" weight="medium">
                Articles
              </Heading>
              <ArticlesListGrid posts={articles} />
            </Flex>
          ) : (
            <Flex direction="column" gap="2" align="center" py="12">
              <Heading size="4" weight="medium">
                No articles yet
              </Heading>
              <Text color="gray">Check back soon for new content!</Text>
            </Flex>
          )}
        </Flex>
      </Container>
    </Section>
  );
}
