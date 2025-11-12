"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Card, Dialog, Image, VisuallyHidden } from "@kushagradhawan/kookie-ui";

interface ArticleImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * ArticleImage Component
 *
 * A reusable image component for articles that wraps images in a Card
 * and opens them in a fullscreen dialog when clicked.
 *
 * @param src - The image source path
 * @param alt - Alt text for accessibility
 * @param className - Optional additional CSS classes
 */
export function ArticleImage({ src, alt, className }: ArticleImageProps) {
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const updateViewportSize = () => {
      setViewportSize({ width: window.innerWidth * 0.9, height: window.innerHeight * 0.9 });
    };

    updateViewportSize();
    window.addEventListener("resize", updateViewportSize);

    return () => {
      window.removeEventListener("resize", updateViewportSize);
    };
  }, []);

  const handleImageLoad = useCallback((event: React.SyntheticEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    setNaturalSize({ width: target.naturalWidth, height: target.naturalHeight });
  }, []);

  const dialogDimensions = useMemo(() => {
    if (!naturalSize.width || !naturalSize.height || !viewportSize.width || !viewportSize.height) {
      return { width: undefined, height: undefined };
    }

    const aspectRatio = naturalSize.width / naturalSize.height;
    let width = viewportSize.width;
    let height = width / aspectRatio;

    if (height > viewportSize.height) {
      height = viewportSize.height;
      width = height * aspectRatio;
    }

    return { width, height };
  }, [naturalSize, viewportSize]);

  const imageInlineStyles = useMemo(() => {
    if (dialogDimensions.width && dialogDimensions.height) {
      return {
        width: dialogDimensions.width,
        height: dialogDimensions.height,
      } as const;
    }

    return {
      width: "auto" as const,
      height: "auto" as const,
      maxWidth: "90vw" as const,
      maxHeight: "90vh" as const,
    };
  }, [dialogDimensions]);

  // Derive responsive content variants if optimized WebP assets exist
  const deriveContent = (pathStr: string) => {
    if (!pathStr.startsWith("/articles/")) return undefined;
    const match = pathStr.match(/^(.*)\.(png|jpg|jpeg|webp)$/i);
    if (!match) return undefined;
    const base = match[1];
    return {
      src: `${base}-content-1200.webp`,
      srcSet: `${base}-content-800.webp 800w, ${base}-content-1200.webp 1200w`,
    };
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Card mt="9" variant="classic" size="2" asChild style={{ cursor: "pointer", overflow: "hidden", padding: "0" }} className={className}>
          <button aria-label={`View full size: ${alt}`}>
            <Image
              src={deriveContent(src)?.src || src}
              srcSet={deriveContent(src)?.srcSet}
              sizes="(max-width: 768px) 100vw, 840px"
              alt={alt}
            />
          </button>
        </Card>
      </Dialog.Trigger>

      <Dialog.Content
        style={{
          width: dialogDimensions.width,
          height: dialogDimensions.height,
          maxWidth: "90vw",
          maxHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          overflow: "hidden",
        }}
      >
        <VisuallyHidden>
          <Dialog.Title>{alt}</Dialog.Title>
        </VisuallyHidden>
        <Image
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          style={{
            ...imageInlineStyles,
            objectFit: "contain",
            display: "block",
          }}
        />
      </Dialog.Content>
    </Dialog.Root>
  );
}
