"use client";

/**
 * Team Leadership Section Component
 *
 * This component showcases leadership approaches and achievements.
 * It includes a headline, description, call-to-action button, and a grid of approach cards.
 * The section uses a responsive layout with different designs for mobile and desktop.
 */

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getMonochromaticGradient } from "@/lib/gradient";
import { SectionWrapper } from "@/components/generic/ui/section-wrapper";
import { TeamLeadershipSectionGrid, TeamLeadershipSectionDialog, type Approach } from ".";

/**
 * TeamLeadershipSection Component
 *
 * Features:
 * - A headline emphasizing leadership that delivers results
 * - A descriptive subtitle framing the leadership impact
 * - A call-to-action button linking to detailed team building content
 * - A bento-style grid of leadership approaches with varying card sizes
 * - Clickable cards that open dialogs with expanded content
 * - Different layouts for mobile and desktop views
 *
 * @returns React component for the team leadership section
 */
export function TeamLeadershipSection() {
  // State for managing dialog
  const [open, setOpen] = useState(false);
  const [selectedApproach, setSelectedApproach] = useState<Approach | null>(null);

  // Get gradient styling for headline text
  const gradientText = getMonochromaticGradient();

  /**
   * Handles opening an approach dialog
   * @param approach - The approach to display in the dialog
   */
  const handleOpenApproach = (approach: Approach) => {
    setSelectedApproach(approach);
    setOpen(true);
  };

  return (
    <SectionWrapper id="team-leadership" noBorderTop>
      <div className="max-w-7xl mx-auto px-6 grid grid-flow-row gap-16">
        {/* Title and subtitle */}
        <div className="max-w-3xl grid grid-flow-row gap-4">
          <blockquote className={`text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none pb-4 ${gradientText}`}>Leadership That Delivers.</blockquote>
          <figcaption className="text-lg text-muted-foreground font-medium">Building high-performance teams with a focus on measurable outcomes, combining strategic vision with hands-on problem-solving.</figcaption>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Button asChild variant="default" size="lg" className="w-fit">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-fit">
            <Link href="/articles/leadership-approaches-article" aria-label="Read my article on leadership approaches for building exceptional products">
              Read about leadership approaches
            </Link>
          </Button>
        </div>

        {/* Mobile view: stack all cards */}
        <TeamLeadershipSectionGrid onOpenApproach={handleOpenApproach} isMobile={true} />

        {/* Desktop/Tablet view: bento grid layout */}
        <TeamLeadershipSectionGrid onOpenApproach={handleOpenApproach} />

        {/* Leadership approach dialog for displaying detailed information */}
        <TeamLeadershipSectionDialog open={open} onOpenChange={setOpen} selectedApproach={selectedApproach} />
      </div>
    </SectionWrapper>
  );
}
