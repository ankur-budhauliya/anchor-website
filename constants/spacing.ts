/**
 * Centralized spacing rhythm constants for layout consistency.
 * Maps directly to CSS custom properties and utility classes.
 */

export const CONTAINER_MAX_WIDTHS = {
  sm: "max-w-screen-sm", // 640px
  md: "max-w-screen-md", // 768px
  lg: "max-w-screen-lg", // 1024px
  xl: "max-w-screen-xl", // 1280px
  "2xl": "max-w-7xl",     // 1400px / 80rem
  full: "max-w-full",
} as const;

export type ContainerSize = keyof typeof CONTAINER_MAX_WIDTHS;

export const CONTENT_MAX_WIDTHS = {
  prose: "max-w-prose",
  narrow: "max-w-2xl",
  content: "max-w-4xl",
  wide: "max-w-5xl",
  full: "max-w-full",
} as const;

export type ContentMaxWidth = keyof typeof CONTENT_MAX_WIDTHS;

export const SECTION_SPACING = {
  none: "py-0",
  compact: "py-8 sm:py-12 md:py-16",
  default: "py-16 sm:py-24 md:py-28 lg:py-32",
  relaxed: "py-20 sm:py-28 md:py-36 lg:py-40",
  hero: "pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-44 md:pb-28 lg:pt-48 lg:pb-32",
} as const;

export type SectionSpacing = keyof typeof SECTION_SPACING;

export const CONTAINER_PADDING = "px-4 sm:px-6 md:px-8 lg:px-12";
