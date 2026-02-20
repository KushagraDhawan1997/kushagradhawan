"use client";

import {
  AspectRatio,
  Button,
  Flex,
  Heading,
  Section,
  Separator,
  Text,
  Link,
  Image,
  Box,
  Container,
} from "@kushagradhawan/kookie-ui";
import { Hero, Testimonial } from "@kushagradhawan/kookie-blocks";
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
        <Flex
          direction="column"
          align="start"
          gap={{ initial: "5", sm: "8" }}
          py={{ initial: "4", sm: "6" }}
          px={{ initial: "4", sm: "6" }}
        >
          <Flex direction="column" gap="2" width="100%">
            <Heading size="3" weight="medium">
              Kookie UI
            </Heading>
            <Separator size="4" />
          </Flex>
          <Hero.Root align="start" gap={{ initial: "6", sm: "8" }}>
            <Hero.Title
              size={{ initial: "8", sm: "9", lg: "10" }}
              weight="medium"
              align="left"

            >
              Kookie UI is a design-system to build consistent and scalable user
              interfaces.
            </Hero.Title>

            <Hero.Description
              size={{ initial: "3", sm: "4" }}
              color="gray"
              align="left"
            >
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

            <Hero.Actions gap="3">
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
                  <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={1.5} />
                </Link>
              </Button>
            </Hero.Actions>
          </Hero.Root>
        </Flex>

        <Box
          px={{ initial: "4", sm: "6" }}
          width="100%"
          mt="6"
          style={{
            overflow: "hidden",
          }}
        >
          <AspectRatio ratio={3 / 1}>
            <WebGLImageTracker
              id="kookie-ui-hero"
              src="/pages/kookie-ui/image.jpg"
              borderRadius={0}
            >
              <Image
                as={NextImage}
                src="/pages/kookie-ui/image.jpg"
                alt="Kookie UI Hero"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                style={{ objectFit: "cover" }}
                radius="none"
                priority
                loading="eager"
                decoding="async"
              />
            </WebGLImageTracker>
          </AspectRatio>
        </Box>
      </Section>

      <Section size="4">
        <Container size="3" px={{ initial: "4", sm: "6" }}>
          <Testimonial.Root py={{ initial: "4", sm: "6" }} align="start">
            <Testimonial.Quote size={{ initial: "6", sm: "7", lg: "8" }} align="left">
              Components like Shell in Kookie UI are a game changer for building responsive layouts. Getting responsiveness right is so difficult otherwise — Kookie UI has significantly reduced the UI load on our team.
            </Testimonial.Quote>
            <Testimonial.Author align="start">
              <Testimonial.Avatar
                src="https://media.licdn.com/dms/image/v2/D5603AQGWSOGxFf3cCw/profile-displayphoto-shrink_400_400/B56ZSwejfaGoAg-/0/1738127590217?e=1769040000&v=beta&t=set7ygl1nzZiXozOoibgjTYfIsenO28wVGcw1dK8sCw"
                fallback="A"
              />
              <Testimonial.Details align="start">
                <Testimonial.Name>Anuj</Testimonial.Name>
                <Testimonial.Role>Software Engineer at Womp</Testimonial.Role>
              </Testimonial.Details>
            </Testimonial.Author>
          </Testimonial.Root>
        </Container>
      </Section>

      <RecentArticlesSection
        posts={posts}
        title="Articles about Kookie UI"
        showAnnouncements
      />
    </>
  );
}
