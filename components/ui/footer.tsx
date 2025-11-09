"use client";

import { ContactSection } from "@/components/sections/contact-section";
import { Box, Container, Flex, Link as KookieLink, Text, Tooltip, Image } from "@kushagradhawan/kookie-ui";

/**
 * Footer component
 *
 * Combines the Contact section with standard footer elements like
 * copyright, links, and legal information
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box asChild pt="6">
      <footer>
        <ContactSection />

        <Container size="4">
          <Flex
            direction="column"
            align="center"
            width="100%"
            style={{
              borderTop: "1px dashed var(--gray-7)",
            }}
            pt="6"
            px={{ initial: "4", sm: "6" }}
            gap="9"
          >
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
            <Box
            // position="absolute" bottom="0" style={{ zIndex: -1 }}
            >
              <Tooltip
                content={
                  <span style={{ display: "block", textAlign: "center", maxWidth: 240 }}>Say hello to Kookie, my inspiration for all things Kookie!</span>
                }
              >
                <Image src="/kookie-crop.png" alt="KookieUI" maxWidth="240px" style={{ backgroundPosition: "bottom" }} />
              </Tooltip>
            </Box>
          </Flex>
        </Container>
      </footer>
    </Box>
  );
}
