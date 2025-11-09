"use client";

/**
 * About Womp Section Component
 *
 * This component showcases leadership experience and impact at Womp.
 * It includes a headline, description, call-to-action button, stats, and illustration grid.
 * The section uses a responsive layout with different designs for mobile and desktop.
 */

import { Button, Container, Flex, Heading, Section, Text, Image, Link, Callout, HoverCard } from "@kushagradhawan/kookie-ui";
import { WompStats, WompIllustrationGrid } from ".";
import { Sparkles } from "lucide-react";

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
        <Flex direction="column" gap="9" py="6" px={{ initial: "4", sm: "6" }}>
          {/* Title and subtitle */}
          <Flex direction="column" align="center" gap="6">
            {/* Callout for Spark update */}
            <Flex justify="center" pt="4">
              <Callout.Root highContrast variant="soft" color="gray" size="2" style={{ borderRadius: "var(--radius-2)" }}>
                {/* <Callout.Icon>
                  <Sparkles />
                </Callout.Icon> */}
                <Callout.Text align="center">
                  Read about the latest update to{" "}
                  <Link underline="always" href="/articles/womp-spark-update" target="_blank" rel="noopener noreferrer">
                    Womp Spark
                  </Link>{" "}
                  — now generates images and 3D meshes using advanced frontier models
                </Callout.Text>
              </Callout.Root>
            </Flex>
            <Heading align="center" size="8" weight="medium">
              I lead{" "}
              <Text as="span" highContrast>
                product & design
              </Text>{" "}
              at{" "}
              <HoverCard.Root>
                <HoverCard.Trigger>
                  <Link highContrast underline="always" href="https://womp.com">
                    <Text as="span" highContrast>
                      Womp 3D
                    </Text>
                  </Link>
                </HoverCard.Trigger>
                <HoverCard.Content maxWidth="600px">
                  <Flex direction="column" align="center">
                    <Image src="/womp.png" alt="Womp 3D Preview" width="600" height="450" />
                  </Flex>
                </HoverCard.Content>
              </HoverCard.Root>
              , a{" "}
              <Text as="span" color="gray" weight="regular" style={{ fontStyle: "italic" }}>
                browser based 3D editor
              </Text>
              , empowering{" "}
              <Text as="span" color="gray" weight="regular" style={{ fontStyle: "italic" }}>
                everyone—from first-timers to pros—
              </Text>
              to bring their ideas to life in minutes.
              <br />
              <br />
              <Text as="span" highContrast>
                We move fast
              </Text>
              ,{" "}
              <Text as="span" highContrast>
                experiment boldly
              </Text>
              , and{" "}
              <Text as="span" highContrast>
                craft with care
              </Text>
              .
            </Heading>
          </Flex>

          {/* Illustration grid */}
          <WompIllustrationGrid />

          {/* Stats section displaying key metrics */}
          <WompStats />

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
      </Container>
    </Section>
  );
}
