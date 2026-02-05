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


export function AboutKookieBlocks({ posts = [] }: { posts?: ArticleProps[] }) {
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
                Kookie Blocks is a higher-level implementation of Kookie UI.
              </Hero.Title>

              <Hero.Description color="gray">
                Building on the foundations of{" "}
                <Text as="span" highContrast>
                  Kookie UI
                </Text>
                , Kookie Blocks provides{" "}
                <Text as="span" highContrast>
                  pre-built, composable components
                </Text>{" "}
                that accelerate development while maintaining design
                consistency. Perfect for creating both app interfaces and
                marketing pages.
              </Hero.Description>

              <Hero.Actions gap="2">
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
            </Flex>
          </Container>

          <Hero.Media style={{ width: '100%' }}>
            <Box px={{ initial: "4", sm: "6" }} width="100%">
              <AspectRatio ratio={3 / 1}>
                <WebGLImageTracker id="kookie-blocks-hero" src="/pages/kookie-blocks/image.jpg">
                  <Image
                    as={NextImage}
                    src="/pages/kookie-blocks/image.jpg"
                    alt="Kookie Blocks Hero"
                    fill
                    radius="none"
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
