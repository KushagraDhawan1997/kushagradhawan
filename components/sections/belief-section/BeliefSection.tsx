"use client";

import { SectionWrapper } from "@/components/generic/ui/section-wrapper";
import { getMonochromaticGradient, getBlueGradient } from "@/lib/gradient";
import { LampEffect } from "@/components/ui/lamp";

/**
 * BeliefSection - Displays a personal belief regarding AI and product development
 *
 * This component renders the author's perspective on leveraging AI
 * in product development and how it changes competitive dynamics.
 */
export function BeliefSection() {
  const gradientText = getMonochromaticGradient();
  const blueGradient = getBlueGradient();

  return (
    <SectionWrapper noBorderTop className="relative overflow-hidden z-0">
      {/* Lamp positioned at the absolute top of section with negative margin to ensure no gap */}
      {/* <div className="absolute top-0 left-0 right-0 h-40 -z-0">
        <LampEffect className="opacity-100" />
      </div> */}

      <div className="max-w-7xl mx-auto px-6 z-10">
        {/* Content with just enough space for the lamp effect */}
        <blockquote className={`max-w-4xl text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none pb-2 ${gradientText}`}>
          I build better products by leveraging <span className={blueGradient}>AI</span>. Modern tools and APIs like <span className={blueGradient}>AI SDK</span> have transformed development speed. The differentiator today isn't{" "}
          <span className={blueGradient}>large-scale tech</span>—it's having the right idea and executing it well. <span className={blueGradient}>Speed</span> matters even more now, but it must pair with sound judgment. Knowing what to
          build quickly creates the real <span className={blueGradient}>competitive advantage</span>.
        </blockquote>
      </div>
    </SectionWrapper>
  );
}
