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
  content: string; // MDX content of the article
};

/**
 * Retrieves a single article by its slug
 *
 * @param slug - The unique identifier for the article (filename without extension)
 * @returns A Promise that resolves to an Article object
 * @throws Error if the article cannot be found or parsed
 */
export async function getPostBySlug(slug: string): Promise<Article> {
  // Construct the full path to the MDX file
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  // Read the file contents
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Parse frontmatter from the MDX file
  // This separates metadata from the content
  const { data, content } = matter(fileContents);

  // Clean the content: remove any remaining frontmatter markers and trim
  const cleanContent = content.trim();

  // Return a structured Article object with MDX content
  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description || "", // Default to empty string if missing
    tags: data.tags || [], // Default to empty array if missing
    content: cleanContent, // Clean MDX content without frontmatter
  };
}

/**
 * Retrieves all articles with their metadata
 *
 * @returns An array of article metadata objects, sorted by date (newest first)
 */
export function getAllPosts(): {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}[] {
  // Get all MDX files from the posts directory
  const fileNames = fs.readdirSync(postsDirectory);

  // Process each file to extract metadata
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx")) // Only process MDX files
    .map((fileName) => {
      // Remove the .mdx extension to get the slug
      const slug = fileName.replace(/\.mdx$/, "");

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
