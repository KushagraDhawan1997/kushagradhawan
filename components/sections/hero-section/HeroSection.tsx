"use client";

/**
 * Hero Section Component
 *
 * This component serves as the primary hero section of the portfolio.
 * It displays a bold headline, subtitle, call-to-action button, and a grid of articles.
 * The articles are displayed in a responsive grid layout.
 *
 * The component uses:
 * - Article data passed as props
 * - Responsive layout with different designs for mobile and desktop
 * - Clean, minimal styling with KookieUI components
 */

import { Button, Flex, Text, Heading, Container, Section, Link, Image, Callout } from "@kushagradhawan/kookie-ui";
import { HoverCard } from "@kushagradhawan/kookie-ui";
import { ArrowRight } from "lucide-react";
import { ArticlesListGrid, ArticleProps } from "@/components/sections/articles-list-section/ArticlesListGrid";
import NextLink from "next/link";

/**
 * HeroSection Component
 *
 * Features:
 * - A clean, bold headline statement
 * - A subtitle identifying professional role
 * - A grid of articles with strategic sizing
 * - Call-to-action buttons
 * - Responsive layout for different screen sizes
 *
 * Layout design:
 * - Desktop: Responsive grid pattern
 * - Mobile: Single column layout
 *
 * @returns React component for the hero section
 */
export interface HeroSectionProps {
  posts?: ArticleProps[];
}

export function HeroSection({ posts = [] }: HeroSectionProps) {
  // Limit to first 3 articles
  const displayedPosts = posts.slice(0, 3);

  return (
    <Section>
      {/* Hero content - title and articles */}
      <Container pt="8">
        <Flex direction="column" align="center" gap="9" py="6" px={{ initial: "4", sm: "6" }}>
          {/* Title and subtitle section */}
          <Flex direction="column" align="center" gap="6">
            <Text size="1" color="gray" weight="medium">
              DESIGN / ENGINEERING / BUILDER PM — 0→1
            </Text>
            <Heading align="center" size="9" weight="medium">
              I design systems and ship fast.
            </Heading>

            <Text align="center" size="5" color="gray">
              Leading Product &amp; Design at{" "}
              <HoverCard.Root>
                <HoverCard.Trigger>
                  <Link target="_blank" href="https://womp.com">
                    Womp 3D
                  </Link>
                </HoverCard.Trigger>
                <HoverCard.Content maxWidth="600px">
                  <Flex direction="column" align="center">
                    <Image src="/womp.png" alt="Womp 3D Preview" width="600" height="450" />
                  </Flex>
                </HoverCard.Content>
              </HoverCard.Root>{" "}
              <br />
              Building{" "}
              <HoverCard.Root>
                <HoverCard.Trigger>
                  <Link target="_blank" href="https://github.com/KushagraDhawan1997/kookie-ui">
                    KookieUI
                  </Link>
                </HoverCard.Trigger>
                <HoverCard.Content maxWidth="600px">
                  <Flex direction="column" align="center">
                    <Image src="/sample.png" alt="KookieUI Preview" width="600" height="450" />
                  </Flex>
                </HoverCard.Content>
              </HoverCard.Root>
              , KookieAI, KookieBlocks.
              {/* <br />I merge design, product, and enough code to land features fast. AI makes the work faster and simpler. */}
            </Text>
          </Flex>

          {/* Call-to-action buttons */}
          <Flex direction="row" gap="2">
            <Button asChild variant="solid" size="3" highContrast>
              <a
                href="https://calendly.com/accounts-kushagradhawan/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book an intro call via Calendly"
              >
                Let's talk (Calendly)
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="soft" highContrast size="3">
              <NextLink href="/articles/about-me" aria-label="Read more about Kushagra Dhawan's background and experience">
                About me
              </NextLink>
            </Button>
          </Flex>

          {/* Articles grid */}
          {displayedPosts.length > 0 && (
            <Flex direction="column" gap="8">
              <ArticlesListGrid posts={displayedPosts} />
              {posts.length > 3 && (
                <Flex justify="center">
                  <Button asChild highContrast variant="soft" size="3">
                    <NextLink href="/articles">
                      <Flex align="center" gap="2">
                        View all articles
                        <ArrowRight />
                      </Flex>
                    </NextLink>
                  </Button>
                </Flex>
              )}
            </Flex>
          )}
        </Flex>
      </Container>
    </Section>
  );
}
