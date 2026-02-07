"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useWebGLImagesRegistry } from "./webgl-images-context";
import { getLenis } from "./hooks/use-lenis";

type WebGLImageTrackerProps = {
  id: string;
  src: string;
  children: ReactNode;
  borderRadius?: number;
};

export function WebGLImageTracker({
  id,
  src,
  children,
  borderRadius = 0,
}: WebGLImageTrackerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const {
    registerImage,
    unregisterImage,
    updateTextureUrl,
    updateImageBounds,
    isEnabled,
  } = useWebGLImagesRegistry();

  // Register on mount
  useEffect(() => {
    registerImage(
      id,
      containerRef as React.RefObject<HTMLImageElement | null>,
      borderRadius
    );
    return () => unregisterImage(id);
  }, [id, registerImage, unregisterImage, borderRadius]);

  // Wait for child Next.js Image to load, then use its optimized currentSrc
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const findAndUseOptimizedSrc = () => {
      const img = container.querySelector("img");
      if (!img) return;

      const useCurrentSrc = () => {
        // currentSrc is the actual loaded image (optimized by Next.js)
        // Falls back to src if currentSrc not available
        const optimizedSrc = img.currentSrc || img.src;
        if (optimizedSrc) {
          updateTextureUrl(id, optimizedSrc);
        }
      };

      if (img.complete && img.currentSrc) {
        // Image already loaded
        useCurrentSrc();
      } else {
        // Wait for load
        img.addEventListener("load", useCurrentSrc, { once: true });
        return () => img.removeEventListener("load", useCurrentSrc);
      }
    };

    // Use MutationObserver in case img isn't in DOM yet
    const cleanup = findAndUseOptimizedSrc();
    if (cleanup) return cleanup;

    // Retry after a short delay if img not found
    const timeoutId = setTimeout(findAndUseOptimizedSrc, 100);
    return () => clearTimeout(timeoutId);
  }, [id, src, updateTextureUrl]);

  // Update bounds - use getBoundingClientRect (single call, no traversal)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateBounds = () => {
      const rect = container.getBoundingClientRect();
      // Use Lenis scroll position if available, otherwise fallback to window.scrollY
      // This ensures bounds match what the render loop uses
      const lenis = getLenis();
      const scrollY = lenis ? lenis.scroll : window.scrollY;

      // Convert viewport-relative to document-relative
      updateImageBounds(id, {
        top: rect.top + scrollY,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    };

    // Delay initial bounds to ensure layout is settled
    // Using double rAF to wait for paint
    let rafId: number;
    const scheduleInitialBounds = () => {
      rafId = requestAnimationFrame(() => {
        rafId = requestAnimationFrame(updateBounds);
      });
    };
    scheduleInitialBounds();

    // Also recalculate after fonts load (can cause layout shifts)
    document.fonts.ready.then(updateBounds);

    // Recalculate when Lenis becomes available and synced
    // Subscribe to first scroll event which fires after Lenis syncs with window.scrollY
    let lenisCleanup: (() => void) | null = null;
    const checkLenis = () => {
      const lenis = getLenis();
      if (lenis) {
        // Lenis fires a scroll event immediately after initialization with correct position
        const onFirstScroll = () => {
          updateBounds();
          lenis.off("scroll", onFirstScroll);
        };
        lenis.on("scroll", onFirstScroll);
        lenisCleanup = () => lenis.off("scroll", onFirstScroll);
        // Also update immediately in case scroll event already fired
        updateBounds();
      }
    };

    // Check now and poll briefly if not ready
    checkLenis();
    let pollCount = 0;
    const pollForLenis = setInterval(() => {
      pollCount++;
      if (getLenis() || pollCount > 10) {
        clearInterval(pollForLenis);
        checkLenis();
      }
    }, 50);

    // Debounced resize handling
    let timeoutId: ReturnType<typeof setTimeout>;
    const debouncedUpdate = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateBounds, 100);
    };

    const resizeObserver = new ResizeObserver(debouncedUpdate);
    resizeObserver.observe(container);

    // Also listen for window resize
    window.addEventListener("resize", debouncedUpdate);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      clearInterval(pollForLenis);
      lenisCleanup?.();
      resizeObserver.disconnect();
      window.removeEventListener("resize", debouncedUpdate);
    };
    // Include pathname to recalculate bounds on route change
  }, [id, updateImageBounds, pathname]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: isEnabled ? 0 : 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}
