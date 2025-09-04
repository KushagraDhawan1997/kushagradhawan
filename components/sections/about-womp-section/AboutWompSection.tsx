"use client";

/**
 * About Womp Section Component
 *
 * This component showcases leadership experience and impact at Womp.
 * It includes a headline, description, call-to-action button, stats, and illustration grid.
 * The section uses a responsive layout with different designs for mobile and desktop.
 */

import {
  Button,
  Container,
  Flex,
  Heading,
  Section,
  Text,
  Card,
  Link,
} from "@kushagradhawan/kookie-ui";
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
      <Container size="4">
        <Card variant="classic" size="4">
          <Flex
            direction="column"
            gap="9"
            py="6"
            px={{ initial: "3", sm: "6" }}
          >
            {/* Title and subtitle */}
            <Flex direction="column" gap="4">
              <Heading size="8" weight="medium">
                Womp
              </Heading>
              <Text size="4" color="gray">
                I'm currently leading product and design at{" "}
                <Link href="https://womp.com">Womp 3D</Link>. We're trying to
                make 3D creation accessible to everyone. Our team of artists,
                designers, and engineers started with our own frustrations with
                3D tools and are working to build something everyone can use.
              </Text>
            </Flex>

            {/* Stats section displaying key metrics */}
            <WompStats />

            {/* Illustration grid */}
            <WompIllustrationGrid />

            {/* Call-to-action button */}
            <Flex justify="center">
              <Button asChild variant="solid" size="3" highContrast>
                <a
                  href="https://womp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Womp
                </a>
              </Button>
            </Flex>
          </Flex>
        </Card>
      </Container>
    </Section>
  );
}
