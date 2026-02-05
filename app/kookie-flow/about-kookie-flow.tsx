"use client";

import {
  AspectRatio,
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
import { WebGLImageTracker } from "@/components/webgl";

export function AboutKookieFlow({ posts = [] }: { posts?: ArticleProps[] }) {

  return (
    <>
      <Section position="relative" size="4">
        <Hero.Root layout="stacked" gap="12">
          <Container size="2">
            <Flex direction="column" gap="6" align="center">
              <Hero.Meta>
                <Avatar
                  fallback="K"
                  size="2"
                  color="gray"
                  src="/kushagra-logo.svg"
                />
              </Hero.Meta>

              <Hero.Title>
                Kookie Flow is a WebGL-native node graph library for React.
              </Hero.Title>

              <Hero.Description color="gray">
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
          </Container>

          <Hero.Media style={{ width: '100%' }}>
            <Box px={{ initial: "4", sm: "6" }} width="100%">
              <AspectRatio ratio={3 / 1}>
                <WebGLImageTracker id="kookie-flow-hero" src="/pages/kookie-flow/image.jpg">
                  <Image
                    as={NextImage}
                    src="/pages/kookie-flow/image.jpg"
                    alt="Kookie Flow Hero"
                    fill
                    radius="none"
                    sizes="(max-width: 768px) 100vw, 1200px"
                    style={{ objectFit: "cover" }}
                    priority
                    loading="eager"
                    decoding="async"
                  />
                </WebGLImageTracker>
              </AspectRatio>
            </Box>
          </Hero.Media>
        </Hero.Root>
      </Section>

      <RecentArticlesSection
        posts={posts}
        title="Articles about Kookie Flow"
        showAnnouncements
      />
    </>
  );
}
