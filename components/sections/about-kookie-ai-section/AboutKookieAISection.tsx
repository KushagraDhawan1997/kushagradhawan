"use client";

/**
 * About Kookie AI Section Component
 *
 * This component showcases Kookie AI capabilities and design principles.
 * It includes a headline, description, call-to-action button, and a grid of capability cards.
 * The section uses a responsive layout with different designs for mobile and desktop.
 */

import React from "react";
import { Button, Container, Dialog, Flex, Grid, Heading, Section, Text, Card, Badge, VisuallyHidden, Inset, Image } from "@kushagradhawan/kookie-ui";
import { kookieAiCapabilities, type KookieAiCapability } from "./kookieAiData";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GitBranchIcon,
  ZapIcon,
  File01Icon,
  DashboardSquare01Icon,
  Link01Icon,
  ComputerIcon,
} from "@hugeicons/core-free-icons";
import { RecentArticlesSection } from "@/components/sections/recent-articles-section";
import { ArticleProps } from "@/components/sections/articles-list-section/ArticlesListGrid";

// Simple capability card with dialog functionality
function KookieAiCapabilityCard({ capability, icon }: { capability: KookieAiCapability; icon: React.ReactNode }) {
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
          <Heading size="5" weight="medium">
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
 * AboutKookieAISection Component
 *
 * Features:
 * - Headline and descriptive subtitle with gradient text styling
 * - Clear call-to-action button linking to Kookie AI article
 * - Grid of capability cards showcasing Kookie AI principles
 * - Dialog component for displaying expanded capability information
 * - Responsive layout with 3x2 grid on desktop, 1 column on mobile
 *
 * @returns React component for the Kookie AI section
 */
export function AboutKookieAISection({ posts = [] }: { posts?: ArticleProps[] }) {
  // Map capabilities to their icons
  const getCapabilityIcon = (index: number) => {
    const icons = [GitBranchIcon, ZapIcon, File01Icon, DashboardSquare01Icon, Link01Icon, ComputerIcon];
    const icon = icons[index];
    return icon ? <HugeiconsIcon icon={icon} strokeWidth={1.75} /> : null;
  };

  return (
    <Section>
      <Container size="4">
        <Card variant="classic" size="4">
          <Flex direction="column" gap={{ initial: "6", sm: "9" }} py={{ initial: "4", sm: "6" }} px={{ initial: "3", sm: "6" }}>
            {/* Title and subtitle */}
            <Flex direction="column" gap="4">
              <Flex as="span" width="32px" height="32px" display="inline-flex" align="center" justify="center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--gray-a12)" viewBox="0 0 256 256">
                  <path d="M240,108a28,28,0,1,1-28-28A28,28,0,0,1,240,108ZM72,108a28,28,0,1,0-28,28A28,28,0,0,0,72,108ZM92,88A28,28,0,1,0,64,60,28,28,0,0,0,92,88Zm72,0a28,28,0,1,0-28-28A28,28,0,0,0,164,88Zm23.12,60.86a35.3,35.3,0,0,1-16.87-21.14,44,44,0,0,0-84.5,0A35.25,35.25,0,0,1,69,148.82,40,40,0,0,0,88,224a39.48,39.48,0,0,0,15.52-3.13,64.09,64.09,0,0,1,48.87,0,40,40,0,0,0,34.73-72Z"></path>
                </svg>
              </Flex>

              <Flex direction="row" align="center" gap="1">
                <Badge highContrast>Coming Soon</Badge>
                <Badge highContrast color="blue">
                  AI
                </Badge>
              </Flex>

              <Heading size={{ initial: "8", sm: "9" }} weight="medium" style={{ textWrap: "balance" }}>
                Kookie AI
              </Heading>

              <Text size="3" color="gray">
                A UX-first, desktop web product where conversations live as a branching graph of nodes. Each branch can diverge, transform, or produce artifacts
                — giving knowledge workers and creators a powerful OS for exploring, remixing, and producing with AI. Not a chatbot. A conversation OS.
              </Text>
            </Flex>

            {/* 3x2 grid of capability cards */}
            <Grid gap="3" columns={{ initial: "1", sm: "2", md: "3" }}>
              {kookieAiCapabilities.map((capability, index) => (
                <KookieAiCapabilityCard key={capability.title} capability={capability} icon={getCapabilityIcon(index)} />
              ))}
            </Grid>

            {/* Call-to-action buttons */}
            <Flex justify="center" gap="3">
              <Button variant="solid" size="3" highContrast disabled>
                Coming Soon
              </Button>
              <Button asChild variant="classic" size="3" highContrast>
                <a href="/articles/about-kookie-ai" target="_blank" rel="noopener noreferrer">
                  Read about Kookie AI
                </a>
              </Button>
            </Flex>
          </Flex>
        </Card>
      </Container>
      <RecentArticlesSection posts={posts} title="Articles about Kookie AI" />
    </Section>
  );
}
