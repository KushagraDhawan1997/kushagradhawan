"use client";

import React from "react";
import {
  Button,
  Flex,
  Text,
  Container,
  Section,
  Link,
  Image,
  Avatar,
  Tooltip,
} from "@kushagradhawan/kookie-ui";
import { HoverCard } from "@kushagradhawan/kookie-ui";
import { Hero as HeroBlock } from "@kushagradhawan/kookie-blocks";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import NextLink from "next/link";

export function Hero() {
  return (
    <Section position="relative" size="4">
      <Container size="2" style={{ position: "relative", zIndex: 1 }}>
        <HeroBlock.Root px={{ initial: "4", sm: "6" }}>
          <HeroBlock.Meta>
            <Avatar
              fallback="K"
              size="2"
              color="gray"
              src="/kushagra-logo.svg"
            />
          </HeroBlock.Meta>

          <HeroBlock.Title>
            I design, vibe-code
            <Tooltip content="I actually have a computer science degree! My vibe-coding is (mostly) safe for work.">
              <span style={{ cursor: "help", fontWeight: "bold" }}>*</span>
            </Tooltip>
            , lead teams, and ship.
          </HeroBlock.Title>

          <HeroBlock.Description color="gray">
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
            ,{" "}
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Link
                  color="blue"
                  target="_blank"
                  href="https://blocks.hellokookie.com/"
                >
                  KookieBlocks
                </Link>
              </HoverCard.Trigger>
              <HoverCard.Content maxWidth="600px">
                <Flex direction="column" align="center">
                  <Image
                    src="/kookie-blocks.png"
                    alt="KookieBlocks Preview"
                    width="600"
                    height="450"
                  />
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
            , KookieAI.
          </HeroBlock.Description>

          <HeroBlock.Actions>
            <Button asChild variant="solid" size="2" highContrast>
              <a
                href="https://calendly.com/accounts-kushagradhawan/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book an intro call via Calendly"
              >
                Calendly
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
        </HeroBlock.Root>
      </Container>
    </Section>
  );
}
