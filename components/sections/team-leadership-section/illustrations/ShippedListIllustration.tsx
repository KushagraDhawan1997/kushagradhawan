"use client";

import React from "react";
import { AnimatedList } from "@/components/magicui/animated-list";
import { IllustrationSize } from "@/components/generic/section";
import { useInView } from "react-intersection-observer";

interface ShippedListIllustrationProps {
  isMobile?: boolean;
  illustrationSize?: IllustrationSize;
  loop?: boolean;
  delay?: number;
  resetDelay?: number;
  fadeOutDuration?: number;
}

interface ShippedFeature {
  id: number;
  date: string;
  title: string;
  description: string;
}

export function ShippedListIllustration({ isMobile = false, illustrationSize = "medium", loop = true, delay = 1500, resetDelay = 1000, fadeOutDuration = 500 }: ShippedListIllustrationProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: "-100px",
    threshold: 0.1,
  });

  const shippedItems: ShippedFeature[] = [
    {
      id: 1,
      date: "2023-11-15",
      title: "Align Tool",
      description: "Precisely align multiple objects with smart snapping and distribution options",
    },
    {
      id: 2,
      date: "2023-10-22",
      title: "SVGs Tool",
      description: "Import, edit and optimize SVG files directly in the application",
    },
    {
      id: 3,
      date: "2023-09-30",
      title: "Link Sharing",
      description: "Share your designs with anyone via secure, customizable sharing links",
    },
    {
      id: 4,
      date: "2023-08-17",
      title: "3D Printing",
      description: "Export designs in formats optimized for most common 3D printers",
    },
    {
      id: 5,
      date: "2023-07-02",
      title: "Material Library",
      description: "Access a growing collection of over 500 material presets for realistic rendering",
    },
    {
      id: 6,
      date: "2023-06-15",
      title: "Cloud Storage",
      description: "Automatic cloud backups and synchronization across multiple devices",
    },
    {
      id: 7,
      date: "2023-05-20",
      title: "Export Feature",
      description: "Export designs in multiple formats including PNG, JPG, PDF with resolution options",
    },
    {
      id: 8,
      date: "2023-04-08",
      title: "Mobile Viewing",
      description: "View and present your designs on iOS and Android devices",
    },
  ];

  // Format date to more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  // Adjust the number of items shown based on illustration size
  const itemsToShow = illustrationSize === "small" ? 4 : illustrationSize === "medium" ? 6 : 8;

  return (
    <div className="w-full h-full flex items-start justify-center overflow-hidden rounded-md" ref={ref}>
      {inView ? (
        <AnimatedList delay={delay} loop={loop} resetDelay={resetDelay} fadeOutDuration={fadeOutDuration} className="w-full gap-2">
          {shippedItems.slice(0, itemsToShow).map((item) => (
            <div key={item.id} className="px-4 py-3 bg-gradient-to-bl from-card to-muted border border-border/10 rounded-md w-full text-sm flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground">{formatDate(item.date)}</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-primary">{item.title}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </AnimatedList>
      ) : (
        // Static placeholder when not in view
        <div className="w-full gap-2 flex flex-col">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="px-4 py-3 bg-gradient-to-bl from-card/30 to-muted/20 border border-border/10 rounded-md w-full h-20 opacity-30"></div>
          ))}
        </div>
      )}
    </div>
  );
}
// backdrop-blur-sm border-border/10 hover:shadow-lg transition-all duration-300 bg-gradient-to-bl from-card to-muted/10
