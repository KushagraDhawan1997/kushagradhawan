"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Dialog,
  Flex,
  Grid,
  Heading,
  RadioCards,
  RadioGroup,
  Section,
  Image,
  Separator,
  Text,
  VisuallyHidden,
  AspectRatio,
} from "@kushagradhawan/kookie-ui";
import Link from "next/link";
import { principles } from "./philosophyData";
import { ArrowRight, Mail } from "lucide-react";

// Principle card with dialog functionality for mobile
function PrincipleCard({ principle }: { principle: (typeof principles)[0] }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Card size="3" variant="soft" asChild style={{ cursor: "pointer" }}>
          <button>
            <Flex direction="column" gap="4" height="100%" p="2">
              <Heading weight="medium" size="4">
                {principle.title}
              </Heading>
              <Text size="3" color="gray">
                {principle.description}
              </Text>
            </Flex>
          </button>
        </Card>
      </Dialog.Trigger>

      <Dialog.Content>
        <VisuallyHidden>
          <Dialog.Title>{principle.title}</Dialog.Title>
        </VisuallyHidden>

        <Flex direction="column" gap="6">
          <Heading size="6" weight="medium">
            {principle.title}
          </Heading>
          <Text size="3" style={{ whiteSpace: "pre-line" }}>
            {principle.expandedContent}
          </Text>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}

/**
 * ProductPhilosophy - A showcase of the product methodology and guiding principles
 *
 * This section presents the core methodologies that guide product development approach,
 * structured as a list of principles on the left and expanded content on the right.
 * When a principle is clicked, its detailed content is displayed in the right panel.
 *
 * Features:
 * - Interactive list of methodologies in the left sidebar
 * - Detailed content displayed in the right panel
 * - Responsive design that adapts to different screen sizes
 * - Visual highlighting of the active methodology
 */

export function ProductPhilosophy() {
  const [activePrinciple, setActivePrinciple] = useState(principles[0]);

  return (
    <Section
    //  style={{ backgroundImage: "url('./background.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
    >
      <Container size="4">
        <Flex direction="column" gap="9" py="6" px={{ initial: "4", sm: "6" }} position="relative">
          {/* <AspectRatio ratio={16 / 10}>
            <Image
              src="./articles/product-philosophy.png"
              alt="product philosophy"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "var(--radius-6)", overflow: "hidden" }}
            />
          </AspectRatio> */}
          {/* Header */}

          <Flex direction="column" align="center" gap="6">
            <Text size="1" color="gray" weight="medium">
              PRODUCT, DESIGN, & ENGINEERING AT WOMP 3D
            </Text>
            <Heading size="8" weight="medium" align="center">
              Building at{" "}
              <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                Womp
              </Text>{" "}
              has shown me firsthand what it takes to connect{" "}
              <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                users
              </Text>
              ,{" "}
              <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                technology
              </Text>
              , and{" "}
              <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                business
              </Text>
              . These are some of the{" "}
              <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                real-world principles
              </Text>{" "}
              that drive my work today.
            </Heading>
          </Flex>

          {/* Call-to-action button */}
          <Flex direction="row" gap="2" justify="center">
            <Button asChild variant="solid" size="3" highContrast>
              <a href="#contact" aria-label="Go to contact section">
                Lets talk (Calendly)
                <ArrowRight />
              </a>
            </Button>
            {/* <Button asChild variant="soft" size="3" highContrast>
              <Link href="/articles/product-philosophy">Product Philosophy</Link>
            </Button> */}
          </Flex>

          {/* Mobile view: Cards with dialogs */}
          <Box display={{ initial: "block", md: "none" }}>
            <Flex direction="column" gap="4">
              {principles.map((principle) => (
                <PrincipleCard key={principle.title} principle={principle} />
              ))}
            </Flex>
          </Box>

          {/* Desktop view: sidebar + content panel */}
          <Grid display={{ initial: "none", md: "grid" }} columns="400px 1fr" gap="3">
            {/* Left sidebar with principles list */}
            <RadioCards.Root
              size="2"
              variant="soft"
              value={activePrinciple.title}
              onValueChange={(value) => {
                const principle = principles.find((p) => p.title === value);
                if (principle) setActivePrinciple(principle);
              }}
            >
              <Flex direction="column" gap="3">
                {principles.map((principle, index) => (
                  <RadioCards.Item key={principle.title} style={{ cursor: "pointer" }} value={principle.title}>
                    <Flex direction="row" gap="4" p="3">
                      <Text size="4" color="gray" weight="regular">
                        {index + 1}.
                      </Text>
                      <Flex direction="column" gap="2">
                        <Heading size="4" weight="medium">
                          {principle.title}
                        </Heading>
                        <Text size="3" color="gray">
                          {principle.description}
                        </Text>
                      </Flex>
                    </Flex>
                  </RadioCards.Item>
                ))}
              </Flex>
            </RadioCards.Root>

            {/* Right content panel */}
            <Card size="2" variant="soft">
              <Flex
                key={activePrinciple.title}
                direction="column"
                gap="6"
                p="6"
                style={{
                  opacity: 0,
                  animation: "fadeIn 0.5s ease-in-out forwards",
                }}
              >
                {/* <Heading size="7" weight="medium">
                  {activePrinciple.title}
                </Heading> */}
                <Text size="4" style={{ whiteSpace: "pre-line" }}>
                  {activePrinciple.expandedContent}
                </Text>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Container>
    </Section>
  );
}
