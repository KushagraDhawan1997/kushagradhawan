"use client";

/**
 * Hero Section Component
 *
 * This component serves as the primary hero section of the portfolio.
 * It displays a bold headline, subtitle, call-to-action button, and a grid of testimonials.
 * The testimonials are displayed in a bento-style grid layout on desktop/tablet
 * and as a single column on mobile devices.
 *
 * The component uses:
 * - Testimonial data from a separate data file for clean organization
 * - Dialog component for detailed testimonial display
 * - Responsive layout with different designs for mobile and desktop
 * - Gradient text styling for visual appeal
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getMonochromaticGradient } from "@/lib/gradient";
import { SectionWrapper } from "@/components/generic/ui/section-wrapper";
import { testimonials, type Testimonial } from "./testimonials";
import { TestimonialCard } from "./TestimonialCard";
import { TestimonialDialog } from "./TestimonialDialog";

/**
 * HeroSection Component
 *
 * Features:
 * - A bold headline statement with gradient text styling
 * - A subtitle identifying professional role
 * - A bento-style grid of testimonials with strategic sizing
 * - A call-to-action button
 * - Responsive layout for different screen sizes
 *
 * Layout design:
 * - Desktop: Asymmetrical grid pattern with varying card sizes
 * - Mobile: Single column stack of all testimonial cards
 *
 * @returns React component for the hero section
 */
export function HeroSection() {
  // State for managing testimonial dialog
  const [open, setOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  // Get gradient styling for headline text
  const gradientText = getMonochromaticGradient();

  /**
   * Handles opening a testimonial dialog
   * @param testimonial - The testimonial to display in the dialog
   */
  const handleOpenTestimonial = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setOpen(true);
  };

  return (
    <SectionWrapper noBorderTop>
      {/* Hero content - title and testimonials */}
      <div className="max-w-7xl mx-auto px-6 grid grid-flow-row gap-16">
        {/* Title and subtitle section */}
        <div className="max-w-5xl grid grid-flow-row gap-4">
          <blockquote className={`text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.8] pb-6 ${gradientText}`}>I build products people love.</blockquote>
          <figcaption className="text-lg text-muted-foreground font-medium">Product & Design Lead</figcaption>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Button asChild variant="default" size="lg" className="w-fit">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-fit">
            <Link href="/articles/about-me" aria-label="Read more about Kushagra Dhawan's background and experience">
              Read my profile
            </Link>
          </Button>
        </div>

        {/* Mobile view: stack all cards */}
        <div className="grid grid-cols-1 gap-2 md:hidden">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} onClick={handleOpenTestimonial} isMobile={true} />
          ))}
        </div>

        {/* Desktop/Tablet view: bento grid layout */}
        <div
          className="hidden md:grid gap-2"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "auto auto auto",
            gridTemplateAreas: `
            "t7 t2 t3"
            "t1 t4 t3"
            "t1 t5 t6"
          `,
          }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} style={{ gridArea: testimonial.gridArea }}>
              <TestimonialCard testimonial={testimonial} onClick={handleOpenTestimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Dialog for displaying full testimonials */}
      <TestimonialDialog open={open} onOpenChange={setOpen} testimonial={selectedTestimonial} />
    </SectionWrapper>
  );
}
