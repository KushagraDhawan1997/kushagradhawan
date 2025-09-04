"use client";

import { ContactSection } from "@/components/sections/contact-section";
import {
  Box,
  Container,
  Flex,
  Link as KookieLink,
  Text,
} from "@kushagradhawan/kookie-ui";

/**
 * Footer component
 *
 * Combines the Contact section with standard footer elements like
 * copyright, links, and legal information
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box asChild p="6">
      <footer>
        <ContactSection />

        <Container size="4">
          <Box
            style={{
              borderTop: "1px dashed var(--gray-7)",
            }}
            py="6"
          >
            <Flex
              direction={{ initial: "column", md: "row" }}
              justify="between"
              align={{ initial: "start", md: "center" }}
              gap="6"
            >
              <Text size="2" color="gray" highContrast>
                Built with KookieUI.
              </Text>

              <Text size="2" color="gray" highContrast>
                © {currentYear} Kushagra Dhawan. All rights reserved.
              </Text>

              <KookieLink href="/sitemap.xml" size="2" color="gray">
                Sitemap
              </KookieLink>
            </Flex>
          </Box>
        </Container>
      </footer>
    </Box>
  );
}
