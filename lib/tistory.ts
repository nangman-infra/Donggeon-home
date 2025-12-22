export interface TistoryPost {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  category?: string;
  thumbnail?: string;
}

export async function fetchTistoryPosts(): Promise<TistoryPost[]> {
  // 여러 RSS 프록시 서비스를 순차적으로 시도
  const proxies = [
    {
      name: "RSS2JSON",
      url: (rssUrl: string) => `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&count=20`,
      parser: "json"
    },
    {
      name: "CORS Anywhere",
      url: (rssUrl: string) => `https://cors-anywhere.herokuapp.com/${rssUrl}`,
      parser: "xml"
    },
    {
      name: "ThingProxy",
      url: (rssUrl: string) => `https://thingproxy.freeboard.io/fetch/${rssUrl}`,
      parser: "xml"
    }
  ];

  const rssUrl = "https://exit0.tistory.com/rss";
  
  for (const proxy of proxies) {
    try {
      console.log(`Trying ${proxy.name}...`);
      const proxyUrl = proxy.url(rssUrl);
      
      const response = await fetch(proxyUrl, {
        cache: "no-store",
        headers: {
          'Accept': proxy.parser === 'json' ? 'application/json' : 'application/xml, text/xml',
        }
      });

      if (!response.ok) {
        console.error(`${proxy.name} failed with status: ${response.status}`);
        continue;
      }

      if (proxy.parser === 'json') {
        const data = await response.json();
        console.log(`${proxy.name} Response:`, data);
        
        if (data && data.items && data.items.length > 0) {
          return parseRSSJson(data.items);
        }
      } else {
        const xmlText = await response.text();
        console.log(`${proxy.name} XML length:`, xmlText.length);
        
        if (xmlText && xmlText.includes('<item>')) {
          const posts = parseRSSXML(xmlText);
          if (posts.length > 0) {
            return posts;
          }
        }
      }
    } catch (error) {
      console.error(`Error with ${proxy.name}:`, error);
      continue;
    }
  }

  console.error("All RSS proxy methods failed");
  return [];
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




