/**
 * FAQ Section Component
 *
 * This component presents frequently asked questions and answers in an accordion format.
 * It provides information about professional approach, leadership philosophy, and product development.
 */

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getMonochromaticGradient } from "@/lib/gradient";
import { SectionWrapper } from "@/components/generic/ui/section-wrapper";
import { faqs } from "./faqData";

/**
 * FAQSection Component
 *
 * Features:
 * - A headline identifying the FAQ section
 * - A descriptive subtitle inviting users to explore common questions
 * - An accordion component with expandable question/answer pairs
 * - A call-to-action button for additional questions
 * - Whitespace preservation for better readability of answers
 *
 * @returns React component for the FAQ section
 */
export function FAQSection() {
  // Get gradient styling for headline text
  const gradientText = getMonochromaticGradient();

  return (
    <SectionWrapper noBorderTop>
      <div className="max-w-7xl mx-auto px-6 grid grid-flow-row gap-16">
        {/* Title and subtitle */}
        <div className="max-w-3xl mx-auto text-center grid grid-flow-row gap-4">
          <blockquote className={`text-4xl md:text-6xl font-extrabold leading-[1.1] ${gradientText}`}>Frequently Asked Questions</blockquote>
          <p className="text-base text-muted-foreground font-medium">Common questions about my approach to product development, leadership philosophy, and working process.</p>
        </div>

        {/* Accordion with expandable FAQ items */}
        <div className="max-w-2xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-foreground/80 text-base whitespace-pre-line">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Call-to-action button */}
        <Button asChild variant="outline" size="lg" className="mx-auto">
          <Link href="#contact">Have Another Question?</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
