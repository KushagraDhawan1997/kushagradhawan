"use client";

import { ContactSection } from "@/components/sections/contact-section";
import { Avatar, Box, Container, Separator, Text } from "@kushagradhawan/kookie-ui";
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
    <Box mb="9">
      <ContactSection />
      <Separator size="4" light />
      <Container size="4">
        <FooterBlock.Root p="8" gap="8" px={{ initial: "4", sm: "6" }}>
          <FooterBlock.Main>
            <FooterBlock.Brand gap="4">
              <Avatar
                fallback="K"
                size="3"
                color="gray"
                src="/kushagra-logo.svg"
              />
              <FooterBlock.Tagline>
                Built with KookieUI.
              </FooterBlock.Tagline>
              <FooterBlock.Legal>
                <Text size="2" color="gray">
                  © {currentYear} Kushagra Dhawan.
                </Text>
                <FooterBlock.Link href="/sitemap.xml">Sitemap</FooterBlock.Link>
              </FooterBlock.Legal>
            </FooterBlock.Brand>
            <FooterBlock.Links>
              <FooterBlock.LinkGroup title="Projects">
                <FooterBlock.Link href="https://womp.com" target="_blank">
                  Womp 3D
                </FooterBlock.Link>
                <FooterBlock.Link href="https://www.hellokookie.com/" target="_blank">
                  Kookie UI
                </FooterBlock.Link>
                <FooterBlock.Link href="https://blocks.hellokookie.com/" target="_blank">
                  Kookie Blocks
                </FooterBlock.Link>
              </FooterBlock.LinkGroup>
            </FooterBlock.Links>
          </FooterBlock.Main>
        </FooterBlock.Root>
      </Container>
    </Box>
  );
}
