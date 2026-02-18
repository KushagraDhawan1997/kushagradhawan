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
} from "@kushagradhawan/kookie-ui";
import { Hero } from "@kushagradhawan/kookie-blocks";
import { Testimonial } from "@/components/generic";
import NextImage from "next/image";
import { RecentArticlesSection } from "@/components/sections/recent-articles-section";
import { ArticleProps } from "@/components/sections/articles-list-section/ArticlesListGrid";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { WebGLImageTracker } from "@/components/webgl";

export function AboutKookieBlocks({ posts = [] }: { posts?: ArticleProps[] }) {
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
              Kookie Blocks
            </Heading>
            <Separator size="4" />
          </Flex>
          <Hero.Root align="start" gap={{ initial: "6", sm: "8" }}>
            <Hero.Title
              size={{ initial: "8", sm: "9", lg: "10" }}
              weight="medium"
              align="left"
              wrap="balance"
            >
              Kookie Blocks is a higher-level implementation of Kookie UI.
            </Hero.Title>

            <Hero.Description
              size={{ initial: "3", sm: "4" }}
              color="gray"
              align="left"
            >
              Building on the foundations of{" "}
              <Text as="span" highContrast>
                Kookie UI
              </Text>
              , Kookie Blocks provides{" "}
              <Text as="span" highContrast>
                pre-built, composable components
              </Text>{" "}
              that accelerate development while maintaining design consistency.
              Perfect for creating both app interfaces and marketing pages.
            </Hero.Description>

            <Hero.Actions gap="3">
              <Button asChild variant="solid" size="2" highContrast>
                <Link
                  target="_blank"
                  highContrast
                  href="https://kookieblocks.com/"
                >
                  Kookie Blocks
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
              id="kookie-blocks-hero"
              src="/pages/kookie-blocks/image.jpg"
              borderRadius={0}
            >
              <Image
                as={NextImage}
                src="/pages/kookie-blocks/image.jpg"
                alt="Kookie Blocks Hero"
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

      <Testimonial
        quote="Kookie Blocks takes the foundations of Kookie UI and turns them into ready-to-use building blocks. Instead of assembling components from scratch every time, we now have powerful, composable patterns that just work. It's going to change how we build interfaces."
        author="Anuj"
        designation="Software Engineer at Womp"
        avatar="https://media.licdn.com/dms/image/v2/D5603AQGWSOGxFf3cCw/profile-displayphoto-shrink_400_400/B56ZSwejfaGoAg-/0/1738127590217?e=1769040000&v=beta&t=set7ygl1nzZiXozOoibgjTYfIsenO28wVGcw1dK8sCw"
      />

      <RecentArticlesSection
        posts={posts}
        title="Articles about Kookie Blocks"
        showAnnouncements
      />
    </>
  );
}
