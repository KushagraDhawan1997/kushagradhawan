"use client";

import React from "react";
import { Box, Tooltip, IconButton } from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { InformationCircleIcon } from "@hugeicons/core-free-icons";

interface AIImageWithPromptProps {
  /**
   * The AI prompt used to generate the image
   */
  prompt: string;
  /**
   * The image component to wrap (e.g., Image, ArticleImage, or any image element)
   */
  children: React.ReactNode;
  /**
   * Optional className for the wrapper
   */
  className?: string;
}

/**
 * AIImageWithPrompt Component
 *
 * Wraps an image component with a tooltip icon in the top right corner
 * that displays the AI prompt on hover.
 *
 * @param prompt - The AI prompt used to generate the image
 * @param children - The image component to wrap
 * @param className - Optional additional CSS classes
 */
export function AIImageWithPrompt({ prompt, children, className }: AIImageWithPromptProps) {
  return (
    <Box position="relative" width="100%" height="100%" className={className}>
      {children}
      <Box position="absolute" bottom="2" right="2" style={{ zIndex: 10 }}>
        <Tooltip content={prompt}>
          <IconButton size="2" variant="ghost" highContrast aria-label="View AI prompt">
            <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={1.75} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
