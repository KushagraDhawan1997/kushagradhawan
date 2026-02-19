"use client";

import {
  AspectRatio,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Section,
  Separator,
  Text,
} from "@kushagradhawan/kookie-ui";
import { Hero } from "@kushagradhawan/kookie-blocks";
import NextImage from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { WebGLImageTracker } from "@/components/webgl";

type Service = {
  title: string;
  description: string;
  expandedContent: string;
};

const services: Service[] = [
  {
    title: "Product Engineering Consulting",
    description: "End-to-end product strategy and execution.",
    expandedContent:
      "I work with founders and teams to define what to build, how to ship, and where to focus. That means bridging design, engineering, and business goals — owning timelines, making product decisions, and shipping alongside the team.\n\nI've done this for Womp since 2021: shaping features from concept to release, driving AI integration, and keeping a growing product coherent under pressure.",
  },
  {
    title: "Design Systems Architecture",
    description:
      "Component libraries that keep products consistent as teams grow.",
    expandedContent:
      "Token systems, primitives, patterns, accessibility, and the engineering that makes design durable in production. I built Kookie UI — a Radix fork — specifically for this: giving design direct control over the design layer so engineering can focus on application logic.\n\nThe result is faster shipping, fewer handoffs, and a product that stays consistent across releases without slowing anyone down.",
  },
  {
    title: "Developer Tooling",
    description: "Tools that help engineering teams move faster.",
    expandedContent:
      "CLI utilities, SDK design, documentation systems, and developer experience infrastructure. I build the kind of internal tools that compound — things like Kookie Blocks for shipping pages faster, or Kookie Flow for GPU-accelerated node graphs.\n\nGood tooling doesn't just save time. It changes what's possible.",
  },
  {
    title: "Prototyping & UX Systems",
    description: "Validate ideas before committing to full implementation.",
    expandedContent:
      "Rapid prototyping, interaction design, user testing, and building the UX layer that makes complex software feel simple. I sketch the simplest path to an answer, then combine design, code, and product sense to get it into someone's hands.\n\nFor Womp, this meant everything from live rendering decisions to AI chat interfaces — always testing with real users before scaling.",
  },
];

export function ServicesContent() {
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
              Services
            </Heading>
            <Separator size="4" />
          </Flex>
          <Hero.Root align="start" gap={{ initial: "6", sm: "8" }}>
            <Hero.Title
              size={{ initial: "8", sm: "9", lg: "10" }}
              weight="medium"
              align="left"

            >
              I take on select consulting projects for startups and product
              teams.
            </Hero.Title>

            <Hero.Description
              size={{ initial: "3", sm: "4" }}
              color="gray"
              align="left"
            >
              I work at the intersection of design, engineering, and product.
              Whether it&apos;s building a design system from scratch, shipping
              an AI feature, or helping a team move faster — I bring the full
              picture.
            </Hero.Description>

            <Hero.Actions gap="3">
              <Button asChild variant="solid" size="2" highContrast>
                <a
                  href="https://calendly.com/accounts-kushagradhawan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book an intro call via Calendly"
                >
                  Book a call
                  <HugeiconsIcon icon={ArrowUpRight01Icon} />
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
              id="services-hero"
              src="/articles/about-me/image.jpg"
              borderRadius={0}
            >
              <Image
                as={NextImage}
                src="/articles/about-me/image.jpg"
                alt="Services"
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
              What I offer
            </Heading>
            <Separator size="4" />
          </Flex>
          <Flex
            direction={{ initial: "column", md: "row" }}
            gap={{ initial: "6", md: "12" }}
            width="100%"
            align="stretch"
          >
            <Flex
              direction="column"
              gap={{ initial: "6", sm: "8" }}
              flexShrink="0"
              maxWidth={{ initial: "100%", md: "400px", lg: "600px" }}
              position={{ initial: "static", md: "sticky" }}
              top="96px"
              style={{ alignSelf: "flex-start" }}
            >
              <Heading
                size={{ initial: "8", sm: "9" }}
                weight="medium"
                align="left"
                color="gray"

              >
                I bring{" "}
                <Text as="span" weight="medium" highContrast>
                  design
                </Text>
                ,{" "}
                <Text as="span" weight="medium" highContrast>
                  engineering
                </Text>
                , and{" "}
                <Text as="span" weight="medium" highContrast>
                  product thinking
                </Text>{" "}
                together so your team can ship faster.
              </Heading>
              <Flex justify="start">
                <Button asChild variant="solid" size="2" highContrast>
                  <a
                    href="https://calendly.com/accounts-kushagradhawan/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book an intro call via Calendly"
                  >
                    Book a call
                    <HugeiconsIcon icon={ArrowUpRight01Icon} />
                  </a>
                </Button>
              </Flex>
            </Flex>
            <Flex direction="column" gap={{ initial: "6", sm: "8" }} width="100%">
              {services.map((service, index) => (
                <Card key={service.title} size="1" variant="soft">
                  <Flex direction="column" gap="4" p={{ initial: "4", sm: "6" }}>
                    <Flex direction="column" gap="2">
                      <Flex direction="column" align="start" gap="2">
                        <Text size="2" color="gray" weight="medium">
                          0{index + 1}
                        </Text>
                        <Heading size="5" weight="medium">
                          {service.title}
                        </Heading>
                      </Flex>
                    </Flex>
                    <Text size="3" color="gray">
                      {service.expandedContent}
                    </Text>
                  </Flex>
                </Card>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Section>
    </>
  );
}
