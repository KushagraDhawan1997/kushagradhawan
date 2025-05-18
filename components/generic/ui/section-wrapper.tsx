"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  noBorderTop?: boolean;
  noBorderBottom?: boolean;
}

/**
 * SectionWrapper - Consistent container for all major page sections
 *
 * This component provides a standardized wrapper for all portfolio sections,
 * ensuring consistent spacing, z-index management, and optional border styling.
 * It serves as the primary structural component that gives the portfolio a
 * cohesive visual rhythm and spacing pattern.
 *
 * Features:
 * - Standard vertical spacing with consistent margins
 * - Z-index management to handle stacking context
 * - Optional border styling that can be toggled for different sections
 * - Proper semantic HTML structure using section element
 *
 * All portfolio sections use this wrapper to maintain visual consistency
 * throughout the page.
 */
export function SectionWrapper({ children, className, noBorderTop = false, noBorderBottom = false, ...props }: SectionWrapperProps) {
  return (
    <section className={cn("w-full py-32 z-[999] scroll-mt-16", !noBorderTop && "border-t border-dashed border-foreground/20", !noBorderBottom && "border-b border-dashed border-foreground/20", className)} {...props}>
      {children}
    </section>
  );
}
