import { describe, expect, it } from "vitest";

import { decodeHTML, parseRSSJson, toSafeString } from "@/lib/tistory";

describe("tistory helpers", () => {
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
  });

  it("decodes html entities", () => {
    expect(decodeHTML("&lt;DevOps&gt; &amp; Cloud")).toBe("<DevOps> & Cloud");
  });
});
