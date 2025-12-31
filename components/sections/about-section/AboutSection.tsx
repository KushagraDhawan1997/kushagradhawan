"use client";

/**
 * About Section Component
 *
 * This component serves as the primary introduction to professional capabilities and experience.
 * It includes a headline, description, call-to-action button, and a grid of capability cards.
 * The section uses a responsive layout with different designs for mobile and desktop.
 */

import React from "react";
import {
  Button,
  Card,
  Container,
  Dialog,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
  VisuallyHidden,
} from "@kushagradhawan/kookie-ui";
import Link from "next/link";
import { capabilities, type Capability } from "./about-section-data";
import { Users, Target, Code2, Mail } from "lucide-react";

// Simple capability card with dialog functionality
function CapabilityCard({
  capability,
  children,
}: {
  capability: Capability;
  children?: React.ReactNode;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Card size="3" variant="soft" asChild style={{ cursor: "pointer" }}>
          <button>
            <Flex direction="column" gap="4" height="100%" p="2">
              {children}
              <Flex direction="column" gap="2">
                <Heading weight="medium" size="3">
                  {capability.title}
                </Heading>
                <Text size="3" color="gray">
                  {capability.description}
                </Text>
              </Flex>
            </Flex>
          </button>
        </Card>
      </Dialog.Trigger>

      <Dialog.Content>
        <VisuallyHidden>
          <Dialog.Title>{capability.title}</Dialog.Title>
        </VisuallyHidden>

        <Flex direction="column" gap="6">
          <Heading size="6" weight="medium">
            {capability.title}
          </Heading>
          <Text size="3" style={{ whiteSpace: "pre-line" }}>
            {capability.expandedContent}
          </Text>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}

/**
 * AboutSection Component
 *
 * Features:
 * - A visually prominent headline with gradient text styling
 * - A brief paragraph that summarizes professional impact
 * - A call-to-action button linking to more detailed resume information
 * - A bento-style grid highlighting key professional capabilities with varying card sizes
 * - Clickable cards that open dialogs with expanded content
 * - Different layouts for mobile and desktop views
 *
 * @returns React component for the about section
 */
export function AboutSection() {
  // Get the specific capabilities we want to display
  const scalingProducts = capabilities.find(
    (c) => c.title === "Scaling Products"
  );
  const teamLeadership = capabilities.find(
    (c) => c.title === "Team Leadership"
  );
  const productStrategy = capabilities.find(
    (c) => c.title === "Product Strategy"
  );
  const engineeringDesign = capabilities.find(
    (c) => c.title === "Engineering & Design"
  );

  return (
    <Section>
      <Container size="4">
        <Flex direction="column" gap="9" p="6">
          {/* Header with title and subtitle */}
          <Flex direction="column" gap="4">
            <Heading size="8" weight="medium">
              Shipping Products That Scale
            </Heading>
            <Text size="4" color="gray">
              I combine product strategy, design thinking, and engineering
              skills to build products that actually help people—faster, more
              consistently, and at scale.
            </Text>
          </Flex>

          {/* Call-to-action buttons */}
          <Flex direction="row" gap="2">
            <Button variant="solid" size="3" highContrast>
              <Mail />
              Contact
            </Button>
            <Button asChild variant="classic" size="3" highContrast>
              <Link
                href="/articles/building-products-that-scale"
                aria-label="Read my article about building products that scale"
              >
                Read about Scale
              </Link>
            </Button>
          </Flex>

          {/* Simple 2-column grid */}
          <Grid gap="3" columns={{ initial: "1", sm: "2" }}>
            {/* Left: Scaling Products card */}
            {scalingProducts && (
              <CapabilityCard capability={scalingProducts} />
            )}

            {/* Right: Three capability cards */}
            <Flex direction="column" gap="3">
              {teamLeadership && (
                <CapabilityCard capability={teamLeadership}>
                  <Users />
                </CapabilityCard>
              )}

              {productStrategy && (
                <CapabilityCard capability={productStrategy}>
                  <Target />
                </CapabilityCard>
              )}

              {engineeringDesign && (
                <CapabilityCard capability={engineeringDesign}>
                  <Code2 />
                </CapabilityCard>
              )}
            </Flex>
          </Grid>
        </Flex>
      </Container>
    </Section>
  );
}
