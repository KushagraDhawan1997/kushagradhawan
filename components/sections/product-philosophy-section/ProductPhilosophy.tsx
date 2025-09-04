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
  Section,
  Separator,
  Text,
  VisuallyHidden,
} from "@kushagradhawan/kookie-ui";
import Link from "next/link";
import { principles } from "./philosophyData";
import { Mail } from "lucide-react";

// Principle card with dialog functionality for mobile
function PrincipleCard({ principle }: { principle: (typeof principles)[0] }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Card size="3" variant="soft" asChild style={{ cursor: "pointer" }}>
          <button>
            <Flex direction="column" gap="4" height="100%" p="2">
              <Heading weight="medium" size="3">
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
    <Section>
      <Container size="4">
        <Flex direction="column" gap="9" p="6">
          {/* Header */}
          <Flex direction="column" gap="4">
            <Heading size="8" weight="medium">
              Things I've Learned (So Far)
            </Heading>
            <Text size="4" color="gray">
              Building at Womp has taught me a few things about users, tech, and
              business. I'm still learning every day, and most of this is work
              in progress.
            </Text>
          </Flex>

          {/* Call-to-action button */}
          <Flex direction="row" gap="2">
            <Button asChild variant="solid" size="3" highContrast>
              <a href="#contact" aria-label="Go to contact section">
                <Mail />
                Contact
              </a>
            </Button>
            <Button asChild variant="classic" size="3" highContrast>
              <Link href="/articles/product-philosophy">
                Product Philosophy
              </Link>
            </Button>
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
          <Grid
            display={{ initial: "none", md: "grid" }}
            columns="360px 1fr"
            gap="3"
          >
            {/* Left sidebar with principles list */}
            <Flex direction="column" gap="3">
              {principles.map((principle, index) => (
                <Card
                  key={principle.title}
                  asChild
                  size="2"
                  variant="soft"
                  style={{ cursor: "pointer" }}
                >
                  <button
                    onClick={() => setActivePrinciple(principle)}
                    data-state={
                      principle.title === activePrinciple.title
                        ? "open"
                        : "closed"
                    }
                    style={{ width: "100%", textAlign: "left" }}
                  >
                    <Flex direction="column" gap="1" p="3">
                      <Heading size="2" weight="medium">
                        {principle.title}
                      </Heading>
                      <Text size="2" color="gray">
                        {principle.description}
                      </Text>
                    </Flex>
                  </button>
                </Card>
              ))}
            </Flex>

            {/* Right content panel */}
            <Card size="3" variant="classic">
              <Flex direction="column" gap="3" p="2">
                <Heading size="4" weight="medium">
                  {activePrinciple.title}
                </Heading>
                <Text color="gray" size="3" style={{ whiteSpace: "pre-line" }}>
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
