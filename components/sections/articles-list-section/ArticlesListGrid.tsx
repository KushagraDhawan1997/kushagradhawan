import { ArticleCard } from "./ArticleCard";

// Define necessary props directly
export interface ArticleProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags?: string[];
}

// We don't need gridArea anymore, but keeping the interface name for compatibility
export interface ArticleWithGrid extends ArticleProps {
  // Removing gridArea property since we're using a simple grid
}

interface ArticlesListGridProps {
  posts: ArticleWithGrid[];
  isMobile?: boolean;
}

export function ArticlesListGrid({ posts, isMobile = false }: ArticlesListGridProps) {
  if (isMobile) {
    return (
      <div className="grid grid-cols-1 gap-2 md:hidden">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} isMobile={true} />
        ))}
      </div>
    );
  }

  return (
    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {posts.map((post) => (
        <ArticleCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
