"use client";

/**
 * Contact Testimonial Component
 *
 * This component displays a random testimonial in the contact section.
 * It reuses the testimonial data from the hero section to avoid redundancy.
 */

import React, { useEffect, useState } from "react";
import { ContentWrapper } from "@/components/generic/ui/content-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials, type Testimonial } from "@/components/sections/hero-section/testimonials";

/**
 * ContactTestimonial component
 *
 * Displays a randomly selected testimonial in the contact section.
 * The testimonial is chosen randomly on component mount and remains
 * the same until the page is refreshed.
 *
 * Features:
 * - Reuses testimonial data from hero section
 * - Displays a short version of the testimonial
 * - Shows author information with avatar
 * - Styled consistently with the rest of the contact section
 *
 * @returns React component for the contact testimonial
 */
export function ContactTestimonial() {
  const [randomTestimonial, setRandomTestimonial] = useState<Testimonial | null>(null);

  // Set a random testimonial on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * testimonials.length);
    setRandomTestimonial(testimonials[randomIndex]);
  }, []);

  // If no testimonial is selected yet, return null
  if (!randomTestimonial) return null;

  return (
    <ContentWrapper borderLeft={true} borderRight={true} extendBorders={true} extendAmount={12} className="h-full">
      <Card className="backdrop-blur-sm border-border/10 h-full bg-gradient-to-bl from-card to-muted/10">
        <CardContent className="flex flex-col gap-4 h-full">
          <p className="text-foreground/80 text-base md:text-lg leading-relaxed flex-grow">{randomTestimonial.fullTestimonial}</p>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="text-primary">{randomTestimonial.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-sm">{randomTestimonial.author.name}</div>
              <div className="text-xs text-muted-foreground">
                {randomTestimonial.author.designation} at {randomTestimonial.author.company}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </ContentWrapper>
  );
}
