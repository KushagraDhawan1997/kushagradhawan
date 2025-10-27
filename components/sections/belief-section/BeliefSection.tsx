"use client";

import { Container, Flex, Heading, Section, Text, Link } from "@kushagradhawan/kookie-ui";

export function BeliefSection() {
  return (
    <Section>
      <Container size="4">
        <Flex direction="column" gap="6" p="6">
          <Heading size={{ initial: "8", md: "8" }} weight="medium" color="gray" style={{ maxWidth: "64rem" }}>
            I believe{" "}
            <Text as="span" weight="medium" highContrast color="gray">
              AI is a leveler
            </Text>
            . It shortens the distance between an idea and something real and lowers gatekeeping so more people can do{" "}
            <Text as="span" weight="medium" highContrast color="gray">
              meaningful work
            </Text>
            , not just specialists.
            <br />
            <br />I graduated as an engineer and started my first job as a designer. I didn’t write much code for years.{" "}
            <Text as="span" weight="medium" highContrast color="gray">
              AI changed that
            </Text>
            : it lets me prototype, stitch systems, and{" "}
            <Text as="span" weight="medium" highContrast color="gray">
              ship
            </Text>
            . What I like most is{" "}
            <Text as="span" weight="medium" highContrast color="gray">
              building
            </Text>
            , and AI has made it possible to build more, build faster, and build well. I’m grateful for that.
          </Heading>
        </Flex>
      </Container>
    </Section>
  );
}
