import { site } from "@/data/site";

export function GET() {
  return new Response(`User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${site.url}/sitemap.xml
Sitemap: ${site.url}/image-sitemap.xml
`, {
    headers: { "Content-Type": "text/plain" },
  });
}
