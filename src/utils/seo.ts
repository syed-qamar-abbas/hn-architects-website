import { agencyAttribution, agencyAttributionUrl, asset, services, site } from "@/data/site";

type BreadcrumbItem = {
  name: string;
  url: string;
};

export const absoluteAsset = (image: string) => new URL(asset(image), site.url).toString();

export const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": `${site.url}/#organization`,
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  logo: `${site.url}${asset("hn-logo.webp")}`,
  image: `${site.url}/og.webp`,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plaza # 38, Ground Floor, Orchid Road, Sector A, DHA II",
    addressLocality: site.city,
    addressRegion: "Islamabad Capital Territory",
    addressCountry: site.country,
  },
  areaServed: [
    { "@type": "City", name: "Islamabad" },
    { "@type": "City", name: "Rawalpindi" },
    { "@type": "Country", name: "Pakistan" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone,
    contactType: "customer service",
    areaServed: "PK",
    availableLanguage: ["en", "ur"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Architecture and interior design services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.deck,
        areaServed: ["Islamabad", "Rawalpindi", "Pakistan"],
        url: `${site.url}/services/${service.slug}/`,
      },
    })),
  },
  knowsAbout: [
    "Architects in Islamabad",
    "Interior Designers in Islamabad",
    "Luxury Villa Architecture",
    "Exterior Design",
    "3D Architectural Visualization",
    "Space Planning",
    "Turnkey Architecture Projects",
  ],
});

export const agencyOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${agencyAttribution.agencyUrl.replace(/\/$/, "")}/#organization`,
  name: agencyAttribution.agencyName,
  url: agencyAttribution.agencyUrl,
  logo: {
    "@type": "ImageObject",
    url: agencyAttribution.logo,
  },
  sameAs: agencyAttribution.sameAs,
  contactPoint: {
    "@type": "ContactPoint",
    email: agencyAttribution.contact.email,
    telephone: agencyAttribution.contact.phone,
    contactType: "sales",
    areaServed: "PK",
    availableLanguage: ["en", "ur"],
  },
  address: {
    "@type": "PostalAddress",
    ...agencyAttribution.contact.address,
  },
  founder: {
    "@type": "Person",
    name: agencyAttribution.founder.name,
    jobTitle: agencyAttribution.founder.jobTitle,
  },
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Website design and development",
      provider: {
        "@id": `${agencyAttribution.agencyUrl.replace(/\/$/, "")}/#organization`,
      },
    },
  },
  subjectOf: {
    "@type": "CreativeWork",
    name: "HN Architects website",
    url: site.url,
  },
  mainEntityOfPage: agencyAttributionUrl(agencyAttribution),
});
