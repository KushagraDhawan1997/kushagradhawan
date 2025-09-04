"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  Section,
  Container,
  Flex,
  Heading,
  Text,
  Button,
} from "@kushagradhawan/kookie-ui";
import { getMonochromaticGradient } from "@/lib/gradient";

export default function NotFound() {
  const gradientText = getMonochromaticGradient();

  useEffect(() => {
    document.title = "Page Not Found | Kushagra Dhawan";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Sorry, the page you are looking for does not exist or has been moved."
      );
    }
  }, []);

  return (
    <Section>
      <Container size="4">
        <Flex direction="column" gap="6" p="6" align="center">
          <Heading size="9" weight="medium">
            404
          </Heading>
          <Heading
            size="8"
            weight="medium"
            className={gradientText}
            style={{ textAlign: "center" }}
          >
            I'm lost in these memories <br />
            Living behind my own illusion
          </Heading>

          <Flex gap="4" align="center" mt="6">
            <Button size="3" highContrast asChild>
              <Link href="/">Homepage</Link>
            </Button>

            <Button size="3" variant="classic" highContrast asChild>
              <Link href="/articles">Articles</Link>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
