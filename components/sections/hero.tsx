"use client";

import React from "react";
import {
  Button,
  Flex,
  Section,
  Link,
  Image,
  Callout,
  Text,
  Heading,
  Separator,
} from "@kushagradhawan/kookie-ui";
import { HoverCard } from "@kushagradhawan/kookie-ui";
import { Hero as HeroBlock } from "@kushagradhawan/kookie-blocks";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import NextLink from "next/link";
import NextImage from "next/image";

interface HeroProps {
  latestAnnouncement?: {
    slug: string;
    title: string;
    date: string;
    description: string;
  } | null;
}

export function Hero({ latestAnnouncement }: HeroProps) {
  return (
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
            Kushagra Dhawan
          </Heading>
          <Separator size="4" />
        </Flex>
        <HeroBlock.Root align="start" gap={{ initial: "6", sm: "8" }}>
          <HeroBlock.Title
            size={{ initial: "8", sm: "9", lg: "10" }}
            weight="medium"
            align="left"

          >
            Independent Product, Design & Engineer. I build where design,
            engineering, and product meet.
          </HeroBlock.Title>

          <HeroBlock.Description
            size={{ initial: "3", sm: "4" }}
            color="gray"
            align="left"
          >
            Building{" "}
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Link
                  underline="always"
                  color="blue"
                  target="_blank"
                  href="https://www.hellokookie.com/"
                >
                  Kookie UI
                </Link>
              </HoverCard.Trigger>
              <HoverCard.Content maxWidth="600px" style={{ padding: 0 }}>
                <Flex direction="column" align="center">
                  <Image
                    as={NextImage}
                    src="/hover-cards/kookie-ui.png"
                    alt="Kookie UI Preview"
                    width={600}
                    height={450}
                    loading="lazy"
                    radius="none"
                  />
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
            ,{" "}
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Link
                  underline="always"
                  color="blue"
                  target="_blank"
                  href="https://kookieblocks.com/"
                >
                  Kookie Blocks
                </Link>
              </HoverCard.Trigger>
              <HoverCard.Content maxWidth="600px" style={{ padding: 0 }}>
                <Flex direction="column" align="center">
                  <Image
                    as={NextImage}
                    src="/hover-cards/kookie-blocks.png"
                    alt="Kookie Blocks Preview"
                    width={600}
                    height={450}
                    loading="lazy"
                    radius="none"
                  />
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
            ,{" "}
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Link
                  underline="always"
                  color="blue"
                  target="_blank"
                  href="https://github.com/KushagraDhawan1997/kookie-flow"
                >
                  Kookie Flow
                </Link>
              </HoverCard.Trigger>
              <HoverCard.Content maxWidth="320px">
                <Flex direction="column" gap="2" p="1">
                  <Heading size="3" weight="medium">
                    Kookie Flow
                  </Heading>
                  <Text size="2" color="gray">
                    A WebGL-native node graph library for React that combines
                    React Flow ergonomics with GPU-accelerated rendering.
                  </Text>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
            , and{" "}
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Link underline="always" color="blue" href="/kookie-ai">
                  Kookie AI
                </Link>
              </HoverCard.Trigger>
              <HoverCard.Content maxWidth="320px">
                <Flex direction="column" gap="2" p="1">
                  <Heading size="3" weight="medium">
                    Kookie AI
                  </Heading>
                  <Text size="2" color="gray">
                    Exploring how to design chat-based AI products by working
                    within chat constraints while minimizing friction through
                    thoughtful UX.
                  </Text>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
            . Currently consulting with{" "}
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Link
                  underline="always"
                  color="blue"
                  target="_blank"
                  href="https://womp.com"
                >
                  Womp 3D
                </Link>
              </HoverCard.Trigger>
              <HoverCard.Content maxWidth="600px" style={{ padding: 0 }}>
                <Flex direction="column" align="center">
                  <Image
                    as={NextImage}
                    src="/hover-cards/womp.png"
                    alt="Womp 3D Preview"
                    width={600}
                    height={450}
                    loading="lazy"
                    radius="none"
                  />
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
            .
          </HeroBlock.Description>

          <HeroBlock.Actions gap="3">
            <Button asChild variant="solid" size="2" highContrast>
              <a
                href="https://calendly.com/accounts-kushagradhawan/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book an intro call via Calendly"
              >
                Book a call
                <HugeiconsIcon icon={ArrowUpRight01Icon} />
              </a>
            </Button>
            <Button asChild variant="soft" highContrast size="2">
              <NextLink
                href="/articles/about-me"
                aria-label="Read more about Kushagra Dhawan's background and experience"
              >
                About me
                <HugeiconsIcon icon={ArrowRight01Icon} />
              </NextLink>
            </Button>
          </HeroBlock.Actions>

          {latestAnnouncement && (
            <Flex justify="start" mt="2">
              <Link
                href={`/articles/${latestAnnouncement.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Callout.Root
                  highContrast
                  variant="outline"
                  color="gray"
                  size="2"
                  style={{ cursor: "pointer" }}
                >
                  <Callout.Text align="left">
                    Read the latest → {latestAnnouncement.title}
                  </Callout.Text>
                </Callout.Root>
              </Link>
            </Flex>
          )}
        </HeroBlock.Root>
      </Flex>
    </Section>
  );
}
