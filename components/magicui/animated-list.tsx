"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React, { ComponentPropsWithoutRef, useEffect, useMemo, useState } from "react";

export function AnimatedListItem({ children, isResetting = false }: { children: React.ReactNode; isResetting?: boolean }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: isResetting ? { opacity: 0, transition: { duration: 0.5 } } : { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
  loop?: boolean;
  resetDelay?: number;
  fadeOutDuration?: number;
}

export const AnimatedList = React.memo(({ children, className, delay = 1000, loop = false, resetDelay = 2000, fadeOutDuration = 800, ...props }: AnimatedListProps) => {
  const [index, setIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const childrenArray = useMemo(() => React.Children.toArray(children), [children]);

  useEffect(() => {
    if (isResetting) {
      // Wait for fadeOut animation to complete before resetting
      const resetTimeout = setTimeout(() => {
        setIndex(0);
        setIsResetting(false);
      }, fadeOutDuration);

      return () => clearTimeout(resetTimeout);
    }

    if (index < childrenArray.length - 1) {
      // Still items to show - continue showing them
      const timeout = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (loop && index >= childrenArray.length - 1) {
      // We've shown all items and loop is enabled - trigger fadeout first
      const timeout = setTimeout(() => {
        setIsResetting(true);
      }, resetDelay);

      return () => clearTimeout(timeout);
    }
  }, [index, delay, childrenArray.length, loop, resetDelay, isResetting, fadeOutDuration]);

  const itemsToShow = useMemo(() => {
    if (isResetting) {
      // Show all items when resetting so they can fade out together
      return childrenArray.slice(0, childrenArray.length).reverse();
    }
    return childrenArray.slice(0, index + 1).reverse();
  }, [index, childrenArray, isResetting]);

  return (
    <div className={cn(`flex flex-col items-center gap-4`, className)} {...props}>
      <AnimatePresence mode="sync">
        {itemsToShow.map((item) => (
          <AnimatedListItem key={(item as React.ReactElement).key} isResetting={isResetting}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
});

AnimatedList.displayName = "AnimatedList";
