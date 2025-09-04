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

import {
  Button,
  Flex,
  Text,
  Heading,
  Container,
  Grid,
  Badge,
  Section,
  Link,
} from "@kushagradhawan/kookie-ui";
import { testimonials } from "./testimonials";
import { TestimonialCard } from "./TestimonialCard";
import { Mail } from "lucide-react";

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
          <Flex direction="column" gap="8">
            <Heading size="9" weight="medium">
              I Build Products People Love.
            </Heading>
            <Flex direction="column" gap="0">
              <Text size="4" color="gray">
                Product & Design Lead at{" "}
                <Link target="_blank" href="https://womp.com">
                  Womp 3D
                </Link>
                .
              </Text>
              <Text size="4" color="gray">
                <Flex align="center" gap="2">
                  <Text as="span" size="4" color="gray">
                    Building KookieUI
                  </Text>
                  <Flex direction="row" align="center" gap="1">
                    <Badge highContrast>Coming Soon</Badge>
                    <Badge highContrast color="orange">
                      Beta
                    </Badge>
                  </Flex>
                </Flex>
                <Text as="span" size="0" color="gray">
                  🐶 This site is built using KookieUI.
                </Text>
              </Text>
            </Flex>
          </Flex>

          {/* Call-to-action buttons */}
          <Flex direction="row" gap="2">
            <Button asChild variant="solid" size="3" highContrast>
              <a href="#contact" aria-label="Go to contact section">
                <Mail />
                Contact
              </a>
            </Button>
            <Button asChild variant="classic" highContrast size="3">
              <a
                href="/articles/about-me"
                aria-label="Read more about Kushagra Dhawan's background and experience"
              >
                About Me
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
