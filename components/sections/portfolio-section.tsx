"use client";

import {
  Flex,
  Text,
  Heading,
  Section,
  Grid,
  Separator,
} from "@kushagradhawan/kookie-ui";
import NextLink from "next/link";
import NextImage from "next/image";
import { Image } from "@kushagradhawan/kookie-ui";
import { WebGLImageTracker } from "@/components/webgl";

const portfolioItems = [
  {
    id: 1,
    title: "Womp 3D",
    description:
      "A browser-based 3D modeling platform making 3D beginner-friendly and easy. I've been consulting with Womp since 2021 as an independent product and design consultant.",
    image: "/pages/womp/image.jpg",
    href: "/womp",
    externalLink: "https://womp.com",
  },
  {
    id: 2,
    title: "Kookie UI",
    description:
      "Kookie UI is a system to build consistent and scalable user interfaces. An open-source fork of Radix Themes with a fresh visual style and practical foundations.",
    image: "/pages/kookie-ui/image.jpg",
    href: "/kookie-ui",
    github: "https://github.com/KushagraDhawan1997/kookie-ui",
  },
  {
    id: 3,
    title: "Kookie Flow",
    description:
      "Kookie Flow is a WebGL-native node graph library for React that combines React Flow ergonomics with GPU-accelerated rendering.",
    image: "/pages/kookie-flow/image.jpg",
    href: "/kookie-flow",
    github: "https://github.com/KushagraDhawan1997/kookie-flow",
  },
  {
    id: 4,
    title: "Kookie Blocks",
    description:
      "Kookie Blocks is a higher-level implementation of Kookie UI focused on creating reusable blocks for both app interfaces and marketing pages.",
    image: "/pages/kookie-blocks/image.jpg",
    href: "/kookie-blocks",
    github: "https://github.com/KushagraDhawan1997/kookie-blocks",
  },
  {
    id: 5,
    title: "Kookie AI",
    description:
      "Kookie AI explores how to design chat-based AI products by working within chat constraints while minimizing friction points through thoughtful UX.",
    image: "/pages/kookie-ai/image.jpg",
    href: "/kookie-ai",
  },
  {
    id: 6,
    title: "Services",
    description:
      "Independent consulting in product engineering, design systems architecture, developer tooling, and prototyping & UX systems.",
    image: "/articles/about-me/image.jpg",
    href: "/services",
  },
];

export function PortfolioSection() {
  return (
    <Section size="4">
      <Flex
        direction="column"
        align="start"
        gap="4"
        px={{ initial: "4", sm: "6" }}
      >
        <Flex direction="column" gap="2" width="100%">
          <Heading as="h2" size="3" weight="medium">
            Projects
          </Heading>
          <Separator size="4"></Separator>
        </Flex>
        <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="4">
          {portfolioItems.map((item) => (
            <Flex key={item.id} direction="column" gap="4" align="start" py="4">
              <NextLink
                href={item.href}
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  position: "relative",
                  display: "block",
                  overflow: "hidden",
                }}
              >
                <WebGLImageTracker
                  id={`portfolio-${item.id}`}
                  src={item.image}
                  borderRadius={0}
                >
                  <Image
                    as={NextImage}
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    style={{ cursor: "pointer", objectFit: "cover" }}
                    radius="none"
                    priority={item.id <= 2}
                    loading={item.id <= 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </WebGLImageTracker>
              </NextLink>

              <Flex direction="column" gap="1">
                <Heading as="h3" size="3" weight="medium">
                  {item.title}
                </Heading>
                <Text size="3" color="gray">
                  {item.description}
                </Text>
              </Flex>

            </Flex>
          ))}
        </Grid>
      </Flex>
    </Section>
  );
}
