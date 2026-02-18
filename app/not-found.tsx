"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Section, Container, Flex, Heading, Image, Button, Text } from "@kushagradhawan/kookie-ui";
import { getMonochromaticGradient } from "@/lib/gradient";

export default function NotFound() {
  const gradientText = getMonochromaticGradient();

  useEffect(() => {
    document.title = "Page Not Found | Kushagra Dhawan";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Sorry, the page you are looking for does not exist or has been moved.");
    }
  }, []);

  return (
    <Section>
      <Container size="4">
        <Flex direction="column" gap={{ initial: "6", sm: "8" }} p={{ initial: "4", sm: "6" }} align="center">
          <Flex direction="column" gap="4" align="center">
            <Heading size={{ initial: "8", sm: "9" }} highContrast weight="medium" style={{ textWrap: "balance" }}>
              404
            </Heading>
            <Heading size="5" weight="medium" className={gradientText} style={{ textAlign: "center", textWrap: "balance" }}>
              I'm lost in these memories. <br />
              Living behind my own illusion.
            </Heading>
            <Text size="3" color="gray" align="center">
              This page doesn't exist. Maybe you took a wrong turn?
            </Text>
          </Flex>

          <Flex gap="2" align="center">
            <Button size="2" highContrast asChild>
              <Link href="/">Go Home</Link>
            </Button>

            <Button size="2" variant="soft" highContrast asChild>
              <Link href="/articles">Articles</Link>
            </Button>
          </Flex>
          <Image src="/kookie.png" alt="KookieUI" maxWidth="320px" radius="none" style={{ backgroundPosition: "bottom" }} />
        </Flex>
      </Container>
    </Section>
  );
}
