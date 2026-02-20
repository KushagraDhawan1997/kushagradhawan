"use client";

import React from "react";
import {
  Button,
  Flex,
  Text,
  Heading,
  Container,
  Section,
  Link,
  Avatar,
  Separator,
} from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import NextLink from "next/link";

/** Work experience entries displayed in the services section. */
const experiences = [
  {
    id: 1,
    role: "Independent Product & Design Consultant",
    company: "Womp 3D",
    duration: "2021 - Present (5 years)",
    logo: "/womp-logo.avif",
    fallback: "W",
    url: "https://womp.com",
  },
  {
    id: 2,
    role: "Junior Designer",
    company: "Wishbox Studio",
    duration: "2019 - 2021 (2 years)",
    logo: null,
    fallback: "W",
    url: "https://wishboxstudio.in",
  },
];

/**
 * Services & experience section for the homepage.
 *
 * Displays a consulting headline alongside a list of past roles,
 * each linked to the respective company. Ends with CTAs to book
 * a call or view the services page.
 */
export function ExperienceSection() {
  return (
    <Section size="4">
      {/* <Container size="4"> */}
      <Flex
        direction="column"
        align="start"
        gap={{ initial: "6", sm: "10" }}
        py={{ initial: "4", sm: "6" }}
        px={{ initial: "4", sm: "6" }}
      >
        <Flex direction="column" gap="2" width="100%">
          <Heading as="h2" size="3" weight="medium">
            Services
          </Heading>
          <Separator size="4" />
        </Flex>
        <Flex
          direction={{ initial: "column", lg: "row" }}
          gap={{ initial: "6", md: "12" }}
          width="100%"
          align="stretch"
        >
          <Flex
            direction="column"
            gap={{ initial: "6", sm: "8" }}
            flexShrink="0"
            maxWidth={{ initial: "100%", lg: "600px" }}
            position={{ initial: "static", lg: "sticky" }}
            top="96px"
            style={{ alignSelf: "flex-start" }}
          >
            <Heading
              align="left"
              size={{ initial: "8", sm: "9" }}
              weight="medium"
              style={{ textWrap: "balance" }}
            >
              I take on select consulting projects in design systems, WebGL
              interfaces, and AI product design.
            </Heading>
            <Flex gap="3" justify="start">
              <Button asChild variant="solid" size="2" highContrast>
                <a
                  href="https://calendly.com/accounts-kushagradhawan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book an intro call via Calendly"
                >
                  Book a call
                  <HugeiconsIcon icon={ArrowUpRight01Icon} />
                </a>
              </Button>
              <Button asChild variant="soft" highContrast size="2">
                <NextLink href="/services">
                  Services
                  <HugeiconsIcon icon={ArrowRight01Icon} />
                </NextLink>
              </Button>
            </Flex>
          </Flex>
          <Flex
            direction="column"
            justify="between"
            gap={{ initial: "6", sm: "8" }}
            width="100%"
            px={{ initial: "0", md: "4" }}
          >
            <Flex direction="column" gap="4" width="100%">
              {experiences.map((exp) => (
                <React.Fragment key={exp.id}>
                  <Flex
                    justify="between"
                    width="100%"
                    gap="3"
                    align={{ initial: "start", md: "center" }}
                    direction={{ initial: "column", md: "row" }}
                  >
                    <Link
                      href={exp.url}
                      target="_blank"
                      highContrast
                      underline="always"
                    >
                      <Flex
                        gap="3"
                        align={{ initial: "start", md: "center" }}
                        direction={{ initial: "column", md: "row" }}
                      >
                        <Avatar
                          fallback={exp.fallback}
                          size="2"
                          highContrast
                          color="gray"
                          src={exp.logo}
                          fit="contain"
                          alt={`${exp.company} logo`}
                        />
                        <Flex gap="1" align="center">
                          <Text size="3" weight="medium">
                            {exp.role}, {exp.company}
                          </Text>
                          <Flex flexShrink="0">
                            <HugeiconsIcon
                              icon={ArrowUpRight01Icon}
                              size={16}
                              color="currentColor"
                            />
                          </Flex>
                        </Flex>
                      </Flex>
                    </Link>
                    <Text size="2" weight="regular" color="gray">
                      {exp.duration}
                    </Text>
                  </Flex>
                  <Separator size="4" />
                </React.Fragment>
              ))}
            </Flex>
            <Flex
              gap={{ initial: "6", sm: "8" }}
              align="baseline"
              justify="end"
              direction={{ initial: "column", sm: "row" }}
            >
              <Flex gap="0" align="baseline">
                <Heading
                  size={{ initial: "9", sm: "10", md: "11", lg: "12" }}
                  weight="regular"
                  style={{
                    textBoxTrim: "trim-both",
                    textBoxEdge: "cap alphabetic",
                  }}
                >
                  EST
                </Heading>
                <Text size="1" color="gray">
                  (timezone)
                </Text>
              </Flex>
              <Flex gap="0" align="baseline">
                <Heading
                  size={{ initial: "9", sm: "10", md: "11", lg: "12" }}
                  weight="regular"
                  style={{
                    textBoxTrim: "trim-both",
                    textBoxEdge: "cap alphabetic",
                  }}
                >
                  7+
                </Heading>
                <Text size="1" color="gray">
                  (years of experience)
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* </Container> */}
    </Section>
  );
}
