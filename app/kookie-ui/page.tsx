import { AboutKookieUI } from "./about-kookie-ui";
import { getAllPosts } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kookie UI - Kushagra Dhawan",
  description:
    "Kookie UI is an open-source fork of Radix Themes, focused on building scalable, consistent UI components with a fresh visual style and practical foundations.",
  alternates: {
    canonical: "/kookie-ui",
  },
};

export default function KookieUIPage() {
  const posts = getAllPosts();
  // Filter posts that have "kookie-ui" or "queen-lukita" in their tags
  const kookiePosts = posts.filter((post) =>
    post.tags.some(
      (tag) =>
        tag.toLowerCase() === "kookie-ui" ||
        tag.toLowerCase() === "queen-lukita"
    )
  );

  return <AboutKookieUI posts={kookiePosts} />;
}
