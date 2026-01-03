"use client";

import React from "react";
import {
  Button,
  Flex,
  Text,
  Heading,
  Section,
  Image,
  Box,
  Grid,
  Badge,
} from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import NextLink from "next/link";
import { AIImageWithPrompt } from "@/components/generic";

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
    href: "/kookie-blocks",
  },
];

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

export function PortfolioSection() {
  return (
    <Section size="4">
      <Flex
        direction="column"
        align="start"
        gap="8"
        px={{ initial: "4", sm: "6" }}
      >
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
  );
}
