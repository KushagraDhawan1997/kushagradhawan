"use client";

import {
  Container,
  Flex,
  Heading,
  Section,
  Text,
  Link,
} from "@kushagradhawan/kookie-ui";

export function BeliefSection() {
  return (
    <Section>
      <Container size="4">
        <Flex direction="column" gap="6" p="6">
          <Heading
            size={{ initial: "8", md: "9" }}
            weight="medium"
            color="gray"
            style={{ maxWidth: "64rem" }}
          >
            I believe{" "}
            <Text as="span" weight="medium" highContrast color="gray">
              AI is a leveler
            </Text>
            —it lowers the barrier between an idea and something real. I believe
            in{" "}
            <Text as="span" weight="medium" highContrast color="gray">
              building over talking
            </Text>
            , in{" "}
            <Text as="span" weight="medium" highContrast color="gray">
              efficiency
            </Text>
            , in{" "}
            <Text as="span" weight="medium" highContrast color="gray">
              shipping fast
            </Text>
            , because{" "}
            <Text as="span" weight="medium" highContrast color="gray">
              time matters
            </Text>
            . I believe AI will let more people do{" "}
            <Text as="span" weight="medium" highContrast color="gray">
              meaningful work
            </Text>{" "}
            —not just specialists.
            <br />
            <br />
            <Text as="span" weight="medium" highContrast color="gray">
              At Womp
            </Text>
            , I’m learning every day how design, product, and engineering fit
            together.{" "}
            <Text as="span" weight="medium" highContrast color="gray">
              AI lets me move between roles
            </Text>{" "}
            when needed, so I can keep momentum without slowing the team down.
            That’s why I started{" "}
            <Text as="span" weight="medium" highContrast color="gray">
              KookieUI
            </Text>
            —to make work{" "}
            <Text as="span" weight="medium" highContrast color="gray">
              faster and more consistent
            </Text>
            . We’re{" "}
            <Text as="span" weight="medium" highContrast color="gray">
              already using it
            </Text>{" "}
            in production, and I’m still figuring out how to make it better.
          </Heading>
        </Flex>
      </Container>
    </Section>
  );
}
