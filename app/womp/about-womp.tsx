"use client";

import React from "react";
import {
  Button,
  Container,
  Flex,
  Heading,
  Section,
  Text,
  Image,
  Link,
  Avatar,
  HoverCard,
  Box,
  Separator,
} from "@kushagradhawan/kookie-ui";
import { Hero } from "@kushagradhawan/kookie-blocks";
import { Testimonial } from "@/components/generic";
import NextImage from "next/image";
import { WompIllustrationGrid } from "./womp-illustrations-grid";
import { ProductPhilosophy } from "@/components/sections/product-philosophy-section";
import { Leadership } from "@/components/sections/leadership-section";
import { RecentArticlesSection } from "@/components/sections/recent-articles-section";
import { ArticleProps } from "@/components/sections/articles-list-section/ArticlesListGrid";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserGroup02Icon, DeliveryBox01Icon } from "@hugeicons/core-free-icons";

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
            p="6"
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
        <Container size="4" px={{ initial: "4", sm: "6" }}>
          <Hero.Root layout={{ initial: "stacked", md: "split" }} gap="12">
            <Hero.Media style={{ flex: 1, alignSelf: "stretch" }}>
              <Box position="relative" width="100%" height="100%" minHeight="300px">
                <Image
                  as={NextImage}
                  src="/pages/womp/image.jpg"
                  alt="Womp Hero"
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
                Womp is a browser-based 3D modeling platform that makes 3D
                beginner-friendly and easy.
              </Hero.Title>

              <Hero.Description align="left" color="gray">
                I lead Product & Design at{" "}
                <HoverCard.Root>
                  <HoverCard.Trigger>
                    <Link color="blue" target="_blank" href="https://womp.com">
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
                      />
                    </Flex>
                  </HoverCard.Content>
                </HoverCard.Root>
                , empowering everyone to bring their ideas to life in minutes.
              </Hero.Description>

              <Hero.Actions direction="column" align="start" gap="4">
                <Button asChild variant="solid" size="2" highContrast>
                  <a
                    href="https://womp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Create in Womp
                  </a>
                </Button>
                <Text size="2" color="gray">
                  Works in the browser. No install.
                </Text>
              </Hero.Actions>
            </Flex>
          </Hero.Root>
        </Container>
      </Section>

      <Testimonial
        quote="Kushagra kept the product moving forward every single day. His ability to bridge engineering, design, and business thinking made him invaluable to the team. He always understood the full picture, which helped him make the right decisions for the product."
        author="Praneeth Potnuru"
        designation="Product Designer at Womp"
        avatar="https://media.licdn.com/dms/image/v2/D5603AQEGLUrOCL6nKg/profile-displayphoto-scale_400_400/B56ZoR8b.fHkAg-/0/1761237648131?e=1769040000&v=beta&t=i_FXB_dNUWACyxES2kEarUrQtI_wg2MsqrBgMXquPmY"
      />

      <Section size="4">
        <Container size="4">
          <Flex
            direction="column"
            gap="8"
            py="6"
            px={{ initial: "4", sm: "6" }}
          >
            <WompIllustrationGrid />
            <WompStats />
          </Flex>
        </Container>
      </Section>

      <Leadership />

      <ProductPhilosophy />

      <RecentArticlesSection posts={posts} title="Articles about Womp" showAnnouncements />
    </>
  );
}
