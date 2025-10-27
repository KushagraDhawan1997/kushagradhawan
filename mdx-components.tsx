import type { MDXComponents } from "mdx/types";
import { Heading, Text, Code, Blockquote, Link, Flex, Separator, Box, Strong, Em, Kbd, Callout, Image } from "@kushagradhawan/kookie-ui";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings with strong visual hierarchy
    h1: ({ children }) => (
      <Flex direction="column" gap="8" mb="8" mt="10">
        <Heading as="h1" size="8" weight="medium">
          {children}
        </Heading>
      </Flex>
    ),
    h2: ({ children }) => (
      <Flex direction="column" gap="4" mb="7" mt="9">
        <Heading as="h2" size="6" weight="medium">
          {children}
        </Heading>
      </Flex>
    ),
    h3: ({ children }) => (
      <Heading as="h3" size="5" mt="9" mb="5" weight="medium">
        {children}
      </Heading>
    ),
    h4: ({ children }) => (
      <Heading as="h4" size="3" mb="5" weight="medium">
        {children}
      </Heading>
    ),
    h5: ({ children }) => (
      <Heading as="h5" size="3" mb="4" weight="medium">
        {children}
      </Heading>
    ),
    h6: ({ children }) => (
      <Heading as="h6" size="3" mb="3" weight="medium">
        {children}
      </Heading>
    ),

    // Text elements using KookieUI defaults
    p: ({ children }) => (
      <Text as="p" size="3" my="3" style={{ lineHeight: "1.7" }}>
        {children}
      </Text>
    ),

    // Lists with better spacing
    ul: ({ children }) => (
      <ul
        style={{
          marginBottom: "var(--space-4)",
          marginTop: "var(--space-2)",
          paddingLeft: "var(--space-5)",
          listStyle: "disc",
        }}
      >
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol
        style={{
          marginBottom: "var(--space-4)",
          marginTop: "var(--space-2)",
          paddingLeft: "var(--space-5)",
          listStyle: "decimal",
        }}
      >
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li style={{ marginBottom: "var(--space-1)", lineHeight: "1.6" }}>
        <Text size="3">{children}</Text>
      </li>
    ),

    // Code elements - use KookieUI for inline, rehype for blocks
    code: ({ children, className, ...props }) => {
      // If it has a language class, it's a code block (from rehype-pretty-code)
      if (className?.includes("language-")) {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }

      // Regular inline code - use KookieUI styling
      return (
        <Code size="3" color="gray" variant="ghost" highContrast>
          {children}
        </Code>
      );
    },

    // Code blocks - let rehype-pretty-code handle multi-line code
    pre: ({ children, className, ...props }) => {
      return (
        <Box className="code-block-wrapper">
          <pre className={className} {...props}>
            {children}
          </pre>
        </Box>
      );
    },

    // Enhanced typography components
    kbd: ({ children }) => <Kbd size="2">{children}</Kbd>,

    // Links using KookieUI defaults
    a: ({ href, children }) => (
      <Link href={href} highContrast target={href?.startsWith("http") ? "_blank" : undefined}>
        {children}
      </Link>
    ),

    // Blockquotes and quotes
    blockquote: ({ children }) => <Blockquote size="3">{children}</Blockquote>,

    // Horizontal rule with separator
    hr: () => <Separator size="4" />,

    // Typography using dedicated KookieUI components
    strong: ({ children }) => <Strong>{children}</Strong>,

    em: ({ children }) => <Em>{children}</Em>,

    // Tables using nested structure
    table: ({ children }) => <Box style={{ overflow: "auto" }}>{children}</Box>,

    // Custom callout for important information
    aside: ({ children }) => (
      <Callout.Root>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>
    ),

    // Video elements
    video: ({ src, ...props }) => (
      <Box mb="6" style={{ borderRadius: "var(--radius-4)", overflow: "hidden" }}>
        <video
          src={src}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
          controls
          {...props}
        />
      </Box>
    ),

    // Image elements
    img: ({ src, alt, ...props }) => (
      <Box asChild my="6" style={{ borderRadius: "var(--radius-4)", overflow: "hidden" }}>
        <Image src={src} alt={alt} {...props} />
      </Box>
    ),

    ...components,
  };
}
