import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

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
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("renders fetched posts", async () => {
    vi.mocked(fetchTistoryPosts).mockResolvedValue([
      {
        title: "Test Post",
        link: "https://example.com/post",
        description: "Short description",
        pubDate: "2026-04-24T00:00:00.000Z",
        category: "DevOps",
        thumbnail: "https://example.com/thumb.png",
      },
    ]);

    render(React.createElement(BlogClient, { posts: [] }));

    await waitFor(() => {
      expect(screen.getByText("Test Post")).toBeInTheDocument();
    });
    expect(screen.getAllByText("Short description").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("DevOps").length).toBeGreaterThanOrEqual(1);
  });

  it("renders an empty state when there are no posts", async () => {
    vi.mocked(fetchTistoryPosts).mockResolvedValue([]);

    render(React.createElement(BlogClient, { posts: [] }));

    await waitFor(() => {
      expect(fetchTistoryPosts).toHaveBeenCalled();
    });
    expect(screen.getByRole("link", { name: /Tistory/i })).toHaveAttribute("href", "https://exit0.tistory.com");
  });

  it("renders a fallback link when fetch fails", async () => {
    vi.mocked(fetchTistoryPosts).mockRejectedValueOnce(new Error("boom"));

    render(React.createElement(BlogClient, { posts: [] }));

    await waitFor(() => {
      expect(screen.getByText(/exit0\.tistory\.com/i)).toBeInTheDocument();
    });
  });
});
