"use client";

import {
  AspectRatio,
  Badge,
  Flex,
  Heading,
  Section,
  Separator,
  Text,
  Image,
  Box,
} from "@kushagradhawan/kookie-ui";
import { Hero } from "@kushagradhawan/kookie-blocks";
import NextImage from "next/image";
import { WebGLImageTracker } from "@/components/webgl";

export function AboutKookieAI() {
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
            <Flex gap="2" align="center">
              <Heading size="3" weight="medium">
                Kookie AI
              </Heading>
              <Badge highContrast>Coming Soon</Badge>
              <Badge highContrast color="blue">
                AI
              </Badge>
            </Flex>
            <Separator size="4" />
          </Flex>
          <Hero.Root align="start" gap={{ initial: "6", sm: "8" }}>
            <Hero.Title
              size={{ initial: "8", sm: "9", lg: "10" }}
              weight="medium"
              align="left"

            >
              Kookie AI is a UX-first desktop web product where conversations
              live as a branching graph of nodes.
            </Hero.Title>

            <Hero.Description
              size={{ initial: "3", sm: "4" }}
              color="gray"
              align="left"
            >
              Each branch can diverge, transform, or produce artifacts — giving
              knowledge workers and creators a powerful OS for exploring,
              remixing, and producing with AI.{" "}
              <Text as="span" highContrast>
                Not a chatbot. A conversation OS.
              </Text>
            </Hero.Description>
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
              id="kookie-ai-hero"
              src="/pages/kookie-ai/image.jpg"
              borderRadius={0}
            >
              <Image
                as={NextImage}
                src="/pages/kookie-ai/image.jpg"
                alt="Kookie AI Hero"
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
    </>
  );
}
