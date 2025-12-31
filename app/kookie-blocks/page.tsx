"use client"

import { Button, Container, Flex, Heading, Section, Text, Badge, Card, Avatar } from "@kushagradhawan/kookie-ui";

export default function KookieBlocksPage() {
  return (
    <>
      <Section position="relative" size="2">
        <Container size="2" style={{ position: "relative", zIndex: 1 }}>
          <Flex direction="column" align="center" gap="8" px={{ initial: "4", sm: "6" }}>
            <Flex direction="column" align="center" gap="6">
              <Avatar fallback="K" size="2" color="gray" src="/kushagra-logo.svg"></Avatar>

              <Flex direction="column" align="center" gap="2">
                <Heading align="center" size="9" weight="medium">
                  Kookie Blocks
                </Heading>
                <Badge highContrast>Coming Soon</Badge>
              </Flex>

              <Text align="center" size="4">
                Kookie Blocks is a{" "}
                <Text as="span" weight="medium" highContrast>
                  higher-level implementation of Kookie UI
                </Text>{" "}
                focused on creating reusable blocks for both app interfaces and marketing pages. Building on the foundations of Kookie UI, Blocks provides{" "}
                <Text as="span" weight="medium" highContrast>
                  pre-built, composable components
                </Text>{" "}
                that accelerate development while maintaining design consistency.
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Section>
      <Section size="4">
        <Container size="4">
          <Card variant="classic" size="4">
            <Flex direction="column" gap="9" py="6" px={{ initial: "3", sm: "6" }}>
              <Flex justify="center">
                <Button variant="solid" size="3" highContrast disabled>
                  Coming Soon
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Container>
      </Section>
    </>
  );
}
