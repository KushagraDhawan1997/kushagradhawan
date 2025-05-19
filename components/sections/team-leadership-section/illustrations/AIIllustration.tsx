"use client";

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { siOpenai, siGoogle, siGithub, siPython, siNodedotjs, siSupabase, siAmazon, siMongodb, siVercel, siTypescript, siJavascript, siReact, siVite, siNextdotjs, siFirebase } from "simple-icons/icons";
import { IllustrationSize } from "@/components/generic/section";
import { useInView } from "react-intersection-observer";

type AIIllustrationProps = {
  isMobile?: boolean;
  illustrationSize?: IllustrationSize;
};

export function AIIllustration({ isMobile = false, illustrationSize = "medium" }: AIIllustrationProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: "100px",
    threshold: 0.1,
  });

  // Determine sizes based on illustration size
  const getSizes = () => {
    switch (illustrationSize) {
      case "small":
        return { innerRadius: 45, middleRadius: 85, outerRadius: 120 };
      case "large":
        return { innerRadius: 65, middleRadius: 120, outerRadius: 175 };
      case "medium":
      default:
        return { innerRadius: 60, middleRadius: 100, outerRadius: 140 };
    }
  };

  const { innerRadius, middleRadius, outerRadius } = getSizes();

  return (
    <div className="w-full h-full relative overflow-hidden rounded-md" ref={ref}>
      {inView ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={30} radius={innerRadius} speed={1} duration={15}>
              <svg role="img" viewBox="0 0 24 24" className="text-primary/80" fill="currentColor">
                <path d={siOpenai.path} />
              </svg>
              <svg role="img" viewBox="0 0 24 24" className="text-primary/80" fill="currentColor">
                <path d={siGoogle.path} />
              </svg>
              <svg role="img" viewBox="0 0 24 24" className="text-primary/80" fill="currentColor">
                <path d={siFirebase.path} />
              </svg>
              <svg role="img" viewBox="0 0 24 24" className="text-primary/80" fill="currentColor">
                <path d={siReact.path} />
              </svg>
            </OrbitingCircles>
            <OrbitingCircles iconSize={25} radius={middleRadius} speed={1.5} reverse duration={20}>
              <svg role="img" viewBox="0 0 24 24" className="text-primary/80" fill="currentColor">
                <path d={siGithub.path} />
              </svg>
              <svg role="img" viewBox="0 0 24 24" className="text-primary/80" fill="currentColor">
                <path d={siPython.path} />
              </svg>
              <svg role="img" viewBox="0 0 24 24" className="text-primary/80" fill="currentColor">
                <path d={siJavascript.path} />
              </svg>
              <svg role="img" viewBox="0 0 24 24" className="text-primary/80" fill="currentColor">
                <path d={siVercel.path} />
              </svg>
              <svg role="img" viewBox="0 0 24 24" className="text-primary/80" fill="currentColor">
                <path d={siNextdotjs.path} />
              </svg>
            </OrbitingCircles>
            <OrbitingCircles iconSize={20} radius={outerRadius} speed={2} duration={25}>
              <svg role="img" viewBox="0 0 24 24" className="text-primary/80" fill="currentColor">
                <path d={siSupabase.path} />
              </svg>
              <svg role="img" viewBox="0 0 24 24" className="text-primary/80" fill="currentColor">
                <path d={siNodedotjs.path} />
              </svg>
              <svg role="img" viewBox="0 0 24 24" className="text-primary/80" fill="currentColor">
                <path d={siAmazon.path} />
              </svg>
              <svg role="img" viewBox="0 0 24 24" className="text-primary/80" fill="currentColor">
                <path d={siMongodb.path} />
              </svg>
              <svg role="img" viewBox="0 0 24 24" className="text-primary/80" fill="currentColor">
                <path d={siTypescript.path} />
              </svg>
              <svg role="img" viewBox="0 0 24 24" className="text-primary/80" fill="currentColor">
                <path d={siVite.path} />
              </svg>
            </OrbitingCircles>
          </div>
        </div>
      ) : (
        // Placeholder when not in view
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-full opacity-30" />
        </div>
      )}
    </div>
  );
}
