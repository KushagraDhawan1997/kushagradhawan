"use client";

/**
 * HeroSectionPersonal Component
 *
 * This component displays a personal introduction section focused on
 * non-work aspects of life. It includes a simple greeting and indicates
 * that more personal content is coming soon.
 *
 * Features:
 * - A personal greeting
 * - A brief introduction about personal life
 * - A "coming soon" message
 * - Clean, minimal styling with KookieUI components
 *
 * @returns React component for the personal hero section
 */

import { Flex, Text, Heading, Container, Section } from "@kushagradhawan/kookie-ui";

export function HeroSectionPersonal() {
  return (
    <Section position="relative">
      {/* Personal hero content */}
      <Container
        pt="8"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Flex
          direction="column"
          align="center"
          gap="9"
          py="6"
          px={{ initial: "4", sm: "6" }}
          // style={{
          //   backgroundColor: "var(--gray-6)",
          // }}
        >
          {/* Title and subtitle section */}
          <Flex direction="column" align="center" gap="6">
            <Text size="1" color="gray" weight="medium">
              PERSONAL
            </Text>
            <Heading align="center" size="9" weight="medium">
              Hi. I'm Kushagra. Call me Kush.
            </Heading>

            <Text align="center" size="5" color="gray">
              More about my life, interests, and thoughts coming soon.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
