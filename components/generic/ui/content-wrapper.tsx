"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ContentWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  borderTop?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  extendBorders?: boolean;
  extendAmount?: number;
}

/**
 * ContentWrapper - Secondary container for content blocks within sections
 *
 * This component provides a standardized wrapper for content blocks that
 * need additional visual distinction within a section. Unlike SectionWrapper,
 * this component doesn't have vertical margin spacing and serves as an
 * inner content container.
 *
 * Features:
 * - Configurable dashed borders on any edge (top, right, bottom, left)
 * - Option to extend borders beyond the container edges (overhang effect)
 * - Adjustable extension amount for border overhangs
 * - No built-in vertical margins (controlled by parent grid)
 * - Consistent styling with the overall design system
 *
 * Used primarily in the VisualPortfolio section to add visual distinction
 * to the featured project cards.
 */
export function ContentWrapper({ children, className, borderTop = true, borderRight = false, borderBottom = true, borderLeft = false, extendBorders = false, extendAmount = 12, ...props }: ContentWrapperProps) {
  // Check if className contains any width-related classes
  const hasWidthClass = className?.includes("w-") || className?.includes("width");

  return (
    <div
      className={cn(
        "relative p-0.25",
        // Only apply w-full if no width class is provided
        !hasWidthClass && "w-full",
        !extendBorders && borderTop && "border-t border-dashed border-foreground/20",
        !extendBorders && borderRight && "border-r border-dashed border-foreground/20",
        !extendBorders && borderBottom && "border-b border-dashed border-foreground/20",
        !extendBorders && borderLeft && "border-l border-dashed border-foreground/20",
        className
      )}
      {...props}
    >
      {extendBorders && borderTop && <div className="absolute top-0 pointer-events-none border-t border-dashed border-foreground/20" style={{ left: `-${extendAmount}px`, right: `-${extendAmount}px` }} />}
      {extendBorders && borderRight && <div className="absolute right-0 pointer-events-none border-r border-dashed border-foreground/20" style={{ top: `-${extendAmount}px`, bottom: `-${extendAmount}px` }} />}
      {extendBorders && borderBottom && <div className="absolute bottom-0 pointer-events-none border-b border-dashed border-foreground/20" style={{ left: `-${extendAmount}px`, right: `-${extendAmount}px` }} />}
      {extendBorders && borderLeft && <div className="absolute left-0 pointer-events-none border-l border-dashed border-foreground/20" style={{ top: `-${extendAmount}px`, bottom: `-${extendAmount}px` }} />}
      {children}
    </div>
  );
}
