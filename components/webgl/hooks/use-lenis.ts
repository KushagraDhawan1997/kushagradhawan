"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;
let standaloneRafId: number | null = null;
let isR3FDriving = false;

// Cached scroll state to avoid object creation in hot path
const scrollState = { scrollY: 0, velocity: 0 };

export function getLenis() {
  return lenisInstance;
}

export function getScrollState() {
  return scrollState;
}

// Called by R3F canvas to take over Lenis RAF
export function startR3FSync() {
  isR3FDriving = true;
  // Stop standalone RAF - R3F will drive Lenis now
  if (standaloneRafId !== null) {
    cancelAnimationFrame(standaloneRafId);
    standaloneRafId = null;
  }
}

// Called when R3F canvas unmounts
export function stopR3FSync() {
  isR3FDriving = false;
  // Resume standalone RAF if Lenis exists
  if (lenisInstance && standaloneRafId === null) {
    const raf = (time: number) => {
      if (!isR3FDriving) {
        lenisInstance?.raf(time);
        standaloneRafId = requestAnimationFrame(raf);
      }
    };
    standaloneRafId = requestAnimationFrame(raf);
  }
}

// Called from R3F's useFrame - single RAF, no double loop
export function tickLenis(time: number) {
  if (isR3FDriving) {
    lenisInstance?.raf(time);
  }
}

export function useLenisSetup(enabled: boolean = true) {
  useEffect(() => {
    // Don't initialize if disabled or already exists
    if (!enabled || lenisInstance) return;

    lenisInstance = new Lenis({
      // Higher lerp = snappier response (0.1 default is floaty, 0.15+ is snappier)
      lerp: 0.15,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.5,
    });

    // Sync to current scroll position immediately on init to avoid lerp-from-zero flicker
    // This prevents the mismatch between bounds calculation and render loop scroll values
    const currentScroll = window.scrollY;
    if (currentScroll > 0) {
      lenisInstance.scrollTo(currentScroll, { immediate: true });
    }

    // Initialize cached scroll state with current position
    scrollState.scrollY = currentScroll;

    // Update cached scroll state on scroll
    lenisInstance.on("scroll", ({ scroll, velocity }) => {
      scrollState.scrollY = scroll;
      scrollState.velocity = velocity;
    });

    // Start standalone RAF (will be paused if R3F takes over)
    if (!isR3FDriving) {
      const raf = (time: number) => {
        if (!isR3FDriving) {
          lenisInstance?.raf(time);
          standaloneRafId = requestAnimationFrame(raf);
        }
      };
      standaloneRafId = requestAnimationFrame(raf);
    }

    return () => {
      if (standaloneRafId !== null) {
        cancelAnimationFrame(standaloneRafId);
        standaloneRafId = null;
      }
      isR3FDriving = false;
      lenisInstance?.destroy();
      lenisInstance = null;
    };
  }, [enabled]);
}

// Returns the cached scroll state object (same reference, mutated in place)
// This avoids creating new objects every frame
export function useLenisScroll() {
  return scrollState;
}
