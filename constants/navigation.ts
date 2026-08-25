import type { NavItem, SocialLink, FooterSection } from "@/types/navigation";
import { SECTION_HREFS } from "./routes";
import { SITE_CONFIG } from "./site";

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: SECTION_HREFS.HOME },
  { label: "About", href: SECTION_HREFS.ABOUT },
  { label: "Events", href: SECTION_HREFS.EVENTS },
  { label: "Gallery", href: SECTION_HREFS.GALLERY },
  { label: "Reels", href: SECTION_HREFS.REELS },
  { label: "Contact", href: SECTION_HREFS.CONTACT },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "phone",
    label: "WhatsApp",
    url: SITE_CONFIG.whatsappUrl,
  },
  ...(SITE_CONFIG.socials.instagram
    ? [{ platform: "instagram" as const, label: "Instagram", url: SITE_CONFIG.socials.instagram }]
    : []),
  ...(SITE_CONFIG.socials.youtube
    ? [{ platform: "youtube" as const, label: "YouTube", url: SITE_CONFIG.socials.youtube }]
    : []),
  ...(SITE_CONFIG.socials.linkedin
    ? [{ platform: "linkedin" as const, label: "LinkedIn", url: SITE_CONFIG.socials.linkedin }]
    : []),
  ...(SITE_CONFIG.socials.facebook
    ? [{ platform: "facebook" as const, label: "Facebook", url: SITE_CONFIG.socials.facebook }]
    : []),
  { platform: "email", label: "Email", url: `mailto:${SITE_CONFIG.creator.email}` },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Explore",
    links: MAIN_NAV_ITEMS,
  },
  {
    title: "Event Specialties",
    links: [
      { label: "Destination Weddings & Sangeet", href: SECTION_HREFS.EVENTS },
      { label: "Corporate Summits & Galas", href: SECTION_HREFS.EVENTS },
      { label: "Varmala & Baraat on Wheels", href: SECTION_HREFS.EVENTS },
      { label: "Concerts & College Fests", href: SECTION_HREFS.EVENTS },
    ],
  },
];
