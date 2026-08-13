import { articles, projects, services, site } from "@/data/site";

export function GET() {
  const staticPages = ["", "about/", "services/", "projects/", "blog/", "contact/"];
  const servicePages = services.map((service) => `services/${service.slug}/`);
  const projectPages = projects.map((project) => `projects/${project.slug}/`);
  const articlePages = articles.map((article) => `blog/${article.slug}/`);
  const urls = [...staticPages, ...servicePages, ...projectPages, ...articlePages]
    .map((path) => `<url><loc>${site.url}/${path}</loc></url>`)
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { "Content-Type": "application/xml" },
  });
}
