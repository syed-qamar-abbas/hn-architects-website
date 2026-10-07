export const site = {
  name: "HN Architects",
  legalName: "Hassan Nawaz Architects",
  url: "https://hassannawazarchitects.com",
  email: "hnarchitects@gmail.com",
  phone: "+92 332 219 6100",
  phoneAlt: "+92 339 200 1959",
  whatsapp: "https://wa.me/923322196100",
  address: "Plaza # 38, Ground Floor, Orchid Road, Sector A, DHA II, Islamabad",
  city: "Islamabad",
  country: "PK",
  tagline: "Designing spaces. Defining experiences.",
};

export type AttributionType = "homepage" | "portfolio" | "case-study";

export type AgencyAttributionConfig = {
  agencyName: string;
  agencyUrl: string;
  attributionType: AttributionType;
  clientSlug: string;
  logo?: string;
  sameAs?: string[];
  contact?: {
    email?: string;
    phone?: string;
    address?: {
      streetAddress?: string;
      addressLocality?: string;
      postalCode?: string;
      addressCountry?: string;
    };
  };
  founder?: {
    name: string;
    jobTitle?: string;
  };
};

export const agencyAttribution = {
  agencyName: "Crea8iv Media",
  agencyUrl: "https://crea8ivmedia.com",
  attributionType: "homepage" as AttributionType,
  clientSlug: "",
  logo: "https://crea8ivmedia.com/favicon.ico",
  sameAs: [
    "https://www.instagram.com/crea8ivmedia/",
    "https://pk.linkedin.com/company/crea8iv-media",
  ],
  contact: {
    email: "info@crea8ivmedia.com",
    phone: "+92 313 5147935",
    address: {
      streetAddress: "Office No 01, 1st Floor, Plaza 54, Phase 4 Civic Center, Bahria Town",
      addressLocality: "Rawalpindi",
      postalCode: "46220",
      addressCountry: "PK",
    },
  },
  founder: {
    name: "Syed Qamar Abbas",
    jobTitle: "Founder & CEO",
  },
} satisfies AgencyAttributionConfig;

export const agencyAttributionUrl = (
  config: Pick<AgencyAttributionConfig, "agencyUrl" | "attributionType" | "clientSlug"> = agencyAttribution,
) => {
  const baseUrl = config.agencyUrl.replace(/\/$/, "");
  const clientSlug = config.clientSlug.trim().replace(/^\/+|\/+$/g, "");

  if (!clientSlug || config.attributionType === "homepage") {
    return baseUrl;
  }

  const pathByType: Record<AttributionType, string> = {
    homepage: "",
    portfolio: "portfolio",
    "case-study": "case-studies",
  };

  return `${baseUrl}/${pathByType[config.attributionType]}/${clientSlug}`;
};

export const asset = (name: string) => `/assets/portfolio/${name}`;
const driveImage = (number: number) => `hn-drive-${String(number).padStart(2, "0")}.webp`;
const driveGallery = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => driveImage(start + index));

export const services = [
  {
    title: "Residential Architecture",
    slug: "residential-architecture",
    image: driveImage(62),
    navImage: driveImage(62),
    deck: "Custom homes, villas, and private retreats shaped around land, light, privacy, and family rituals.",
    benefits: ["Plot intelligence before planning", "Climate-aware spatial zoning", "Luxury facade and lifestyle planning"],
  },
  {
    title: "Commercial Architecture",
    slug: "commercial-architecture",
    image: driveImage(43),
    navImage: driveImage(43),
    deck: "Workplaces, retail destinations, and mixed-use spaces designed for clarity, arrival, and brand presence.",
    benefits: ["Efficient circulation", "Premium public-facing identity", "Future-ready layouts"],
  },
  {
    title: "Interior Design",
    slug: "interior-design",
    image: driveImage(20),
    navImage: driveImage(9),
    deck: "Warm minimal interiors with considered materials, lighting scenes, custom furniture, and tactile balance.",
    benefits: ["Material palettes with restraint", "Lighting-led atmosphere", "Furniture and styling direction"],
  },
  {
    title: "Exterior Design",
    slug: "exterior-design",
    image: driveImage(65),
    navImage: driveImage(65),
    deck: "Modern elevations that bring proportion, shade, depth, and architectural identity to every facade.",
    benefits: ["Facade hierarchy", "Street presence", "Material durability"],
  },
  {
    title: "Landscape Design",
    slug: "landscape-design",
    image: driveImage(1),
    navImage: driveImage(1),
    deck: "Outdoor rooms, arrival courts, pool edges, planting, and terrace compositions that complete the architecture.",
    benefits: ["Outdoor living strategy", "Softscape and hardscape balance", "Evening lighting drama"],
  },
  {
    title: "3D Visualization",
    slug: "3d-visualization",
    image: driveImage(53),
    deck: "Photorealistic views, mood studies, and design previews that make decisions visible before construction.",
    benefits: ["Realistic design confidence", "Material comparison", "Investor and family alignment"],
  },
  {
    title: "Space Planning",
    slug: "space-planning",
    image: driveImage(47),
    deck: "Functional plans that reduce dead areas, improve ventilation, and make every square foot work harder.",
    benefits: ["Better room adjacency", "Ventilation and daylight logic", "Waste reduction"],
  },
  {
    title: "Construction Drawings",
    slug: "construction-drawings",
    image: driveImage(41),
    deck: "Precise technical drawing packages that translate design intent into buildable, coordinated instruction.",
    benefits: ["Clear site execution", "Reduced ambiguity", "Coordinated architectural details"],
  },
  {
    title: "Renovation",
    slug: "renovation",
    image: driveImage(56),
    deck: "Before-and-after transformations that unlock value from existing structures without losing context.",
    benefits: ["Existing-condition analysis", "Upgrade paths by budget", "Visible design transformation"],
  },
  {
    title: "Turnkey Projects",
    slug: "turnkey-projects",
    image: driveImage(58),
    deck: "Design-to-delivery coordination for clients who want one studio protecting the whole experience.",
    benefits: ["Single creative direction", "Material and vendor coordination", "Less client friction"],
  },
  {
    title: "Design Consultancy",
    slug: "design-consultancy",
    image: driveImage(28),
    deck: "Focused guidance for plots, plans, facades, interiors, materials, and visualization before major commitments.",
    benefits: ["Fast expert review", "Practical recommendations", "Confident next steps"],
  },
];

