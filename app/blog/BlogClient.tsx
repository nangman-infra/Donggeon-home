"use client";

import { motion } from "framer-motion";
import type { TistoryPost } from "@/lib/tistory";
import { fetchTistoryPosts } from "@/lib/tistory";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BlogClientProps {
  posts: TistoryPost[];
}

export function BlogClient({ posts: initialPosts }: BlogClientProps) {
  const [posts, setPosts] = useState<TistoryPost[]>(initialPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const fetchedPosts = await fetchTistoryPosts();
      setPosts(fetchedPosts);
      setError(null);
    } catch (err) {
      console.error("Failed to load blog posts:", err);
      setError("블로그 글을 불러오는데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-end justify-between mb-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-accent font-mono">$</span> cat blog/
              </h1>
              <p className="text-xl text-muted-foreground">Thoughts & Learning</p>
            </div>
            <a
              href="https://exit0.tistory.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              exit0.tistory.com →
            </a>
          </div>

          {/* Posts */}
          {loading ? (
            <div className="p-12 bg-muted/30 border border-border rounded-xl text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-sm font-mono text-muted-foreground">loading posts...</p>
            </div>
          ) : error ? (
            <div className="p-12 bg-muted/30 border border-border rounded-xl text-center">
              <p className="text-sm text-red-500 mb-4 font-mono">{error}</p>
              <p className="text-sm text-muted-foreground">
                Visit directly:{" "}
                <a
                  href="https://exit0.tistory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-mono"
                >
                  exit0.tistory.com
                </a>
              </p>
            </div>
          ) : posts.length === 0 ? (
            <div className="p-12 bg-muted/30 border border-border rounded-xl text-center">
              <p className="text-sm font-mono text-muted-foreground">no posts yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post, index) => (
                <motion.a
                  key={post.link}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="block p-6 bg-muted/30 border border-border rounded-xl hover:border-primary transition-all group"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {post.thumbnail && (
                      <div className="relative w-full md:w-48 h-48 md:h-32 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={post.thumbnail}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          unoptimized
                        />
                      </div>
                    )}

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <time className="text-xs font-mono text-muted-foreground">
                          {formatDate(post.pubDate)}
                        </time>
                        {post.category && (
                          <>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-xs font-mono text-muted-foreground">
                              {post.category}
                            </span>
                          </>
                        )}
                      </div>

                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
