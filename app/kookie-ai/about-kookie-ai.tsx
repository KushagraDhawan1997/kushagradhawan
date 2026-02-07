"use client";

import {
  AspectRatio,
  Avatar,
  Badge,
  Container,
  Flex,
  Section,
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
        <Hero.Root layout="stacked" gap="12">
          <Container size="2">
            <Flex direction="column" gap="6" align="center">
              <Hero.Meta>
                <Avatar
                  fallback="K"
                  size="2"
                  color="gray"
                  src="/kushagra-logo.svg"
                />
              </Hero.Meta>

              <Flex direction="column" gap="4">
                <Flex direction="row" align="center" justify="center" gap="2">
                  <Badge highContrast>Coming Soon</Badge>
                  <Badge highContrast color="blue">
                    AI
                  </Badge>
                </Flex>

                <Hero.Title>
                  Kookie AI is a UX-first desktop web product where conversations
                  live as a branching graph of nodes.
                </Hero.Title>
              </Flex>

              <Hero.Description color="gray">
                Each branch can diverge, transform, or produce artifacts — giving
                knowledge workers and creators a powerful OS for exploring,
                remixing, and producing with AI.{" "}
                <Text as="span" highContrast>
                  Not a chatbot. A conversation OS.
                </Text>
              </Hero.Description>
            </Flex>
          </Container>

          <Hero.Media style={{ width: '100%' }}>
            <Box
              px={{ initial: "4", sm: "6" }}
              width="100%"
              style={{
                borderRadius: "var(--radius-4)",
                overflow: "hidden",
              }}
            >
              <AspectRatio ratio={3 / 1}>
                <WebGLImageTracker
                  id="kookie-ai-hero"
                  src="/pages/kookie-ai/image.jpg"
                  borderRadius={16}
                >
                  <Image
                    as={NextImage}
                    src="/pages/kookie-ai/image.jpg"
                    alt="Kookie AI Hero"
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    style={{ objectFit: "cover" }}
                    priority
                    loading="eager"
                    decoding="async"
                  />
                </WebGLImageTracker>
              </AspectRatio>
            </Box>
          </Hero.Media>
        </Hero.Root>
      </Section>
    </>
  );
}