export const valueProps = [
  ["Plot Logic", "Sun, access, bylaws.", "M4 4h16v16H4z M4 10h16 M10 4v16"],
  ["3D Clarity", "See before build.", "M12 3 3 8v8l9 5 9-5V8z M3 8l9 5 9-5 M12 13v8"],
  ["Turnkey", "Concept to handover.", "M20 7 12 3 4 7v10l8 4 8-4z M4 7l8 4 8-4 M12 11v10"],
  ["Timeless", "Warm, edited design.", "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M12 8v4l3 2"],
];

export const stats = [
  ["12+", "Years shaping spaces"],
  ["150+", "Projects delivered"],
  ["11", "Design disciplines"],
  ["98%", "Client satisfaction"],
];

export const ticker = [
  "Residential", "Interiors", "Facades", "3D Visualisation", "Landscape",
  "Turnkey", "Space Planning", "Renovation", "Commercial",
];

export const homeShowcase = [
  ["Villa Arrival", "Luxury Villas", driveImage(65), "/projects/twilight-louvers-villa/"],
  ["Poolside Evenings", "Residential", driveImage(3), "/projects/noor-vista-residence/"],
  ["Master Suite", "Interior", driveImage(15), "/projects/master-suite-retreat/"],
  ["Warm Lounge", "Interior", driveImage(22), "/projects/warm-hearth-interior/"],
  ["Restaurant Glow", "Hospitality", driveImage(33), "/projects/ember-hospitality-lounge/"],
  ["Dining Rhythm", "Hospitality", driveImage(39), "/projects/stone-restaurant-lounge/"],
  ["Wellness Suite", "Commercial", driveImage(43), "/projects/serene-wellness-suite/"],
  ["Executive Outlook", "Office", driveImage(45), "/projects/skyline-executive-office/"],
  ["Principal Study", "Office", driveImage(50), "/projects/copper-principal-office/"],
  ["Modern Facade", "Exterior", driveImage(53), "/projects/bahria-modern-facade/"],
  ["Classic Villa", "Luxury Villas", driveImage(58), "/projects/classic-white-villa/"],
  ["Estate Residence", "Residential", driveImage(71), "/projects/orchid-estate-villa/"],
];

export const processSteps = [
  ["01", "Read the plot", "We study access, views, sun, wind, setbacks, privacy, and the hidden constraints that shape good architecture."],
  ["02", "Define the story", "The brief becomes a spatial narrative: how guests arrive, how family life flows, where light should pause."],
  ["03", "Model the experience", "Plans, elevations, materials, and 3D visuals are tested together before construction decisions harden."],
  ["04", "Detail the build", "The final package turns ambition into coordinated drawings, finishes, and execution guidance."],
];

