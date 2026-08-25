import { SECTION_HREFS } from "./routes";

export interface HeroStatItem {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description?: string;
}

export interface HeroConfig {
  badge: {
    label: string;
    iconText?: string;
  };
  headline: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  description: string;
  cta: {
    primary: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };
  stats: HeroStatItem[];
  media: {
    type: "image" | "video";
    imageSrc: string;
    imageAlt: string;
    videoSrc?: string;
    badgeTop: string;
    badgeBottom: string;
  };
}

export const HERO_CONFIG: HeroConfig = {
  badge: {
    label: "The Voice of the Moment • India's Premier Emcee",
    iconText: "★",
  },
  headline: {
    prefix: "Commanding the Stage.",
    highlight: "Electrifying",
    suffix: "Every Moment.",
  },
  description:
    "Elevating luxury destination weddings, corporate summits, and high-octane celebrations across India with unmatched charisma, impromptu wit, and effortless crowd magnetism.",
  cta: {
    primary: {
      label: "Book Your Event",
      href: SECTION_HREFS.CONTACT,
    },
    secondary: {
      label: "Watch Reels",
      href: SECTION_HREFS.REELS,
    },
  },
  stats: [
    {
      id: "events-hosted",
      value: 70,
      suffix: "+",
      label: "Events Hosted",
      description: "In the last 12 months",
    },
    {
      id: "years-exp",
      value: 5,
      suffix: "+",
      label: "Years Experience",
      description: "Stage & Live Media",
    },
    {
      id: "audience-entertained",
      value: 100,
      suffix: "K+",
      label: "Audience Engaged",
      description: "Live & Televised",
    },
    {
      id: "pan-india",
      value: 100,
      suffix: "%",
      label: "Pan-India Reach",
      description: "Destination Specialist",
    },
  ],
  media: {
    type: "image",
    // Premium placeholder photography representing a charismatic male stage anchor with microphone
    imageSrc:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Anchor Nikhil Gupta - Professional Event Host & Emcee on Stage",
    badgeTop: "Available Pan-India",
    badgeBottom: "Destination Weddings • Corporate Summits",
  },
};
