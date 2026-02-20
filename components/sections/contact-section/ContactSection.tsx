"use client";

import React, { useState } from "react";
import {
  Button,
  Image,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
  Link,
  Box,
  Separator,
} from "@kushagradhawan/kookie-ui";
import { TestimonialCard } from "../testimonial-card";
import { testimonials } from "../testimonials";
import { socialLinks, type SocialLink } from "./contactData";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  ArrowUpRight01Icon,
  Tick01Icon,
} from "@hugeicons/core-free-icons";
import NextImage from "next/image";
import { WebGLImageTracker } from "@/components/webgl";

/**
 * Contact section with image on the left and content on the right,
 * matching the sticky two-column layout used across the site.
 */
export function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

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

  return (
    <>
      <Section id="contact" size="4">
        <Flex
          direction="column"
          align="start"
          gap={{ initial: "6", sm: "10" }}
          py={{ initial: "4", sm: "6" }}
          px={{ initial: "4", sm: "6" }}
        >
          <Flex direction="column" gap="2" width="100%">
            <Heading as="h2" size="3" weight="medium">
              Contact
            </Heading>
            <Separator size="4" />
          </Flex>
          <Flex
            direction={{ initial: "column", md: "row" }}
            gap={{ initial: "6", md: "12" }}
            width="100%"
            align="stretch"
          >
            <Flex direction="column" justify="between" gap={{ initial: "6", sm: "8" }} width="100%">
              <Flex direction="column" gap={{ initial: "6", sm: "8" }}>
                <Heading
                  size={{ initial: "8", sm: "9" }}
                  weight="medium"
                  align="left"
                  color="gray"
                  style={{ textWrap: "balance" }}
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

                <Flex gap="2" justify="start">
                  <Button size="2" asChild variant="solid" highContrast>
                    <a
                      href="https://calendly.com/accounts-kushagradhawan/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a call
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

              <Grid gap="3" columns={{ initial: "1", sm: "2" }}>
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </Grid>
            </Flex>
            <Box
              flexShrink="0"
              display={{ initial: "none", md: "block" }}
              width={{ md: "400px", lg: "600px" }}
              position={{ md: "sticky" }}
              top="96px"
              style={{
                alignSelf: "flex-start",
                aspectRatio: "3/4",
                overflow: "hidden",
              }}
            >
              <WebGLImageTracker
                id="contact-image"
                src="/sections/contact/image.jpg"
                borderRadius={0}
              >
                <Image
                  as={NextImage}
                  src="/sections/contact/image.jpg"
                  alt="Contact"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  style={{ objectFit: "cover" }}
                  radius="none"
                  decoding="async"
                />
              </WebGLImageTracker>
            </Box>
          </Flex>
        </Flex>
      </Section>
    </>
  );
}
