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

export async function fetchTistoryPosts(): Promise<TistoryPost[]> {
  try {
    // RSS2JSON API 사용 (캐시 무력화를 위한 타임스탬프 추가)
    const cacheBustUrl = `https://exit0.tistory.com/rss?_t=${Date.now()}`;
    const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(cacheBustUrl)}`;

    console.log("Fetching RSS via RSS2JSON:", RSS_URL);

    const response = await fetch(RSS_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`RSS fetch failed with status: ${response.status}`);
      return [];
    }

    const data = await response.json();
    console.log("RSS2JSON Response:", data);
    
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
      // Type guard를 사용하여 안전하게 타입 체크
      if (!item || typeof item !== 'object') return;
      
      const itemObj = item as Record<string, unknown>;
      
      // RSS2JSON에서 제공하는 데이터 구조에 맞게 파싱
      const title = toSafeString(itemObj.title);
      const link = toSafeString(itemObj.link);
      const description = toSafeString(itemObj.description) || toSafeString(itemObj.content);
      const pubDate = toSafeString(itemObj.pubDate);
      const categories = itemObj.categories as string[] | undefined;
      const category = Array.isArray(categories) && categories.length > 0 ? categories[0] : undefined;

      // 썸네일 이미지 추출 (description에서 첫 번째 img 태그)
      const imgMatch = /<img[^>]+src="([^">]+)"/i.exec(description);
      const thumbnail = imgMatch ? imgMatch[1] : undefined;

      // HTML 태그 제거하고 텍스트만 추출
      let cleanDescription = description
        .replaceAll("&quot;", '"')
        .replaceAll("&#39;", "'")
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">")
        .replaceAll("&amp;", "&")
        .replaceAll("&nbsp;", " ");

      // HTML 태그 제거
      cleanDescription = cleanDescription
        .replaceAll(/<[^>]*>/g, "")
        .replaceAll(/\s+/g, " ")
        .trim();

      // 150자로 제한
      if (cleanDescription.length > 150) {
        cleanDescription = cleanDescription.substring(0, 150) + "...";
      } else if (cleanDescription.length === 0) {
        cleanDescription = "내용 없음";
      }

      posts.push({
        title: decodeHTML(title),
        link,
        description: cleanDescription,
        pubDate,
        category: category || undefined,
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
