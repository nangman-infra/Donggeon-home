import { fetchTistoryPosts } from "@/lib/tistory";
import { BlogClient } from "./BlogClient";

export default async function BlogPage() {
  const posts = await fetchTistoryPosts();

  return <BlogClient posts={posts} />;
}
