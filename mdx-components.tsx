import type { MDXComponents } from "mdx/types";
import { createMarkdownComponents } from "@kushagradhawan/kookie-blocks";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...createMarkdownComponents({
      spacing: "spacious",
      codeBlockCollapsible: true,
      inlineCodeHighContrast: true,
    }),
    ...components,
  };
}
