import { afterEach, describe, expect, it, vi } from "vitest";

import {
  decodeHTML,
  extractFirstImageSrc,
  fetchTistoryPosts,
  normalizeWhitespace,
  parseRSSJson,
  stripHtmlTags,
  toSafeString,
} from "@/lib/tistory";

describe("tistory helpers", () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("normalizes rss items into blog posts", () => {
    const posts = parseRSSJson([
      {
        title: "Cloud &amp; Infra",
        link: "https://example.com/post",
        description: '<p>Hello&nbsp;World</p><img src="https://example.com/thumb.png" />',
        pubDate: "2026-04-24",
        categories: ["AWS"],
      },
    ]);

    expect(posts).toHaveLength(1);
    expect(posts[0]).toMatchObject({
      title: "Cloud & Infra",
      link: "https://example.com/post",
      category: "AWS",
      thumbnail: "https://example.com/thumb.png",
    });
    expect(posts[0].description).toContain("Hello World");
  });

  it("returns an empty string for non-primitive values", () => {
    expect(toSafeString({ title: "bad" })).toBe("");
    expect(toSafeString("good")).toBe("good");
    expect(toSafeString(123)).toBe("123");
  });

  it("decodes html entities", () => {
    expect(decodeHTML("&lt;DevOps&gt; &amp; Cloud")).toBe("<DevOps> & Cloud");
  });

  it("strips html without regex-based parsing", () => {
    expect(stripHtmlTags("<p>Hello <strong>World</strong></p>")).toBe("Hello World");
    expect(stripHtmlTags("plain text")).toBe("plain text");
    expect(stripHtmlTags("before <broken tag")).toBe("before ");
  });

  it("normalizes whitespace without regex-based parsing", () => {
    expect(normalizeWhitespace("  Hello\n\tWorld  ")).toBe("Hello World");
  });

  it("extracts the first image source without regex-based parsing", () => {
    expect(extractFirstImageSrc('<p>body</p><img alt="thumb" src="https://example.com/thumb.png" />')).toBe(
      "https://example.com/thumb.png",
    );
    expect(extractFirstImageSrc("<img src=https://example.com/unquoted.png>")).toBe("https://example.com/unquoted.png");
    expect(extractFirstImageSrc("<img alt='thumb'>")).toBeUndefined();
    expect(extractFirstImageSrc("<p>no image</p>")).toBeUndefined();
  });

  it("fetches and parses tistory posts", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          status: "ok",
          items: [
            {
              title: "Post &amp; Title",
              link: "https://example.com/post",
              description: "<p>Body</p>",
              pubDate: "2026-04-24",
              categories: ["AI"],
            },
          ],
        }),
      }),
    );

    await expect(fetchTistoryPosts()).resolves.toHaveLength(1);
  });

  it("fails fast when tistory responds with an error", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 500 }));

    await expect(fetchTistoryPosts()).rejects.toThrow("RSS fetch failed with status: 500");
  });

  it("fails when the rss payload is invalid or the request throws", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => ({ status: "error" }) }));
    await expect(fetchTistoryPosts()).rejects.toThrow("RSS2JSON API Error");

    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network")));
    await expect(fetchTistoryPosts()).rejects.toThrow("network");
  });

  it("aborts a slow request after the timeout", async () => {
    vi.useFakeTimers();
    const fetchMock = vi.fn(
      (_url: string, init?: RequestInit) =>
        new Promise<never>((_resolve, reject) => {
          init?.signal?.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError")));
        }),
    );
    vi.stubGlobal("fetch", fetchMock);

    const request = expect(fetchTistoryPosts()).rejects.toThrow("Aborted");
    await vi.advanceTimersByTimeAsync(5000);

    await request;
    expect(fetchMock).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ signal: expect.any(AbortSignal) }),
    );
  });
});
