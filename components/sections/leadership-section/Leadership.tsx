"use client";

/**
 * Leadership Component
 *
 * This component showcases technical product leadership expertise for startups.
 * It includes a headline, description, call-to-action button, and a grid of solution cards.
 * The section uses a responsive layout with different designs for mobile and desktop.
 */

import React from "react";
import { AspectRatio, Box, Button, Image, Container, Flex, Grid, Heading, Section, Separator, Text } from "@kushagradhawan/kookie-ui";
import Link from "next/link";
import NextImage from "next/image";
import { leadershipItems } from "@/components/sections/leadership-section/leadershipData";
import { WebGLImageTracker } from "@/components/webgl";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Briefcase01Icon,
  CodeIcon,
  ZapIcon,
  Agreement02Icon,
  Analytics01Icon,
  BrainIcon,
  Clock01Icon,
  UserGroup02Icon,
  ArrowUpRight01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";

/**
 * Leadership Component
 *
 * Features:
 * - A headline that emphasizes building teams that can ship fast
 * - A descriptive subtitle connecting Womp experience to KookieUI enablement
 * - Call-to-action buttons for contact and article reading
 * - A responsive grid of 6 key professional advantages with icons
 * - Integrated WhyMe content showcasing core strengths for team building
 *
 * @returns React component for the leadership section
 */
export function Leadership() {
  return (
    <Section>
      <Container size="4">
        <Flex direction="column" gap="9" align="center" py="6" px={{ initial: "4", sm: "6" }}>
          {/* Header */}
          <Flex direction="column" align="center" gap="6">
            <Text size="3" color="gray">What I do</Text>
            <Heading size="8" weight="medium" align="center" color="gray">
              I'm not particular about titles at all. Here, I'm a{" "}
              <Text as="span" weight="medium" highContrast>
                product manager
              </Text>
              ,{" "}
              <Text as="span" weight="medium" highContrast>
                designer
              </Text>
              , and{" "}
              <Text as="span" weight="medium" highContrast>
                engineer
              </Text>
              , all in one.
            </Heading>
          </Flex>
          <Box width="100%" position="relative">
            <AspectRatio ratio={16 / 10}>
              <WebGLImageTracker id="leadership-what-i-do" src="/articles/product-leadership/image.jpg">
                <Image
                  as={NextImage}
                  src="/articles/product-leadership/image.jpg"
                  alt="Leadership"
                  fill
                  radius="none"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  style={{ objectFit: "cover" }}
                />
              </WebGLImageTracker>
            </AspectRatio>
          </Box>

          {/* WhyMe Grid - Key professional advantages */}
          <Flex direction="column" gap="0">
            <Grid gap="0" columns={{ initial: "1", sm: "2", md: "3" }}>
              {leadershipItems.map((item, index) => {
                // Function to get the icon component based on icon name
                const getIconComponent = (iconName: string) => {
                  switch (iconName) {
                    case "Briefcase":
                      return <HugeiconsIcon icon={Briefcase01Icon} size={20} color="currentColor" />;
                    case "Code":
                      return <HugeiconsIcon icon={CodeIcon} size={20} color="currentColor" />;
                    case "Zap":
                      return <HugeiconsIcon icon={ZapIcon} size={20} color="currentColor" />;
                    case "Handshake":
                      return <HugeiconsIcon icon={Agreement02Icon} size={20} color="currentColor" />;
                    case "LineChart":
                      return <HugeiconsIcon icon={Analytics01Icon} size={20} color="currentColor" />;
                    case "Ban":
                      return <HugeiconsIcon icon={BrainIcon} size={20} color="currentColor" />;
                    case "Clock":
                      return <HugeiconsIcon icon={Clock01Icon} size={20} color="currentColor" />;
                    case "Users":
                      return <HugeiconsIcon icon={UserGroup02Icon} size={20} color="currentColor" />;
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
                const totalRowsSm = Math.ceil(leadershipItems.length / 2);
                const totalRowsMd = Math.ceil(leadershipItems.length / 3);

                // Check if this is the last row (for horizontal separator)
                const isLastRowSm = rowSm === totalRowsSm - 1;
                const isLastRowMd = rowMd === totalRowsMd - 1;

                return (
                  <Flex direction="column" gap="0" key={index} height="100%">
                    <Flex gap="4" height="100%">
                      <Flex direction="column" gap="3" p="6" height="100%">
                        <Flex direction="column" gap="4" align="center">
                          {getIconComponent(item.iconName)}
                          <Heading size="3" weight="medium" align="center">
                            {item.title}
                          </Heading>
                        </Flex>
                        <Text size="3" color="gray" align="center">
                          {item.description}
                        </Text>
                      </Flex>
                      {/* Vertical separator - shown when not last in row, hidden responsively */}
                      {!isLastInRowSm && (
                        <Box display={{ initial: "none", sm: "block", md: "none" }}>
                          <Separator size="4" orientation="vertical" light />
                        </Box>
                      )}
                      {!isLastInRowMd && (
                        <Box display={{ initial: "none", md: "block" }}>
                          <Separator size="4" orientation="vertical" light />
                        </Box>
                      )}
                    </Flex>
                    {/* Horizontal separator after each item (mobile) or after each row (sm+) */}
                    {index < leadershipItems.length - 1 && (
                      <Box display={{ initial: "block", sm: "none" }}>
                        <Separator size="4" orientation="horizontal" light />
                      </Box>
                    )}
                    {!isLastRowSm && (
                      <Box display={{ initial: "none", sm: "block", md: "none" }}>
                        <Separator size="4" orientation="horizontal" light />
                      </Box>
                    )}
                    {!isLastRowMd && (
                      <Box display={{ initial: "none", md: "block" }}>
                        <Separator size="4" orientation="horizontal" light />
                      </Box>
                    )}
                  </Flex>
                );
              })}
            </Grid>
          </Flex>

          {/* Call-to-action buttons */}
          <Flex direction="row" gap="2" wrap="wrap" justify="center">
            <Button asChild variant="solid" size="2" highContrast>
              <Link href="#contact">
                Calendly
                <HugeiconsIcon icon={ArrowUpRight01Icon} color="currentColor" />
              </Link>
            </Button>

            <Button asChild variant="soft" highContrast size="2">
              <Link href="/articles/leadership-approaches" aria-label="Read my article on technical product leadership">
                Product Leadership
                <HugeiconsIcon icon={ArrowRight01Icon} color="currentColor" />
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