export const projects = [
  {
    title: "Noor Vista Residence",
    slug: "noor-vista-residence",
    category: "Luxury Villas",
    location: "DHA Islamabad",
    timeline: "14 months",
    image: driveImage(1),
    gallery: driveGallery(1, 8),
    story: "A modern villa sequence with poolside views, evening lighting, deep overhangs, and a restrained stone-and-wood exterior language.",
    materials: ["Charcoal stone", "Warm wood", "Bronze glass", "Soft white plaster"],
  },
  {
    title: "Master Suite Retreat",
    slug: "master-suite-retreat",
    category: "Interior",
    location: "Islamabad",
    timeline: "5 months",
    image: driveImage(9),
    gallery: driveGallery(9, 19),
    story: "A private suite collection designed around warm timber walls, integrated wardrobes, soft lighting, and hotel-grade comfort.",
    materials: ["Oak veneer", "Soft fabric", "Bronzed metal", "Indirect lighting"],
  },
  {
    title: "Warm Hearth Interior",
    slug: "warm-hearth-interior",
    category: "Interior",
    location: "DHA II Islamabad",
    timeline: "7 months",
    image: driveImage(20),
    gallery: driveGallery(20, 28),
    story: "A warm residential interior set with lounge, bedroom, library, and study moments shaped by calm materials and layered lighting.",
    materials: ["Oak", "Linen", "Textured plaster", "Warm stone"],
  },
  {
    title: "Ember Hospitality Lounge",
    slug: "ember-hospitality-lounge",
    category: "Hospitality",
    location: "Islamabad",
    timeline: "9 months",
    image: driveImage(29),
    gallery: driveGallery(29, 35),
    story: "A dramatic hospitality lounge using sculptural ceilings, warm bar lighting, and intimate seating to create a memorable guest rhythm.",
    materials: ["Walnut", "Copper mesh", "Stone counter", "Amber glass"],
  },
  {
    title: "Stone Restaurant Lounge",
    slug: "stone-restaurant-lounge",
    category: "Hospitality",
    location: "Islamabad",
    timeline: "8 months",
    image: driveImage(36),
    gallery: driveGallery(36, 42),
    story: "A restaurant and dining interior set that balances café warmth, restaurant density, staircase movement, and strong lighting identity.",
    materials: ["Textured stone", "Walnut", "Amber lighting", "Brushed metal"],
  },
  {
    title: "Serene Wellness Suite",
    slug: "serene-wellness-suite",
    category: "Commercial",
    location: "Islamabad",
    timeline: "6 months",
    image: driveImage(43),
    gallery: driveGallery(43, 44),
    story: "A clinical wellness suite softened through elegant stations, calm surfaces, and hospitality-grade lighting for a polished service experience.",
    materials: ["Warm porcelain", "Brushed brass", "Oak veneer", "Frosted glass"],
  },
  {
    title: "Skyline Executive Office",
    slug: "skyline-executive-office",
    category: "Office",
    location: "Blue Area Islamabad",
    timeline: "7 months",
    image: driveImage(45),
    gallery: driveGallery(45, 47),
    story: "A high-floor office environment built around skyline views, long work surfaces, clean meeting zones, and premium executive calm.",
    materials: ["Smoked glass", "Leather", "Bronzed metal", "Acoustic wood"],
  },
  {
    title: "Copper Principal Office",
    slug: "copper-principal-office",
    category: "Office",
    location: "Islamabad",
    timeline: "6 months",
    image: driveImage(48),
    gallery: driveGallery(48, 52),
    story: "A moody executive office and study series shaped around privacy, rich surfaces, warm daylight, and focused client conversations.",
    materials: ["Copper accents", "Smoked oak", "Leather", "Textured wall finish"],
  },
  {
    title: "Bahria Modern Facade",
    slug: "bahria-modern-facade",
    category: "Exterior",
    location: "Bahria Town",
    timeline: "8 months",
    image: driveImage(53),
    gallery: driveGallery(53, 57),
    story: "A crisp modern facade set that uses horizontal massing, balcony depth, water reflection, and disciplined material rhythm.",
    materials: ["Travertine tones", "Wood cladding", "Glass balustrade", "Black aluminium"],
  },
  {
    title: "Classic White Villa",
    slug: "classic-white-villa",
    category: "Luxury Villas",
    location: "Islamabad",
    timeline: "12 months",
    image: driveImage(58),
    gallery: driveGallery(58, 61),
    story: "A refined white villa study using symmetry, columns, warm evening light, and landscape edges to create a graceful family retreat.",
    materials: ["White render", "Warm stone", "Low-iron glass", "Timber soffits"],
  },
  {
    title: "Orchid Estate Villa",
    slug: "orchid-estate-villa",
    category: "Residential",
    location: "DHA II Islamabad",
    timeline: "11 months",
    image: driveImage(62),
    gallery: driveGallery(62, 64),
    story: "A larger estate residence planned around lawn-facing living, layered terraces, and a calm modern composition for family gatherings.",
    materials: ["Textured concrete", "Dark metal", "Low-iron glass", "Linear lighting"],
  },
  {
    title: "Twilight Louvers Villa",
    slug: "twilight-louvers-villa",
    category: "Exterior",
    location: "DHA Islamabad",
    timeline: "9 months",
    image: driveImage(65),
    gallery: driveGallery(65, 71),
    story: "An exterior composition focused on shade, privacy, and a quiet evening presence through layered louvers and warm material depth.",
    materials: ["Vertical louvers", "Warm render", "Bronze glass", "Charcoal metal"],
  },
];

