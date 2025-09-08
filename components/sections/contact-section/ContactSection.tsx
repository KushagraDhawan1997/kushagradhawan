"use client";

/**
 * Contact Section Component
 *
 * This component serves as the final call-to-action section that provides contact information.
 * It includes a headline, description, contact options, and a random testimonial.
 */

import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  IconButton,
  Section,
  Text,
} from "@kushagradhawan/kookie-ui";
import { TestimonialCard } from "../hero-section/TestimonialCard";
import { testimonials, type Testimonial } from "../hero-section/testimonials";
import { socialLinks, type SocialLink } from "./contactData";
import {
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  CalendarDays,
  Github,
} from "lucide-react";

// Helper function to get the right icon for each social platform
const getSocialIcon = (name: string) => {
  switch (name) {
    case "LinkedIn":
      return <Linkedin />;
    case "X":
      return <Twitter />;
    case "Instagram":
      return <Instagram />;
    case "Github":
      return <Github />;
    default:
      return null;
  }
};

/**
 * ContactSection Component
 *
 * Features:
 * - A headline that emphasizes collaboration
 * - A descriptive subtitle about consulting and speaking opportunities
 * - A 2-column layout with testimonial on left and content on right for desktop
 * - A single-column layout for mobile
 * - A randomly selected testimonial from the hero section
 * - Social media links for professional networking
 *
 * @returns React component for the contact section
 */
export function ContactSection() {
  const [randomTestimonial, setRandomTestimonial] =
    useState<Testimonial | null>(null);

  // Set a random testimonial on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * testimonials.length);
    setRandomTestimonial(testimonials[randomIndex]);
  }, []);

  // If no testimonial is selected yet, return loading state
  if (!randomTestimonial) return null;

  return (
    <Section id="contact">
      <Container size="2">
        <Flex gap="4" direction="column">
          {/* Content */}
          <Flex direction="column" gap="6">
            {/* Contact Card */}
            <Card size="3" variant="classic">
              {/* Title and subtitle */}
              <Flex direction="column" gap="6" p="2">
                {/*  */}
                <Flex direction="column" gap="4">
                  <Heading size="6" weight="medium">
                    Say Hello.
                  </Heading>
                  <Text size="3" color="gray">
                    Based in India and working remotely for Womp3D in the USA. I
                    enjoy meeting like-minded professionals to discuss product
                    design, team building, and technology trends.
                  </Text>
                </Flex>

                {/* Contact buttons */}
                <Flex
                  gap={{ initial: "6", md: "4" }}
                  align={{ initial: "center", md: "center" }}
                  justify="between"
                  direction={{ initial: "column", md: "row" }}
                >
                  <Flex gap="2">
                    <Button size="3" asChild variant="solid" highContrast>
                      <a href="mailto:hello@kushagradhawan.design">
                        <Mail />
                        Email Me
                      </a>
                    </Button>
                    <Button size="3" asChild variant="classic" highContrast>
                      <a
                        href="https://calendly.com/accounts-kushagradhawan/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CalendarDays />
                        Calendly
                      </a>
                    </Button>
                  </Flex>

                  {/* Social media icons */}
                  <Flex gap="2" wrap="wrap">
                    {socialLinks.map((link: SocialLink, index: number) => (
                      <IconButton
                        flush
                        key={index}
                        asChild
                        highContrast
                        variant="classic"
                        size="3"
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.name}
                        >
                          {getSocialIcon(link.name)}
                        </a>
                      </IconButton>
                    ))}
                  </Flex>
                </Flex>
              </Flex>
            </Card>
          </Flex>

          {/* Testimonial */}
          <TestimonialCard testimonial={randomTestimonial} />
        </Flex>
      </Container>
    </Section>
  );
}
