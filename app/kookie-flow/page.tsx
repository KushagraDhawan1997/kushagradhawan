import { AboutKookieFlow } from "./about-kookie-flow";
import { getAllPosts } from "@/lib/articles";

export default function KookieFlowPage() {
  const posts = getAllPosts();
  const kookieFlowPosts = posts.filter((post) =>
    post.tags.some((tag) => tag.toLowerCase() === "kookie-flow")
  );

  return <AboutKookieFlow posts={kookieFlowPosts} />;
}
