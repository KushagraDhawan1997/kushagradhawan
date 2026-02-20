"use client";

import React from "react";
import {
  AspectRatio,
  Button,
  Flex,
  Heading,
  Section,
  Text,
  Image,
  Link,
  HoverCard,
  Box,
  Container,
  Separator,
} from "@kushagradhawan/kookie-ui";
import { Hero, Testimonial } from "@kushagradhawan/kookie-blocks";
import NextImage from "next/image";
import { WompIllustrationGrid } from "./womp-illustrations-grid";
import { ProductPhilosophy } from "@/components/sections/product-philosophy-section";
import { Leadership } from "@/components/sections/leadership-section";
import { RecentArticlesSection } from "@/components/sections/recent-articles-section";
import { ArticleProps } from "@/components/sections/articles-list-section/ArticlesListGrid";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserGroup02Icon, DeliveryBox01Icon } from "@hugeicons/core-free-icons";
import { WebGLImageTracker } from "@/components/webgl";

type WompStat = {
  iconName: "Users" | "Box";
  value: string;
  description: string;
};

const wompStats: WompStat[] = [
  {
    iconName: "Users",
    value: "600k+ users",
    description: "Registered creators, from first-timers to pros.",
  },
  {
    iconName: "Box",
    value: "150k+ projects",
    description: "Community projects shared publicly on Womp.",
  },
];

function WompStats() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return (
          <HugeiconsIcon
            icon={UserGroup02Icon}
            size={24}
            color="currentColor"
          />
        );
      case "Box":
        return (
          <HugeiconsIcon
            icon={DeliveryBox01Icon}
            size={24}
            color="currentColor"
          />
        );
      default:
        return null;
    }
  };

  return (
    <Flex
      direction={{ initial: "column", sm: "row" }}
      gap="0"
      align="stretch"
      width="100%"
    >
      {wompStats.map((stat, index) => (
        <React.Fragment key={index}>
          <Flex
            direction="column"
            align="center"
            gap="3"
            p={{ initial: "4", sm: "6" }}
            height="100%"
            style={{
              flex: "1 1 0",
              minWidth: 0,
            }}
          >
            {getIconComponent(stat.iconName)}
            <Heading size="3" weight="medium">
              {stat.value}
            </Heading>
            <Text align="center" size="3" color="gray">
              {stat.description}
            </Text>
          </Flex>
          {index < wompStats.length - 1 && (
            <>
              <Box display={{ initial: "block", sm: "none" }} width="100%">
                <Separator size="4" orientation="horizontal" />
              </Box>
              <Box display={{ initial: "none", sm: "block" }}>
                <Separator size="4" orientation="vertical" />
              </Box>
            </>
          )}
        </React.Fragment>
      ))}
    </Flex>
  );
}

export function AboutWomp({ posts = [] }: { posts?: ArticleProps[] }) {
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
              Womp 3D
            </Heading>
            <Separator size="4" />
          </Flex>
          <Hero.Root align="start" gap={{ initial: "6", sm: "8" }}>
            <Hero.Title
              size={{ initial: "8", sm: "9", lg: "10" }}
              weight="medium"
              align="left"

            >
              Womp is a browser-based 3D modeling platform that makes 3D
              beginner-friendly and easy.
            </Hero.Title>

            <Hero.Description
              size={{ initial: "3", sm: "4" }}
              color="gray"
              align="left"
            >
              I&apos;ve been consulting with{" "}
              <HoverCard.Root>
                <HoverCard.Trigger>
                  <Link underline="always" color="blue" target="_blank" href="https://womp.com">
                    Womp 3D
                  </Link>
                </HoverCard.Trigger>
                <HoverCard.Content maxWidth="600px">
                  <Flex direction="column" align="center">
                    <Image
                      src="/womp.png"
                      alt="Womp 3D Preview"
                      width="600"
                      height="450"
                      radius="none"
                    />
                  </Flex>
                </HoverCard.Content>
              </HoverCard.Root>{" "}
              since 2021 as an independent product and design consultant,
              empowering everyone to bring their ideas to life in minutes.
            </Hero.Description>

            <Hero.Actions gap="3">
              <Button asChild variant="solid" size="2" highContrast>
                <a
                  href="https://womp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Create in Womp
                </a>
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
              id="womp-hero"
              src="/pages/womp/image.jpg"
              borderRadius={0}
            >
              <Image
                as={NextImage}
                src="/pages/womp/image.jpg"
                alt="Womp Hero"
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
              Kushagra kept the product moving forward every single day. His ability to bridge engineering, design, and business thinking made him invaluable to the team. He always understood the full picture, which helped him make the right decisions for the product.
            </Testimonial.Quote>
            <Testimonial.Author align="start">
              <Testimonial.Avatar
                src="https://media.licdn.com/dms/image/v2/D5603AQEGLUrOCL6nKg/profile-displayphoto-scale_400_400/B56ZoR8b.fHkAg-/0/1761237648131?e=1769040000&v=beta&t=i_FXB_dNUWACyxES2kEarUrQtI_wg2MsqrBgMXquPmY"
                fallback="P"
              />
              <Testimonial.Details align="start">
                <Testimonial.Name>Praneeth Potnuru</Testimonial.Name>
                <Testimonial.Role>Product Designer at Womp</Testimonial.Role>
              </Testimonial.Details>
            </Testimonial.Author>
          </Testimonial.Root>
        </Container>
      </Section>

      <Section size="4">
        <Flex direction="column" gap={{ initial: "6", sm: "8" }} py={{ initial: "4", sm: "6" }} px={{ initial: "4", sm: "6" }}>
          <WompIllustrationGrid />
          <WompStats />
        </Flex>
      </Section>

      <Leadership />

      <ProductPhilosophy />

      <RecentArticlesSection
        posts={posts}
        title="Articles about Womp"
        showAnnouncements
      />
    </>
  );
}
