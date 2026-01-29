"use client";

import {
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


export function AboutKookieUI({ posts = [] }: { posts?: ArticleProps[] }) {
  return (
    <>
      <Section position="relative" size="4">
        <Container size="4" px={{ initial: "4", sm: "6" }}>
          <Hero.Root layout={{ initial: "stacked", md: "split" }} gap="12">
            <Hero.Media style={{ flex: 1, alignSelf: "stretch" }}>
              <Box position="relative" width="100%" height="100%" minHeight="300px">
                <Image
                  as={NextImage}
                  src="/pages/kookie-ui/image.jpg"
                  alt="Kookie UI Hero"
                  fill
                  radius="none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Hero.Media>

            <Flex direction="column" gap="6" style={{ flex: 1 }}>
              <Hero.Meta>
                <Avatar
                  fallback="K"
                  size="2"
                  color="gray"
                  src="/kushagra-logo.svg"
                />
              </Hero.Meta>

              <Hero.Title align="left">
                Kookie UI is a design-system to build consistent and scalable
                user interfaces.
              </Hero.Title>

              <Hero.Description align="left" color="gray">
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
          </Hero.Root>
        </Container>
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
