"use client";

/**
 * Startup Solutions Section Component
 *
 * This component showcases technical product leadership expertise for startups.
 * It includes a headline, description, call-to-action button, and a grid of solution cards.
 * The section uses a responsive layout with different designs for mobile and desktop.
 */

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getMonochromaticGradient } from "@/lib/gradient";
import { SectionWrapper } from "@/components/generic/ui/section-wrapper";
// import { StartupSolutionsSectionGrid, StartupSolutionsSectionDialog } from ".";
import { type Solution } from ".";
import { WhyMe } from "@/components/sections/why-me-section/WhyMe";

/**
 * StartupSolutionsSection Component
 *
 * Features:
 * - A headline that emphasizes technical depth in product leadership
 * - A descriptive subtitle framing the value proposition
 * - A call-to-action button for consulting services
 * - A bento-style grid of expertise areas with varying card sizes
 * - Clickable cards that open dialogs with expanded content
 * - Different layouts for mobile and desktop views
 * - WhyMe component showcasing key professional advantages
 *
 * @returns React component for the startup solutions section
 */
export function StartupSolutionsSection() {
  // State for managing dialog
  const [open, setOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  // Get gradient styling for headline text
  const gradientText = getMonochromaticGradient();

  /**
   * Handles opening a solution dialog
   * @param solution - The solution to display in the dialog
   */
  const handleOpenSolution = (solution: Solution) => {
    setSelectedSolution(solution);
    setOpen(true);
  };

  return (
    <SectionWrapper noBorderTop>
      <div className="max-w-7xl mx-auto px-6 grid grid-flow-row gap-16">
        {/* Title and subtitle */}
        <div className="max-w-3xl grid grid-flow-row gap-4">
          <blockquote className={`text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none pb-4 ${gradientText}`}>Technical Product Leadership.</blockquote>
          <figcaption className="text-lg text-muted-foreground font-medium">
            Bringing engineering depth to product leadership, bridging technical capabilities with strategic vision to build products that users love and engineers can actually deliver.
          </figcaption>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Button asChild variant="default" size="lg" className="w-fit">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-fit">
            <Link href="/articles/technical-product-leadership" aria-label="Read my article on technical product leadership">
              Explore technical leadership
            </Link>
          </Button>
        </div>

        {/* WhyMe component - 8 key professional advantages */}
        <div className="w-full">
          <WhyMe />
        </div>

        {/* Mobile view: stack all cards */}
        {/* <StartupSolutionsSectionGrid onOpenSolution={handleOpenSolution} isMobile={true} /> */}

        {/* Desktop/Tablet view: bento grid layout */}
        {/* <StartupSolutionsSectionGrid onOpenSolution={handleOpenSolution} /> */}

        {/* Solution Dialog for displaying detailed information */}
        {/* <StartupSolutionsSectionDialog open={open} onOpenChange={setOpen} selectedSolution={selectedSolution} /> */}
      </div>
    </SectionWrapper>
  );
}
