"use client";

import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Image,
  Section,
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
    description:
      "End-to-end product strategy and execution.",
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
    description:
      "Tools that help engineering teams move faster.",
    expandedContent:
      "CLI utilities, SDK design, documentation systems, and developer experience infrastructure. I build the kind of internal tools that compound — things like Kookie Blocks for shipping pages faster, or Kookie Flow for GPU-accelerated node graphs.\n\nGood tooling doesn't just save time. It changes what's possible.",
  },
  {
    title: "Prototyping & UX Systems",
    description:
      "Validate ideas before committing to full implementation.",
    expandedContent:
      "Rapid prototyping, interaction design, user testing, and building the UX layer that makes complex software feel simple. I sketch the simplest path to an answer, then combine design, code, and product sense to get it into someone's hands.\n\nFor Womp, this meant everything from live rendering decisions to AI chat interfaces — always testing with real users before scaling.",
  },
];

export function ServicesContent() {
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
                  src="/new-kushagradhawan-logo.svg"
                />
              </Hero.Meta>

              <Hero.Title>
                I take on select consulting projects for startups and product
                teams.
              </Hero.Title>

              <Hero.Description color="gray">
                I work at the intersection of design, engineering, and product.
                Whether it&apos;s building a design system from scratch,
                shipping an AI feature, or helping a team move faster — I bring
                the full picture.
              </Hero.Description>

              <Hero.Actions>
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
                  id="services-hero"
                  src="/articles/about-me/image.jpg"
                  borderRadius={16}
                >
                  <Image
                    as={NextImage}
                    src="/articles/about-me/image.jpg"
                    alt="Services"
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

      <Section>
        <Container size="4">
          <Flex
            direction="column"
            gap="9"
            py="6"
            px={{ initial: "4", sm: "6" }}
            position="relative"
          >
            <Flex direction="column" align="center" gap="6">
              <Text size="3" color="gray">What I offer</Text>
              <Heading size="8" weight="medium" align="center" color="gray">
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
            </Flex>

            <Flex direction="column" gap="8">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  size="1"
                  variant="soft"
                  style={{
                    position: "sticky",
                    top: `${100 + index * 0}px`,
                  }}
                >
                  <Flex direction="column" gap="4" p="6">
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

                    <Text size="4" color="gray">
                      {service.expandedContent}
                    </Text>
                  </Flex>
                </Card>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Section>

      <Section>
        <Container size="4">
          <Flex
            direction="column"
            gap="6"
            align="center"
            py="6"
            px={{ initial: "4", sm: "6" }}
          >
            <Heading align="center" size="8" weight="medium">
              Interested in working together?
            </Heading>
            <Text align="center" size="4" color="gray">
              I&apos;m available for new consulting engagements. Let&apos;s talk
              about what you&apos;re building.
            </Text>
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
        </Container>
      </Section>
    </>
  );
}
