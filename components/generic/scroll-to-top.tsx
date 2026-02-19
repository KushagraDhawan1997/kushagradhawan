"use client";

import { useState, useEffect, useCallback } from "react";
import { IconButton } from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp02Icon, ArrowDown02Icon } from "@hugeicons/core-free-icons";

const SCROLL_THRESHOLD = 400;

export function ScrollToTop() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY <= SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = useCallback(() => {
    if (atTop) {
      window.scrollBy({ top: SCROLL_THRESHOLD, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [atTop]);

  return (
    <IconButton
      size="2"
      variant="soft"
      color="gray"
      highContrast
      aria-label={atTop ? "Scroll to next section" : "Scroll to top"}
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "var(--space-5)",
        right: "var(--space-5)",
        zIndex: 50,
      }}
    >
      <HugeiconsIcon
        icon={atTop ? ArrowDown02Icon : ArrowUp02Icon}
        strokeWidth={1.75}
      />
    </IconButton>
  );
}
