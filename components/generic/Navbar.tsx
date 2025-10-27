"use client";

import * as React from "react";
import { useEffect, useState, useRef, useCallback, useLayoutEffect } from "react";
import { Button, Box, Flex, Avatar, Text, IconButton, DropdownMenu, useThemeContext } from "@kushagradhawan/kookie-ui";
import { Link as KookieLink } from "@kushagradhawan/kookie-ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Monitor, Mail, Github } from "lucide-react";

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
      <DropdownMenu.Content highContrast variant="soft" align="end">
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
      <KookieLink href={linkHref} size="2" weight="regular" color="gray" aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}>
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
      size="2"
      weight={isActive ? "medium" : "regular"}
      color={isActive ? undefined : "gray"}
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

  return (
    <Box position="sticky" top="0" style={{ zIndex: 50 }} width="100%" {...props}>
      <Flex width="100%" height="64px" align="center" justify="between" px="4">
        {/* Left side: Logo */}
        <Link href="/" aria-label="Kushagra Dhawan - Homepage">
          <Flex align="center" gap="4">
            <Avatar src="/exp-logo.svg" fallback="KD" size="2" radius="full" />
            {/* <Text size="4" weight="medium">
              Kush.
            </Text> */}
          </Flex>
        </Link>

        {/* Right side: Navigation links, theme toggle and contact button */}
        <Flex align="center" gap={{ initial: "4", md: "6" }}>
          <NavLink href="/articles">Articles</NavLink>

          <Flex gap="2">
            <ThemeToggle />
            <IconButton asChild variant="ghost" highContrast>
              <Link href="https://github.com/KushagraDhawan1997/kookie-ui" target="_blank">
                <Github />
              </Link>
            </IconButton>
            <Button size="2" highContrast asChild variant="classic" aria-label="Contact Kushagra Dhawan">
              <Link href={pathname === "/" ? "#contact" : "/#contact"}>
                <Mail />
                Contact
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
