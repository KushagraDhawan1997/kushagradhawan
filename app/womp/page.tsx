import { AboutWomp } from "./about-womp";
import { getAllPosts } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Womp 3D - Kushagra Dhawan",
  description: "Consulting with Womp 3D, a browser-based 3D editor empowering everyone to bring their ideas to life in minutes.",
  alternates: {
    canonical: "/womp",
  },
};

export default function WompPage() {
  const posts = getAllPosts();
  // Filter posts that have "Womp" in their tags
  const wompPosts = posts.filter((post) =>
    post.tags.some((tag) => tag.toLowerCase() === "womp")
  );

  return <AboutWomp posts={wompPosts} />;
}
