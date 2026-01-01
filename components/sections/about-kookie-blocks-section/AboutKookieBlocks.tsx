"use client";

/**
 * About KookieBlocks Component
 *
 * This component showcases KookieBlocks capabilities and design principles.
 * It includes a headline, description, call-to-action button, and features.
 * The section uses a responsive layout with different designs for mobile and desktop.
 */

import React from "react";
import {
  Avatar,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
  Link,
  Image,
  Box,
} from "@kushagradhawan/kookie-ui";
import { AIImageWithPrompt } from "@/components/generic";
import { RecentArticlesSection } from "@/components/sections/recent-articles-section";
import { ArticleProps } from "@/components/sections/articles-list-section/ArticlesListGrid";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

// Derive optimized content variants for portfolio images
function deriveContent(src: string) {
  const match = src.match(/^\/articles\/([^\.]+)\.(png|jpg|jpeg|webp)$/i);
  if (!match) return { src, srcSet: undefined, sizes: undefined };
  const base = match[1];
  return {
    src: `/articles/${base}-content-1200.webp`,
    srcSet: `/articles/${base}-content-800.webp 800w, /articles/${base}-content-1200.webp 1200w`,
    sizes: "(max-width: 768px) 100vw, 800px",
  };
}

/**
 * AboutKookieBlocks Component
 *
 * Features:
 * - Headline and descriptive subtitle
 * - Clear call-to-action buttons linking to KookieBlocks documentation and site
 * - Responsive layout with hero image and content
 *
 * @returns React component for the KookieBlocks section
 */
export function AboutKookieBlocks({ posts = [] }: { posts?: ArticleProps[] }) {
  const heroImage = {
    image: "/articles/kookie-blocks-hero.png",
    prompt:
      "Contemporary oil impasto palette-knife painting of a grid of chunky color swatches and spacing blocks arranged like a tactile board (tokens), warm cream + coral + muted olive palette, sand/beige textured background, thick palette-knife texture gleaming in sunlight, simplified forms, 16:9, no text.",
  };

  return (
    <>
      <Section position="relative" size="4">
        <Container size="4" style={{ position: "relative", zIndex: 1 }}>
          <Grid columns={{ initial: "1", md: "2" }} gap="12" align="center" px={{ initial: "4", sm: "6" }}>
            {/* Left Column: Hero Image */}
            <Box width="100%">
              <AIImageWithPrompt prompt={heroImage.prompt}>
                <Image
                  src={deriveContent(heroImage.image).src}
                  srcSet={deriveContent(heroImage.image).srcSet}
                  sizes={deriveContent(heroImage.image).sizes}
                  alt="KookieBlocks Hero"
                  width="100%"
                  height="100%"
                  radius="none"
                />
              </AIImageWithPrompt>
            </Box>

            {/* Right Column: Content */}
            <Flex direction="column" align="start" gap="8">
              <Flex direction="column" align="start" gap="6">
                <Avatar fallback="K" size="2" color="gray" src="/kushagra-logo.svg"></Avatar>

                <Heading size="9" weight="medium" align="left">
                  Kookie Blocks is a higher-level implementation of Kookie UI.
                </Heading>

                <Text align="left" size="4">
                  Building on the foundations of{" "}
                  <Text as="span" highContrast>
                    Kookie UI
                  </Text>
                  , Kookie Blocks provides{" "}
                  <Text as="span" highContrast>
                    pre-built, composable components
                  </Text>{" "}
                  that accelerate development while maintaining design consistency. Perfect for creating both app interfaces and marketing pages.
                </Text>
              </Flex>

              {/* Call-to-action buttons */}
              <Flex justify="start" direction="row" gap="2">
                <Button variant="soft" size="2" highContrast>
                  <a href="/articles/about-kookie-blocks" target="_blank" rel="noopener noreferrer">
                    Read about Kookie Blocks
                  </a>
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} color="currentColor" />
                </Button>
                <Button asChild variant="solid" size="2" highContrast>
                  <Link target="_blank" highContrast href="https://blocks.hellokookie.com/">
                    Kookie Blocks
                    <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={1.5} />
                  </Link>
                </Button>
              </Flex>
            </Flex>
          </Grid>
        </Container>
      </Section>
      <RecentArticlesSection posts={posts} title="Articles about Kookie Blocks" showCallout={false} />
    </>
  );
}
