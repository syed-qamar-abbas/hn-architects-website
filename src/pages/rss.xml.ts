import { articles, site } from "@/data/site";

export function GET() {
  const items = articles.map((article) => `<item>
  <title><![CDATA[${article.title}]]></title>
  <link>${site.url}/blog/${article.slug}/</link>
  <guid>${site.url}/blog/${article.slug}/</guid>
  <description><![CDATA[${article.excerpt}]]></description>
</item>`).join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>HN Architects Insights</title>
  <link>${site.url}/blog/</link>
  <description>Architecture, interior design, planning, and visualization insights from HN Architects.</description>
  ${items}
</channel></rss>`, {
    headers: { "Content-Type": "application/rss+xml" },
  });
}
