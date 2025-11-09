"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Button, Box, Flex, Avatar, DropdownMenu, useThemeContext, IconButton, Link as KookieLink } from "@kushagradhawan/kookie-ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Monitor, Mail, ArrowRight, Check } from "lucide-react";
import { socialLinks, type SocialLink } from "@/components/sections/contact-section/contactData";

/**
 * ThemeToggle Component
 *
 * A dropdown menu that allows switching between system, light, and dark themes
 * using KookieUI's theme context. Persists theme choice in localStorage.
 *
 * @returns React component for theme switching
 */
function ThemeToggle() {
  const { appearance, onAppearanceChange } = useThemeContext();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"system" | "light" | "dark">("system");

  // Only render after mounting to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    if (!mounted) return;

    const savedTheme = localStorage.getItem("kookie-theme") as "system" | "light" | "dark" | null;

    if (savedTheme) {
      setCurrentTheme(savedTheme);
      if (savedTheme === "system") {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        onAppearanceChange(prefersDark ? "dark" : "light");
      } else {
        onAppearanceChange(savedTheme);
      }
    } else {
      // Default to system preference
      setCurrentTheme("system");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      onAppearanceChange(prefersDark ? "dark" : "light");
      localStorage.setItem("kookie-theme", "system");
    }
  }, [mounted, onAppearanceChange]);

  const handleThemeChange = (theme: "system" | "light" | "dark") => {
    setCurrentTheme(theme);
    localStorage.setItem("kookie-theme", theme);

    if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      onAppearanceChange(prefersDark ? "dark" : "light");
    } else {
      onAppearanceChange(theme);
    }
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return <div style={{ width: "40px", height: "40px" }} />;
  }

  const getThemeIcon = () => {
    switch (currentTheme) {
      case "light":
        return <Sun />;
      case "dark":
        return <Moon />;
      case "system":
      default:
        return <Monitor />;
    }
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton variant="ghost" highContrast size="2" aria-label="Theme selector">
          {getThemeIcon()}
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content size="2" highContrast variant="soft" align="end">
        <DropdownMenu.Item onClick={() => handleThemeChange("system")}>
          <Flex align="center" gap="2">
            <Monitor />
            System
          </Flex>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => handleThemeChange("light")}>
          <Flex align="center" gap="2">
            <Sun />
            Light
          </Flex>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => handleThemeChange("dark")}>
          <Flex align="center" gap="2">
            <Moon />
            Dark
          </Flex>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

/**
 * NavLink Component
 *
 * A navigation link that highlights when active and provides proper accessibility.
 * Uses standard browser scrolling when linking to page sections
 */
function NavLink({ href, children, ariaLabel }: { href: string; children: React.ReactNode; ariaLabel?: string }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Only render after mounting to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle anchor links on the same page
  const linkHref = href.startsWith("#") ? `/${pathname}${href}` : href;

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <KookieLink href={linkHref} size="2" weight="medium" highContrast aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}>
        <Flex align="center" gap="2">
          {children}
        </Flex>
      </KookieLink>
    );
  }

  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <KookieLink
      href={linkHref}
      size="3"
      weight="medium"
      highContrast
      underline={isActive ? "always" : "none"}
      aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
    >
      <Flex align="center" gap="2">
        {children}
      </Flex>
    </KookieLink>
  );
}

/**
 * Navbar Component
 *
 * The main navigation component that provides:
 * - Site logo and branding
 * - Navigation links to different sections
 * - Theme toggle functionality
 * - Contact button
 * - Responsive design considerations
 *
 * @param className - Additional CSS classes for styling
 * @param props - Additional HTML attributes
 * @returns React component for the site navigation
 */
export function Navbar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  // Get the current path to highlight active links
  const pathname = usePathname();
  const [emailCopied, setEmailCopied] = useState(false);

  // Copy email to clipboard
  const handleCopyEmail = async () => {
    const email = "hello@kushagradhawan.design";
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <Box position="sticky" top="0" style={{ zIndex: 50 }} width="100%" {...props}>
      <Flex width="100%" height="64px" align="center" justify="between" px="4">
        {/* Left side: Logo */}
        <Link href="/" aria-label="Kushagra Dhawan - Homepage">
          <Flex align="center" gap="4">
            <Avatar src="/kushagra-logo.svg" fallback="KD" size="2" radius="full" />
            {/* <Text size="4" weight="medium">
              Kush.
            </Text> */}
          </Flex>
        </Link>

        {/* Right side: Navigation links, theme toggle and contact button */}
        <Flex align="center" gap={{ initial: "4", md: "6" }}>
          <Flex gap="6" align="center">
            {/* Social media links */}
            {/* <Flex gap="4" wrap="wrap">
              {socialLinks.map((link: SocialLink, index: number) => (
                <KookieLink key={index} href={link.href} target="_blank" size="3" highContrast weight="medium">
                  {link.name}
                </KookieLink>
              ))}
            </Flex> */}

            {/* Contact buttons */}
            <Flex gap="4" align="center">
              <NavLink href="/articles">Articles</NavLink>
              <Button size="3" asChild variant="solid" highContrast>
                <Link
                  href="/#contact"
                  scroll={false}
                  onClick={(e) => {
                    // If we're not on the home page, let the navigation happen first
                    if (pathname !== "/") {
                      return;
                    }
                    // If we're on the home page, prevent default and scroll manually
                    e.preventDefault();
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView();
                    }
                  }}
                >
                  Contact
                  {/* <ArrowRight /> */}
                </Link>
              </Button>
              {/* <Button size="2" variant="soft" highContrast onClick={handleCopyEmail}>
                {emailCopied ? <Check /> : <Mail />}
                {emailCopied ? "Copied" : "Copy Email"}
              </Button> */}
              <ThemeToggle />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
