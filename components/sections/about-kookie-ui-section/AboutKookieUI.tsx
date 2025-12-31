"use client";

/**
 * About KookieUI Component
 *
 * This component showcases KookieUI capabilities and design principles.
 * It includes a headline, description, call-to-action button, and a grid of capability cards.
 * The section uses a responsive layout with different designs for mobile and desktop.
 */

import React from "react";
import {
  Avatar,
  Button,
  Container,
  Dialog,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
  Card,
  Link,
  AspectRatio,
  VisuallyHidden,
  Inset,
  Image,
  HoverCard,
  Box,
  Separator,
} from "@kushagradhawan/kookie-ui";
import { AIImageWithPrompt } from "@/components/generic";
import { kookieCapabilities, type KookieCapability } from "./kookieData";
import { RecentArticlesSection } from "@/components/sections/recent-articles-section";
import { ArticleProps } from "@/components/sections/articles-list-section/ArticlesListGrid";
import { HugeiconsIcon } from "@hugeicons/react";
import { ColorsIcon, Shield01Icon, Target01Icon, Layers01Icon, UniversalAccessIcon, SparklesIcon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

// Simple capability card with dialog functionality (disabled for now)
// Dialog structure kept but not rendered - content extracted for direct rendering
function KookieCapabilityCard({ capability, icon }: { capability: KookieCapability; icon: React.ReactNode }) {
  // Dialog structure kept but not used - rendering content directly instead
  return (
    <>
      {/* Dialog structure kept but hidden - making it useless as requested */}
      <Box display="none">
        <Dialog.Root>
          <Dialog.Trigger disabled>
            <Card size="1" variant="soft" asChild style={{ cursor: "default" }}>
              <button disabled style={{ pointerEvents: "none" }}>
                <Flex direction="column" gap="4" height="100%" p="2">
                  {icon}
                  <Flex direction="column" gap="3">
                    <Heading weight="medium" size="3">
                      {capability.title}
                    </Heading>
                    <Text size="3" color="gray">
                      {capability.shortDescription}
                    </Text>
                  </Flex>
                </Flex>
              </button>
            </Card>
          </Dialog.Trigger>

          <Dialog.Content size="1">
            <VisuallyHidden>
              <Dialog.Title>{capability.title}</Dialog.Title>
            </VisuallyHidden>
            <Inset clip="padding-box">
              <AspectRatio ratio={2 / 1}>
                <Image radius="none" src={capability.image} alt={capability.title} width="100%" height="100%" fit="cover" />
              </AspectRatio>
            </Inset>
            <Flex direction="column" gap="4" mt="8" align="start">
              <Heading size="6" weight="medium">
                {capability.title}
              </Heading>
              <Text size="3" style={{ whiteSpace: "pre-line" }}>
                {capability.expandedContent}
              </Text>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </Box>
      {/* Actual rendered content */}
      <Flex direction="column" gap="4">
        {icon}
        <Flex direction="column" gap="3">
          <Heading weight="medium" size="3">
            {capability.title}
          </Heading>
          <Text size="3" color="gray">
            {capability.shortDescription}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

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
 * AboutKookieUI Component
 *
 * Features:
 * - Headline and descriptive subtitle with gradient text styling
 * - Clear call-to-action button linking to KookieUI article
 * - Grid of capability cards showcasing KookieUI principles
 * - Dialog component for displaying expanded capability information
 * - Responsive layout with 3x2 grid on desktop, 1 column on mobile
 *
 * @returns React component for the KookieUI section
 */
export function AboutKookieUI({ posts = [] }: { posts?: ArticleProps[] }) {
  // Map capabilities to their icons
  const capabilityIcons = [
    <HugeiconsIcon key="consistency" icon={ColorsIcon} size={20} color="currentColor" />,
    <HugeiconsIcon key="robustness" icon={Shield01Icon} size={20} color="currentColor" />,
    <HugeiconsIcon key="intentional" icon={Target01Icon} size={20} color="currentColor" />,
    <HugeiconsIcon key="foundations" icon={Layers01Icon} size={20} color="currentColor" />,
    <HugeiconsIcon key="accessible" icon={UniversalAccessIcon} size={20} color="currentColor" />,
    <HugeiconsIcon key="beautiful" icon={SparklesIcon} size={20} color="currentColor" />,
  ];

  const heroImage = {
    image: "/articles/kookie-ui-hero.png",
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
                  alt="KookieUI Hero"
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
                  Kookie UI is a design system to build consistent and scalable user interfaces.
                </Heading>

                <Text align="left" size="4">
                  An open-source fork of{" "}
                  <Text as="span" highContrast>
                    Radix Themes
                  </Text>
                  , focused on building{" "}
                  <Text as="span" highContrast>
                    scalable, consistent UI components
                  </Text>{" "}
                  with a fresh visual style and practical foundations.
                </Text>
              </Flex>

              {/* Call-to-action buttons */}
              <Flex justify="start" direction="row" gap="2">
                <Button variant="soft" size="2" highContrast>
                  <a href="/articles/about-kookie-ui" target="_blank" rel="noopener noreferrer">
                    Read about Kookie UI
                  </a>
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} color="currentColor" />
                </Button>
                <Button asChild variant="solid" size="2" highContrast>
                  <Link target="_blank" highContrast href="https://www.hellokookie.com/">
                    Kookie UI
                    <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={1.5} />
                  </Link>
                </Button>
              </Flex>
            </Flex>
          </Grid>
        </Container>
      </Section>

      {/* Capabilities Section */}
      <Section size="4" display="none">
        <Container
          size="4"
          style={{
            backgroundImage: "url('/articles/hero/kookie-ui-hero-1600.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Flex direction="column" gap="8" px={{ initial: "4", sm: "6" }} py="9">
            <Flex direction="column" justify="center" align="center" gap="9">

              <Text size="2" color="gray">
                (Comprehensive component documentation coming soon)
              </Text>

              {/* Kookie Capabilities Grid - Key design principles */}
              <Flex direction="column" gap="0">
                <Grid gap="0" columns={{ initial: "1", sm: "2", md: "3" }}>
                  {kookieCapabilities.map((capability, index) => {
                    // Calculate if this is the last item in its row for each breakpoint
                    const isLastInRowSm = index % 2 === 1;
                    const isLastInRowMd = index % 3 === 2;

                    // Calculate which row this item is in (0-indexed)
                    const rowSm = Math.floor(index / 2);
                    const rowMd = Math.floor(index / 3);

                    // Total rows for each breakpoint
                    const totalRowsSm = Math.ceil(kookieCapabilities.length / 2);
                    const totalRowsMd = Math.ceil(kookieCapabilities.length / 3);

                    // Check if this is the last row (for horizontal separator)
                    const isLastRowSm = rowSm === totalRowsSm - 1;
                    const isLastRowMd = rowMd === totalRowsMd - 1;

                    return (
                      <Flex direction="column" gap="0" key={capability.title} height="100%">
                        <Flex gap="4" height="100%">
                          <Flex direction="column" gap="3" p="6" height="100%">
                            <KookieCapabilityCard capability={capability} icon={capabilityIcons[index]} />
                          </Flex>
                          {/* Vertical separator - shown when not last in row, hidden responsively */}
                          {!isLastInRowSm && (
                            <Box display={{ initial: "none", sm: "block", md: "none" }}>
                              <Separator size="4" orientation="vertical" light />
                            </Box>
                          )}
                          {!isLastInRowMd && (
                            <Box display={{ initial: "none", md: "block" }}>
                              <Separator size="4" orientation="vertical" light />
                            </Box>
                          )}
                        </Flex>
                        {/* Horizontal separator after each item (mobile) or after each row (sm+) */}
                        {index < kookieCapabilities.length - 1 && (
                          <Box display={{ initial: "block", sm: "none" }}>
                            <Separator size="4" orientation="horizontal" light />
                          </Box>
                        )}
                        {!isLastRowSm && (
                          <Box display={{ initial: "none", sm: "block", md: "none" }}>
                            <Separator size="4" orientation="horizontal" light />
                          </Box>
                        )}
                        {!isLastRowMd && (
                          <Box display={{ initial: "none", md: "block" }}>
                            <Separator size="4" orientation="horizontal" light />
                          </Box>
                        )}
                      </Flex>
                    );
                  })}
                </Grid>
              </Flex>
            </Flex>

          </Flex>
        </Container>
      </Section>
      <RecentArticlesSection posts={posts} title="Articles about Kookie UI" showCallout={false} />
    </>
  );
}
