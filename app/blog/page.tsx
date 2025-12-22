import { BlogClient } from "./BlogClient";
import { fetchTistoryPosts } from "@/lib/tistory";

export default async function BlogPage() {
  // 서버 사이드에서 RSS 데이터 가져오기
  const posts = await fetchTistoryPosts();
  
  return <BlogClient posts={posts} />;
}
