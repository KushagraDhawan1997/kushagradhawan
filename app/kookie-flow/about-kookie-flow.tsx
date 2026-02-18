"use client";

import {
  AspectRatio,
  Button,
  Flex,
  Heading,
  Section,
  Separator,
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
        <Flex
          direction="column"
          align="start"
          gap={{ initial: "5", sm: "8" }}
          py={{ initial: "4", sm: "6" }}
          px={{ initial: "4", sm: "6" }}
        >
          <Flex direction="column" gap="2" width="100%">
            <Heading size="3" weight="medium">
              Kookie Flow
            </Heading>
            <Separator size="4" />
          </Flex>
          <Hero.Root align="start" gap={{ initial: "6", sm: "8" }}>
            <Hero.Title
              size={{ initial: "8", sm: "9", lg: "10" }}
              weight="medium"
              align="left"
              wrap="balance"
            >
              Kookie Flow is a WebGL-native node graph library for React.
            </Hero.Title>

            <Hero.Description
              size={{ initial: "3", sm: "4" }}
              color="gray"
              align="left"
            >
              Combining the ergonomic design patterns of{" "}
              <Text as="span" highContrast>
                React Flow
              </Text>{" "}
              with{" "}
              <Text as="span" highContrast>
                GPU-accelerated rendering
              </Text>
              . Sustains 10,000 nodes at 80-120fps during aggressive pan/zoom
              through instanced rendering, frustum culling, and quadtree spatial
              indexing.
            </Hero.Description>

            <Hero.Actions gap="3">
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
          </Hero.Root>
        </Flex>

        <Box
          px={{ initial: "4", sm: "6" }}
          width="100%"
          mt="6"
          style={{
            overflow: "hidden",
          }}
        >
          <AspectRatio ratio={3 / 1}>
            <WebGLImageTracker
              id="kookie-flow-hero"
              src="/pages/kookie-flow/image.jpg"
              borderRadius={0}
            >
              <Image
                as={NextImage}
                src="/pages/kookie-flow/image.jpg"
                alt="Kookie Flow Hero"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                style={{ objectFit: "cover" }}
                radius="none"
                priority
                loading="eager"
                decoding="async"
              />
            </WebGLImageTracker>
          </AspectRatio>
        </Box>
      </Section>

      <RecentArticlesSection
        posts={posts}
        title="Articles about Kookie Flow"
        showAnnouncements
      />
    </>
  );
}
