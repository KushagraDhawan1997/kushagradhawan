"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

export const Meteors = ({ number = 20, minDelay = 0.2, maxDelay = 1.2, minDuration = 2, maxDuration = 10, angle = 215, className }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  // Use intersection observer to detect when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: "100px",
    threshold: 0.1,
  });

  useEffect(() => {
    // Only calculate and set meteor styles if component is in view
    if (inView) {
      const styles = [...new Array(number)].map(() => ({
        "--angle": -angle + "deg",
        top: "-5%",
        left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
        animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
        animationDuration: Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) + "s",
      }));
      setMeteorStyles(styles);
    } else {
      // Clear styles when not in view to save resources
      setMeteorStyles([]);
    }
  }, [inView, number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none">
      {inView &&
        meteorStyles.map((style, idx) => (
          // Meteor Head
          <span key={idx} style={{ ...style }} className={cn("pointer-events-none absolute size-0.5 rotate-[var(--angle)] animate-meteor rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]", className)}>
            {/* Meteor Tail */}
            <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" />
          </span>
        ))}
    </div>
  );
};
