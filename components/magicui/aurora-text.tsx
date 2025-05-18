"use client";

import React, { memo, useId } from "react";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

/**
 * AuroraText component
 *
 * Displays text with an animated gradient effect
 * All instances share the same animation timeline to prevent jarring restarts
 */
export const AuroraText = memo(
  ({
    children,
    className = "",
    // Default colors are variations of the blue [0.3, 0.6, 0.8]
    colors = ["#4d99cc", "#6baada", "#3a7aa6", "#3a8edb"],
    speed = 1,
  }: AuroraTextProps) => {
    // Use a static animation-delay to ensure all instances are synchronized
    // rather than each having their own cycle
    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${60 / speed}s`,
      // No animation delay, all instances use the same animation timeline
      animationDelay: "0s",
    };

    return (
      <span className={`relative inline-block ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          className="relative bg-[length:400%_auto] bg-clip-text text-transparent"
          style={{
            ...gradientStyle,
            animation: "aurora 60s linear infinite",
          }}
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    );
  }
);

AuroraText.displayName = "AuroraText";
