"use client";

import React, { createContext, useContext, useCallback, useEffect } from "react";

interface ScrollToOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}

interface SmoothScrollContextValue {
  scrollTo: (target: string | number | HTMLElement, options?: ScrollToOptions) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue | null>(null);

export interface SmoothScrollProviderProps {
  children: React.ReactNode;
  defaultOffset?: number;
}

export function SmoothScrollProvider({
  children,
  defaultOffset = 80,
}: SmoothScrollProviderProps) {
  const scrollTo = useCallback(
    (target: string | number | HTMLElement, options?: ScrollToOptions) => {
      if (typeof window === "undefined") return;

      const offset = options?.offset ?? defaultOffset;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const behavior: ScrollBehavior = prefersReducedMotion
        ? "auto"
        : options?.behavior ?? "smooth";

      if (typeof target === "number") {
        window.scrollTo({
          top: Math.max(0, target - offset),
          behavior,
        });
        return;
      }

      let element: HTMLElement | null = null;

      if (typeof target === "string") {
        const id = target.startsWith("#") ? target.slice(1) : target;
        element = document.getElementById(id);
      } else if (target instanceof HTMLElement) {
        element = target;
      }

      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior,
        });
      }
    },
    [defaultOffset]
  );

  // Global anchor click interceptor for standard in-page navigation links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          scrollTo(href);
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [scrollTo]);

  return (
    <SmoothScrollContext.Provider value={{ scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothScroll(): SmoothScrollContextValue {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    return {
      scrollTo: (target, options) => {
        if (typeof window === "undefined") return;
        const behavior = options?.behavior ?? "smooth";
        if (typeof target === "string") {
          const id = target.startsWith("#") ? target.slice(1) : target;
          const el = document.getElementById(id);
          el?.scrollIntoView({ behavior });
        } else if (typeof target === "number") {
          window.scrollTo({ top: target, behavior });
        } else if (target instanceof HTMLElement) {
          target.scrollIntoView({ behavior });
        }
      },
    };
  }
  return context;
}
