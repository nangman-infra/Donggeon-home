"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/sections/Shell";
import type { TistoryPost } from "@/lib/tistory";
import { fetchTistoryPosts } from "@/lib/tistory";

interface BlogClientProps {
  posts: TistoryPost[];
}

const TISTORY_URL = "https://exit0.tistory.com";

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

    return date.toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" });
  };

  return (
    <div>
      <PageHeader
        eyebrow="Learning Notes"
        title="제품을 만들며 정리한 기술 노트"
        desc="구현하면서 막혔던 지점, 선택한 기술의 이유, 다시 정리해둘 만한 내용을 블로그에 남깁니다."
        action={
          <a href={TISTORY_URL} target="_blank" rel="noopener noreferrer" className="group btn-ghost shrink-0">
            Tistory 열기 <span className="link-arrow">↗</span>
          </a>
        }
      />

      <section className="mx-auto w-full max-w-5xl px-6 pb-24 pt-12 sm:px-8 sm:pb-32 sm:pt-16">
        {loading ? (
          <div className="card grid place-items-center gap-4 p-12 text-center">
            <div className="h-1 w-36 overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-2/5 animate-pulse rounded-full bg-brand" />
            </div>
            <p className="text-sm text-slate-500">블로그 글을 불러오고 있습니다.</p>
          </div>
        ) : error ? (
          <div className="card grid place-items-center gap-3 p-12 text-center">
            <p className="text-sm text-slate-500">{error}</p>
            <a href={TISTORY_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-900 hover:text-brand">
              exit0.tistory.com에서 직접 보기 ↗
            </a>
          </div>
        ) : posts.length === 0 ? (
          <div className="card grid place-items-center gap-3 p-12 text-center">
            <p className="text-sm text-slate-500">표시할 글을 찾지 못했습니다.</p>
            <a href={TISTORY_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-900 hover:text-brand">
              최신 글 직접 보기 ↗
            </a>
          </div>
        ) : (
          <div className="grid gap-4">
            {posts.map((post) => (
              <a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:gap-6"
              >
                {post.thumbnail ? (
                  <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-50 sm:h-24 sm:w-40">
                    <Image src={post.thumbnail} alt="" fill className="object-cover" unoptimized sizes="220px" />
                  </div>
                ) : (
                  <div className="grid h-40 w-full shrink-0 place-items-center rounded-xl border border-gray-100 bg-gray-50 font-mono text-xs font-semibold text-slate-400 sm:h-24 sm:w-40">
                    Note
                  </div>
                )}
                <div className="min-w-0 sm:py-1">
                  <div className="flex flex-wrap gap-3 font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {formatDate(post.pubDate) && <time>{formatDate(post.pubDate)}</time>}
                    {post.category && <span>{post.category}</span>}
                  </div>
                  <h2 className="mt-2 text-lg font-bold tracking-tight text-slate-900">{post.title}</h2>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-500">{post.description}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
