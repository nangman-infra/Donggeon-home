export interface TistoryPost {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  category?: string;
  thumbnail?: string;
}

export function toSafeString(value: unknown): string {
  return typeof value === "string" || typeof value === "number" ? String(value) : "";
}

export function stripHtmlTags(value: string): string {
  let result = "";
  let insideTag = false;

  for (const char of value) {
    if (char === "<") {
      insideTag = true;
      continue;
    }

    if (char === ">" && insideTag) {
      insideTag = false;
      continue;
    }

    if (!insideTag) {
      result += char;
    }
  }

  return result;
}

export function normalizeWhitespace(value: string): string {
  let result = "";
  let previousWasWhitespace = false;

  for (const char of value) {
    if (isWhitespace(char)) {
      if (!previousWasWhitespace) {
        result += " ";
      }
      previousWasWhitespace = true;
      continue;
    }

    result += char;
    previousWasWhitespace = false;
  }

  return result.trim();
}

export function extractFirstImageSrc(html: string): string | undefined {
  const lowerHtml = html.toLowerCase();
  let searchFrom = 0;

  while (searchFrom < lowerHtml.length) {
    const imgStart = lowerHtml.indexOf("<img", searchFrom);
    if (imgStart === -1) return undefined;

    const tagEnd = lowerHtml.indexOf(">", imgStart + 4);
    if (tagEnd === -1) return undefined;

    const src = readAttribute(html.slice(imgStart, tagEnd + 1), "src");
    if (src) return src;

    searchFrom = tagEnd + 1;
  }

  return undefined;
}

function readAttribute(tag: string, attributeName: string): string | undefined {
  const lowerTag = tag.toLowerCase();
  let index = 0;

  while (index < lowerTag.length) {
    const attrIndex = lowerTag.indexOf(attributeName, index);
    if (attrIndex === -1) return undefined;

    const before = attrIndex === 0 ? " " : lowerTag[attrIndex - 1];
    const after = lowerTag[attrIndex + attributeName.length] ?? "";
    const hasNameBoundary = isAttributeBoundaryBefore(before) && isAttributeBoundaryAfter(after);

    if (!hasNameBoundary) {
      index = attrIndex + attributeName.length;
      continue;
    }

    let cursor = attrIndex + attributeName.length;
    while (cursor < tag.length && isWhitespace(tag[cursor])) cursor += 1;

    if (tag[cursor] !== "=") {
      index = cursor + 1;
      continue;
    }

    cursor += 1;
    while (cursor < tag.length && isWhitespace(tag[cursor])) cursor += 1;

    const quote = tag[cursor];
    if (quote === '"' || quote === "'") {
      cursor += 1;
      const valueStart = cursor;
      while (cursor < tag.length && tag[cursor] !== quote) cursor += 1;
      return tag.slice(valueStart, cursor);
    }

    const valueStart = cursor;
    while (cursor < tag.length && !isWhitespace(tag[cursor]) && tag[cursor] !== ">") cursor += 1;
    return tag.slice(valueStart, cursor);
  }

  return undefined;
}

function isWhitespace(char: string): boolean {
  return char === " " || char === "\n" || char === "\r" || char === "\t" || char === "\f";
}

function isAttributeBoundaryBefore(char: string): boolean {
  return isWhitespace(char) || char === "<" || char === "/" || char === ">";
}

function isAttributeBoundaryAfter(char: string): boolean {
  return isWhitespace(char) || char === "=" || char === "/" || char === ">";
}

export async function fetchTistoryPosts(): Promise<TistoryPost[]> {
  try {
    const rssUrl = "https://exit0.tistory.com/rss";
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.error(`RSS fetch failed with status: ${response.status}`);
      return [];
    }

    const data = await response.json();

    if (data.status === "error") {
      console.error("RSS2JSON API Error:", data.message);
      return [];
    }

    if (!data?.items) {
      console.error("Invalid RSS response");
      return [];
    }

    const posts = parseRSSJson(data.items);

    if (posts.length === 0) {
      console.warn("No posts parsed from RSS");
    }

    return posts;
  } catch (error) {
    console.error("Error fetching Tistory posts:", error);
    return [];
  }
}

export function parseRSSJson(items: unknown[]): TistoryPost[] {
  const posts: TistoryPost[] = [];

  try {
    items.forEach((item: unknown) => {
      if (!item || typeof item !== "object") return;

      const itemObj = item as Record<string, unknown>;
      const title = toSafeString(itemObj.title);
      const link = toSafeString(itemObj.link);
      const description = toSafeString(itemObj.description) || toSafeString(itemObj.content);
      const pubDate = toSafeString(itemObj.pubDate);
      const categories = itemObj.categories as string[] | undefined;
      const category = Array.isArray(categories) && categories.length > 0 ? categories[0] : undefined;
      const thumbnail = extractFirstImageSrc(description);

      let cleanDescription = decodeHTML(description);
      cleanDescription = normalizeWhitespace(stripHtmlTags(cleanDescription));

      if (cleanDescription.length > 150) {
        cleanDescription = `${cleanDescription.substring(0, 150)}...`;
      } else if (cleanDescription.length === 0) {
        cleanDescription = "내용 없음";
      }

      posts.push({
        title: decodeHTML(title),
        link,
        description: cleanDescription,
        pubDate,
        category,
        thumbnail,
      });
    });
  } catch (error) {
    console.error("Error parsing RSS JSON:", error);
  }

  return posts;
}

export function decodeHTML(html: string): string {
  return html
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&nbsp;", " ");
}
