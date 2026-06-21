export type Project = {
  index: string;
  name: string;
  url: string;
  domain: string;
  year: string;
  tags: string[];
  teaser: string;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Renderz",
    url: "https://www.renderz.ch/",
    domain: "renderz.ch",
    year: "2026",
    tags: ["AI", "Architecture", "SaaS"],
    teaser:
      "A sketch goes in. Thirty seconds later, a photoreal render comes out — no 3D pipeline.",
  },
  {
    index: "02",
    name: "Aloy",
    url: "https://aloy-law.com/",
    domain: "aloy-law.com",
    year: "2026",
    tags: ["AI", "Law", "Art"],
    teaser:
      "A legal counsel that doesn't exist. Where art, AI and Swiss law collide.",
  },
  {
    index: "03",
    name: "OpenGlossa",
    url: "https://openglossa.ch/",
    domain: "openglossa.ch",
    year: "2026",
    tags: ["MCP", "Open source", "Legal"],
    teaser:
      "Translate Swiss law without inventing a thing — every term anchored to a citable official source.",
  },
  {
    index: "04",
    name: "OpenPrivacy",
    url: "https://www.openprivacy.ch/",
    domain: "openprivacy.ch",
    year: "2026",
    tags: ["Privacy", "Desktop", "Local-first"],
    teaser:
      "Your most sensitive files, anonymized. And nothing ever leaves your machine.",
  },
  {
    index: "05",
    name: "Aptiq",
    url: "https://aptiq.ch/",
    domain: "aptiq.ch",
    year: "2025",
    tags: ["3D", "VR / AR", "Immersive"],
    teaser:
      "Where communication becomes an experience. 3D, virtual and augmented reality that leave a mark.",
  },
];

export type Reference = {
  quote: string;
  name: string;
  role: string;
};

export const references: Reference[] = [
  {
    quote: "The way forward, the mindset to embody. Bravo — I'm following you!",
    name: "Valérie M. Saintot",
    role: "Lawyer · Adjunct Professor",
  },
  {
    quote: "The best in the industry!",
    name: "Tobias Neufeld",
    role: "Lawyer · Digitalist · Strategist",
  },
  {
    quote: "A truly fascinating demo, and genuinely innovative support.",
    name: "Garif Yalak",
    role: "Dr. sc. ETH · Digital Transformation Lead, Cisco",
  },
  {
    quote: "Such a fun experience — thank you!",
    name: "Johana ten Hove",
    role: "Head of Technology Consulting",
  },
  {
    quote: "Thrilling, with remarkable support for innovation.",
    name: "Philippe Künzler",
    role: "Director · Swiss Federal Archives",
  },
  {
    quote: "It was a great experience.",
    name: "Ferdinand Wegener",
    role: "Editor-in-Chief · Cologne Technology Review & Law",
  },
];
