"use client";

import React from "react";
import {
  Button,
  Flex,
  Text,
  Heading,
  Section,
  Link,
  Separator,
} from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FavouriteIcon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";

const projects = [
  {
    id: 1,
    name: "Kookie UI",
    description: "Design system and component library. Open-source fork of Radix Themes.",
    url: "https://github.com/KushagraDhawan1997/kookie-ui",
  },
  {
    id: 2,
    name: "Kookie Blocks",
    description: "Higher-level patterns and blocks built on Kookie UI.",
    url: "https://github.com/KushagraDhawan1997/kookie-blocks",
  },
  {
    id: 3,
    name: "Kookie Flow",
    description: "WebGL-native node graph library for React. 50,000+ nodes at 60fps.",
    url: "https://github.com/KushagraDhawan1997/kookie-flow",
  },
];

export function SponsorsSection() {
  return (
    <Section size="4">
      <Flex
        direction="column"
        align="start"
        gap={{ initial: "6", sm: "10" }}
        py={{ initial: "4", sm: "6" }}
        px={{ initial: "4", sm: "6" }}
      >
        <Flex direction="column" gap="2" width="100%">
          <Heading as="h2" size="3" weight="medium">
            Support
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
              I build open-source tools for designers and developers. Your sponsorship helps keep them free.
            </Heading>
          </Flex>
          <Flex
            direction="column"
            justify="between"
            gap={{ initial: "6", sm: "8" }}
            width="100%"
            px={{ initial: "0", md: "4" }}
          >
            <Flex direction="column" gap="4" width="100%">
              {projects.map((project) => (
                <React.Fragment key={project.id}>
                  <Flex
                    justify="between"
                    width="100%"
                    gap="3"
                    align={{ initial: "start", md: "center" }}
                    direction={{ initial: "column", md: "row" }}
                  >
                    <Link
                      href={project.url}
                      target="_blank"
                      highContrast
                      underline="always"
                    >
                      <Flex gap="1" align="center">
                        <Text size="3" weight="medium">
                          {project.name}
                        </Text>
                        <Flex flexShrink="0">
                          <HugeiconsIcon
                            icon={ArrowUpRight01Icon}
                            size={16}
                            color="currentColor"
                          />
                        </Flex>
                      </Flex>
                    </Link>
                    <Text size="2" color="gray">
                      {project.description}
                    </Text>
                  </Flex>
                  <Separator size="4" />
                </React.Fragment>
              ))}
            </Flex>
            <Flex justify="end">
              <Button asChild variant="solid" size="2" highContrast>
                <a
                  href="https://github.com/sponsors/KushagraDhawan1997"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HugeiconsIcon icon={FavouriteIcon} strokeWidth={1.75} />
                  Sponsor my work
                </a>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
}
