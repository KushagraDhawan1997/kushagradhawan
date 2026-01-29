"use client";

import {
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

export function AboutKookieAI() {
  return (
    <>
      <Section position="relative" size="4">
        <Container size="4" px={{ initial: "4", sm: "6" }}>
          <Hero.Root layout={{ initial: "stacked", md: "split" }} gap="12">
            <Hero.Media style={{ flex: 1, alignSelf: "stretch" }}>
              <Box position="relative" width="100%" height="100%" minHeight="300px">
                <Image
                  as={NextImage}
                  src="/pages/kookie-ai/image.jpg"
                  alt="Kookie AI Hero"
                  fill
                  radius="none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Hero.Media>

            <Flex direction="column" gap="6" style={{ flex: 1 }}>
              <Hero.Meta>
                <Avatar
                  fallback="K"
                  size="2"
                  color="gray"
                  src="/kushagra-logo.svg"
                />
              </Hero.Meta>

              <Flex direction="column" gap="4">
                <Flex direction="row" align="center" gap="2">
                  <Badge highContrast>Coming Soon</Badge>
                  <Badge highContrast color="blue">
                    AI
                  </Badge>
                </Flex>

                <Hero.Title align="left">
                  Kookie AI is a UX-first desktop web product where conversations
                  live as a branching graph of nodes.
                </Hero.Title>
              </Flex>

              <Hero.Description align="left" color="gray">
                Each branch can diverge, transform, or produce artifacts — giving
                knowledge workers and creators a powerful OS for exploring,
                remixing, and producing with AI.{" "}
                <Text as="span" highContrast>
                  Not a chatbot. A conversation OS.
                </Text>
              </Hero.Description>
            </Flex>
          </Hero.Root>
        </Container>
      </Section>
    </>
  );
}
