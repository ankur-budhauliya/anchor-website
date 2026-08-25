"use client";

import { useEffect, useState } from "react";

export interface UseScrollSpyOptions {
  sectionIds: string[];
  offset?: number;
  threshold?: number;
}

export function useScrollSpy({
  sectionIds,
  offset = 120,
}: UseScrollSpyOptions): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || "");

  useEffect(() => {
    if (typeof window === "undefined" || sectionIds.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }

      if (sectionIds.length > 0) {
        setActiveSection(sectionIds[0]);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
