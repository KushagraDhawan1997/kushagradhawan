"use client";

import React from "react";
import {
  Box,
  Card,
  Container,
  Flex,
  Heading,
  Section,
  Text,
  Separator,
} from "@kushagradhawan/kookie-ui";
import { principles } from "./philosophyData";

/**
 * ProductPhilosophy - A showcase of the product methodology and guiding principles
 *
 * This section presents the core methodologies that guide product development approach,
 * structured as a vertical stack of cards. Each card contains the title, 
 * short description, and expanded content.
 */

export function ProductPhilosophy() {
  return (
    <Section>
      <Container size="4">
        <Flex direction="column" gap="9" py="6" px={{ initial: "4", sm: "6" }} position="relative">
          {/* Header */}
          <Flex direction="column" align="center" gap="6">
            <Text size="3" color="gray">Product Philosophy</Text>
            <Heading size="8" weight="medium" align="center" color="gray">
              Building at{" "}
              <Text as="span" weight="medium" highContrast>
                Womp
              </Text>{" "}
              has shown me firsthand what it takes to connect{" "}
              <Text as="span" weight="medium" highContrast>
                users
              </Text>
              ,{" "}
              <Text as="span" weight="medium" highContrast>
                technology
              </Text>
              , and{" "}
              <Text as="span" weight="medium" highContrast>
                business
              </Text>
              .
            </Heading>
          </Flex>

          {/* Vertical Stack of Cards */}
          <Flex direction="column" gap="8">
            {principles.map((principle, index) => (
              <Card
                key={principle.title}
                size="1"
                variant="soft"
                style={{
                  position: "sticky",
                  top: `${100 + index * 0}px`,
                }}
              >
                <Flex direction="column" gap="4" p="6">
                  <Flex direction="column" gap="2">
                    <Flex direction="column" align="start" gap="2">
                      <Text size="2" color="gray" weight="medium">
                        0{index + 1}
                      </Text>
                      <Heading size="5" weight="medium">
                        {principle.title}
                      </Heading>
                    </Flex>
                    {/* <Text size="4" >
                      {principle.description}
                    </Text> */}
                  </Flex>

                  {/* <Separator size="4" /> */}

                  <Text size="4" color="gray">
                    {principle.expandedContent}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
