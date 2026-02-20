"use client";

import { ContactSection } from "@/components/sections/contact-section";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Separator,
  Text,
} from "@kushagradhawan/kookie-ui";
import { Footer as FooterBlock } from "@kushagradhawan/kookie-blocks";

/**
 * Footer component
 *
 * Combines the Contact section with standard footer elements like
 * copyright, links, and legal information
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box mb={{ initial: "6", sm: "9" }}>
      <ContactSection />
      <Separator size="4" light />
      <FooterBlock.Root p={{ initial: "4", sm: "8" }} gap={{ initial: "6", sm: "8" }} px={{ initial: "4", sm: "6" }}>
        <FooterBlock.Brand gap="6">
          <Avatar
            fallback="K"
            size="3"
            color="gray"
            src="/new-kushagradhawan-logo.svg"
            alt="Kushagra Dhawan"
          />
          <Flex direction="column" gap="4">
            <FooterBlock.Tagline>
              Built with{" "}
              <FooterBlock.Link
                href="https://www.hellokookie.com/"
                target="_blank"
                underline="always"
              >
                Kookie UI
              </FooterBlock.Link>
              {" + "}
              <FooterBlock.Link
                href="https://kookieblocks.com/"
                target="_blank"
                underline="always"
              >
                Kookie Blocks
              </FooterBlock.Link>
              .
            </FooterBlock.Tagline>
            <FooterBlock.Legal>
              <Text size="2" color="gray">
                © {currentYear} Kushagra Dhawan.
              </Text>
              <FooterBlock.Link href="/sitemap.xml">Sitemap</FooterBlock.Link>
            </FooterBlock.Legal>
          </Flex>
        </FooterBlock.Brand>
        <FooterBlock.Links>
          <FooterBlock.LinkGroup title="Projects">
            <FooterBlock.Link
              href="https://www.hellokookie.com/"
              target="_blank"
            >
              Kookie UI
            </FooterBlock.Link>
            <FooterBlock.Link
              href="https://kookieblocks.com/"
              target="_blank"
            >
              Kookie Blocks
            </FooterBlock.Link>
            <FooterBlock.Link
              href="https://github.com/KushagraDhawan1997/kookie-flow"
              target="_blank"
            >
              Kookie Flow
            </FooterBlock.Link>
            <FooterBlock.Link href="https://womp.com" target="_blank">
              Womp 3D
            </FooterBlock.Link>
          </FooterBlock.LinkGroup>
        </FooterBlock.Links>
      </FooterBlock.Root>
    </Box>
  );
}
