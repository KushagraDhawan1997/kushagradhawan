"use client";

/**
 * Startup Solutions Section Component
 *
 * This component showcases technical product leadership expertise for startups.
 * It includes a headline, description, call-to-action button, and a grid of solution cards.
 * The section uses a responsive layout with different designs for mobile and desktop.
 */

import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@kushagradhawan/kookie-ui";
import Link from "next/link";
import { whyMeItems } from "@/components/sections/why-me-section/whyMeData";
import {
  Briefcase,
  Code,
  Zap,
  Handshake,
  LineChart,
  Ban,
  Clock,
  Users,
  Mail,
} from "lucide-react";

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
        <Flex direction="column" gap="9" p="6">
          {/* Header */}
          <Flex direction="column" gap="4">
            <Heading size="8" weight="medium">
              How I Help Startups Move Faster
            </Heading>
            <Text size="4" color="gray">
              I try to combine technical depth with product strategy to help
              teams ship quality products quickly—though I'm still learning how
              to do this well.
            </Text>
          </Flex>

          {/* Call-to-action buttons */}
          <Flex direction="row" gap="2" wrap="wrap">
            <Button asChild variant="solid" size="3" highContrast>
              <Link href="#contact">
                <Mail />
                Contact
              </Link>
            </Button>

            <Button asChild variant="classic" highContrast size="3">
              <Link
                href="/articles/leadership-approaches"
                aria-label="Read my article on technical product leadership"
              >
                Leadership Approach
              </Link>
            </Button>
          </Flex>

          {/* WhyMe Grid - Key professional advantages */}
          <Grid gap="4" columns={{ initial: "1", sm: "2", md: "3" }}>
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

              return (
                <Card key={index} size="3" variant="classic">
                  <Flex direction="column" gap="3" p="4">
                    <Flex direction="column" gap="4">
                      {getIconComponent(item.iconName)}
                      <Heading size="3" weight="medium">
                        {item.title}
                      </Heading>
                    </Flex>
                    <Text size="3" color="gray">
                      {item.description}
                    </Text>
                  </Flex>
                </Card>
              );
            })}
          </Grid>
        </Flex>
      </Container>
    </Section>
  );
}
