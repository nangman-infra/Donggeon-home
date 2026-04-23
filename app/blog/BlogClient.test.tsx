import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { BlogClient } from "@/app/blog/BlogClient";
import { fetchTistoryPosts } from "@/lib/tistory";

vi.mock("@/lib/tistory", async () => {
  const actual = await vi.importActual<typeof import("@/lib/tistory")>("@/lib/tistory");
  return {
    ...actual,
    fetchTistoryPosts: vi.fn(),
  };
});

describe("blog client", () => {
  it("renders fetched posts", async () => {
    vi.mocked(fetchTistoryPosts).mockResolvedValue([
      {
        title: "테스트 포스트",
        link: "https://example.com/post",
        description: "설명",
        pubDate: "2026-04-24T00:00:00.000Z",
        category: "DevOps",
        thumbnail: "https://example.com/thumb.png",
      },
    ]);

    render(React.createElement(BlogClient, { posts: [] }));

    await waitFor(() => {
      expect(screen.getByText("테스트 포스트")).toBeInTheDocument();
    });
  });

  it("renders error state when fetch fails", async () => {
    vi.mocked(fetchTistoryPosts).mockRejectedValueOnce(new Error("boom"));

    render(React.createElement(BlogClient, { posts: [] }));

    await waitFor(() => {
      expect(screen.getByText("블로그 글을 불러오는데 실패했습니다.")).toBeInTheDocument();
    });
  });
});
