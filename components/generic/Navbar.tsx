"use client";

/**
 * Navbar Component
 *
 * This component provides the main navigation for the site.
 * It includes the site title, navigation links, theme toggle, and a contact button.
 * The navbar is sticky and includes styling for the active page.
 */

import * as React from "react";
import { useEffect, useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

/**
 * ThemeToggle component
 *
 * Provides a button to cycle between light, dark, and system themes.
 * Uses icons to visually indicate the current theme.
 * Handles hydration by not rendering until after mount.
 *
 * @returns React component for toggling the theme
 */
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the toggle after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * Cycles through the available themes (light → dark → system)
   */
  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  // If not mounted yet, render an empty button to maintain layout
  if (!mounted) {
    return <Button variant="ghost" size="icon" className="mr-2 relative invisible" />;
  }

  return (
    <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={cycleTheme} className="mr-2 relative">
      {/* Light theme icon - visible when theme is light */}
      <Sun className={cn("size-4 transition-all absolute", theme === "light" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0")} />

      {/* Dark theme icon - visible when theme is dark */}
      <Moon className={cn("size-4 transition-all absolute", theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0")} />

      {/* System theme icon - visible when theme is system or not set */}
      <Monitor className={cn("size-4 transition-all absolute", theme === "system" || !theme ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0")} />

      {/* Screen reader text that describes the current action */}
      <span className="sr-only">{theme === "light" ? "Switch to dark theme" : theme === "dark" ? "Switch to system theme" : "Switch to light theme"}</span>
    </Button>
  );
}

/**
 * NavLink component
 *
 * Simple navigation link with active state styling
 * Uses standard browser scrolling when linking to page sections
 */
function NavLink({ href, children, ariaLabel }: { href: string; children: React.ReactNode; ariaLabel?: string }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  // For anchor links, determine if we need to prepend the homepage URL
  // when we're not on the homepage
  let linkHref = href;
  if (href.startsWith("#") && pathname !== "/") {
    linkHref = "/" + href;
  }

  return (
    <Link
      href={linkHref}
      className={cn("text-sm px-3 py-2 rounded-md transition-colors", isActive ? "text-foreground font-medium" : "text-foreground/60 hover:text-foreground hover:bg-primary/5")}
      aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
    >
      {children}
    </Link>
  );
}

/**
 * Navbar component
 *
 * Main navigation component for the site. Includes site branding,
 * navigation links, theme toggle, and contact button.
 *
 * @param props - Component props
 * @param props.className - Optional additional CSS classes
 * @returns React component for the site navigation
 */
export function Navbar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  // Get the current path to highlight active links
  const pathname = usePathname();

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-dashed border-foreground/20 bg-background/10 backdrop-blur-sm", className)} {...props}>
      <div className="w-full max-w-7xl mx-auto px-6 flex h-16 items-center justify-between">
        {/* Left side: Logo */}
        <div className="flex items-center">
          {/* Site logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Kushagra Dhawan - Homepage">
            <div className="relative w-6 h-6 overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" className="text-foreground">
                <path
                  d="M211,103.43l-70.13,28,49.47,63.61a8,8,0,1,1-12.63,9.82L128,141,78.32,204.91a8,8,0,0,1-12.63-9.82l49.47-63.61L45,103.43A8,8,0,0,1,51,88.57l69,27.61V40a8,8,0,0,1,16,0v76.18l69-27.61A8,8,0,1,1,211,103.43Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-sm font-bold">Kushagra Dhawan</span>
          </Link>
        </div>

        {/* Right side: Navigation links, theme toggle, and contact button */}
        <div className="flex items-center gap-4">
          {/* Navigation links */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="#about" ariaLabel="Learn about Kushagra Dhawan's background and experience">
              About Me
            </NavLink>
            <NavLink href="#about-womp" ariaLabel="Discover Kushagra's work at Womp">
              Womp
            </NavLink>
            <NavLink href="#team-leadership" ariaLabel="Learn about Kushagra's leadership philosophy">
              Leadership
            </NavLink>
            <NavLink href="/articles" ariaLabel="Read articles by Kushagra Dhawan">
              Articles
            </NavLink>
          </nav>

          <ThemeToggle />
          <Button size="sm" variant="outline" asChild aria-label="Contact Kushagra Dhawan">
            <Link href={pathname === "/" ? "#contact" : "/#contact"}>Get in Touch</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
