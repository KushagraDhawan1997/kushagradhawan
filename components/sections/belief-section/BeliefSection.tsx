"use client";

import { Container, Flex, Heading, Section, Text, Button } from "@kushagradhawan/kookie-ui";
import NextLink from "next/link";
import { ArrowRight } from "lucide-react";

export function BeliefSection() {
  return (
    <>
      <Section>
        <Container size="4">
          <Flex direction="column" gap="9" py="6" px={{ initial: "4", sm: "6" }}>
            <Flex direction="column" align="center" gap="6">
              <Text size="1" color="gray" weight="medium">
                A NOTE ON AI
              </Text>
              <Heading align="center" size={{ initial: "8", md: "8" }} weight="medium">
                Despite the noise, confusion, and complaints, I see{" "}
                <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                  AI as a powerful equalizer
                </Text>
                . It closes the gap between an idea and a working product, breaks down barriers, and empowers more people to pursue{" "}
                <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                  meaningful work.
                </Text>
                <br />
                <br />I graduated as an{" "}
                <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                  engineer
                </Text>
                , began my career as a designer, and for a long time, rarely wrote code. Then{" "}
                <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                  AI changed everything for me.{" "}
                </Text>
                Now, I can turn my ideas into prototypes and real products more quickly and confidently than ever. I love{" "}
                <Text as="span" weight="regular" color="gray" style={{ fontStyle: "italic" }}>
                  building&nbsp;— anything, really
                </Text>
                . Thanks to AI, I can build more, build faster, and build better. For that, I'm genuinely grateful.
              </Heading>
            </Flex>
            {/* Call-to-action buttons */}
            <Flex direction="row" gap="2" justify="center">
              <Button asChild variant="solid" size="3" highContrast>
                <a
                  href="https://calendly.com/accounts-kushagradhawan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book an intro call via Calendly"
                >
                  Let's talk (Calendly)
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="soft" highContrast size="3">
                <NextLink href="/articles/about-me" aria-label="Read more about Kushagra Dhawan's background and experience">
                  About me
                </NextLink>
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Section>
    </>
  );
}
