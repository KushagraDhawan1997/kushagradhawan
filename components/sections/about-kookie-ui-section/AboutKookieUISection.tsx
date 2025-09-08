"use client";

/**
 * About KookieUI Section Component
 *
 * This component showcases KookieUI capabilities and design principles.
 * It includes a headline, description, call-to-action button, and a grid of capability cards.
 * The section uses a responsive layout with different designs for mobile and desktop.
 */

import React from "react";
import {
  Button,
  Container,
  Dialog,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
  Card,
  Link,
  Badge,
  VisuallyHidden,
  Inset,
  Image,
} from "@kushagradhawan/kookie-ui";
import { kookieCapabilities, type KookieCapability } from "./kookieData";
import {
  Palette,
  Shield,
  Target,
  Layers,
  Accessibility,
  Sparkles,
} from "lucide-react";

// Simple capability card with dialog functionality
function KookieCapabilityCard({
  capability,
  icon,
}: {
  capability: KookieCapability;
  icon: React.ReactNode;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Card size="3" variant="soft" asChild style={{ cursor: "pointer" }}>
          <button>
            <Flex direction="column" gap="3" height="100%" p="2">
              {icon}
              <Flex align="center" gap="3">
                <Heading weight="medium" size="3">
                  {capability.title}
                </Heading>
              </Flex>
              <Text size="3" color="gray">
                {capability.shortDescription}
              </Text>
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
 * AboutKookieUISection Component
 *
 * Features:
 * - Headline and descriptive subtitle with gradient text styling
 * - Clear call-to-action button linking to KookieUI article
 * - Grid of capability cards showcasing KookieUI principles
 * - Dialog component for displaying expanded capability information
 * - Responsive layout with 3x2 grid on desktop, 1 column on mobile
 *
 * @returns React component for the KookieUI section
 */
export function AboutKookieUISection() {
  // Map capabilities to their icons
  const capabilityIcons = [
    <Palette key="consistency" size={20} />,
    <Shield key="robustness" size={20} />,
    <Target key="intentional" size={20} />,
    <Layers key="foundations" size={20} />,
    <Accessibility key="accessible" size={20} />,
    <Sparkles key="beautiful" size={20} />,
  ];

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
              <Flex
                as="span"
                width="32px"
                height="32px"
                display="inline-flex"
                align="center"
                justify="center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="var(--gray-a12)"
                  viewBox="0 0 256 256"
                >
                  <path d="M240,108a28,28,0,1,1-28-28A28,28,0,0,1,240,108ZM72,108a28,28,0,1,0-28,28A28,28,0,0,0,72,108ZM92,88A28,28,0,1,0,64,60,28,28,0,0,0,92,88Zm72,0a28,28,0,1,0-28-28A28,28,0,0,0,164,88Zm23.12,60.86a35.3,35.3,0,0,1-16.87-21.14,44,44,0,0,0-84.5,0A35.25,35.25,0,0,1,69,148.82,40,40,0,0,0,88,224a39.48,39.48,0,0,0,15.52-3.13,64.09,64.09,0,0,1,48.87,0,40,40,0,0,0,34.73-72Z"></path>
                </svg>
              </Flex>

              <Flex direction="row" align="center" gap="1">
                <Badge highContrast>Coming Soon</Badge>
                <Badge highContrast color="orange">
                  Beta
                </Badge>
              </Flex>

              <Heading size="8" weight="medium">
                <Link
                  target="_blank"
                  highContrast
                  href="https://github.com/KushagraDhawan1997/kookie-ui"
                >
                  Kookie UI
                </Link>
              </Heading>

              <Text size="4" color="gray">
                KookieUI is a design system I'm building to make design rules
                explicit. It's still a work in progress, but already helping
                keep Womp faster and more consistent.
              </Text>
            </Flex>

            {/* 3x2 grid of capability cards */}
            <Grid gap="3" columns={{ initial: "1", sm: "2", md: "3" }}>
              {kookieCapabilities.map((capability, index) => (
                <KookieCapabilityCard
                  key={capability.title}
                  capability={capability}
                  icon={capabilityIcons[index]}
                />
              ))}
            </Grid>

            {/* Call-to-action buttons */}
            <Flex justify="center" gap="3">
              <Button variant="solid" size="3" highContrast disabled>
                Coming Soon
              </Button>
              <Button asChild variant="classic" size="3" highContrast>
                <a
                  href="/articles/about-kookie-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read about Kookie UI
                </a>
              </Button>
            </Flex>
          </Flex>
          <Inset clip="padding-box">
            <Image src="/sample.png" alt="KookieUI" />
          </Inset>
        </Card>
      </Container>
    </Section>
  );
}
