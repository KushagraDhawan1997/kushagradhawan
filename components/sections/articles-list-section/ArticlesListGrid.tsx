import { ArticleCard } from "./ArticleCard";
import { Grid } from "@kushagradhawan/kookie-ui";

export interface ArticleProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags?: string[];
  image?: string;
  alt?: string;
}

interface ArticlesListGridProps {
  posts: ArticleProps[];
}

export function ArticlesListGrid({ posts }: ArticlesListGridProps) {
  return (
    <Grid gap="3" columns={{ initial: "1", md: "2", lg: "3" }}>
      {posts.map((post) => (
        <ArticleCard key={post.slug} post={post} />
      ))}
    </Grid>
  );
}
