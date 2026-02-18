import { ArticleCard } from "./ArticleCard";
import { Flex, Separator } from "@kushagradhawan/kookie-ui";
import React from "react";

export interface ArticleProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags?: string[];
  image?: string;
  alt?: string;
  imagePrompt?: string;
  category?: "article" | "announcement";
}

interface ArticlesListGridProps {
  posts: ArticleProps[];
}

export function ArticlesListGrid({ posts }: ArticlesListGridProps) {
  return (
    <Flex direction="column" gap="4" width="100%">
      {posts.map((post) => (
        <React.Fragment key={post.slug}>
          <ArticleCard post={post} />
          <Separator size="4" />
        </React.Fragment>
      ))}
    </Flex>
  );
}
