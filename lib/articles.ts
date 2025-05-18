/**
 * Articles Utility Functions
 *
 * This module provides functions for working with markdown articles.
 * It handles reading articles from the filesystem, parsing frontmatter,
 * and converting markdown content to HTML.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter"; // Used for parsing frontmatter
import { unified } from "unified";
import remarkParse from "remark-parse"; // Markdown parser
import remarkRehype from "remark-rehype"; // Converts markdown to HTML
import remarkGfm from "remark-gfm"; // GitHub Flavored Markdown support
import rehypeHighlight from "rehype-highlight"; // Code syntax highlighting
import rehypeStringify from "rehype-stringify"; // Convert HTML AST to string

// Define the directory where articles are stored
const postsDirectory = path.join(process.cwd(), "content/articles");

/**
 * Article type definition
 *
 * Represents an article with metadata and content
 */
export type Article = {
  slug: string; // URL-friendly identifier
  title: string; // Article title
  date: string; // Publication date
  description: string; // Brief description
  tags: string[]; // Associated tags
  content: string; // HTML content of the article
};

/**
 * Retrieves a single article by its slug
 *
 * @param slug - The unique identifier for the article (filename without extension)
 * @returns A Promise that resolves to an Article object
 * @throws Error if the article cannot be found or parsed
 */
export async function getPostBySlug(slug: string): Promise<Article> {
  // Construct the full path to the markdown file
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  // Read the file contents
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Parse frontmatter from the markdown file
  // This separates metadata from the content
  const { data, content } = matter(fileContents);

  // Remove the first heading (title) from the content
  const contentWithoutTitle = content.replace(/^# .*$/m, "").trim();

  // Process the markdown content into HTML using a unified processing pipeline
  const processedContent = await unified()
    .use(remarkParse) // Parse markdown into an AST
    .use(remarkGfm) // Add GitHub Flavored Markdown features
    .use(remarkRehype, {
      allowDangerousHtml: true, // Allow HTML in markdown
      handlers: {
        // Ensure proper handling of headings
        heading: (h, node) => {
          return {
            type: "element",
            tagName: `h${node.depth}`,
            properties: {},
            children: h.all(node),
          };
        },
      },
    }) // Convert markdown AST to HTML AST
    .use(rehypeHighlight) // Add syntax highlighting to code blocks
    .use(rehypeStringify, { allowDangerousHtml: true }) // Convert HTML AST to string
    .process(contentWithoutTitle);

  // Return a structured Article object
  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description || "", // Default to empty string if missing
    tags: data.tags || [], // Default to empty array if missing
    content: processedContent.toString(),
  };
}

/**
 * Retrieves all articles with their metadata
 *
 * @returns An array of article metadata objects, sorted by date (newest first)
 */
export function getAllPosts(): { slug: string; title: string; date: string; description: string; tags: string[] }[] {
  // Get all markdown files from the posts directory
  const fileNames = fs.readdirSync(postsDirectory);

  // Process each file to extract metadata
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md")) // Only process markdown files
    .map((fileName) => {
      // Remove the .md extension to get the slug
      const slug = fileName.replace(/\.md$/, "");

      // Read the file content
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Extract just the metadata using gray-matter
      const { data } = matter(fileContents);

      // Return an article metadata object
      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description || "",
        tags: data.tags || [],
      };
    });

  // Sort articles by date, newest first
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
