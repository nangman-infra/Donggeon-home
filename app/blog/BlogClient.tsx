"use client";

import { motion } from "framer-motion";
import type { TistoryPost } from "@/lib/tistory";
import Image from "next/image";

interface BlogClientProps {
  posts: TistoryPost[];
}

export function BlogClient({ posts }: BlogClientProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">블로그</h1>
          <a
            href="https://exit0.tistory.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Tistory 방문 →
          </a>
        </div>

        {posts.length === 0 ? (
          <p className="text-muted-foreground">
            블로그 글을 불러오는 중입니다...
          </p>
        ) : (
          <div className="max-w-3xl space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="border-b pb-8 last:border-b-0"
              >
                <div className="flex gap-6">
                  {post.thumbnail && (
                    <div className="hidden md:block flex-shrink-0">
                      <div className="relative w-40 h-28 rounded-lg overflow-hidden">
                        <Image
                          src={post.thumbnail}
                          alt={post.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <time className="text-sm text-muted-foreground">
                      {formatDate(post.pubDate)}
                    </time>
                    {post.category && (
                      <span className="ml-3 text-sm px-2 py-1 bg-secondary rounded">
                        {post.category}
                      </span>
                    )}
                    
                    <h2 className="text-2xl font-bold mt-2 mb-3">
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </a>
                    </h2>
                    
                    <p className="text-muted-foreground mb-4">
                      {post.description}
                    </p>
                    
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      자세히 보기 →
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
