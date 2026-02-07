"use client";

import {
  Button,
  Flex,
  Text,
  Heading,
  Section,
  Grid,
  IconButton,
} from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, GithubIcon } from "@hugeicons/core-free-icons";
import NextLink from "next/link";
import NextImage from "next/image";
import { Image } from "@kushagradhawan/kookie-ui";
import { WebGLImageTracker } from "@/components/webgl";

const portfolioItems = [
  {
    id: 1,
    title: "Womp 3D",
    description:
      "Womp is a browser-based 3D modeling platform aimed to make 3D beginner-friendly and easy. Built by artists and engineers who have experienced the uphill learning curve of 3D.",
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
];

export function PortfolioSection() {
  return (
    <Section size="4">
      <Flex
        direction="column"
        align="start"
        gap="8"
        px={{ initial: "4", sm: "6" }}
      >
        <Grid columns={{ initial: "1", sm: "2" }} gap="2">
          {portfolioItems.map((item) => (
            <Flex key={item.id} direction="column" gap="4" align="start" py="4">
              <NextLink
                href={item.href}
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  position: "relative",
                  display: "block",
                  borderRadius: "var(--radius-4)",
                  overflow: "hidden",
                }}
              >
                <WebGLImageTracker
                  id={`portfolio-${item.id}`}
                  src={item.image}
                  borderRadius={16}
                >
                  <Image
                    as={NextImage}
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    style={{ cursor: "pointer", objectFit: "cover" }}
                    priority={item.id <= 2}
                    loading={item.id <= 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </WebGLImageTracker>
              </NextLink>

              <Flex direction="column" gap="1">
                <Heading size="3" weight="medium">
                  {item.title}
                </Heading>
                <Text size="3" color="gray">
                  {item.description}
                </Text>
              </Flex>

              <Flex gap="2" display="none">
                <Button asChild variant="soft" size="2" highContrast>
                  <NextLink href={item.href}>
                    More
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      strokeWidth={1.75}
                    />
                  </NextLink>
                </Button>
                {item.github && (
                  <IconButton
                    asChild
                    variant="ghost"
                    size="2"
                    highContrast
                    aria-label="GitHub"
                  >
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HugeiconsIcon icon={GithubIcon} strokeWidth={1.75} />
                    </a>
                  </IconButton>
                )}
                {item.externalLink && (
                  <Button asChild variant="soft" size="2" highContrast>
                    <a
                      href={item.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Womp
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        strokeWidth={1.75}
                      />
                    </a>
                  </Button>
                )}
              </Flex>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Section>
  );
}
