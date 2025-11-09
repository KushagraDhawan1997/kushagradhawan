"use client";

/**
 * Contact Section Component
 *
 * This component serves as the final call-to-action section that provides contact information.
 * It includes a headline, description, contact options, and a random testimonial.
 */

import React, { useEffect, useState } from "react";
import { Button, Card, Container, Flex, Grid, Heading, Section, Text, Link, Separator } from "@kushagradhawan/kookie-ui";
import { TestimonialCard } from "../hero-section/TestimonialCard";
import { testimonials, type Testimonial } from "../hero-section/testimonials";
import { socialLinks, type SocialLink } from "./contactData";
import { Mail, ArrowRight, Check } from "lucide-react";

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
  const [randomTestimonial, setRandomTestimonial] = useState<Testimonial | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  // Set a random testimonial on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * testimonials.length);
    setRandomTestimonial(testimonials[randomIndex]);
  }, []);

  // Copy email to clipboard
  const handleCopyEmail = async () => {
    const email = "hello@kushagradhawan.design";
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  // If no testimonial is selected yet, return loading state
  if (!randomTestimonial) return null;

  return (
    <Container size="4">
      <Section
        id="contact"
        style={{
          borderTop: "1px dashed var(--gray-7)",
        }}
      >
        <Flex gap="8" direction="column" align="center">
          {/* Testimonial */}
          {/* <TestimonialCard testimonial={randomTestimonial} /> */}

          {/* Contact Card */}
          <Flex direction="column" gap="9" py="6" px={{ initial: "4", sm: "6" }}>
            {/* Title and subtitle */}
            <Flex direction="column" gap="6" align="center">
              <Text size="1" color="gray" weight="medium">
                LET'S TALK
              </Text>
              <Heading size="8" weight="medium" align="center">
                Open to new conversations. I currently work remotely from India, leading product and design at Womp3D.
                <br />
                <br />
                If you want to chat about{" "}
                <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                  building products
                </Text>
                ,{" "}
                <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                  evolving design systems
                </Text>
                , or{" "}
                <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                  shipping fast
                </Text>
                , I’d love to chat.
              </Heading>
            </Flex>

            {/* Testimonials */}
            <Flex direction="column" align="center" gap="6">
              {/* Responsive grid: 1 column on mobile, 3 columns on desktop */}
              <Grid gap="3" columns={{ initial: "1", sm: "2", md: "3" }}>
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </Grid>
            </Flex>

            {/* Contact buttons */}
            <Flex gap="6" align="center" justify="between" direction="column" width="100%">
              <Flex gap="2">
                <Button size="3" asChild variant="solid" highContrast>
                  <a href="https://calendly.com/accounts-kushagradhawan/30min" target="_blank" rel="noopener noreferrer">
                    Let's talk (Calendly)
                    <ArrowRight />
                  </a>
                </Button>
                <Button size="3" variant="soft" highContrast onClick={handleCopyEmail}>
                  {emailCopied ? <Check /> : <Mail />}
                  {emailCopied ? "Copied" : "Copy Email"}
                </Button>
              </Flex>

              {/* Social media links */}
              <Flex gap="6" wrap="wrap">
                {socialLinks.map((link: SocialLink, index: number) => (
                  <Link key={index} href={link.href} target="_blank" size="3" highContrast weight="medium">
                    {link.name}
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Flex>

          {/* <Separator size="3"></Separator> */}
        </Flex>
      </Section>
    </Container>
  );
}
