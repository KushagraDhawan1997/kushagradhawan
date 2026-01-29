"use client";

import {
  Avatar,
  Button,
  Container,
  Flex,
  Section,
  Text,
  Link,
  Image,
  Box,
} from "@kushagradhawan/kookie-ui";
import { Hero } from "@kushagradhawan/kookie-blocks";
import { RecentArticlesSection } from "@/components/sections/recent-articles-section";
import { ArticleProps } from "@/components/sections/articles-list-section/ArticlesListGrid";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import NextImage from "next/image";

export function AboutKookieFlow({ posts = [] }: { posts?: ArticleProps[] }) {

  return (
    <>
      <Section position="relative" size="4">
        <Container size="4" px={{ initial: "4", sm: "6" }}>
          <Hero.Root layout={{ initial: "stacked", md: "split" }} gap="12">
            <Hero.Media style={{ flex: 1, alignSelf: "stretch" }}>
              <Box position="relative" width="100%" height="100%" minHeight="300px">
                <Image
                  as={NextImage}
                  src="/pages/kookie-flow/image.jpg"
                  alt="Kookie Flow Hero"
                  fill
                  radius="none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Hero.Media>

            <Flex direction="column" gap="6" style={{ flex: 1 }}>
              <Hero.Meta>
                <Avatar
                  fallback="K"
                  size="2"
                  color="gray"
                  src="/kushagra-logo.svg"
                />
              </Hero.Meta>

              <Hero.Title align="left">
                Kookie Flow is a WebGL-native node graph library for React.
              </Hero.Title>

              <Hero.Description align="left" color="gray">
                Combining the ergonomic design patterns of{" "}
                <Text as="span" highContrast>
                  React Flow
                </Text>{" "}
                with{" "}
                <Text as="span" highContrast>
                  GPU-accelerated rendering
                </Text>
                . Sustains 10,000 nodes at 80-120fps during aggressive pan/zoom
                through instanced rendering, frustum culling, and quadtree
                spatial indexing.
              </Hero.Description>

              <Hero.Actions gap="2">
                <Button asChild variant="solid" size="2" highContrast>
                  <Link
                    target="_blank"
                    highContrast
                    href="https://github.com/KushagraDhawan1997/kookie-flow"
                  >
                    GitHub
                    <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={1.5} />
                  </Link>
                </Button>
              </Hero.Actions>
            </Flex>
          </Hero.Root>
        </Container>
      </Section>

      <RecentArticlesSection
        posts={posts}
        title="Articles about Kookie Flow"
        showAnnouncements
      />
    </>
  );
}
