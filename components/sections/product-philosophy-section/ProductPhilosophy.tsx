"use client";

import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getMonochromaticGradient } from "@/lib/gradient";
import { SectionWrapper } from "@/components/generic/ui/section-wrapper";
import { ContentWrapper } from "@/components/generic/ui/content-wrapper";
import { cn } from "@/lib/utils";
import { Meteors } from "@/components/magicui/meteors";
import { principles } from "./philosophyData";
import { ChevronDownIcon } from "lucide-react";

/**
 * ProductPhilosophy - A showcase of the product methodology and guiding principles
 *
 * This section presents the core methodologies that guide product development approach,
 * structured as a list of principles on the left and expanded content on the right.
 * When a principle is clicked, its detailed content is displayed in the right panel.
 *
 * Features:
 * - Interactive list of methodologies in the left sidebar
 * - Detailed content displayed in the right panel
 * - Responsive design that adapts to different screen sizes
 * - Visual highlighting of the active methodology
 */

export function ProductPhilosophy() {
  const [activePrinciple, setActivePrinciple] = useState(principles[0]);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const gradientText = getMonochromaticGradient();

  const toggleMobileExpand = (title: string) => {
    if (expandedMobile === title) {
      setExpandedMobile(null);
    } else {
      setExpandedMobile(title);
    }
  };

  return (
    <SectionWrapper noBorderTop className="relative z-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <Meteors number={20} angle={235} maxDuration={10} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-flow-row gap-16">
        <div className="max-w-3xl grid grid-flow-row gap-4">
          <blockquote className={`text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none pb-4 ${gradientText}`}>Product methodologies that drive results.</blockquote>
          <figcaption className="text-lg text-muted-foreground font-medium">Practical approaches to product development that balance user needs, technical possibilities, and business goals.</figcaption>
        </div>

        <Button asChild variant="default" size="lg" className="w-fit">
          <Link href="/articles/product-philosophy">Read My Product Philosophy</Link>
        </Button>

        {/* Mobile view: accordion-like stacked list */}
        <div className="block md:hidden space-y-2">
          {principles.map((principle) => (
            <ContentWrapper key={principle.title} borderLeft={true} borderRight={true} extendBorders={true} extendAmount={24}>
              <Card className="backdrop-blur-sm border-border/10 hover:shadow-lg transition-all duration-300 bg-gradient-to-bl from-card to-muted/10">
                <CardContent className="flex flex-col gap-3">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleMobileExpand(principle.title)}>
                    <CardTitle className="text-primary text-base font-medium">{principle.title}</CardTitle>
                    <ChevronDownIcon className={cn("h-5 w-5 text-muted-foreground transition-transform duration-200", expandedMobile === principle.title ? "transform rotate-180" : "")} />
                  </div>
                  <p className="text-foreground/80 text-base">{principle.description}</p>
                  {expandedMobile === principle.title && (
                    <div className="mt-4">
                      <div className="h-px bg-border/50 w-full my-3"></div>
                      <p className="text-foreground/80 text-base whitespace-pre-line">{principle.expandedContent}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </ContentWrapper>
          ))}
        </div>

        {/* Desktop view: sidebar + content panel */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-[360px_1fr] gap-2">
          {/* Left sidebar with principles list */}
          <ContentWrapper borderLeft={true} borderRight={true} extendBorders={true} extendAmount={12}>
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className={cn("cursor-pointer p-4 transition-all duration-200", "border-b border-border/50", principle.title === activePrinciple.title ? "bg-primary/5" : "hover:bg-primary/5")}
                onClick={() => setActivePrinciple(principle)}
              >
                <h3 className={cn("text-sm font-medium mb-1", principle.title === activePrinciple.title ? "text-primary" : "text-foreground/80")}>{principle.title}</h3>
                <p className="text-sm text-foreground/60">{principle.description}</p>
              </div>
            ))}
          </ContentWrapper>

          {/* Right content panel */}
          <ContentWrapper className="h-full relative" borderLeft={true} borderRight={true} borderTop={true} extendBorders={true} extendAmount={12}>
            <Card className="h-full backdrop-blur-sm border-border/10 bg-gradient-to-bl from-card/50 to-muted/40 relative overflow-hidden">
              <CardContent className="h-full">
                <h2 className="text-primary text-base font-medium mb-4 relative z-10">{activePrinciple.title}</h2>
                <p className="text-foreground/70 text-base whitespace-pre-line">{activePrinciple.expandedContent}</p>
              </CardContent>
            </Card>
          </ContentWrapper>
        </div>
      </div>
    </SectionWrapper>
  );
}
