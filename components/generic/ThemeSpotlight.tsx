"use client";

/**
 * ThemeSpotlight Component
 *
 * A component that renders a theme-aware animated spotlight effect.
 * This component handles both the SVG rendering and the positioning container.
 *
 * Features:
 * - Changes fill color based on the current theme
 * - Handles its own positioning and overflow constraints
 * - Properly layered behind content but in front of background elements
 * - Prevents capturing pointer events
 */

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Spotlight } from "../ui/spotlight";
import { cn } from "@/lib/utils";

type ThemeSpotlightProps = {
  className?: string;
  lightFill?: string;
  darkFill?: string;
  containerClassName?: string;
};

export const ThemeSpotlight = ({ className, lightFill = "white", darkFill = "white", containerClassName }: ThemeSpotlightProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const fill = !mounted ? "transparent" : isDark ? darkFill : lightFill;

  return (
    <div className={cn("fixed -z-10 w-full h-full overflow-hidden pointer-events-none", containerClassName)}>
      <Spotlight className={className} fill={fill} />
    </div>
  );
};
