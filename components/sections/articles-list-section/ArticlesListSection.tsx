"use client";

import {
  Container,
  Flex,
  Heading,
  Section,
  Text,
} from "@kushagradhawan/kookie-ui";
import { ArticlesListGrid, ArticleProps } from "./ArticlesListGrid";

export interface ArticlesListSectionProps {
  posts: ArticleProps[];
}

export function ArticlesListSection({ posts }: ArticlesListSectionProps) {
  return (
    <Section>
      <Container size="4">
        <Flex direction="column" gap="9" p="6">
          <Flex direction="column" gap="4">
            <Heading size="8" weight="medium" style={{ maxWidth: "64rem" }}>
              Genuinely useful thoughts, sandwiched between the appropriate
              number of keywords. It&apos;s part of the game we all play.
            </Heading>
          </Flex>

          {posts.length > 0 ? (
            <ArticlesListGrid posts={posts} />
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
