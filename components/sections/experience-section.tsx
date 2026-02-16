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

export function ExperienceSection() {
  return (
    <Section size="4">
      <Container size="4">
        <Flex
          direction="column"
          align="center"
          gap="10"
          py="6"
          px={{ initial: "4", sm: "6" }}
        >
          <Heading align="center" size="8" weight="medium">
            I take on select consulting projects in design systems, WebGL
            interfaces, and AI product design.
          </Heading>
          <Flex direction="column" align="center" gap="4" width="100%">
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
                    underline="hover"
                  >
                    <Flex gap="3" align="center">
                      <Avatar
                        fallback={exp.fallback}
                        size="1"
                        highContrast
                        color="gray"
                        src={exp.logo}
                        fit="contain"
                      />
                      <Text size="3" weight="medium">
                        {exp.role}, {exp.company}
                      </Text>
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        size={16}
                        color="currentColor"
                      />
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
          <Flex gap="3" justify="center">
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
              <NextLink href="/articles/about-me">
                About me
                <HugeiconsIcon icon={ArrowRight01Icon} />
              </NextLink>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
