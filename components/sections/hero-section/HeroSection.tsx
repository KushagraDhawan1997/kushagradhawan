"use client";

/**
 * Hero Section Component
 *
 * This component serves as the primary hero section of the portfolio.
 * It displays a bold headline, subtitle, call-to-action button, and a grid of testimonials.
 * The testimonials are displayed in a bento-style grid layout on desktop/tablet
 * and as a horizontal scroll on mobile devices.
 *
 * The component uses:
 * - Testimonial data from a separate data file for clean organization
 * - Dialog component for detailed testimonial display
 * - Responsive layout with different designs for mobile and desktop
 * - Clean, minimal styling with KookieUI components
 */

import { Button, Flex, Text, Heading, Container, Grid, Badge, Section, Link, Tooltip, Callout, Image } from "@kushagradhawan/kookie-ui";
import { HoverCard } from "@kushagradhawan/kookie-ui";
import { testimonials } from "./testimonials";
import { TestimonialCard } from "./TestimonialCard";
import { Mail, Phone } from "lucide-react";

/**
 * HeroSection Component
 *
 * Features:
 * - A clean, bold headline statement
 * - A subtitle identifying professional role
 * - A bento-style grid of testimonials with strategic sizing
 * - Call-to-action buttons
 * - Responsive layout for different screen sizes
 *
 * Layout design:
 * - Desktop: Asymmetrical grid pattern with varying card sizes
 * - Mobile: Horizontal scrolling testimonial cards
 *
 * @returns React component for the hero section
 */
export function HeroSection() {
  return (
    <Section>
      {/* Hero content - title and testimonials */}
      <Container size="4">
        <Flex direction="column" gap="9" p="6">
          {/* Title and subtitle section */}
          <Flex direction="column" gap="6">
            <Text size="1" color="amber" weight="medium">
              DESIGN ENGINEER / BUILDER PM — 0→1 • REMOTE (5H EST)
            </Text>
            <Heading size="9" weight="medium">
              I design systems and ship fast.
            </Heading>
            <Text size="4" color="gray">
              Product &amp; Design Lead,{" "}
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
              &bull; Building{" "}
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
              <br />I merge design, product, and enough code to land features fast. AI makes the work faster and simpler.
            </Text>
          </Flex>

          {/*           
          <Inset clip="padding-box">
            <Image src="/sample.png" alt="KookieUI" />
          </Inset> 
          */}

          {/* Call-to-action buttons */}
          <Flex direction="row" gap="2">
            <Button asChild variant="solid" size="3" highContrast>
              <a
                href="https://calendly.com/accounts-kushagradhawan/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book an intro call via Calendly"
              >
                <Phone />
                Book an intro call
              </a>
            </Button>
            <Button asChild variant="classic" highContrast size="3">
              <a href="/articles/about-me" aria-label="Read more about Kushagra Dhawan's background and experience">
                About me
              </a>
            </Button>
          </Flex>

          {/* Responsive grid: 1 column on mobile, 3 columns on desktop */}
          <Grid gap="3" columns={{ initial: "1", sm: "2", md: "3" }}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Grid>
        </Flex>
      </Container>
    </Section>
  );
}
