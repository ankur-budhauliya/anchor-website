import type { SiteConfig } from "@/types/site";

export interface ExtendedSiteConfig extends SiteConfig {
  whatsappUrl: string;
  phoneRaw: string;
}

export const SITE_CONFIG: ExtendedSiteConfig = {
  name: "Anchor Nikhil Gupta",
  title: "Anchor Nikhil Gupta | Professional Event Host & Emcee",
  titleTemplate: "%s | Anchor Nikhil Gupta",
  description:
    "High-energy, charismatic professional event anchor and emcee with 5+ years of experience and 70+ events annually. Specializing in luxury destination weddings, corporate summits, sangeet nights, and live celebrations across India.",
  url: "https://anchornikhilgupta.vercel.app",
  ogImage: "/images/logo.png",
  locale: "en_IN",
  phoneRaw: "+919170165570",
  whatsappUrl:
    "https://wa.me/919170165570?text=Hi%20Anchor%20Nikhil,%20I%20would%20like%20to%20inquire%20about%20booking%20you%20for%20an%20event.",
  creator: {
    name: "Anchor Nikhil Gupta",
    role: "Professional Event Host, Emcee & Entertainer",
    tagline: "The Voice of the Moment — Energy, Elegance & Unforgettable Memories",
    email: "kumarnikhilgupta19@gmail.com",
    phone: "+91 91701 65570",
    location: "Pan-India (Available Nationwide)",
  },
  socials: {
    instagram: "https://www.instagram.com/anchor_nikhil_gupta",
    linkedin: "https://www.linkedin.com/in/nikhilgupta19",
    youtube: "https://youtube.com/@19nikhilgupta",
    facebook: "https://www.facebook.com/share/p/18wSgWwWSG/",
  },
  keywords: [
    "Anchor Nikhil Gupta",
    "Professional Event Anchor",
    "Destination Wedding Host",
    "Wedding Emcee India",
    "Corporate Event Host",
    "Sangeet Anchor",
    "Haldi Host",
    "Celebrity Emcee",
    "Live Stage Host",
    "Anchor in Noida",
    "Anchor in Bhopal",
    "Pan India Event Anchor",
  ],
};

export const SITE_METADATA_FALLBACKS = {
  author: SITE_CONFIG.creator.name,
  generator: "Next.js",
  applicationName: SITE_CONFIG.name,
  referrer: "origin-when-cross-origin" as const,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};
