"use client";

/**
 * About Section Component
 *
 * This component serves as the primary introduction to professional capabilities and experience.
 * It includes a headline, description, call-to-action button, and a grid of capability cards.
 * The section uses a responsive layout with different designs for mobile and desktop.
 */

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getMonochromaticGradient } from "@/lib/gradient";
import { SectionWrapper } from "@/components/generic/ui/section-wrapper";
import { AboutSectionGrid, AboutSectionDialog, type Capability } from ".";

/**
 * AboutSection Component
 *
 * Features:
 * - A visually prominent headline with gradient text styling
 * - A brief paragraph that summarizes professional impact
 * - A call-to-action button linking to more detailed resume information
 * - A bento-style grid highlighting key professional capabilities with varying card sizes
 * - Clickable cards that open dialogs with expanded content
 * - Different layouts for mobile and desktop views
 *
 * @returns React component for the about section
 */
export function AboutSection() {
  // State for managing capability dialog
  const [open, setOpen] = useState(false);
  const [selectedCapability, setSelectedCapability] = useState<Capability | null>(null);

  // Get gradient styling for headline text
  const gradientText = getMonochromaticGradient();

  /**
   * Handles opening a capability dialog
   * @param capability - The capability to display in the dialog
   */
  const handleOpenCapability = (capability: Capability) => {
    setSelectedCapability(capability);
    setOpen(true);
  };

  return (
    <SectionWrapper id="about" noBorderTop>
      <div className="max-w-7xl mx-auto px-6 grid grid-flow-row gap-16">
        {/* Header with title and subtitle */}
        <div className="max-w-3xl grid grid-flow-row gap-4">
          <blockquote className={`text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none pb-4 ${gradientText}`}>Crafting experiences worth fighting for.</blockquote>
          <figcaption className="text-lg text-muted-foreground font-medium">Bridging creative vision and technical execution to deliver meaningful, user-centered experiences.</figcaption>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Button asChild variant="default" size="lg" className="w-fit">
            <Link href="/articles/building-products-that-scale" aria-label="Read my article about building products that scale">
              Read about scalable products
            </Link>
          </Button>
        </div>

        {/* Mobile view capabilities grid */}
        <AboutSectionGrid onOpenCapability={handleOpenCapability} isMobile={true} />

        {/* Desktop view capabilities grid */}
        <AboutSectionGrid onOpenCapability={handleOpenCapability} />

        {/* Dialog for displaying detailed capability information */}
        <AboutSectionDialog open={open} onOpenChange={setOpen} selectedCapability={selectedCapability} />
      </div>
    </SectionWrapper>
  );
}
