"use client";

/**
 * Hero Component
 *
 * This component serves as the primary hero section of the portfolio.
 * It displays a bold headline, subtitle, call-to-action button, and a grid of articles.
 * The articles are displayed in a responsive grid layout.
 *
 * The component uses:
 * - Article data passed as props
 * - Responsive layout with different designs for mobile and desktop
 * - Clean, minimal styling with KookieUI components
 */

import React from "react";
import {
  Button,
  Flex,
  Text,
  Heading,
  Container,
  Section,
  Link,
  Image,
  Box,
  Avatar,
  Grid,
  Tooltip,
  Callout,
  Separator,
  Badge,
} from "@kushagradhawan/kookie-ui";
import { HoverCard } from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import NextLink from "next/link";
import { AIImageWithPrompt } from "@/components/generic";

const experiences = [
  {
    id: 1,
    role: "Product & Design Lead",
    company: "Womp 3D",
    duration: "2023 - Present (2 years)",
    logo: null,
    fallback: "W",
    url: "https://womp.com",
  },
  {
    id: 2,
    role: "Design lead",
    company: "Womp 3D",
    duration: "2022 - 2023 (1 year)",
    logo: null,
    fallback: "W",
    url: "https://womp.com",
  },
  {
    id: 3,
    role: "Designer",
    company: "Womp 3D",
    duration: "2021 - 2022 (1 year)",
    logo: null,
    fallback: "W",
    url: "https://womp.com",
  },
  {
    id: 4,
    role: "Junior Designer",
    company: "Wishbox Studio",
    duration: "2019 - 2021 (2 years)",
    logo: null,
    fallback: "W",
    url: "https://wishboxstudio.in",
  },
];

const portfolioItems = [
  {
    id: 1,
    title: "Womp 3D",
    description:
      "Womp is a browser-based 3D modeling platform aimed to make 3D beginner-friendly and easy. Built by artists and engineers who have experienced the uphill learning curve of 3D.",
    image: "/articles/womp-hero.png",
    prompt:
      "Contemporary oil impasto palette-knife painting of a totem stack of 3D primitives (cube, sphere, cylinder, cone) floating slightly above a surface, warm cream + coral + Womp-orange accents with terracotta shadows, sage-green textured color-field background, thick glossy paint ridges catching sunlight, simplified forms, clean negative space, vertical 2:3, no text, no logos.",
    href: "/womp",
  },
  {
    id: 2,
    title: "Kookie UI",
    description:
      "Kookie UI is a system to build consistent and scalable user interfaces. An open-source fork of Radix Themes with a fresh visual style and practical foundations.",
    image: "/articles/kookie-ui-hero.png",
    prompt:
      "Contemporary oil impasto painting of a grid of chunky color swatches and spacing blocks arranged like a tactile board (tokens), warm cream + coral + muted olive palette, sand/beige textured background, thick palette-knife texture gleaming in sunlight, simplified forms, 16:9, no text.",
    href: "/kookie-ui",
  },
  {
    id: 3,
    title: "Kookie AI",
    description:
      "Kookie AI explores how to design chat-based AI products by working within chat constraints while minimizing friction points through thoughtful UX.",
    image: "/articles/kookie-ai-hero.png",
    prompt:
      "Contemporary oil impasto palette-knife painting of a large flywheel in creamy ivory with a hand pushing it forward; motion implied by curved thick strokes; warm burnt orange hand; charcoal textured background, thick glossy impasto ridges catching light, minimal editorial composition, 16:9, no text.",
    comingSoon: true,
    href: "/kookie-ai",
  },
  {
    id: 4,
    title: "Kookie Blocks",
    description:
      "Kookie Blocks is a higher-level implementation of Kookie UI focused on creating reusable blocks for both app interfaces and marketing pages.",
    image: "/articles/kookie-blocks-hero.png",
    prompt:
      "Contemporary oil impasto palette-knife painting of a grid of chunky color swatches and spacing blocks arranged like a tactile board (tokens), warm cream + coral + muted olive palette, sand/beige textured background, thick palette-knife texture gleaming in sunlight, simplified forms, 16:9, no text.",
    comingSoon: true,
    href: "/kookie-blocks",
  },
];

