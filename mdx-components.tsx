import React from "react";
import type { MDXComponents } from "mdx/types";
import { createMarkdownComponents } from "@kushagradhawan/kookie-blocks";
import NextImage from "next/image";
import { WebGLImageTracker } from "@/components/webgl";

// Custom MDX image with WebGL support
function MDXImage({ src, alt, ...props }: React.ComponentProps<"img">) {
  if (!src || typeof src !== "string") return null;

  // Generate unique ID from src
  const id = `mdx-${src.replace(/[^a-zA-Z0-9]/g, "-")}`;

  return (
    <span
      style={{
        display: "block",
        position: "relative",
        width: "100%",
        aspectRatio: "16/9",
        margin: "var(--space-8) 0",
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
