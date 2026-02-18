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
        margin: "var(--space-4) 0",
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
  return {
    ...createMarkdownComponents({
      spacing: "spacious",
      codeBlockCollapsible: true,
      inlineCodeHighContrast: true,
    }),
    img: MDXImage,
    ...components,
  };
}
