"use client";

import React from "react";
import Link from "next/link";
import { ArticleWithGrid } from "./ArticlesListGrid";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ContentWrapper } from "@/components/generic/ui/content-wrapper";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  post: ArticleWithGrid;
  isMobile?: boolean;
}

export function ArticleCard({ post, isMobile = false }: ArticleCardProps) {
  // Format the date for display
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <ContentWrapper borderLeft={true} borderRight={true} extendBorders={true} extendAmount={12} className={!isMobile ? "h-full" : ""}>
      <Link href={`/articles/${post.slug}`} className={cn("group block", !isMobile ? "h-full" : "")}>
        <Card className={cn("backdrop-blur-sm border-border/10 hover:shadow-lg transition-all duration-300 bg-gradient-to-bl from-card to-muted/10 flex flex-col", !isMobile ? "h-full" : "")}>
          <CardContent className="flex flex-col gap-4 h-full">
            {/* Date at top */}
            <div className="text-sm text-muted-foreground">{formattedDate}</div>

            {/* Title */}
            <CardTitle className="text-primary text-base font-medium">{post.title}</CardTitle>

            {/* Description */}
            <p className="text-foreground/80 text-base line-clamp-3">{post.description}</p>

            {/* Tags using Badge component */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-auto pt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-primary/5 text-primary/80 hover:bg-primary/10 border-primary/10 font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    </ContentWrapper>
  );
}
