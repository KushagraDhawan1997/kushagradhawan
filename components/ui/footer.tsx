"use client";

import { ContactSection } from "@/components/sections/contact-section";
import { Box, Container, Separator, Text } from "@kushagradhawan/kookie-ui";
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
        <FooterBlock.Root align="center" p="6" gap="4">
          <FooterBlock.Bottom
            direction={{ initial: "column", md: "row" }}
            justify="center"
            gap={{ initial: "4", md: "6" }}
          >
            <FooterBlock.Legal justify={{ initial: "center", md: "start" }}>
              <Text size="2" color="gray">
                Built with KookieUI.
              </Text>
            </FooterBlock.Legal>

            <FooterBlock.Nav justify="center">
              <FooterBlock.Link href="/sitemap.xml">Sitemap</FooterBlock.Link>
            </FooterBlock.Nav>

            <FooterBlock.Legal justify={{ initial: "center", md: "end" }}>
              <Text size="2" color="gray">
                © {currentYear} Kushagra Dhawan.
              </Text>
            </FooterBlock.Legal>
          </FooterBlock.Bottom>
        </FooterBlock.Root>
      </Container>
    </Box>
  );
}
