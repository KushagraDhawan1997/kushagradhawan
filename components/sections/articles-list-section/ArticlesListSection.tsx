"use client";

/**
 * Articles List Section Component
 *
 * This component displays a grid of articles.
 * It handles the layout and presentation of article cards in a responsive grid,
 * as well as displaying a message when no articles are available.
 */

import { SectionWrapper } from "@/components/generic/ui/section-wrapper";
import { getMonochromaticGradient } from "@/lib/gradient";
import { ArticlesListGrid, ArticleWithGrid } from "./ArticlesListGrid";

/**
 * Props for the ArticlesListSection component
 *
 * @property posts - The array of article data objects
 */
export interface ArticlesListSectionProps {
  posts: ArticleWithGrid[];
}

/**
 * ArticlesListSection Component
 *
 * Features:
 * - Section header with title and subtitle
 * - Responsive bento-style grid layout for articles
 * - Direct navigation to full articles on click
 * - Fallback display when no articles are available
 * - Consistent spacing and layout across the section
 *
 * @param props - The component props
 * @returns React component for the articles list section
 */
export function ArticlesListSection({ posts }: ArticlesListSectionProps) {
  // Get gradient styling for headline text
  const gradientText = getMonochromaticGradient();

  return (
    <SectionWrapper noBorderTop>
      <div className="max-w-7xl mx-auto px-6 grid grid-flow-row gap-16">
        {/* Header with title and subtitle */}
        <blockquote className={`max-w-3xl text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none pb-2 ${gradientText}`}>
          Genuinely useful thoughts, sandwiched between the appropriate number of keywords. It&apos;s part of the game we all play.
        </blockquote>

        {/* Articles grid or fallback message */}
        {posts.length > 0 ? (
          <>
            {/* Mobile view grid */}
            <ArticlesListGrid posts={posts} isMobile={true} />

            {/* Desktop view grid */}
            <ArticlesListGrid posts={posts} />
          </>
        ) : (
          // Fallback display when no articles are available
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No articles yet</h3>
            <p className="text-muted-foreground">Check back soon for new content!</p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
