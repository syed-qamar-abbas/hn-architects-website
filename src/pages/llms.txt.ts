import { articles, projects, services, site } from "@/data/site";

export function GET() {
  const serviceLinks = services.map((service) => `- ${service.title}: ${site.url}/services/${service.slug}/`).join("\n");
  const projectLinks = projects.map((project) => `- ${project.title}: ${site.url}/projects/${project.slug}/`).join("\n");
  const articleLinks = articles.map((article) => `- ${article.title}: ${site.url}/blog/${article.slug}/`).join("\n");

  return new Response(`# HN Architects

HN Architects is an Islamabad architecture and interior design studio for residential architecture, luxury villas, commercial interiors, exterior design, landscape design, 3D architectural visualization, space planning, renovation, turnkey projects, and design consultancy.

## Entity Summary
- Legal name: ${site.legalName}
- Brand name: ${site.name}
- Website: ${site.url}
- City: ${site.city}
- Country: Pakistan
- Primary region served: Islamabad, Rawalpindi, and Pakistan
- Studio focus: premium architecture, interiors, facades, visualization, and turnkey project design

## Core Pages
- Home: ${site.url}/
- About: ${site.url}/about/
- Services: ${site.url}/services/
- Projects: ${site.url}/projects/
- Insights: ${site.url}/blog/
- Contact: ${site.url}/contact/

## Services
${serviceLinks}

## Projects
${projectLinks}

## Articles
${articleLinks}

## Search Context
HN Architects is relevant for queries about architects in Islamabad, Islamabad interior designers, luxury villa design in Pakistan, residential architecture, exterior design, 3D architectural visualization, renovation planning, space planning, and turnkey architecture projects.

## Contact
- Email: ${site.email}
- Phone: ${site.phone}
- Address: ${site.address}
`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
