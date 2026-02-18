"use client";

import React from "react";
import {
  Card,
  Flex,
  Heading,
  Section,
  Text,
  Separator,
} from "@kushagradhawan/kookie-ui";
import { principles } from "./philosophyData";

export function ProductPhilosophy() {
  return (
    <Section>
      <Flex
        direction="column"
        align="start"
        gap={{ initial: "6", sm: "10" }}
        py={{ initial: "4", sm: "6" }}
        px={{ initial: "4", sm: "6" }}
      >
        <Flex direction="column" gap="2" width="100%">
          <Heading size="3" weight="medium">
            Product Philosophy
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
            flexShrink="0"
            maxWidth={{ initial: "100%", lg: "600px" }}
            position={{ initial: "static", lg: "sticky" }}
            top="96px"
            style={{ alignSelf: "flex-start" }}
          >
            <Heading
              size={{ initial: "8", sm: "9" }}
              weight="medium"
              align="left"
              color="gray"
              style={{ textWrap: "balance" }}
            >
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
          <Flex direction="column" gap={{ initial: "6", sm: "8" }} width="100%">
            {principles.map((principle, index) => (
              <Card key={principle.title} size="1" variant="soft">
                <Flex direction="column" gap="4" p={{ initial: "4", sm: "6" }}>
                  <Flex direction="column" gap="2">
                    <Flex direction="column" align="start" gap="2">
                      <Text size="2" color="gray" weight="medium">
                        0{index + 1}
                      </Text>
                      <Heading size="5" weight="medium">
                        {principle.title}
                      </Heading>
                    </Flex>
                  </Flex>
                  <Text size="3" color="gray">
                    {principle.expandedContent}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
}
