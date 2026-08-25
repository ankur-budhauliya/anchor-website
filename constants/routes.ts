export const SECTION_IDS = {
  HOME: "hero",
  ABOUT: "about",
  EVENTS: "events",
  GALLERY: "gallery",
  REELS: "reels",
  CONTACT: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const SECTION_HREFS = {
  HOME: `#${SECTION_IDS.HOME}`,
  ABOUT: `#${SECTION_IDS.ABOUT}`,
  EVENTS: `#${SECTION_IDS.EVENTS}`,
  GALLERY: `#${SECTION_IDS.GALLERY}`,
  REELS: `#${SECTION_IDS.REELS}`,
  CONTACT: `#${SECTION_IDS.CONTACT}`,
} as const;
