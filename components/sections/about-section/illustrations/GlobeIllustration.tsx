"use client";

import { Globe } from "@/components/magicui/globe";
import { useInView } from "react-intersection-observer";

export function GlobeIllustration() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: "-100px",
    threshold: 0.1,
  });

  return (
    <div className="md:h-auto h-[300px] w-full flex items-center justify-center" ref={ref}>
      {inView ? (
        <Globe
          className="my-auto"
          config={{
            width: 600,
            height: 600,
            onRender: () => {},
            devicePixelRatio: 2,
            phi: 0,
            theta: 0,
            dark: 1.0,
            scale: 1,
            diffuse: 0,
            opacity: 0.75,
            mapSamples: 12000,
            mapBrightness: 1.0,
            baseColor: [1, 1, 1],
            markerColor: [251 / 255, 100 / 255, 21 / 255],
            glowColor: [0.3, 0.6, 0.8],
            markers: [
              { location: [37.7749, -122.4194], size: 0.1 }, // San Francisco
              { location: [40.7128, -74.006], size: 0.1 }, // New York
              { location: [51.5074, -0.1278], size: 0.08 }, // London
              { location: [35.6762, 139.6503], size: 0.07 }, // Tokyo
              { location: [19.076, 72.8777], size: 0.09 }, // Mumbai
              { location: [-33.8688, 151.2093], size: 0.06 }, // Sydney
            ],
          }}
        />
      ) : (
        // Placeholder when not in view to maintain layout
        <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-full opacity-30" />
      )}
    </div>
  );
}
