"use client";

/**
 * Startup Solutions Section Component
 *
 * This component showcases technical product leadership expertise for startups.
 * It includes a headline, description, call-to-action button, and a grid of solution cards.
 * The section uses a responsive layout with different designs for mobile and desktop.
 */

import React from "react";
import { Box, Button, Card, Container, Flex, Grid, Heading, Section, Separator, Text } from "@kushagradhawan/kookie-ui";
import Link from "next/link";
import { whyMeItems } from "@/components/sections/why-me-section/whyMeData";
import { Briefcase, Code, Zap, Handshake, LineChart, Ban, Clock, Users, Mail, ArrowRight } from "lucide-react";

/**
 * StartupSolutionsSection Component
 *
 * Features:
 * - A headline that emphasizes building teams that can ship fast
 * - A descriptive subtitle connecting Womp experience to KookieUI enablement
 * - Call-to-action buttons for contact and article reading
 * - A responsive grid of 6 key professional advantages with icons
 * - Integrated WhyMe content showcasing core strengths for team building
 *
 * @returns React component for the startup solutions section
 */
export function StartupSolutionsSection() {
  return (
    <Section>
      <Container size="4">
        <Flex direction="column" gap="9" align="center" py="6" px={{ initial: "4", sm: "6" }}>
          {/* Header */}
          <Flex direction="column" gap="4" align="center">
            <Heading size="8" weight="medium" align="center">
              <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                Technical PM
              </Text>
              ,{" "}
              <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                team builder
              </Text>
              , and{" "}
              <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                product leader
              </Text>
              .{" "}
              <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                Hands-on
              </Text>
              ,{" "}
              <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                fast-moving
              </Text>
              , and focused on{" "}
              <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                what works
              </Text>
              .
            </Heading>
          </Flex>

          {/* Call-to-action buttons */}
          <Flex direction="row" gap="2" wrap="wrap" justify="center">
            <Button asChild variant="solid" size="3" highContrast>
              <Link href="#contact">
                Let's talk (Calendly)
                <ArrowRight />
              </Link>
            </Button>

            <Button asChild variant="soft" highContrast size="3">
              <Link href="/articles/leadership-approaches" aria-label="Read my article on technical product leadership">
                Leadership Approach
              </Link>
            </Button>
          </Flex>

          {/* WhyMe Grid - Key professional advantages */}
          <Flex direction="column" gap="0">
            <Grid gap="0" columns={{ initial: "1", sm: "2", md: "3" }}>
              {whyMeItems.map((item, index) => {
                // Function to get the icon component based on icon name
                const getIconComponent = (iconName: string) => {
                  switch (iconName) {
                    case "Briefcase":
                      return <Briefcase />;
                    case "Code":
                      return <Code />;
                    case "Zap":
                      return <Zap />;
                    case "Handshake":
                      return <Handshake />;
                    case "LineChart":
                      return <LineChart />;
                    case "Ban":
                      return <Ban />;
                    case "Clock":
                      return <Clock />;
                    case "Users":
                      return <Users />;
                    default:
                      return null;
                  }
                };

                // Calculate if this is the last item in its row for each breakpoint
                // For sm (2 columns): last when index % 2 === 1 (positions 1, 3, 5...)
                // For md (3 columns): last when index % 3 === 2 (positions 2, 5, 8...)
                const isLastInRowSm = index % 2 === 1;
                const isLastInRowMd = index % 3 === 2;

                // Calculate which row this item is in (0-indexed)
                const rowSm = Math.floor(index / 2);
                const rowMd = Math.floor(index / 3);

                // Total rows for each breakpoint
                const totalRowsSm = Math.ceil(whyMeItems.length / 2);
                const totalRowsMd = Math.ceil(whyMeItems.length / 3);

                // Check if this is the last row (for horizontal separator)
                const isLastRowSm = rowSm === totalRowsSm - 1;
                const isLastRowMd = rowMd === totalRowsMd - 1;

                return (
                  <Flex direction="column" gap="0" key={index} height="100%">
                    <Flex gap="4" height="100%">
                      <Flex direction="column" gap="3" p="6" height="100%">
                        <Flex direction="column" gap="4">
                          {getIconComponent(item.iconName)}
                          <Heading size="4" weight="medium">
                            {item.title}
                          </Heading>
                        </Flex>
                        <Text size="3" color="gray">
                          {item.description}
                        </Text>
                      </Flex>
                      {/* Vertical separator - shown when not last in row, hidden responsively */}
                      {!isLastInRowSm && (
                        <Box display={{ initial: "none", sm: "block", md: "none" }}>
                          <Separator size="4" orientation="vertical" />
                        </Box>
                      )}
                      {!isLastInRowMd && (
                        <Box display={{ initial: "none", md: "block" }}>
                          <Separator size="4" orientation="vertical" />
                        </Box>
                      )}
                    </Flex>
                    {/* Horizontal separator after each item (mobile) or after each row (sm+) */}
                    {index < whyMeItems.length - 1 && (
                      <Box display={{ initial: "block", sm: "none" }}>
                        <Separator size="4" orientation="horizontal" />
                      </Box>
                    )}
                    {!isLastRowSm && (
                      <Box display={{ initial: "none", sm: "block", md: "none" }}>
                        <Separator size="4" orientation="horizontal" />
                      </Box>
                    )}
                    {!isLastRowMd && (
                      <Box display={{ initial: "none", md: "block" }}>
                        <Separator size="4" orientation="horizontal" />
                      </Box>
                    )}
                  </Flex>
                );
              })}
            </Grid>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