// Derive optimized content variants for portfolio images
function deriveContent(src: string) {
  const match = src.match(/^\/articles\/([^\.]+)\.(png|jpg|jpeg|webp)$/i);
  if (!match) return { src, srcSet: undefined, sizes: undefined };
  const base = match[1];
  return {
    src: `/articles/${base}-content-1200.webp`,
    srcSet: `/articles/${base}-content-800.webp 800w, /articles/${base}-content-1200.webp 1200w`,
    sizes: "(max-width: 768px) 100vw, 400px",
  };
}

/**
 * Hero Component
 *
 * Features:
 * - A clean, bold headline statement
 * - A subtitle identifying professional role
 * - Call-to-action buttons
 * - Responsive layout for different screen sizes
 *
 * @returns React component for the hero section
 */
export function Hero() {
  return (
    <>
      <Section position="relative" size="4">
        <Container size="2" style={{ position: "relative", zIndex: 1 }}>
          <Flex
            direction="column"
            align="center"
            gap="8"
            px={{ initial: "4", sm: "6" }}
          >
            {/* Title and subtitle section */}
            <Flex direction="column" align="center" gap="6">
              <Avatar
                fallback="K"
                size="2"
                color="gray"
                src="/kushagra-logo.svg"
              ></Avatar>

              <Heading align="center" size="9" weight="medium">
                I design, vibe-code
                <Tooltip content="I actually have a computer science degree! My vibe-coding is (mostly) safe for work.">
                  <span style={{ cursor: "help", fontWeight: "bold" }}>*</span>
                </Tooltip>
                , lead teams, and ship.
              </Heading>

              <Text align="center" size="4">
                Leading Product &amp; Design at{" "}
                <HoverCard.Root>
                  <HoverCard.Trigger>
                    <Link color="blue" target="_blank" href="https://womp.com">
                      Womp 3D
                    </Link>
                  </HoverCard.Trigger>
                  <HoverCard.Content maxWidth="600px">
                    <Flex direction="column" align="center">
                      <Image
                        src="/womp.png"
                        alt="Womp 3D Preview"
                        width="600"
                        height="450"
                      />
                    </Flex>
                  </HoverCard.Content>
                </HoverCard.Root>
                . Building{" "}
                <HoverCard.Root>
                  <HoverCard.Trigger>
                    <Link
                      color="blue"
                      target="_blank"
                      href="https://www.hellokookie.com/"
                    >
                      KookieUI
                    </Link>
                  </HoverCard.Trigger>
                  <HoverCard.Content maxWidth="600px">
                    <Flex direction="column" align="center">
                      <Image
                        src="/kookie-ui.png"
                        alt="KookieUI Preview"
                        width="600"
                        height="450"
                      />
                    </Flex>
                  </HoverCard.Content>
                </HoverCard.Root>
                , KookieAI, KookieBlocks.
              </Text>
            </Flex>

            {/* Call-to-action buttons */}
            <Flex direction="row" gap="2">
              <Button asChild variant="solid" size="2" highContrast>
                <a
                  href="https://calendly.com/accounts-kushagradhawan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book an intro call via Calendly"
                >
                  Calendly
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={16}
                    color="currentColor"
                  />
                </a>
              </Button>
              <Button asChild variant="soft" highContrast size="2">
                <NextLink
                  href="/articles/about-me"
                  aria-label="Read more about Kushagra Dhawan's background and experience"
                >
                  About me
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={16}
                    color="currentColor"
                  />
                </NextLink>
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Section>

      {/* Portfolio Section */}
      <Section size="4">
        <Flex
          direction="column"
          align="start"
          gap="8"
          px={{ initial: "4", sm: "6" }}
        >
          {/* Three column grid with placeholder images */}
          <Grid columns={{ initial: "1", sm: "2", md: "4" }} gap="4">
            {portfolioItems.map((item) => (
              <Flex key={item.id} direction="column" gap="4" align="start">
                {item.comingSoon ? (
                  <Box style={{ width: "100%", opacity: 0.6 }}>
                    {item.prompt ? (
                      <AIImageWithPrompt prompt={item.prompt}>
                        <Image
                          src={deriveContent(item.image).src}
                          srcSet={deriveContent(item.image).srcSet}
                          sizes={deriveContent(item.image).sizes}
                          alt={item.title}
                          width="100%"
                          height="100%"
                          radius="none"
                          style={{ cursor: "default" }}
                        />
                      </AIImageWithPrompt>
                    ) : (
                      <Image
                        src={deriveContent(item.image).src}
                        srcSet={deriveContent(item.image).srcSet}
                        sizes={deriveContent(item.image).sizes}
                        alt={item.title}
                        width="100%"
                        height="100%"
                        radius="none"
                        style={{ cursor: "default" }}
                      />
                    )}
                  </Box>
                ) : (
                  <NextLink href={item.href} style={{ width: "100%" }}>
                    {item.prompt ? (
                      <AIImageWithPrompt prompt={item.prompt}>
                        <Image
                          src={deriveContent(item.image).src}
                          srcSet={deriveContent(item.image).srcSet}
                          sizes={deriveContent(item.image).sizes}
                          alt={item.title}
                          width="100%"
                          height="100%"
                          radius="none"
                          style={{ cursor: "pointer" }}
                        />
                      </AIImageWithPrompt>
                    ) : (
                      <Image
                        src={deriveContent(item.image).src}
                        srcSet={deriveContent(item.image).srcSet}
                        sizes={deriveContent(item.image).sizes}
                        alt={item.title}
                        width="100%"
                        height="100%"
                        radius="none"
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </NextLink>
                )}

                <Flex direction="column" gap="2">
                  <Flex align="center" gap="2">
                    <Heading size="3" weight="medium">
                      {item.title}
                    </Heading>
                    {item.comingSoon && (
                      <Badge highContrast size="1">
                        Coming Soon
                      </Badge>
                    )}
                  </Flex>
                  <Text size="2" color="gray">
                    {item.description}
                  </Text>
                </Flex>
                {item.comingSoon ? (
                  <Button
                    variant="soft"
                    size="2"
                    highContrast
                    disabled
                    style={{ opacity: 0.6, cursor: "not-allowed" }}
                  >
                    More
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={16}
                      color="currentColor"
                    />
                  </Button>
                ) : (
                  <Button asChild variant="soft" size="2" highContrast>
                    <NextLink href={item.href}>
                      More
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        size={16}
                        color="currentColor"
                      />
                    </NextLink>
                  </Button>
                )}
              </Flex>
            ))}
          </Grid>
        </Flex>
      </Section>

      {/* Experience Section */}
      <Section size="2">
        <Container size="4">
          <Flex
            direction="column"
            align="center"
            gap="4"
            px={{ initial: "4", sm: "6" }}
          >
            {experiences.map((exp) => (
              <React.Fragment key={exp.id}>
                <Flex
                  justify="between"
                  width="100%"
                  gap="3"
                  align={{ initial: "start", md: "center" }}
                  direction={{ initial: "column", md: "row" }}
                >
                  <Link
                    href={exp.url}
                    target="_blank"
                    highContrast
                    underline="hover"
                  >
                    <Flex gap="3" align="center">
                      <Avatar
                        fallback={exp.fallback}
                        size="1"
                        highContrast
                        color="gray"
                        src={exp.logo}
                      />
                      <Text size="3" weight="medium">
                        {exp.role}, {exp.company}
                      </Text>
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        size={16}
                        color="currentColor"
                      />
                    </Flex>
                  </Link>
                  <Text size="2" weight="regular" color="gray">
                    {exp.duration}
                  </Text>
                </Flex>
                <Separator size="4" />
              </React.Fragment>
            ))}
          </Flex>
        </Container>
      </Section>
    </>
  );
}
