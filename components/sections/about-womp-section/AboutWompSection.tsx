"use client";

/**
 * About Womp Section Component
 *
 * This component showcases leadership experience and impact at Womp.
 * It includes a headline, description, call-to-action button, stats, and illustration grid.
 * The section uses a responsive layout with different designs for mobile and desktop.
 */

import { Button, Container, Flex, Heading, Section, Text, Card, Link, Callout } from "@kushagradhawan/kookie-ui";
import { WompStats, WompIllustrationGrid } from ".";

/**
 * AboutWompSection Component
 *
 * Features:
 * - Headline and descriptive subtitle with gradient text styling
 * - Clear call-to-action button linking to Womp's website
 * - Stats section highlighting key metrics and accomplishments
 * - Visually engaging illustration grid for both mobile and desktop views
 * - Dialog component for displaying additional information
 *
 * @returns React component for the Womp experience section
 */
export function AboutWompSection() {
  return (
    <Section>
      {/* Callout for Spark update */}
      <Flex justify="center" pb="4">
        <Callout.Root highContrast size="2" style={{ width: "fit-content" }}>
          <Callout.Icon />
          <Callout.Text>
            Read about the{" "}
            <Link href="/articles/womp-spark-update" target="_blank" rel="noopener noreferrer">
              latest Womp Spark update
            </Link>{" "}
            — now generates images and 3D meshes directly in chat
          </Callout.Text>
        </Callout.Root>
      </Flex>
      <Container size="4">
        <Card variant="classic" size="4">
          <Flex direction="column" gap="9" py="6" px={{ initial: "3", sm: "6" }}>
            {/* Title and subtitle */}
            <Flex direction="column" gap="4">
              <Heading size="8" weight="medium">
                Womp
              </Heading>
              <Text size="4" color="gray">
                I lead product/design at <Link href="https://womp.com">Womp 3D</Link>
                —a browser 3D editor that helps beginners create fast. We ship small, learn fast, and keep moving.
              </Text>
            </Flex>

            {/* Stats section displaying key metrics */}
            <WompStats />

            {/* Illustration grid */}
            <WompIllustrationGrid />

            {/* Call-to-action button */}
            <Flex justify="center" align="center" direction="column" gap="4">
              <Button asChild variant="solid" size="3" highContrast>
                <a href="https://womp.com" target="_blank" rel="noopener noreferrer">
                  Create in Womp
                </a>
              </Button>
              <Text size="2" color="gray">
                Works in the browser. No install.
              </Text>
            </Flex>
          </Flex>
        </Card>
      </Container>
    </Section>
  );
}
