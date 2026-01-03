"use client";

import { useEffect } from "react";
import { Section, Container, Flex, Heading, Button, Text } from "@kushagradhawan/kookie-ui";
import { getMonochromaticGradient } from "@/lib/gradient";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const gradientText = getMonochromaticGradient();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section>
      <Container size="4">
        <Flex direction="column" gap="8" p="6" align="center">
          <Flex direction="column" gap="4" align="center">
            <Heading size="9" highContrast weight="medium">
              Oops
            </Heading>
            <Heading size="8" weight="medium" className={gradientText} style={{ textAlign: "center" }}>
              Something went wrong.
            </Heading>
            <Text size="4" color="gray">
              An unexpected error occurred. Please try again.
            </Text>
          </Flex>

          <Flex gap="2" align="center">
            <Button size="3" highContrast onClick={reset}>
              Try Again
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
