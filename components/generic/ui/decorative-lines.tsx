"use client";

import React from "react";

/**
 * DecorativeLines - Fixed vertical dashed lines that provide visual structure
 *
 * This component adds fixed vertical dashed lines on both sides of the content,
 * creating visual structure and helping to frame the site content within a
 * consistent width. The lines remain fixed while scrolling, providing a
 * persistent visual guideline.
 *
 * Features:
 * - Fixed position that stays in place while scrolling
 * - Dashed border styling that matches section dividers
 * - Accessibility attributes to ensure screen readers ignore decorative elements
 * - Positioned to align with the max-width of the main content
 *
 * This component is included in the root layout and provides subtle visual
 * structure to the entire portfolio site.
 */
export function DecorativeLines() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Content container reference - invisible but helps position the lines */}
      <div className="fixed top-0 bottom-0 left-0 right-0 mx-auto w-full max-w-7xl px-6">
        {/* Left vertical line with simple dashed border */}
        <div className="absolute top-0 bottom-0 left-6 w-px h-full border-l border-dashed border-foreground/20"></div>

        {/* Right vertical line with simple dashed border */}
        <div className="absolute top-0 bottom-0 right-6 w-px h-full border-r border-dashed border-foreground/20"></div>
      </div>
    </div>
  );
}
