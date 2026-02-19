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
        <Flex direction="column" gap={{ initial: "6", sm: "8" }} p={{ initial: "4", sm: "6" }} align="center">
          <Flex direction="column" gap="6" align="center">
            <Heading
              size={{ initial: "7", sm: "8" }}
              highContrast
              weight="medium"
              style={{ textWrap: "balance" }}
            >
              Oops
            </Heading>
            <Heading
              size={{ initial: "8", sm: "9" }}
              weight="medium"
              className={gradientText}
              style={{ textAlign: "center", textWrap: "balance" }}
            >
              Something went wrong.
            </Heading>
            <Text size="3" color="gray" align="center">
              An unexpected error occurred. Please try again.
            </Text>
          </Flex>

          <Flex gap="2" align="center">
            <Button size="2" highContrast onClick={reset}>
              Try Again
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
