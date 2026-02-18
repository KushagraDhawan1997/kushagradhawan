"use client";

import React from "react";
import {
  AspectRatio,
  Box,
  Button,
  Image,
  Flex,
  Grid,
  Heading,
  Section,
  Separator,
  Text,
} from "@kushagradhawan/kookie-ui";
import Link from "next/link";
import NextImage from "next/image";
import { leadershipItems } from "@/components/sections/leadership-section/leadershipData";
import { WebGLImageTracker } from "@/components/webgl";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Briefcase01Icon,
  CodeIcon,
  ZapIcon,
  Agreement02Icon,
  Analytics01Icon,
  BrainIcon,
  Clock01Icon,
  UserGroup02Icon,
  ArrowUpRight01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Briefcase":
      return (
        <HugeiconsIcon icon={Briefcase01Icon} size={20} color="currentColor" />
      );
    case "Code":
      return <HugeiconsIcon icon={CodeIcon} size={20} color="currentColor" />;
    case "Zap":
      return <HugeiconsIcon icon={ZapIcon} size={20} color="currentColor" />;
    case "Handshake":
      return (
        <HugeiconsIcon icon={Agreement02Icon} size={20} color="currentColor" />
      );
    case "LineChart":
      return (
        <HugeiconsIcon icon={Analytics01Icon} size={20} color="currentColor" />
      );
    case "Ban":
      return <HugeiconsIcon icon={BrainIcon} size={20} color="currentColor" />;
    case "Clock":
      return (
        <HugeiconsIcon icon={Clock01Icon} size={20} color="currentColor" />
      );
    case "Users":
      return (
        <HugeiconsIcon icon={UserGroup02Icon} size={20} color="currentColor" />
      );
    default:
      return null;
  }
};

export function Leadership() {
  return (
    <Section>
      <Flex
        direction="column"
        align="start"
        gap={{ initial: "6", sm: "10" }}
        py={{ initial: "4", sm: "6" }}
        px={{ initial: "4", sm: "6" }}
      >
        <Flex direction="column" gap="2" width="100%">
          <Heading size="3" weight="medium">
            What I do
          </Heading>
          <Separator size="4" />
        </Flex>
        <Flex
          direction={{ initial: "column", xl: "row" }}
          gap={{ initial: "6", md: "12" }}
          width="100%"
          align="stretch"
        >
          <Flex
            direction="column"
            gap={{ initial: "6", sm: "8" }}
            flexShrink="0"
            maxWidth={{ initial: "100%", xl: "600px" }}
            position={{ initial: "static", xl: "sticky" }}
            top="96px"
            style={{ alignSelf: "flex-start" }}
          >
            <Heading
              size={{ initial: "8", sm: "9" }}
              weight="medium"
              align="left"
              color="gray"
              style={{ textWrap: "balance" }}
            >
              I consult across{" "}
              <Text as="span" weight="medium" highContrast>
                product
              </Text>
              ,{" "}
              <Text as="span" weight="medium" highContrast>
                design
              </Text>
              , and{" "}
              <Text as="span" weight="medium" highContrast>
                engineering
              </Text>{" "}
              as one integrated practice.
            </Heading>
            <Flex gap="2" justify="start">
              <Button asChild variant="solid" size="2" highContrast>
                <Link href="#contact">
                  Calendly
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    color="currentColor"
                  />
                </Link>
              </Button>
              <Button asChild variant="soft" highContrast size="2">
                <Link
                  href="/articles/leadership-approaches"
                  aria-label="Read my article on technical product leadership"
                >
                  Product Leadership
                  <HugeiconsIcon icon={ArrowRight01Icon} color="currentColor" />
                </Link>
              </Button>
            </Flex>
          </Flex>
          <Flex direction="column" justify="between" gap={{ initial: "6", sm: "8" }} width="100%">
            <Flex direction="column" gap={{ initial: "6", sm: "8" }}>
              <Box
                width="100%"
                position="relative"
                style={{
                  overflow: "hidden",
                }}
              >
                <AspectRatio ratio={16 / 10}>
                  <WebGLImageTracker
                    id="leadership-what-i-do"
                    src="/articles/product-leadership/image.jpg"
                    borderRadius={0}
                  >
                    <Image
                      as={NextImage}
                      src="/articles/product-leadership/image.jpg"
                      alt="Leadership"
                      fill
                      sizes="(max-width: 768px) 100vw, 1200px"
                      style={{ objectFit: "cover" }}
                      radius="none"
                      decoding="async"
                    />
                  </WebGLImageTracker>
                </AspectRatio>
              </Box>

              <Flex direction="column" gap="0">
                <Grid gap="0" columns={{ initial: "1", sm: "2", md: "3" }}>
                  {leadershipItems.map((item, index) => {
                    const isLastInRowSm = index % 2 === 1;
                    const isLastInRowMd = index % 3 === 2;
                    const rowSm = Math.floor(index / 2);
                    const rowMd = Math.floor(index / 3);
                    const totalRowsSm = Math.ceil(leadershipItems.length / 2);
                    const totalRowsMd = Math.ceil(leadershipItems.length / 3);
                    const isLastRowSm = rowSm === totalRowsSm - 1;
                    const isLastRowMd = rowMd === totalRowsMd - 1;

                    return (
                      <Flex
                        direction="column"
                        gap="0"
                        key={index}
                        height="100%"
                      >
                        <Flex gap="4" height="100%">
                          <Flex direction="column" gap="3" p={{ initial: "4", sm: "6" }} height="100%">
                            <Flex
                              direction="column"
                              gap="4"
                              align={{ initial: "center", sm: "start" }}
                            >
                              {getIconComponent(item.iconName)}
                              <Heading
                                size="3"
                                weight="medium"
                                align={{ initial: "center", sm: "left" }}
                              >
                                {item.title}
                              </Heading>
                            </Flex>
                            <Text
                              size="3"
                              color="gray"
                              align={{ initial: "center", sm: "left" }}
                            >
                              {item.description}
                            </Text>
                          </Flex>
                          {!isLastInRowSm && (
                            <Box
                              display={{
                                initial: "none",
                                sm: "block",
                                md: "none",
                              }}
                            >
                              <Separator
                                size="4"
                                orientation="vertical"
                                light
                              />
                            </Box>
                          )}
                          {!isLastInRowMd && (
                            <Box display={{ initial: "none", md: "block" }}>
                              <Separator
                                size="4"
                                orientation="vertical"
                                light
                              />
                            </Box>
                          )}
                        </Flex>
                        {index < leadershipItems.length - 1 && (
                          <Box display={{ initial: "block", sm: "none" }}>
                            <Separator
                              size="4"
                              orientation="horizontal"
                              light
                            />
                          </Box>
                        )}
                        {!isLastRowSm && (
                          <Box
                            display={{
                              initial: "none",
                              sm: "block",
                              md: "none",
                            }}
                          >
                            <Separator
                              size="4"
                              orientation="horizontal"
                              light
                            />
                          </Box>
                        )}
                        {!isLastRowMd && (
                          <Box display={{ initial: "none", md: "block" }}>
                            <Separator
                              size="4"
                              orientation="horizontal"
                              light
                            />
                          </Box>
                        )}
                      </Flex>
                    );
                  })}
                </Grid>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
}
