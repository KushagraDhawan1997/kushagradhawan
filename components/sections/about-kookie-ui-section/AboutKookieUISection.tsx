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
  AspectRatio,
  Badge,
  VisuallyHidden,
  Inset,
  Image,
  HoverCard,
  Tooltip,
} from "@kushagradhawan/kookie-ui";
import { kookieCapabilities, type KookieCapability } from "./kookieData";
import { Palette, Shield, Target, Layers, Accessibility, Sparkles } from "lucide-react";

// Simple capability card with dialog functionality
function KookieCapabilityCard({ capability, icon }: { capability: KookieCapability; icon: React.ReactNode }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Card size="3" variant="soft" asChild style={{ cursor: "pointer" }}>
          <button>
            <Flex direction="column" gap="3" height="100%" p="2">
              {icon}
              <Flex direction="column" gap="2">
                <Heading weight="medium" size="4">
                  {capability.title}
                </Heading>
                <Text size="3" color="gray">
                  {capability.shortDescription}
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
        <Inset clip="padding-box">
          <AspectRatio ratio={2 / 1}>
            <Image
              src={capability.image}
              alt={capability.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "var(--radius-4)", overflow: "hidden" }}
            />
          </AspectRatio>
        </Inset>
        <Flex direction="column" gap="4" mt="10" align="center">
          {/* {icon} */}
          <Heading size="6" weight="medium">
            {capability.title}
          </Heading>
          <Text align="center" size="4" style={{ whiteSpace: "pre-line" }}>
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
        <Flex direction="column" gap="9" py="6" px={{ initial: "4", sm: "6" }}>
          {/* Title and subtitle */}
          <Flex direction="column" align="center" gap="6">
            <Flex direction="row" align="center" gap="1">
              <Badge highContrast size="2">
                Coming Soon
              </Badge>
            </Flex>

            <Heading size="8" weight="medium" align="center">
              <HoverCard.Root>
                <HoverCard.Trigger>
                  <Link target="_blank" highContrast href="https://github.com/KushagraDhawan1997/kookie-ui">
                    <Text as="span" highContrast>
                      Kookie UI
                    </Text>
                  </Link>
                </HoverCard.Trigger>
                <HoverCard.Content maxWidth="600px">
                  <Flex direction="column" align="center">
                    <Image src="/sample.png" alt="KookieUI Preview" width="600" height="450" />
                  </Flex>
                </HoverCard.Content>
              </HoverCard.Root>{" "}
              <Text as="span">
                is a{" "}
                <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                  design system
                </Text>{" "}
                I'm building to make{" "}
                <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                  design rules explicit
                </Text>
                . Although it's still in progress, it's already helping us
                <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                  {" "}
                  ship faster
                </Text>{" "}
                and with{" "}
                <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                  greater consistency
                </Text>
                .
              </Text>
            </Heading>
          </Flex>

          {/* <Image src="/sample.png" alt="KookieUI" /> */}

          <Flex direction="column" justify="center" align="center" gap="9">
            {/* <Tooltip
              content={<span style={{ display: "block", textAlign: "center", maxWidth: 240 }}>Say hello to Kookie, my inspiration for all things Kookie!</span>}
            >
              <Image src="/kookie-crop.png" alt="KookieUI" maxWidth="360px" style={{ backgroundPosition: "bottom" }} />
            </Tooltip> */}

            <Image src="/kookie-ui/hero.png" alt="KookieUI" width="100%" height="400px" style={{ borderRadius: "var(--radius-5)", overflow: "hidden" }} />

            {/* 3x2 grid of capability cards */}
            <Grid gap="3" columns={{ initial: "1", sm: "2", md: "3" }} style={{ position: "relative" }}>
              {/* Gradient div */}
              {/* <Flex
                height="400px"
                width="100%"
                position="absolute"
                style={{
                  background: "linear-gradient(to bottom, transparent, var(--color-background))",
                  zIndex: 100,
                  left: "50%",
                  top: 0,
                  transform: "translate(-50%, -100%)",
                }}
              ></Flex> */}
              {kookieCapabilities.map((capability, index) => (
                <KookieCapabilityCard key={capability.title} capability={capability} icon={capabilityIcons[index]} />
              ))}
            </Grid>
          </Flex>

          {/* Call-to-action buttons */}

          <Flex justify="center" gap="2">
            <Button variant="solid" size="3" highContrast disabled>
              Coming Soon
            </Button>
            <Button asChild variant="soft" size="3" highContrast>
              <a href="/articles/about-kookie-ui" target="_blank" rel="noopener noreferrer">
                Read about Kookie UI
              </a>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
