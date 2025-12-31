"use client";

import { ContactSection } from "@/components/sections/contact-section";
import { Box, Container, Flex, Link as KookieLink, Text, Tooltip, Image, Separator } from "@kushagradhawan/kookie-ui";

/**
 * Footer component
 *
 * Combines the Contact section with standard footer elements like
 * copyright, links, and legal information
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Box mb="9">
        <ContactSection />
        <Separator size="4" light />
        <Container size="4" pt="4">
          <Flex direction="column" align="center" width="100%" px={{ initial: "4", sm: "6" }} gap="9">
            <Flex
              width="100%"
              direction={{ initial: "column", md: "row" }}
              justify="center"
              align={{ initial: "start", md: "center" }}
              gap={{ initial: "4", sm: "6" }}
            >
              <Text style={{ flex: 1, width: "100%" }} size="2" color="gray" highContrast align={{ initial: "center", sm: "left" }}>
                Built with KookieUI.
              </Text>

              <KookieLink style={{ flex: 1, width: "100%", textAlign: "center" }} href="/sitemap.xml" size="2" color="gray">
                Sitemap
              </KookieLink>

              <Text style={{ flex: 1, width: "100%" }} size="2" color="gray" highContrast align={{ initial: "center", sm: "right" }}>
                © {currentYear} Kushagra Dhawan. All rights reserved.
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </footer>
  );
}
