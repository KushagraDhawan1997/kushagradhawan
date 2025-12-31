"use client";

/**
 * About Womp Component
 *
 * This component showcases leadership experience and impact at Womp.
 * It includes a headline, description, call-to-action button, stats, and illustration grid.
 * The section uses a responsive layout with different designs for mobile and desktop.
 */

import { Button, Container, Flex, Heading, Section, Text, Image, Link, Avatar, HoverCard, Grid, Box } from "@kushagradhawan/kookie-ui";
import { AIImageWithPrompt } from "@/components/generic";
import { WompStats, WompIllustrationGrid } from ".";
import { ProductPhilosophy } from "@/components/sections/product-philosophy-section";
import { Leadership } from "@/components/sections/leadership-section";
import { RecentArticlesSection } from "@/components/sections/recent-articles-section";
import { ArticleProps } from "@/components/sections/articles-list-section/ArticlesListGrid";

// Derive optimized content variants for portfolio images
function deriveContent(src: string) {
  const match = src.match(/^\/articles\/([^\.]+)\.(png|jpg|jpeg|webp)$/i);
  if (!match) return { src, srcSet: undefined, sizes: undefined };
  const base = match[1];
  return {
    src: `/articles/${base}-content-1200.webp`,
    srcSet: `/articles/${base}-content-800.webp 800w, /articles/${base}-content-1200.webp 1200w`,
    sizes: "(max-width: 768px) 100vw, 800px",
  };
}

/**
 * AboutWomp Component
 *
 * Features:
 * - Headline and descriptive subtitle with gradient text styling
 * - Clear call-to-action button linking to Womp's website
 * - Stats section highlighting key metrics and accomplishments
 * - Visually engaging illustration grid for both mobile and desktop views
 * - Dialog component for displaying additional information
 *
 * @returns React component for the Womp experience section
 */
export function AboutWomp({ posts = [] }: { posts?: ArticleProps[] }) {
  const heroImage = {
    image: "/articles/womp-hero.png",
    prompt:
      "Contemporary oil impasto palette-knife painting of a totem stack of 3D primitives (cube, sphere, cylinder, cone) floating slightly above a surface, warm cream + coral + Womp-orange accents with terracotta shadows, sage-green textured color-field background, thick glossy paint ridges catching sunlight, simplified forms, clean negative space, vertical 2:3, no text, no logos.",
  };

  return (
    <>
      <Section position="relative" size="4">
        <Container size="4" style={{ position: "relative", zIndex: 1 }}>
          <Grid columns={{ initial: "1", md: "2" }} gap="12" align="center" px={{ initial: "4", sm: "6" }}>
            {/* Left Column: Hero Image */}
            <Box width="100%">
              <AIImageWithPrompt prompt={heroImage.prompt}>
                <Image
                  src={deriveContent(heroImage.image).src}
                  srcSet={deriveContent(heroImage.image).srcSet}
                  sizes={deriveContent(heroImage.image).sizes}
                  alt="Womp Hero"
                  width="100%"
                  height="100%"
                  radius="none"
                />
              </AIImageWithPrompt>
            </Box>

            {/* Right Column: Content */}
            <Flex direction="column" align="start" gap="8">
              <Flex direction="column" align="start" gap="6">
                <Avatar fallback="K" size="2" color="gray" src="/kushagra-logo.svg"></Avatar>

                <Heading align="left" size="9" weight="medium">
                  Womp is a browser-based 3D modeling platform that makes 3D beginner-friendly and easy.
                </Heading>

                <Text align="left" size="4">
                  I lead Product & Design at{" "}
                  <HoverCard.Root>
                    <HoverCard.Trigger>
                      <Link color="blue" target="_blank" href="https://womp.com">
                        Womp 3D
                      </Link>
                    </HoverCard.Trigger>
                    <HoverCard.Content maxWidth="600px">
                      <Flex direction="column" align="center">
                        <Image src="/womp.png" alt="Womp 3D Preview" width="600" height="450" />
                      </Flex>
                    </HoverCard.Content>
                  </HoverCard.Root>
                  , empowering everyone to bring their ideas to life in minutes.
                </Text>
              </Flex>


              {/* Call-to-action button */}
              <Flex direction="column" align="start" gap="4">
                <Button asChild variant="solid" size="2" highContrast>
                  <a href="https://womp.com" target="_blank" rel="noopener noreferrer">
                    Create in Womp
                  </a>
                </Button>
                <Text size="2" color="gray">
                  Works in the browser. No install.
                </Text>
              </Flex>
            </Flex>
          </Grid>
        </Container>
      </Section>


      <Section size="4">
        <Container size="4">
          <Flex direction="column" gap="8" py="6" px={{ initial: "4", sm: "6" }}>

            {/* Illustration grid */}
            <WompIllustrationGrid />

            {/* Stats section */}
            <WompStats />

          </Flex>
        </Container>
      </Section>

      <Leadership />

      <ProductPhilosophy />

      <RecentArticlesSection posts={posts} title="Articles about Womp" showCallout={false} />


    </>
  );
}
