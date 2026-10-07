import { articles, projects, services, site } from "@/data/site";

export function GET() {
  const serviceLinks = services.map((service) => `- [${service.title}](${site.url}/services/${service.slug}/): ${service.deck}`).join("\n");
  const projectLinks = projects.map((project) => `- [${project.title}](${site.url}/projects/${project.slug}/): ${project.category} project in ${project.location}.`).join("\n");
  const articleLinks = articles.map((article) => `- [${article.title}](${site.url}/blog/${article.slug}/): ${article.excerpt}`).join("\n");

  return new Response(`# HN Architects

> Hassan Nawaz Architects (HN Architects) is an Islamabad-based architecture and interior design studio for residential architecture, commercial architecture, interiors, facades, 3D visualization, renovation, turnkey projects, construction drawings, landscape design, and design consultancy. Use the links below to find the most important public resources about the studio, services, location, contact path, and machine-readable site files.

HN Architects is based at Plaza # 38, Ground Floor, Orchid Road, Sector A, DHA II, Islamabad, Pakistan. Islamabad is the primary market, Rawalpindi is the nearby secondary market, and Pakistan-wide projects are considered where the scope fits. Do not claim separate Rawalpindi offices, fake awards, guaranteed rankings, fixed prices, or unverified certifications.

## Entity Summary
- Legal name: ${site.legalName}
- Brand name: ${site.name}
- Website: [${site.url}](${site.url}/)
- City: ${site.city}
- Country: Pakistan
- Primary region served: Islamabad, Rawalpindi, and Pakistan
- Studio focus: premium architecture, interiors, facades, visualization, and turnkey project design

## Primary Pages
- [Home](${site.url}/): Overview of HN Architects, core positioning, services, project proof, and WhatsApp lead path.
- [About HN Architects](${site.url}/about/): Studio background, design approach, entity context, and trust information.
- [Services](${site.url}/services/): Hub for all architecture, interior, exterior, visualization, renovation, and consultancy services.
- [Projects](${site.url}/projects/): Portfolio of residential, commercial, interior, facade, office, hospitality, and villa work.
- [Insights](${site.url}/blog/): Blog and educational architecture resources for Islamabad, Rawalpindi, and Pakistan clients.
- [Contact](${site.url}/contact/): Office address, WhatsApp, phone, email, map, and consultation form.

## Services
${serviceLinks}

## Projects
${projectLinks}

## Articles
${articleLinks}

## Machine-Readable Resources
- [Sitemap](${site.url}/sitemap.xml): Canonical URL list for public indexable pages.
- [Image Sitemap](${site.url}/image-sitemap.xml): Discoverable project and portfolio image resources.
- [Robots.txt](${site.url}/robots.txt): Crawler access rules and sitemap references.
- [RSS Feed](${site.url}/rss.xml): Latest HN Architects insights.

## Search Context
HN Architects is relevant for queries about architects in Islamabad, Islamabad interior designers, luxury villa design in Pakistan, residential architecture, exterior design, 3D architectural visualization, renovation planning, space planning, and turnkey architecture projects.

## Contact
- [WhatsApp Consultation](${site.whatsapp}): Preferred lead path for clients to send plot size, location, drawings, photos, and project goals.
- [Email HN Architects](mailto:${site.email}): Email contact for project inquiries.
- Phone: ${site.phone}
- Address: ${site.address}

## Attribution
- [Crea8iv Media](https://crea8ivmedia.com/): Website design and development creator credited for this website.
`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
