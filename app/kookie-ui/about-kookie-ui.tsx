"use client";

import {
  AspectRatio,
  Avatar,
  Button,
  Container,
  Flex,
  Section,
  Text,
  Link,
  Image,
  Box,
} from "@kushagradhawan/kookie-ui";
import { Hero } from "@kushagradhawan/kookie-blocks";
import { Testimonial } from "@/components/generic";
import NextImage from "next/image";
import { RecentArticlesSection } from "@/components/sections/recent-articles-section";
import { ArticleProps } from "@/components/sections/articles-list-section/ArticlesListGrid";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { WebGLImageTracker } from "@/components/webgl";

export function AboutKookieUI({ posts = [] }: { posts?: ArticleProps[] }) {
  return (
    <>
      <Section position="relative" size="4">
        <Hero.Root layout="stacked" gap="12">
          <Container size="2">
            <Flex direction="column" gap="6" align="center">
              <Hero.Meta>
                <Avatar
                  fallback="K"
                  size="2"
                  color="gray"
                  src="/kushagra-logo.svg"
                />
              </Hero.Meta>

              <Hero.Title>
                Kookie UI is a design-system to build consistent and scalable
                user interfaces.
              </Hero.Title>

              <Hero.Description color="gray">
                An open-source fork of{" "}
                <Text as="span" highContrast>
                  Radix Themes
                </Text>
                , focused on building{" "}
                <Text as="span" highContrast>
                  scalable, consistent UI components
                </Text>{" "}
                with a fresh visual style and practical foundations.
              </Hero.Description>

              <Hero.Actions gap="2">
                <Button variant="soft" size="2" highContrast>
                  <a
                    href="/articles/about-kookie-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read about Kookie UI
                  </a>
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={16}
                    color="currentColor"
                  />
                </Button>
                <Button asChild variant="solid" size="2" highContrast>
                  <Link
                    target="_blank"
                    highContrast
                    href="https://www.hellokookie.com/"
                  >
                    Kookie UI
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      strokeWidth={1.5}
                    />
                  </Link>
                </Button>
              </Hero.Actions>
            </Flex>
          </Container>

          <Hero.Media style={{ width: "100%" }}>
            <Box
              px={{ initial: "4", sm: "6" }}
              width="100%"
              style={{
                borderRadius: "var(--radius-4)",
                overflow: "hidden",
              }}
            >
              <AspectRatio ratio={3 / 1}>
                <WebGLImageTracker
                  id="kookie-ui-hero"
                  src="/pages/kookie-ui/image.jpg"
                  borderRadius={16}
                >
                  <Image
                    as={NextImage}
                    src="/pages/kookie-ui/image.jpg"
                    alt="Kookie UI Hero"
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    style={{ objectFit: "cover" }}
                    priority
                    loading="eager"
                    decoding="async"
                  />
                </WebGLImageTracker>
              </AspectRatio>
            </Box>
          </Hero.Media>
        </Hero.Root>
      </Section>

      <Testimonial
        quote="Components like Shell in Kookie UI are a game changer for building responsive layouts. Getting responsiveness right is so difficult otherwise — Kookie UI has significantly reduced the UI load on our team."
        author="Anuj"
        designation="Software Engineer at Womp"
        avatar="https://media.licdn.com/dms/image/v2/D5603AQGWSOGxFf3cCw/profile-displayphoto-shrink_400_400/B56ZSwejfaGoAg-/0/1738127590217?e=1769040000&v=beta&t=set7ygl1nzZiXozOoibgjTYfIsenO28wVGcw1dK8sCw"
      />

      <RecentArticlesSection
        posts={posts}
        title="Articles about Kookie UI"
        showAnnouncements
      />
    </>
  );
}
