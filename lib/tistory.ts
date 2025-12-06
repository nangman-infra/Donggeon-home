export interface TistoryPost {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  category?: string;
  thumbnail?: string;
}

export async function fetchTistoryPosts(): Promise<TistoryPost[]> {
  try {
    const RSS_URL = "https://exit0.tistory.com/rss";
    
    const response = await fetch(RSS_URL, {
      cache: "no-store", // 항상 최신 데이터 가져오기
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!response.ok) {
      console.error(`RSS fetch failed with status: ${response.status}`);
      return [];
    }

    const xmlText = await response.text();
    
    if (!xmlText || xmlText.length === 0) {
      console.error("Empty RSS response");
      return [];
    }
    
    const posts = parseRSS(xmlText);
    
    if (posts.length === 0) {
      console.warn("No posts parsed from RSS");
    }
    
    return posts;
  } catch (error) {
    console.error("Error fetching Tistory posts:", error);
    return [];
  }
}

function parseRSS(xmlText: string): TistoryPost[] {
  const posts: TistoryPost[] = [];
  
  // <item> 태그들을 찾아서 파싱
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const items = xmlText.match(itemRegex);

  if (!items) return posts;

  items.forEach((item) => {
    const title = extractTag(item, "title");
    const link = extractTag(item, "link");
    const description = extractTag(item, "description");
    const pubDate = extractTag(item, "pubDate");
    const category = extractTag(item, "category");

    // 썸네일 이미지 추출 (description에서 첫 번째 img 태그)
    const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
    const thumbnail = imgMatch ? imgMatch[1] : undefined;

    // HTML 엔티티 먼저 디코딩
    let cleanDescription = description
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&nbsp;/g, " ");

    // HTML 태그 제거
    cleanDescription = cleanDescription
      .replace(/<[^>]*>/g, "")
      .replace(/\s+/g, " ")
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

  return posts;
}

function extractTag(xml: string, tagName: string): string {
  const regex = new RegExp(`<${tagName}(?:[^>]*)><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tagName}>|<${tagName}(?:[^>]*)>([\\s\\S]*?)<\\/${tagName}>`, "i");
  const match = xml.match(regex);
  return match ? (match[1] || match[2] || "").trim() : "";
}

function decodeHTML(html: string): string {
  return html
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}
