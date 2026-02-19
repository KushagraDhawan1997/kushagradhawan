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

import { Flex, Text, Heading, Container, Section, Avatar, Grid, AspectRatio, Image } from "@kushagradhawan/kookie-ui";

export function HeroSectionPersonal() {
  return (
    <>


      <Section position="relative" size="4">
        <Container size="2" style={{ position: "relative", zIndex: 1 }}>
          <Flex direction="column" align="center" gap={{ initial: "6", sm: "8" }} px={{ initial: "4", sm: "6" }}>
            {/* Title and subtitle section */}
            <Flex direction="column" align="center" gap="6">
              <Avatar fallback="K" size="2" color="gray" src="/kushagra-logo.svg"></Avatar>
              <Heading align="center" size={{ initial: "8", sm: "9", lg: "10" }} weight="medium">
                Hi. I'm Kushagra. Call me Kush.
              </Heading>

              <Text align="center" size="3">
                More about my life, interests, and thoughts coming soon.
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Section>

      <Section position="relative" size="4">
        <Flex direction="column" align="center" gap={{ initial: "6", sm: "8" }} px={{ initial: "4", sm: "6" }}>
          <Grid columns={{ initial: "1", sm: "2" }} gap="1px" width="100%">
            {Array.from({ length: 8 }).map((_, i) => (
              <AspectRatio key={i} ratio={16 / 9}>
                <Image
                  src="/articles/leadership.png"
                  alt={`Personal interest ${i + 1}`}
                  fit="cover"
                  width="100%"
                  height="100%"
                  radius="none"
                />
              </AspectRatio>
            ))}
          </Grid>
        </Flex>
      </Section>
    </>
  );
}
