"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { TistoryPost } from "@/lib/tistory";
import { fetchTistoryPosts } from "@/lib/tistory";

interface BlogClientProps {
  posts: TistoryPost[];
}

export function BlogClient({ posts: initialPosts }: Readonly<BlogClientProps>) {
  const [posts, setPosts] = useState<TistoryPost[]>(initialPosts);
  const [loading, setLoading] = useState(initialPosts.length === 0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialPosts.length > 0) return;

    const loadPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await fetchTistoryPosts();
        setPosts(fetchedPosts);
        setError(null);
      } catch (err) {
        console.error("Failed to load blog posts:", err);
        setError("블로그 글을 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    void loadPosts();
  }, [initialPosts.length]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return "";

    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <div className="subpage-shell blog-page">
      <section className="subpage-hero subpage-hero--row">
        <div>
          <p className="section-kicker">Learning Notes</p>
          <h1>프로젝트를 하며 정리한 기록을 모았습니다.</h1>
          <p>
            구현하면서 막혔던 부분, 선택한 기술의 이유, 다시 정리해두고 싶은 내용을 블로그에 남기고 있습니다.
            포트폴리오의 프로젝트와 함께 보면 작업 과정을 더 자세히 볼 수 있습니다.
          </p>
        </div>
        <a href="https://exit0.tistory.com" target="_blank" rel="noopener noreferrer" className="button-secondary">
          Tistory 열기
        </a>
      </section>

      {loading ? (
        <div className="state-panel state-panel--accent">
          <div className="loading-line" />
          <p>블로그 글을 불러오고 있습니다.</p>
        </div>
      ) : error ? (
        <div className="state-panel state-panel--accent">
          <p>{error}</p>
          <a href="https://exit0.tistory.com" target="_blank" rel="noopener noreferrer">
            exit0.tistory.com에서 직접 보기
          </a>
        </div>
      ) : posts.length === 0 ? (
        <div className="state-panel state-panel--accent">
          <p>표시할 글을 찾지 못했습니다.</p>
          <a href="https://exit0.tistory.com" target="_blank" rel="noopener noreferrer">
            최신 글 직접 보기
          </a>
        </div>
      ) : (
        <section className="blog-list">
          {posts.map((post, index) => (
            <a key={post.link} href={post.link} target="_blank" rel="noopener noreferrer" className="blog-row">
              <div className="blog-row__index">{String(index + 1).padStart(2, "0")}</div>
              {post.thumbnail ? (
                <div className="blog-row__image">
                  <Image src={post.thumbnail} alt="" fill className="object-cover" unoptimized sizes="220px" />
                </div>
              ) : (
                <div className="blog-row__image blog-row__image--empty" aria-hidden="true">
                  <span>Note</span>
                </div>
              )}
              <div className="blog-row__body">
                <div className="blog-row__meta">
                  {formatDate(post.pubDate) && <time>{formatDate(post.pubDate)}</time>}
                  {post.category && <span>{post.category}</span>}
                </div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
            </a>
          ))}
        </section>
      )}
    </div>
  );
}
