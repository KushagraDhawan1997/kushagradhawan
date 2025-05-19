"use client";

import React, { ReactNode } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ContentWrapper } from "@/components/generic/ui/content-wrapper";
import { cn } from "@/lib/utils";

export type IllustrationSize = "small" | "medium" | "large";

export interface StandardSectionCardProps<T = any> {
  /** Title displayed at the top of the card */
  title: string;

  /** Short description text displayed below the title */
  description: string;

  /** Optional illustration component to render */
  illustration?: ReactNode;

  /** Size of illustration if provided */
  illustrationSize?: IllustrationSize;

  /** Data item associated with this card (for onClick handling) */
  item: T;

  /** Click handler for the card */
  onClick: (item: T) => void;

  /** Whether this card is being rendered in mobile view */
  isMobile?: boolean;

  /** Optional additional class names */
  className?: string;

  /** Whether to use special background for this card */
  useSpecialBackground?: boolean;

  /** Optional background component (for special backgrounds) */
  backgroundComponent?: ReactNode;
}

export function StandardSectionCard<T>({ title, description, illustration, illustrationSize = "medium", item, onClick, isMobile = false, className, useSpecialBackground = false, backgroundComponent }: StandardSectionCardProps<T>) {
  // Helper to determine illustration height based on size
  const getIllustrationHeight = () => {
    // Different heights for mobile vs desktop
    if (isMobile) {
      switch (illustrationSize) {
        case "small":
          return "h-[160px] sm:h-[160px] md:h-[160px] lg:h-[160px]";
        case "medium":
          return "h-[320px] sm:h-[280px] md:h-[280px] lg:h-[320px]";
        case "large":
          return "h-[480px] sm:h-[320px] md:h-[320px] lg:h-[480px]";
      }
    } else {
      switch (illustrationSize) {
        case "small":
          return "h-[160px]";
        case "medium":
          return "h-[320px]";
        case "large":
          return "h-[480px]";
      }
    }
  };

  // Base card content
  const cardContent = (
    <CardContent className="flex flex-col gap-4 h-full">
      <CardTitle className="text-primary text-base font-medium">{title}</CardTitle>
      <p className="text-foreground/80 text-base">{description}</p>

      {/* Only render illustration if provided */}
      {illustration && <div className={cn("mt-auto w-full relative flex", getIllustrationHeight())}>{illustration}</div>}
    </CardContent>
  );

  // Wrap with ContentWrapper and onClick handler
  return (
    <ContentWrapper borderLeft={true} borderRight={true} extendBorders={true} extendAmount={12} className={!isMobile ? "h-full" : "sm:h-full"}>
      <div className={cn("group cursor-pointer", !isMobile ? "h-full" : "sm:h-full")} onClick={() => onClick(item)}>
        {useSpecialBackground ? (
          <Card className={cn("backdrop-blur-sm border-border/10 hover:shadow-lg transition-all duration-300 relative z-0 bg-transparent", !isMobile ? "h-full" : "sm:h-full", className)}>
            {backgroundComponent && <div className="absolute inset-0 -z-10 w-full h-full">{backgroundComponent}</div>}
            {cardContent}
          </Card>
        ) : (
          <Card className={cn("backdrop-blur-sm border-border/10 hover:shadow-lg transition-all duration-300 bg-gradient-to-bl from-card to-muted/10 flex flex-col", !isMobile ? "h-full" : "sm:h-full", className)}>{cardContent}</Card>
        )}
      </div>
    </ContentWrapper>
  );
}
