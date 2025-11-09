"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * HashScrollHandler Component
 *
 * Handles scrolling to hash anchors when navigating between pages.
 * This is necessary because Next.js client-side navigation doesn't
 * automatically scroll to hash targets.
 */
export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;

    if (hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView();
        }
      }, 100);
    }
  }, [pathname]);

  return null;
}
