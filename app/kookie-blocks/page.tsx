import { AboutKookieBlocks } from "@/components/sections/about-kookie-blocks-section";
import { getAllPosts } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kookie Blocks - Kushagra Dhawan",
  description:
    "Kookie Blocks is a higher-level implementation of Kookie UI focused on creating reusable blocks for both app interfaces and marketing pages.",
  alternates: {
    canonical: "/kookie-blocks",
  },
};

export default function KookieBlocksPage() {
  const posts = getAllPosts();
  // Filter posts that have "kookie-blocks" in their tags
  const kookieBlocksPosts = posts.filter((post) =>
    post.tags.some((tag) => tag.toLowerCase() === "kookie-blocks")
  );

  return <AboutKookieBlocks posts={kookieBlocksPosts} />;
}
