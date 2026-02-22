import React from "react";
import type { MDXComponents } from "mdx/types";
import { createMarkdownComponents } from "@kushagradhawan/kookie-blocks";
import { Card, Dialog, VisuallyHidden } from "@kushagradhawan/kookie-ui";
import NextImage from "next/image";
import { WebGLImageTracker } from "@/components/webgl";

// Custom MDX image with WebGL support and clickable fullscreen dialog
function MDXImage({ src, alt, ...props }: React.ComponentProps<"img">) {
  if (!src || typeof src !== "string") return null;

  // Generate unique ID from src
  const id = `mdx-${src.replace(/[^a-zA-Z0-9]/g, "-")}`;

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Card
          mt={{ initial: "6", sm: "9" }}
          variant="classic"
          size="2"
          asChild
          style={{ cursor: "pointer", overflow: "hidden", padding: "0" }}
        >
          <button aria-label={`View full size: ${alt || "image"}`}>
            <span
              style={{
                display: "block",
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
                overflow: "hidden",
              }}
            >
              <WebGLImageTracker id={id} src={src} borderRadius={0}>
                <NextImage
                  src={src}
                  alt={alt || ""}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  style={{ objectFit: "cover" }}
                  decoding="async"
                />
              </WebGLImageTracker>
            </span>
          </button>
        </Card>
      </Dialog.Trigger>

      <Dialog.Content
        style={{
          width: "90vw",
          height: "90vh",
          maxWidth: "90vw",
          maxHeight: "90vh",
          padding: 0,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <VisuallyHidden>
          <Dialog.Title>{alt || "Full size image"}</Dialog.Title>
        </VisuallyHidden>
        <NextImage
          src={src}
          alt={alt || ""}
          fill
          sizes="90vw"
          style={{ objectFit: "contain" }}
        />
      </Dialog.Content>
    </Dialog.Root>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const base = createMarkdownComponents({
    spacing: "spacious",
    codeBlockCollapsible: true,
    inlineCodeHighContrast: true,
  });

  return {
    ...base,
    img: MDXImage,
    p: (props: React.ComponentProps<"p">) => {
      const children = React.Children.toArray(props.children);
      const hasBlockChild = children.some(
        (child) => React.isValidElement(child) && child.type === MDXImage,
      );
      if (hasBlockChild) return <>{props.children}</>;
      const BaseP = base.p as React.ComponentType<React.ComponentProps<"p">> | undefined;
      return BaseP ? <BaseP {...props} /> : <p {...props} />;
    },
    ...components,
  };
}
