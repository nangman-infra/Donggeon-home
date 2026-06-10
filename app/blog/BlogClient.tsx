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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
    <div className="subpage-shell">
      <section className="subpage-hero subpage-hero--row">
        <div>
          <p className="section-kicker">Learning Notes</p>
          <h1>기술을 배우고 실험한 과정을 기록합니다.</h1>
          <p>
            블로그는 메인 포트폴리오가 아니라 보조 증거입니다. 프로젝트에서 다룬 기술, 실험 과정, 문제 해결
            기록을 더 자세히 남기는 공간입니다.
          </p>
        </div>
        <a href="https://exit0.tistory.com" target="_blank" rel="noopener noreferrer" className="button-secondary">
          Tistory 보기
        </a>
      </section>

      {loading ? (
        <div className="state-panel">
          <div className="loading-line" />
          <p>블로그 글을 불러오는 중입니다.</p>
        </div>
      ) : error ? (
        <div className="state-panel">
          <p>{error}</p>
          <a href="https://exit0.tistory.com" target="_blank" rel="noopener noreferrer">
            exit0.tistory.com에서 직접 보기
          </a>
        </div>
      ) : posts.length === 0 ? (
        <div className="state-panel">
          <p>아직 표시할 글이 없습니다.</p>
        </div>
      ) : (
        <section className="blog-list">
          {posts.map((post) => (
            <a key={post.link} href={post.link} target="_blank" rel="noopener noreferrer" className="blog-row">
              {post.thumbnail && (
                <div className="blog-row__image">
                  <Image src={post.thumbnail} alt={post.title} fill className="object-cover" unoptimized />
                </div>
              )}
              <div className="blog-row__body">
                <div className="blog-row__meta">
                  <time>{formatDate(post.pubDate)}</time>
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
