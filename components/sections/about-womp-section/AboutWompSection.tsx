"use client";

/**
 * About Womp Section Component
 *
 * This component showcases leadership experience and impact at Womp.
 * It includes a headline, description, call-to-action button, stats, and illustration grid.
 * The section uses a responsive layout with different designs for mobile and desktop.
 */

import { useState } from "react";
import { getMonochromaticGradient } from "@/lib/gradient";
import { SectionWrapper } from "@/components/generic/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { WompStats, WompIllustrationGrid, WompDialog } from ".";

/**
 * AboutWompSection Component
 *
 * Features:
 * - Headline and descriptive subtitle with gradient text styling
 * - Clear call-to-action button linking to Womp's website
 * - Stats section highlighting key metrics and accomplishments
 * - Visually engaging illustration grid for both mobile and desktop views
 * - Dialog component for displaying additional information
 *
 * @returns React component for the Womp experience section
 */
export function AboutWompSection() {
  // State for managing dialog
  const [open, setOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState<string | undefined>();
  const [dialogContent, setDialogContent] = useState<string | undefined>();

  // Get gradient styling for headline text
  const gradientText = getMonochromaticGradient();

  /**
   * Handles opening a dialog with content
   * @param title - The title for the dialog
   * @param content - The content to display in the dialog
   */
  const handleOpenDialog = (title: string, content: string) => {
    setDialogTitle(title);
    setDialogContent(content);
    setOpen(true);
  };

  return (
    <SectionWrapper id="about-womp" noBorderTop>
      <div className="max-w-7xl mx-auto px-6 grid grid-flow-row gap-16">
        {/* Title and subtitle */}
        <div className="max-w-3xl grid grid-flow-row gap-4">
          <blockquote className={`text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none pb-4 ${gradientText}`}>Leading Product & Design at Womp</blockquote>
          <figcaption className="text-lg text-muted-foreground font-medium">
            Democratizing 3D creation with a team of artists, designers, and engineers who turned our own frustrations with 3D tools into something everyone can use.
          </figcaption>
        </div>

        {/* Stats section displaying key metrics */}
        <WompStats />

        {/* Mobile view illustration grid */}
        <WompIllustrationGrid isMobile={true} />

        {/* Desktop view illustration grid */}
        <WompIllustrationGrid />

        {/* Call-to-action button */}
        <Button asChild size="lg" className="w-fit mx-auto">
          <a href="https://womp.com" target="_blank" rel="noopener noreferrer">
            Open Womp
          </a>
        </Button>

        {/* Dialog for displaying additional information */}
        <WompDialog open={open} onOpenChange={setOpen} title={dialogTitle} content={dialogContent} />
      </div>
    </SectionWrapper>
  );
}
