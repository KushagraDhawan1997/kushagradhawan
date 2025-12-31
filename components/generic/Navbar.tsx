"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Button, Box, Flex, Avatar, DropdownMenu, useThemeContext, IconButton, Link as KookieLink } from "@kushagradhawan/kookie-ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Monitor, Mail, ArrowRight, Check } from "lucide-react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

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
      <Flex align="center" gap="2">
        <KookieLink href={linkHref} size="2" highContrast aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}>
          {children}
        </KookieLink>
      </Flex>
    );
  }

  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Flex align="center" gap="2">
      <KookieLink
        href={linkHref}
        size="2"
        underline={isActive ? "always" : "none"}
        aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
      >
        {children}
      </KookieLink>
    </Flex>
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
  // const searchParams = useSearchParams();
  // const router = useRouter();
  const [emailCopied, setEmailCopied] = useState(false);

  // Get view mode from URL params, default to "professional"
  // const viewMode = (searchParams.get("view") as "professional" | "personal") || "professional";

  // const handleViewModeChange = (value: "professional" | "personal") => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   if (value === "professional") {
  //     params.delete("view"); // Remove param for default value
  //   } else {
  //     params.set("view", value);
  //   }
  //   router.push(`${pathname}${params.toString() ? `?${params.toString()}` : ""}`);
  // };

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
    <Box
      position="fixed"
      top="0"
      style={{
        zIndex: 50,
        backgroundColor: "var(--color-background)",
      }}
      width="100%"
      {...props}
    >
      <Flex width="100%" height="64px" gap="4" align="center" justify="between" px="4">
        {/* Left side: Logo */}
        <Flex width="100%" gap="4">
          <Link href="/" aria-label="Kushagra Dhawan - Homepage">
            <Flex align="center" gap="4">
              <Avatar src="/kushagra-logo.svg" fallback="KD" alt="Kushagra Dhawan" size="2" radius="full" />
            </Flex>
          </Link>
        </Flex>

        {/* Center */}
        {/* <Flex width="100%" justify="center" display={{ initial: "none", md: "flex" }}>
          <SegmentedControl.Root size="2" value={viewMode} onValueChange={(value) => handleViewModeChange(value as "professional" | "personal")}>
            <SegmentedControl.Item value="professional">Work</SegmentedControl.Item>
            <SegmentedControl.Item value="personal">Personal</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Flex> */}

        {/* Right side: Navigation links, theme toggle and contact button */}
        <Flex justify="end" width="100%" align="center" gap={{ initial: "4", md: "6" }}>
          {/* Contact buttons */}
          <Flex gap="4" align="center">
            <NavLink href="/articles">Articles</NavLink>
            <ThemeToggle />
            <Button size="2" asChild variant="solid" highContrast>
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
                <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={1.5} />
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
