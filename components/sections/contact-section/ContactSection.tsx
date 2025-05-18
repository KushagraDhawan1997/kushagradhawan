"use client";

/**
 * Contact Section Component
 *
 * This component serves as the final call-to-action section that provides contact information.
 * It includes a headline, description, contact options, and a random testimonial.
 */

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getMonochromaticGradient } from "@/lib/gradient";
import { SectionWrapper } from "@/components/generic/ui/section-wrapper";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ContentWrapper } from "@/components/generic/ui/content-wrapper";
import { Meteors } from "@/components/magicui/meteors";
import { ContactTestimonial } from "./ContactTestimonial";
import { socialLinks, type SocialLink } from "./contactData";

/**
 * ContactSection Component
 *
 * Features:
 * - A headline that emphasizes collaboration
 * - A descriptive subtitle about consulting and speaking opportunities
 * - A 2-column layout with testimonial on left and content on right for desktop
 * - A single-column layout for mobile
 * - A randomly selected testimonial from the hero section
 * - Social media links for professional networking
 *
 * @returns React component for the contact section
 */
export function ContactSection() {
  // Get gradient styling for headline text
  const gradientText = getMonochromaticGradient();

  return (
    <SectionWrapper id="contact" className="relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop: Two column layout */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {/* Left column: Testimonial */}
          <div className="relative h-full overflow-hidden">
            {/* Meteor effect inside testimonial */}
            <ContactTestimonial />
          </div>

          {/* Right column: Content stack */}
          <div className="flex flex-col gap-2">
            {/* Title and subtitle */}
            <div className="grid grid-flow-row gap-4">
              <blockquote className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none pb-4 ${gradientText}`}>Let's connect and exchange ideas.</blockquote>
              <figcaption className="text-lg text-muted-foreground font-medium">
                Based in India and working remotely for Womp3D in the USA. I enjoy meeting like-minded professionals to discuss product design, team building, and technology trends. I'm not seeking consulting opportunities, just meaningful
                connections.
              </figcaption>
            </div>

            {/* Contact Card */}
            <ContentWrapper className="mt-12" borderLeft={true} borderRight={true} extendBorders={true} extendAmount={12}>
              <Card className="backdrop-blur-sm border-border/10 bg-gradient-to-bl from-card to-muted/10 overflow-hidden">
                <CardContent className="flex flex-col gap-4">
                  <CardTitle className="text-primary text-base font-medium text-left">Say hello</CardTitle>
                  <p className="text-foreground/70 text-sm text-left">Based in India, working remotely for Womp3D in USA. I'm always open to chat about product design, leadership, or exciting innovations</p>

                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <Button asChild size="lg">
                      <a href="mailto:hello@kushagradhawan.design">Email Me</a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="https://calendly.com/accounts-kushagradhawan/30min" target="_blank" rel="noopener noreferrer">
                        Virtual Coffee
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ContentWrapper>

            {/* Social Links Card */}
            <ContentWrapper borderLeft={true} borderRight={true} extendBorders={true} extendAmount={12}>
              <Card className="backdrop-blur-sm border-border/10 bg-gradient-to-bl from-card to-muted/10">
                <CardContent className="flex flex-col gap-4">
                  <CardTitle className="text-primary text-base font-medium text-left">Connect with me</CardTitle>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((link: SocialLink, index: number) => (
                      <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                        {link.name}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ContentWrapper>
          </div>
        </div>

        {/* Mobile Contact Layout */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {/* Title and subtitle */}
          <div className="grid grid-flow-row gap-4">
            <blockquote className={`text-4xl font-black tracking-tight leading-none pb-4 ${gradientText}`}>Let's connect and exchange ideas.</blockquote>
            <figcaption className="text-base text-muted-foreground font-medium">
              Based in India and working remotely for Womp3D in the USA. I enjoy meeting like-minded professionals to discuss product design, team building, and technology trends. I'm not seeking consulting opportunities, just meaningful
              connections.
            </figcaption>
          </div>

          {/* Email Card */}
          <ContentWrapper borderLeft={true} borderRight={true} extendBorders={true} extendAmount={12}>
            <Card className="backdrop-blur-sm border-border/10 bg-gradient-to-bl from-card to-muted/10">
              <CardContent className="flex flex-col gap-4">
                <CardTitle className="text-primary text-sm font-medium text-left">Say hello</CardTitle>
                <p className="text-foreground/70 text-sm text-left">Based in India, working remotely for Womp3D in USA. I'm always open to chat about product design, leadership, or exciting innovations</p>

                <div className="grid grid-cols-2 gap-2 py-4">
                  <Button asChild size="lg">
                    <a href="mailto:hello@kushagradhawan.design">Email</a>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <a href="https://calendly.com/accounts-kushagradhawan/30min" target="_blank" rel="noopener noreferrer">
                      Virtual Coffee
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ContentWrapper>

          {/* Social Links Card */}
          <ContentWrapper borderLeft={true} borderRight={true} extendBorders={true} extendAmount={12}>
            <Card className="backdrop-blur-sm border-border/10 bg-gradient-to-bl from-card to-muted/10">
              <CardContent className="flex flex-col gap-4">
                <CardTitle className="text-primary text-sm font-medium text-left">Connect with me</CardTitle>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link: SocialLink, index: number) => (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                      {link.name}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ContentWrapper>

          {/* Testimonial with meteors inside */}
          <div className="relative overflow-hidden">
            <ContactTestimonial />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
