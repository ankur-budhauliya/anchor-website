import { SECTION_HREFS } from "./routes";

export type EventIconType =
  | "Crown"
  | "Music"
  | "Briefcase"
  | "Trophy"
  | "Sparkles"
  | "Rocket";

export interface EventCategoryItem {
  id: string;
  slug: string;
  title: string;
  badge: string;
  iconName: EventIconType;
  description: string;
  imageSrc: string;
  imageAlt: string;
  highlights?: string[];
}

export interface EventsConfig {
  badge: string;
  title: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  description: string;
  categories: EventCategoryItem[];
  cta: {
    label: string;
    href: string;
  };
}

export const EVENTS_CONFIG: EventsConfig = {
  badge: "Events I Host",
  title: {
    prefix: "Tailored Stage Mastery For",
    highlight: "Every",
    suffix: "Occasion.",
  },
  description:
    "Whether commanding stadium energy for thousands or setting an intimate, emotional cadence for a royal wedding, every event is curated with customized scripts and flawless execution.",
  cta: {
    label: "Inquire For Your Event",
    href: SECTION_HREFS.CONTACT,
  },
  categories: [
    {
      id: "destination-weddings",
      slug: "weddings",
      title: "Luxury Destination Weddings",
      badge: "Signature Specialty",
      iconName: "Crown",
      description:
        "Grand varmala choreography, royal baraat on wheels, and culturally nuanced rituals tailored across India's premier palace & beach destinations.",
      imageSrc:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
      imageAlt: "Luxury Destination Wedding Stage Hosting by Anchor Nikhil Gupta",
    },
    {
      id: "sangeet-haldi",
      slug: "sangeet-haldi",
      title: "Sangeet & Haldi Celebrations",
      badge: "High Energy",
      iconName: "Music",
      description:
        "50% bespoke interactive games, impromptu wit, dance battles, and rhythm drumming that turns families into a unified celebrating crowd.",
      imageSrc:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
      imageAlt: "High Energy Sangeet and Haldi Celebration Host",
    },
    {
      id: "corporate-summits",
      slug: "corporate",
      title: "Corporate Summits & Conclaves",
      badge: "Executive Panache",
      iconName: "Briefcase",
      description:
        "Articulate, journalism-backed stage presence for leadership summits, high-stakes keynotes, VIP introductions, and panel discussions.",
      imageSrc:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
      imageAlt: "Corporate Summit and Conference Emcee on Stage",
    },
    {
      id: "award-galas",
      slug: "awards",
      title: "Award Ceremonies & Galas",
      badge: "Red Carpet Prestige",
      iconName: "Trophy",
      description:
        "Sophisticated, fast-paced gala hosting honoring top performers and industry achievers with red-carpet glamour and flawless timing.",
      imageSrc:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
      imageAlt: "Award Ceremony and Black Tie Gala Hosting",
    },
    {
      id: "concerts-fests",
      slug: "concerts",
      title: "Concerts & Youth Festivals",
      badge: "Stadium Power",
      iconName: "Sparkles",
      description:
        "Booming mic authority and unstoppable crowd hypnosis commanding audiences of 5,000+ to 100,000+ at major music festivals and university fests.",
      imageSrc:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
      imageAlt: "Live Concert and Massive Crowd Entertainment",
    },
    {
      id: "product-launches",
      slug: "product-launches",
      title: "Product Launches & Activations",
      badge: "Brand Showcase",
      iconName: "Rocket",
      description:
        "Generating breathless anticipation for flagship unveilings, automobile showcases, and experiential brand campaigns with media spotlight precision.",
      imageSrc:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
      imageAlt: "High-Impact Product Launch and Brand Showcase Host",
    },
  ],
};
