import type { Transition, Variants } from "framer-motion";

export const EASING = {
  smooth: [0.25, 0.1, 0.25, 1.0] as const,
  energetic: [0.16, 1, 0.3, 1] as const,
  gentle: [0.33, 1, 0.68, 1] as const,
};

export const TRANSITION_CONFIG: Record<string, Transition> = {
  fast: { duration: 0.2, ease: EASING.smooth },
  default: { duration: 0.4, ease: EASING.smooth },
  slow: { duration: 0.7, ease: EASING.gentle },
  spring: { type: "spring", stiffness: 300, damping: 30 },
  springGentle: { type: "spring", stiffness: 150, damping: 20 },
};

export const FADE_IN_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: TRANSITION_CONFIG.default },
};

export const FADE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_CONFIG.default,
  },
};

export const FADE_DOWN_VARIANTS: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_CONFIG.default,
  },
};

export const STAGGER_CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const SCALE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: TRANSITION_CONFIG.default,
  },
};