export const articles = [
  {
    title: "House construction drawings in Pakistan: what should be resolved before site work",
    slug: "house-construction-drawings-pakistan-checklist",
    category: "Construction Drawings",
    image: driveImage(58),
    minutes: 13,
    excerpt: "A practical pre-construction checklist for homeowners who want buildable plans, coordinated structure, services, facade details, and site decisions before work begins.",
    updated: "2026-10-05",
    summary: "Before a house starts on site, the construction drawing set should resolve plans, levels, dimensions, structure coordination, facade details, stair and bathroom geometry, kitchen and storage planning, electrical and plumbing routes, waterproofing zones, drainage points, material intent, and authority-specific requirements.",
    keyTakeaways: ["Freeze the plan before site work", "Coordinate structure and services early", "Detail wet areas, stairs, facade, and levels", "Use drawings to price and supervise clearly"],
    sections: [
      ["Why construction drawings matter before site work", "Many homeowners focus first on the front elevation, but the expensive decisions are often hidden: where beams pass, how bathrooms stack, whether doors clash with furniture, how AC outdoor units will be placed, where rainwater will discharge, and whether the contractor has enough information to build without guessing."],
      ["What a house drawing set should clarify", "A serious residential package should clarify plans, dimensions, sections, elevations, structure coordination, wet-area details, electrical points, lighting, plumbing, drainage, facade materials, boundary walls, gates, stairs, kitchens, storage, roof slopes, and key construction notes."],
      ["The coordination points clients should not skip", "Levels, parking slopes, stair risers, structural columns, beam depths, service shafts, AC routes, bathrooms, kitchen workflow, and waterproofing zones should be reviewed together. A premium home feels refined when these practical decisions are integrated rather than improvised on site."],
      ["A homeowner checklist before approval", "Before signing off, check room sizes, furniture fit, door swings, window placement, stair comfort, bathroom drains, kitchen appliances, storage, outdoor equipment, roof drainage, facade material logic, and whether different contractors can price the same scope from the same drawings."],
      ["Pakistan and Islamabad approval context", "Construction drawings should respond to the exact plot and authority. Islamabad, DHA, Bahria Town, Gulberg Greens, Rawalpindi, and other societies may differ on setbacks, height, covered area, basement conditions, submission formats, utilities, soil, and access."],
      ["How drawings connect with 3D and turnkey execution", "The best workflow is concept design, 3D visualization, construction drawings, and site execution feeding each other at the right time. 3D helps approve appearance; drawings translate the approved direction into coordinated information for pricing, procurement, supervision, and handover."],
      ["WhatsApp consultation", "Send HN Architects your plot size, exact location, society or CDA documents if available, site photos or videos, existing drawings, preferred style, family requirements, and project goals so the team can review what needs coordination before site work starts."],
    ],
    faqs: [
      ["What are construction drawings for a house?", "Construction drawings are coordinated technical drawings used to explain how a house should be built, including plans, elevations, sections, structure coordination, services, levels, dimensions, schedules, details, and notes."],
      ["Are 3D views enough to start construction?", "No. 3D views help clients understand appearance, but site work needs measured drawings, structural input, services coordination, material details, levels, waterproofing decisions, and authority-specific requirements."],
      ["When should construction drawings be prepared?", "After the concept and planning direction are approved, but before excavation, procurement, contractor pricing, or site mobilization are finalized."],
      ["What should a homeowner check before approving drawings?", "Check room sizes, furniture fit, door swings, windows, stairs, bathrooms, kitchen workflow, storage, parking, levels, facade materials, service shafts, AC locations, drainage points, and architectural-structural coordination."],
      ["Do Islamabad homes need authority-specific drawing review?", "Yes. Plot rules, setbacks, height, basement conditions, covered area, and approval requirements depend on the relevant authority or housing society."],
      ["What should I share with HN Architects for a drawing consultation?", "Share plot size, location, society or authority documents, existing plans if available, site photos or videos, family requirements, preferred style, budget priorities, and any contractor or engineer input already received."],
    ],
    visuals: [driveImage(58), driveImage(62), driveImage(65)],
  },
  {
    title: "Basement design on sloped plots in Islamabad: a practical guide",
    slug: "basement-design-sloped-plots-islamabad",
    category: "Residential Architecture",
    image: driveImage(62),
    minutes: 12,
    excerpt: "A decision guide for turning level changes into useful lower-ground space without treating drainage, waterproofing, daylight, or structure as afterthoughts.",
    updated: "2026-09-28",
    summary: "A successful basement on a sloped Islamabad plot begins with accurate levels, soil and groundwater information, and a clear drainage route. The architect, structural engineer, geotechnical adviser, waterproofing specialist, and services team should resolve excavation, retaining walls, rainwater, daylight, ventilation, access, and emergency movement as one coordinated system before construction.",
    keyTakeaways: ["Survey levels before fixing the brief", "Keep surface water away from walls", "Use the downhill edge for light", "Coordinate structure before excavation"],
    sections: [
      ["Why this topic matters for Islamabad homes", "A sloped plot can create an elegant lower-ground level, a private garden floor, concealed parking, or better separation between formal and family spaces. It can also create expensive risk when a basement is treated as spare area beneath the house instead of as a site-specific piece of architecture."],
      ["Read the site before designing the basement", "The first step is not a room list. It is a level survey, road relationship, neighboring-property check, soil and water review, retaining strategy, driveway access review, and understanding of the authority or society rules for the exact plot."],
      ["Control water before choosing finishes", "Basement comfort depends on drainage, waterproofing, backfill, slope, joints, pipe penetrations, surface-water control, and a maintainable discharge or sump strategy. Waterproof paint alone is not a basement system."],
      ["Plan daylight, ventilation, and escape", "A lower-ground level feels valuable when it has usable light, air, access, and a clear route out. Walkout edges, sunken courtyards, lightwells, atriums, and stepped landscapes should be planned with structure, not added as decoration."],
      ["Coordinate structure before excavation", "Retaining walls, columns, beams, ramps, slab levels, neighboring structures, and soil conditions should be coordinated before excavation starts. Late structural corrections are usually more expensive than early design discipline."],
      ["Choose the right use for the lower level", "Parking, storage, cinema rooms, gyms, staff areas, family lounges, and guest suites all have different requirements for daylight, ventilation, privacy, and access. The basement should serve the life of the home rather than simply add covered area."],
      ["Approval and consultation checklist", "Before committing, share plot size, location, authority documents, a level survey if available, photos, videos, neighboring conditions, desired uses, family requirements, and project priorities so the basement can be reviewed as part of the full architecture."],
    ],
    faqs: [
      ["Is a basement suitable for every sloped plot in Islamabad?", "No. Suitability depends on verified levels, soil and groundwater conditions, access, adjacent construction, the approving authority's rules, structural feasibility, drainage, and intended use."],
      ["What is the difference between a basement and a lower-ground floor?", "A fully enclosed basement sits largely below surrounding ground, while a lower-ground or walkout level uses a slope to open one or more sides to daylight and direct access."],
      ["How can a basement receive natural light?", "Useful options include a walkout edge, sunken courtyard, lightwell, stepped landscape, wide opening on the downhill side, or a carefully designed atrium."],
      ["Is waterproof paint enough for a basement?", "No. Reliable moisture control is a coordinated system including waterproofing, sealed joints, drainage, surface-water control, backfill, and a maintainable discharge or sump strategy."],
      ["Should parking or family rooms go in the lower level?", "That depends on ramp geometry, daylight, privacy, ventilation, ceiling height, emergency access, and daily movement."],
      ["What should a homeowner share before a basement design consultation?", "Share the plot location and size, level survey if available, site photographs and videos, neighboring conditions, society or authority documents, family requirements, intended lower-level uses, and project priorities."],
    ],
    visuals: [driveImage(62), driveImage(58), driveImage(65)],
  },
  {
    title: "How to choose architects in Islamabad before buying a plot",
    slug: "architects-in-islamabad-plot-guide",
    category: "Residential Architecture",
    image: driveImage(53),
    minutes: 6,
    excerpt: "A practical guide to reading sun, road width, bylaws, family needs, and resale logic before the first line is drawn.",
    updated: "2026-07-29",
    summary: "The best time to involve an architect is before the plot is purchased or before the first fixed plan is approved. In Islamabad, road width, orientation, bylaws, privacy, parking, and resale logic can change the success of a home as much as the facade style.",
    keyTakeaways: ["Check orientation before layout", "Confirm setbacks and road access early", "Use 3D views before final materials", "Choose a studio that can explain tradeoffs clearly"],
    sections: [
      ["Read the plot first", "A good architect starts with the site, not a mood board. Sun, wind, slope, road approach, neighboring windows, and bylaw limits decide where privacy, views, bedrooms, stairs, lawns, and parking should sit."],
      ["Ask for decision clarity", "Before you approve a layout, ask what choices were rejected and why. Strong design work should explain circulation, ventilation, future expansion, and how the home will feel during morning, afternoon, and evening use."],
      ["Use visuals as proof", "3D visualization should not be decoration. It should test massing, material warmth, window scale, balcony depth, and night lighting before construction makes changes expensive."],
      ["Choose long-term value", "A premium home should feel calm now and remain useful later. Resale value, maintenance, flexible rooms, shaded outdoor areas, and durable finishes all matter before style decisions are finalized."],
    ],
    faqs: [
      ["When should I contact an architect?", "Before buying a plot if possible, or before finalizing any plan. Early input can prevent expensive layout and facade compromises."],
      ["Is 3D visualization necessary?", "For premium homes, yes. It helps clients understand scale, light, materials, and facade balance before site work begins."],
      ["What should I send first?", "Share plot size, location, any drawings, family needs, budget direction, and design references you like."],
    ],
    visuals: [driveImage(53), driveImage(62), driveImage(65)],
  },
  {
    title: "Interior designers in Islamabad: what luxury actually means",
    slug: "interior-designers-islamabad-luxury",
    category: "Interior Design",
    image: driveImage(9),
    minutes: 5,
    excerpt: "Luxury interiors are less about excess and more about proportion, lighting, material discipline, and lasting comfort.",
    updated: "2026-07-29",
    summary: "Luxury interior design is not defined by expensive materials alone. It is the discipline of proportion, storage, lighting, texture, comfort, acoustics, and the emotional calm of a room that works every day.",
    keyTakeaways: ["Start with lifestyle, not finishes", "Layer task, accent, and indirect lighting", "Keep material palettes edited", "Use built-in storage to preserve calm"],
    sections: [
      ["Luxury begins with proportion", "A room feels premium when the bed, sofa, doors, wardrobes, ceiling, and walking clearances sit in the right relationship. Oversized details can make even expensive rooms feel uncomfortable."],
      ["Lighting creates the atmosphere", "Warm indirect light, controlled glare, reading zones, mirror lighting, and evening scenes should be planned before ceiling and electrical work starts."],
      ["Materials need restraint", "Wood, stone, metal, fabric, and wall textures should be edited into a small family of finishes. A calm palette looks more expensive than a room filled with competing surfaces."],
      ["Comfort is a design feature", "A premium interior should support sleep, work, hosting, privacy, maintenance, and storage. Beautiful rooms fail when daily use has not been designed."],
    ],
    faqs: [
      ["What makes an interior feel luxurious?", "Balanced proportions, warm lighting, tactile materials, quiet storage, and comfort that supports daily life."],
      ["Should I buy furniture before design?", "No. Furniture sizes should follow the room plan, circulation, lighting, and electrical positions."],
      ["Can existing rooms be upgraded?", "Yes. Lighting, wall treatment, storage, furniture layout, and color temperature can transform an existing room."],
    ],
    visuals: [driveImage(9), driveImage(15), driveImage(22)],
  },
  {
    title: "Why 3D architectural visualization saves construction cost",
    slug: "3d-architectural-visualization-cost",
    category: "3D Visualization",
    image: driveImage(45),
    minutes: 4,
    excerpt: "Visualization helps clients compare options, catch weak decisions early, and align families, contractors, and investors.",
    updated: "2026-07-29",
    summary: "3D architectural visualization saves cost by making design decisions visible before materials, labor, and structure are committed. It reduces confusion, late changes, and mismatched expectations between client, architect, and site team.",
    keyTakeaways: ["Visualize before construction", "Compare materials side by side", "Check lighting at day and night", "Use renders to align family decisions"],
    sections: [
      ["It catches proportion issues early", "A plan can look correct on paper while the elevation feels flat or oversized. Visualization reveals window scale, facade depth, ceiling rhythm, and furniture fit in a way drawings alone cannot."],
      ["It reduces material regret", "Stone tone, wood warmth, glass tint, paint color, and lighting temperature should be tested together. One weak material choice can disturb the full visual language."],
      ["It improves contractor clarity", "Renders help the site team understand the intended finish, shadow lines, ceiling levels, and lighting mood. That clarity reduces interpretation mistakes."],
      ["It supports better decisions", "When clients can see options clearly, approvals are faster and more confident. The project moves with fewer emotional reversals and fewer late-stage changes."],
    ],
    faqs: [
      ["Does 3D replace construction drawings?", "No. 3D explains the experience, while construction drawings explain how to build it."],
      ["When should 3D start?", "After the concept plan is stable but before final materials and facade details are locked."],
      ["Can 3D show night lighting?", "Yes. Evening views are useful for facade lighting, landscape lighting, and interior atmosphere."],
    ],
    visuals: [driveImage(45), driveImage(53), driveImage(56)],
  },
  {
    title: "Luxury villa design in Islamabad: a 2026 planning checklist",
    slug: "luxury-villa-design-islamabad-2026-checklist",
    category: "Luxury Villas",
    image: driveImage(65),
    minutes: 7,
    excerpt: "A modern checklist for planning private villas around privacy, arrival, climate, family flow, and long-term value.",
    updated: "2026-07-29",
    summary: "A luxury villa in Islamabad should be planned as a complete lifestyle system: arrival, privacy, shade, outdoor rooms, hosting flow, family zones, service areas, storage, and evening atmosphere all need to work together.",
    keyTakeaways: ["Design arrival before facade decoration", "Separate family and guest movement", "Use shade as a luxury feature", "Plan outdoor rooms with lighting"],
    sections: [
      ["Arrival sets the tone", "The gate, driveway, porch, entry door, landscape edge, and first view should feel intentional. Luxury starts before a guest enters the living room."],
      ["Privacy must be planned", "Bedrooms, lounges, terraces, and pool edges need protection from roads and neighboring plots. Screens, courtyards, louvers, planting, and level changes can provide privacy without closing the house."],
      ["Climate shapes comfort", "Deep overhangs, shaded glass, cross ventilation, and controlled west light make homes easier to live in and maintain. Climate response should not be an afterthought."],
      ["Outdoor rooms add value", "Lawns, terraces, pools, barbeque areas, and evening seating should connect to the interior naturally. The best villas feel usable beyond the walls."],
    ],
    faqs: [
      ["What should a villa brief include?", "Plot size, location, family size, parking needs, hosting habits, privacy concerns, and preferred architectural mood."],
      ["Are modern facades practical?", "Yes, if shade, drainage, materials, and maintenance are considered early."],
      ["Can a villa feel luxurious on a modest plot?", "Yes. Planning, proportion, light, and material restraint can create luxury without needing unnecessary size."],
    ],
    visuals: [driveImage(65), driveImage(67), driveImage(71)],
  },
  {
    title: "Modern facade design in Pakistan: materials, shade, and lighting",
    slug: "modern-facade-design-pakistan-materials-shade-lighting",
    category: "Exterior Design",
    image: driveImage(56),
    minutes: 6,
    excerpt: "How to create modern facades that look premium, stay practical, and avoid the common mistakes of flat elevation design.",
    updated: "2026-07-29",
    summary: "Modern facade design works best when massing, shade, material durability, window rhythm, lighting, and maintenance are considered together. A strong facade is not a pasted front; it is the visible result of good planning.",
    keyTakeaways: ["Build depth into the elevation", "Control sun before selecting glass", "Limit the material palette", "Plan night lighting with restraint"],
    sections: [
      ["Depth creates value", "Recessed windows, balcony shadows, vertical fins, louvers, and overhangs give a facade richness that flat cladding cannot achieve."],
      ["Materials must survive weather", "Exterior materials should be chosen for heat, dust, rain, cleaning, and aging. A beautiful finish that stains quickly is not a luxury decision."],
      ["Lighting should reveal form", "Facade lighting should highlight entrances, textures, steps, landscape edges, and key planes. Too much light can make a premium house feel commercial."],
      ["The plan controls the elevation", "Window placement, room privacy, stair location, and ceiling heights shape the facade. Good exterior design starts inside the plan."],
    ],
    faqs: [
      ["What is the biggest facade mistake?", "Treating the elevation as decoration after the plan is finished."],
      ["Is glass always modern?", "No. Glass needs shade, proportion, privacy control, and maintenance planning."],
      ["Can an existing facade be redesigned?", "Yes. Screens, material changes, lighting, gates, landscape, and balcony work can change the full presence."],
    ],
    visuals: [driveImage(56), driveImage(53), driveImage(58)],
  },
  {
    title: "Turnkey architecture projects: how to control quality from concept to handover",
    slug: "turnkey-architecture-project-quality-control",
    category: "Turnkey Projects",
    image: driveImage(62),
    minutes: 7,
    excerpt: "A premium project delivery guide for keeping concept, drawings, vendors, finishes, and site execution aligned.",
    updated: "2026-07-29",
    summary: "Turnkey delivery works when one design direction is protected from concept to handover. The goal is not only convenience; it is fewer gaps between drawings, materials, vendors, execution, and final styling.",
    keyTakeaways: ["Lock decisions in sequence", "Use drawings and visuals together", "Coordinate vendors before site pressure", "Protect the original design intent"],
    sections: [
      ["Start with a clear scope", "A turnkey project needs defined responsibilities for design, drawings, BOQs, procurement support, site coordination, finishes, and handover. Vague scope creates conflict later."],
      ["Drawings protect quality", "Plans, elevations, ceiling layouts, electrical points, joinery details, and material schedules keep the team aligned when construction becomes fast and noisy."],
      ["Material approval needs discipline", "Samples should be reviewed together, not one by one in isolation. Wood, stone, paint, fabric, glass, and lighting must work as a complete palette."],
      ["Handover is part of design", "Final styling, lighting scenes, furniture placement, and small detail checks are what make a delivered project feel finished rather than simply constructed."],
    ],
    faqs: [
      ["Is turnkey suitable for busy clients?", "Yes. It helps reduce coordination burden when the scope and approval process are clearly defined."],
      ["Does turnkey cost more?", "It can save hidden costs by reducing rework, mismatch, and delayed decisions."],
      ["What should be approved first?", "Plan, concept direction, major materials, and budget range should be aligned before detailed procurement."],
    ],
    visuals: [driveImage(62), driveImage(48), driveImage(43)],
  },
  {
    title: "Commercial interior design for clinics, offices, and hospitality spaces",
    slug: "commercial-interior-design-clinics-offices-hospitality",
    category: "Commercial Architecture",
    image: driveImage(43),
    minutes: 6,
    excerpt: "How commercial interiors can balance brand presence, comfort, circulation, lighting, and operational clarity.",
    updated: "2026-07-29",
    summary: "Commercial interiors need more than visual polish. Clinics, offices, restaurants, lounges, and service spaces must guide movement, support staff, comfort visitors, express the brand, and stay durable under repeated use.",
    keyTakeaways: ["Design circulation before decor", "Make lighting support operations", "Use materials that can handle traffic", "Express the brand through atmosphere"],
    sections: [
      ["Circulation is the hidden design", "Visitors should understand where to enter, wait, sit, move, pay, meet, or exit without confusion. Clear circulation improves both comfort and operations."],
      ["Lighting changes behavior", "Clinics need calm clarity, offices need focus and meeting comfort, and hospitality spaces need mood. One lighting strategy cannot serve every commercial use."],
      ["Durability must look intentional", "High-use surfaces should be easy to clean and maintain while still feeling premium. Practical materials can be luxurious when detailed well."],
      ["Brand should be spatial", "A commercial interior should communicate brand through scale, texture, lighting, layout, and rhythm, not only logos and signage."],
    ],
    faqs: [
      ["Can commercial interiors look warm and professional?", "Yes. Warmth and professionalism can work together through material control, lighting, and organized planning."],
      ["What should be designed first?", "Customer journey, staff workflow, waiting areas, service points, and back-of-house needs."],
      ["Do restaurants need different planning?", "Yes. Dining density, acoustics, kitchen flow, service paths, and evening lighting are critical."],
    ],
    visuals: [driveImage(43), driveImage(45), driveImage(33)],
  },
  {
    title: "Space planning mistakes that make expensive homes feel ordinary",
    slug: "space-planning-mistakes-expensive-homes",
    category: "Space Planning",
    image: driveImage(24),
    minutes: 6,
    excerpt: "The layout problems that waste square footage, reduce privacy, weaken daylight, and make premium finishes feel less valuable.",
    updated: "2026-07-29",
    summary: "Poor space planning can make an expensive home feel average. The most common problems are unclear circulation, wasted passages, weak storage, bad daylight, poor furniture fit, and rooms that do not match real family routines.",
    keyTakeaways: ["Reduce dead circulation", "Plan furniture before walls are final", "Protect privacy between zones", "Design storage as architecture"],
    sections: [
      ["Circulation should feel effortless", "A home should not waste large areas in confused corridors. Movement from entry, stairs, living, kitchen, bedrooms, and outdoor spaces should be simple and calm."],
      ["Furniture proves the room", "A bedroom, lounge, or dining room is not successful until furniture, side tables, walking space, switches, lights, and storage are tested together."],
      ["Privacy is a layout decision", "Guest areas, family lounges, bedrooms, staff spaces, kitchens, and terraces need thoughtful separation. Privacy cannot be solved only with curtains."],
      ["Storage protects luxury", "Clutter weakens even the best interior. Built-in storage, utility zones, wardrobes, pantry planning, and hidden services keep the design calm."],
    ],
    faqs: [
      ["Can space planning improve an existing home?", "Yes. Furniture layout, openings, storage, lighting, and room zoning can improve daily comfort."],
      ["What is dead space?", "Area that costs money to build but does not support movement, storage, comfort, or visual quality."],
      ["Should furniture be selected early?", "Yes. Furniture sizes should be tested before walls, electrical points, and lighting are finalized."],
    ],
    visuals: [driveImage(24), driveImage(20), driveImage(50)],
  },
];

export const faqs = [
  ["Do you work outside Islamabad?", "Yes. HN Architects is based in Islamabad and can consult on residential, commercial, interior, exterior, and visualization work across Pakistan."],
  ["Can you redesign an existing house?", "Yes. Renovation and facade transformation work begins with existing conditions, structure, budget, and the intended lifestyle upgrade."],
  ["Do you provide 3D views before construction?", "Yes. 3D visualization is part of the studio workflow so clients can understand materials, light, scale, and facade decisions before committing."],
  ["How can I start?", "Send your plot size, location, current drawings if available, and your goals on WhatsApp. The studio will guide the next consultation step."],
];
