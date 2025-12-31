"use client";

import { Section, Container, Flex, Avatar, Heading, Text, Badge } from "@kushagradhawan/kookie-ui";

export default function KookieAIPage() {
  return (
    <Section position="relative" size="2">
      <Container size="2" style={{ position: "relative", zIndex: 1 }}>
        <Flex direction="column" align="center" gap="8" px={{ initial: "4", sm: "6" }} py="9">
          <Flex direction="column" align="center" gap="6">
            <Avatar fallback="K" size="2" color="gray" src="/kushagra-logo.svg"></Avatar>

            <Flex direction="column" align="center" gap="2">
              <Heading align="center" size="9" weight="medium">
                Kookie AI
              </Heading>
              <Flex direction="row" align="center" gap="2">
                <Badge highContrast>Coming Soon</Badge>
                <Badge highContrast color="blue">
                  AI
                </Badge>
              </Flex>
            </Flex>

            <Text align="center" size="4">
              A UX-first, desktop web product where conversations live as a{" "}
              <Text as="span" weight="medium" highContrast>
                branching graph of nodes
              </Text>
              . Each branch can diverge, transform, or produce artifacts — giving knowledge workers and creators a powerful OS for exploring, remixing, and
              producing with AI.{" "}
              <Text as="span" weight="medium" highContrast>
                Not a chatbot. A conversation OS.
              </Text>
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
