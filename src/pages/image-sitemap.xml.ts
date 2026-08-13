import { asset, projects, site } from "@/data/site";

export function GET() {
  const urls = projects.map((project) => {
    const loc = `${site.url}/projects/${project.slug}/`;
    const images = project.gallery
      .map((image) => `<image:image><image:loc>${site.url}${asset(image)}</image:loc><image:title>${project.title}</image:title></image:image>`)
      .join("");
    return `<url><loc>${loc}</loc>${images}</url>`;
  }).join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urls}</urlset>`, {
    headers: { "Content-Type": "application/xml" },
  });
}
