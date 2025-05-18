# Markdown Articles System Documentation

This directory contains markdown files that power the articles section of the website. The articles system uses Next.js's file-based routing and React components to render markdown content as HTML.

## Overview

1. The system is based on markdown files with frontmatter metadata
2. Each `.md` file represents a single article
3. Markdown is processed and converted to HTML for display
4. Frontmatter is used to store metadata like title, description, date, etc.

## Creating a New Article

To create a new article:

1. Create a new `.md` file in the `content/articles` directory
2. Add the required frontmatter metadata at the top of the file
3. Write your article content in markdown format
4. The article will automatically appear in the articles listing page

**Important Notes:**

- Do not include the article title as an H1 heading in your content - the title from frontmatter will be displayed automatically
- Start your actual content with H2 (##) headings
- The description in frontmatter will be displayed prominently below the title, so make it compelling and informative
- Your content should begin directly with the first section heading (H2)

## Frontmatter Metadata

Each article requires the following frontmatter metadata at the top of the file:

```yaml
---
title: "Your Article Title"
description: "A brief description of your article"
date: "2023-10-15"
author: "Your Name"
tags: ["tag1", "tag2"]
---
```

| Field       | Required | Description                                               |
| ----------- | -------- | --------------------------------------------------------- |
| title       | Yes      | The title of your article                                 |
| description | Yes      | A brief description that appears in listings and metadata |
| date        | Yes      | The publication date in "YYYY-MM-DD" format               |
| author      | Yes      | The name of the author                                    |
| tags        | No       | An array of tags to categorize the article                |
| image       | No       | Path to a featured image for the article                  |
| alt         | No       | Alt text for the featured image for accessibility         |

## Markdown Features

The articles system supports:

- Standard markdown syntax
- GitHub Flavored Markdown (GFM) features
- Code blocks with syntax highlighting
- Tables, lists, and blockquotes
- Embedded HTML when needed
- Links to internal and external resources
- Images and media

## Adding Images

To include images in your articles:

1. Add the image to the `public/articles` directory
2. Reference the image in your markdown using the following syntax:

```markdown
![Alt text](/articles/your-image.jpg)
```

## Article URLs

Articles are accessible at:

```
/articles/your-file-name
```

For example, a file named `content/articles/getting-started.md` would be accessible at `/articles/getting-started`.

## Directory Structure

```
content/
└── articles/
    ├── article-one.md
    ├── article-two.md
    └── article-three.md
```

## Technical Implementation

The articles system consists of the following files:

- `lib/articles.ts` - Utility functions for parsing markdown
- `app/articles/page.tsx` - Articles list page
- `app/articles/[slug]/page.tsx` - Individual article page
- `components/sections/articles-list-section/` - Components for article listings

## Article Structure

Each article follows this structure:

```markdown
---
title: "Your Title Here"
description: "This will be displayed below the title. Make it compelling and informative."
date: "YYYY-MM-DD"
author: "Your Name"
tags: ["tag1", "tag2"]
---

## First Section Heading

Your content starts here with an H2 heading. The title and description
from frontmatter will be automatically displayed in the header, so you
should NOT include the title in your content.

## Second Section Heading

More content here...
```

The system automatically:

1. Displays the title and description from frontmatter in the page header
2. Formats the publication date
3. Shows tags as badges
4. Renders your markdown content with proper styling
