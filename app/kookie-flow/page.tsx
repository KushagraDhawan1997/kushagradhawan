import { AboutKookieFlow } from "./about-kookie-flow";
import { getAllPosts } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kookie Flow",
  description:
    "Visual workflow and automation tool by Kushagra Dhawan for building composable pipelines.",
  alternates: {
    canonical: "/kookie-flow",
  },
};

export default function KookieFlowPage() {
  const posts = getAllPosts();
  const kookieFlowPosts = posts.filter((post) =>
    post.tags.some((tag) => tag.toLowerCase() === "kookie-flow")
  );

  return <AboutKookieFlow posts={kookieFlowPosts} />;
}
