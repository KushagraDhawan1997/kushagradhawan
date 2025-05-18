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
 * - A 3-column grid layout for contact options on desktop
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
      {/* Background meteors effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <Meteors number={20} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-flow-row gap-12">
        {/* Title and subtitle */}
        <div className="max-w-3xl grid grid-flow-row gap-4">
          <blockquote className={`text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none pb-4 ${gradientText}`}>Let's create something meaningful together.</blockquote>
          <figcaption className="text-lg text-muted-foreground font-medium">Get in touch if you want to discuss product strategy, design thinking, or building high-performing teams for fast-paced environments.</figcaption>
        </div>

        {/* Contact 3-Column Grid - Desktop */}
        <div
          className="hidden md:grid gap-2"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "auto auto",
            gridTemplateAreas: `
            "testimonial contact resume"
            "testimonial contact socials"
          `,
          }}
        >
          {/* Testimonial Card - Spans two rows */}
          <div className="h-full" style={{ gridArea: "testimonial" }}>
            <ContactTestimonial />
          </div>

          {/* Contact Card - Spans two rows */}
          <div className="h-full" style={{ gridArea: "contact" }}>
            <ContentWrapper borderLeft={true} borderRight={true} extendBorders={true} extendAmount={12} className="h-full">
              <Card className="backdrop-blur-sm border-border/10 h-full bg-gradient-to-bl from-card to-muted/10 overflow-hidden">
                <CardContent className="flex flex-col gap-4 h-full">
                  <CardTitle className="text-primary text-base font-medium text-left">Get in touch</CardTitle>
                  <p className="text-foreground/70 text-sm text-left">For project inquiries, consulting opportunities, or just to say hello</p>

                  <div className="grid grid-cols-2 gap-2 mt-auto">
                    <Button asChild size="lg">
                      <a href="mailto:hello@kushagradhawan.design">Email Me</a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="https://calendly.com/kushagradhawan/30min" target="_blank" rel="noopener noreferrer">
                        Schedule a Call
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ContentWrapper>
          </div>

          {/* Resume Download Card */}
          <div className="h-full" style={{ gridArea: "resume" }}>
            <ContentWrapper borderLeft={true} borderRight={true} extendBorders={true} extendAmount={12} className="h-full">
              <Card className="backdrop-blur-sm border-border/10 h-full bg-gradient-to-bl from-card to-muted/10">
                <CardContent className="flex flex-col gap-4 h-full">
                  <CardTitle className="text-primary text-base font-medium text-left">Get my resume</CardTitle>
                  <p className="text-foreground/70 text-sm text-left">Download my resume to learn more about my skills and experience</p>
                  <Button asChild size="lg" variant="outline" className="w-full group">
                    <Link href="/resume.pdf">Download Resume</Link>
                  </Button>
                </CardContent>
              </Card>
            </ContentWrapper>
          </div>

          {/* Social Links Card */}
          <div className="h-full" style={{ gridArea: "socials" }}>
            <ContentWrapper borderLeft={true} borderRight={true} extendBorders={true} extendAmount={12} className="h-full">
              <Card className="backdrop-blur-sm border-border/10 h-full bg-gradient-to-bl from-card to-muted/10">
                <CardContent className="flex flex-col gap-4 h-full">
                  <CardTitle className="text-primary text-base font-medium text-left">Connect with me</CardTitle>
                  <div className="flex flex-row gap-4">
                    {socialLinks.map((link: SocialLink, index: number) => (
                      <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors text-sm text-left">
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
        <div className="grid grid-cols-1 gap-2 md:hidden">
          {/* Email Card */}
          <ContentWrapper borderLeft={true} borderRight={true} extendBorders={true} extendAmount={12}>
            <Card className="backdrop-blur-sm border-border/10 bg-gradient-to-bl from-card to-muted/10">
              <CardContent className="flex flex-col gap-4">
                <CardTitle className="text-primary text-sm font-medium text-left">Get in touch</CardTitle>
                <p className="text-foreground/70 text-sm text-left">For project inquiries, consulting opportunities, or just to say hello</p>

                <div className="grid grid-cols-2 gap-2 py-4">
                  <Button asChild size="lg">
                    <a href="mailto:hello@kushagradhawan.design">Email</a>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="col-span-2">
                    <a href="https://calendly.com/kushagradhawan/30min" target="_blank" rel="noopener noreferrer">
                      Schedule a Call
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ContentWrapper>

          {/* Resume Card */}
          <ContentWrapper borderLeft={true} borderRight={true} extendBorders={true} extendAmount={12}>
            <Card className="backdrop-blur-sm border-border/10 bg-gradient-to-bl from-card to-muted/10">
              <CardContent className="flex flex-col gap-4">
                <CardTitle className="text-primary text-sm font-medium text-left">Get my resume</CardTitle>
                <p className="text-foreground/70 text-sm text-left">Download my resume to learn more about my skills and experience</p>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link href="/resume.pdf">Download Resume</Link>
                </Button>
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

          {/* Testimonial */}
          <ContentWrapper borderLeft={true} borderRight={true} extendBorders={true} extendAmount={12}>
            <ContactTestimonial />
          </ContentWrapper>
        </div>
      </div>
    </SectionWrapper>
  );
}
