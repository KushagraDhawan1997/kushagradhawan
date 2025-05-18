"use client";

import React, { useState, useEffect } from "react";
import { Compare } from "@/components/ui/compare";
import { useTheme } from "next-themes";
import { IllustrationSize } from "@/components/generic/section";

type EngineeringProductThinkingProps = {
  isMobile?: boolean;
  illustrationSize?: IllustrationSize;
};

export function EngineeringProductThinking({ isMobile = false, illustrationSize = "medium" }: EngineeringProductThinkingProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Default to a consistent image for the initial render to avoid hydration mismatch
  const [codeImage, setCodeImage] = useState("/showcase/code-light.png");
  const [designImage, setDesignImage] = useState("/showcase/design-light.png");

  // After hydration, we can safely update the image based on the theme
  useEffect(() => {
    setMounted(true);
    if (resolvedTheme === "dark") {
      setCodeImage("/showcase/code-dark.png");
      setDesignImage("/showcase/design-dark.png");
    } else {
      setCodeImage("/showcase/code-light.png");
      setDesignImage("/showcase/design-light.png");
    }
  }, [resolvedTheme]);

  return (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <Compare
        firstImage={codeImage}
        secondImage={designImage}
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-full w-full rounded-md"
        slideMode="hover"
        showHandlebar={true}
        autoplay={false}
      />
    </div>
  );
}
