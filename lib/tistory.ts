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
    // CORS 우회를 위한 RSS 프록시 사용
    const RSS_URL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://exit0.tistory.com/rss");
    
    const response = await fetch(RSS_URL, {
      cache: "no-store", // 항상 최신 데이터 가져오기
    });

    if (!response.ok) {
      console.error(`RSS fetch failed with status: ${response.status}`);
      return [];
    }

    const data = await response.json();
    
    if (!data || !data.items) {
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

interface RSSItem {
  title?: string;
  link?: string;
  description?: string;
  pubDate?: string;
  categories?: string[];
}

function parseRSSJson(items: RSSItem[]): TistoryPost[] {
  const posts: TistoryPost[] = [];
  
  items.forEach((item) => {
    // 썸네일 이미지 추출 (description에서 첫 번째 img 태그)
    const imgMatch = item.description?.match(/<img[^>]+src="([^">]+)"/);
    const thumbnail = imgMatch ? imgMatch[1] : undefined;

    // HTML 태그 제거하고 텍스트만 추출
    let cleanDescription = item.description || "";
    
    // HTML 엔티티 먼저 디코딩
    cleanDescription = cleanDescription
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
      title: item.title || "제목 없음",
      link: item.link || "#",
      description: cleanDescription,
      pubDate: item.pubDate || new Date().toISOString(),
      category: item.categories?.[0] || undefined,
      thumbnail,
    });
  });

  return posts;
}




