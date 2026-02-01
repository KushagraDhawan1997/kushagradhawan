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
  Image,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
  Link,
  Box,
} from "@kushagradhawan/kookie-ui";
import { TestimonialCard } from "../testimonial-card";
import { testimonials, type Testimonial } from "../testimonials";
import { socialLinks, type SocialLink } from "./contactData";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  ArrowUpRight01Icon,
  Tick01Icon,
} from "@hugeicons/core-free-icons";
import NextImage from "next/image";

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
    <>
      <Section id="contact" size="4">
        <Container size="4">
          <Grid
            columns={{ initial: "1", md: "2fr 3fr" }}
            align="center"
            gap="8"
            px={{ initial: "4", sm: "6" }}
          >
            {/* Heading - Container size 2 */}
            <Flex
              direction="column"
              gap="8"
              align={{ initial: "center", md: "start" }}
            >
              <Heading
                size="8"
                weight="medium"
                align={{ initial: "center", md: "left" }}
                color="gray"
              >
                Open to conversations about{" "}
                <Text as="span" weight="medium" highContrast>
                  design
                </Text>
                ,{" "}
                <Text as="span" weight="medium" highContrast>
                  code
                </Text>
                ,{" "}
                <Text as="span" weight="medium" highContrast>
                  building products
                </Text>
                , and{" "}
                <Text as="span" weight="medium" highContrast>
                  AI
                </Text>
                .
              </Heading>

              {/* CTA buttons */}
              <Flex gap="2">
                <Button size="2" asChild variant="solid" highContrast>
                  <a
                    href="https://calendly.com/accounts-kushagradhawan/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calendly
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      color="currentColor"
                    />
                  </a>
                </Button>
                <Button
                  size="2"
                  variant="soft"
                  highContrast
                  onClick={handleCopyEmail}
                >
                  {emailCopied ? (
                    <HugeiconsIcon icon={Tick01Icon} color="currentColor" />
                  ) : (
                    <HugeiconsIcon icon={Mail01Icon} color="currentColor" />
                  )}
                  {emailCopied ? "Copied" : "Copy Email"}
                </Button>
              </Flex>

              {/* Social media links */}
              <Flex gap="6" wrap="wrap">
                {socialLinks.map((link: SocialLink, index: number) => (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    size="2"
                    underline="always"
                  >
                    {link.name}
                  </Link>
                ))}
              </Flex>
            </Flex>

            <Box
              position="relative"
              width="100%"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                as={NextImage}
                src="/sections/contact/image.jpg"
                alt="Contact"
                fill
                radius="none"
                sizes="(max-width: 768px) 100vw, 600px"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section size="4">
        <Container size="4">
          <Flex
            direction="column"
            align="center"
            gap="6"
            px={{ initial: "4", sm: "6" }}
          >
            <Grid gap="3" columns={{ initial: "1", sm: "2", md: "3" }}>
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </Grid>
          </Flex>
        </Container>
      </Section>
    </>
  );
}
