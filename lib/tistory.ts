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
    // RSS2JSON API 사용하되 더 강력한 캐시 무력화
    const timestamp = new Date().getTime();
    const randomParam = Math.random().toString(36).substring(7);
    const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`https://exit0.tistory.com/rss`)}&count=20&_=${timestamp}&r=${randomParam}`;
    
    console.log("Fetching with cache busting:", RSS_URL);
    
    const response = await fetch(RSS_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`RSS fetch failed with status: ${response.status}`);
      return [];
    }

    const data = await response.json();
    console.log("RSS2JSON Response:", data);
    
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

function parseRSSJson(items: any[]): TistoryPost[] {
  const posts: TistoryPost[] = [];
  
  try {
    items.forEach((item) => {
      // RSS2JSON에서 제공하는 데이터 구조에 맞게 파싱
      const title = item.title || "";
      const link = item.link || "";
      const description = item.description || item.content || "";
      const pubDate = item.pubDate || "";
      const category = item.categories && item.categories.length > 0 ? item.categories[0] : undefined;

      // 썸네일 이미지 추출 (description에서 첫 번째 img 태그)
      const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
      const thumbnail = imgMatch ? imgMatch[1] : undefined;

      // HTML 태그 제거하고 텍스트만 추출
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
  } catch (error) {
    console.error("Error parsing RSS JSON:", error);
  }

  return posts;
}

function parseRSSXML(xmlText: string): TistoryPost[] {
  const posts: TistoryPost[] = [];
  
  try {
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

      // HTML 태그 제거하고 텍스트만 추출
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
  } catch (error) {
    console.error("Error parsing RSS XML:", error);
  }

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




