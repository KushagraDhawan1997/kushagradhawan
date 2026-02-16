"use client";

import React from "react";
import {
  Flex,
  Text,
  Container,
  Section,
  Link,
  Avatar,
  Separator,
} from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

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
    <Section size="2">
      <Container size="4">
        <Flex
          direction="column"
          align="center"
          gap="4"
          px={{ initial: "4", sm: "6" }}
        >
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
      </Container>
    </Section>
  );
}
