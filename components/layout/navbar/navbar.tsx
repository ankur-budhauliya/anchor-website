"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { MAIN_NAV_ITEMS } from "@/constants/navigation";
import { SECTION_HREFS, SECTION_IDS } from "@/constants/routes";
import { SITE_CONFIG } from "@/constants/site";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useSmoothScroll } from "@/components/providers";
import { Container } from "../container";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const sectionIds = Object.values(SECTION_IDS);
  const activeSection = useScrollSpy({ sectionIds, offset: 100 });
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollTo(href);
    window.history.pushState(null, "", href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md shadow-sm border-b border-zinc-200/60 dark:border-zinc-800/60 py-3"
            : "bg-transparent py-4 sm:py-5"
        )}
      >
        <Container size="2xl">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Name */}
            <Link
              href={SECTION_HREFS.HOME}
              onClick={(e) => handleNavClick(e, SECTION_HREFS.HOME)}
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full transition-transform hover:scale-[1.02]"
              aria-label="Anchor Nikhil Gupta - Back to top"
            >
              <div className="relative h-10 w-10 sm:h-11 sm:w-11 overflow-hidden rounded-full ring-2 ring-gold/40 shadow-sm transition-transform duration-300 group-hover:ring-gold">
                <Image
                  src="/images/logo.png"
                  alt={SITE_CONFIG.name}
                  fill
                  sizes="(max-width: 640px) 40px, 44px"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm sm:text-base tracking-tight text-zinc-900 dark:text-zinc-50 font-sans">
                  Anchor Nikhil Gupta
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-gold-dark dark:text-gold font-medium">
                  Host &bull; Emcee &bull; Presenter
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-inner"
              aria-label="Main Navigation"
            >
              {MAIN_NAV_ITEMS.map((item) => {
                const targetId = item.href.replace("#", "");
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "relative px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                      isActive
                        ? "text-gold font-semibold bg-maroon shadow-sm"
                        : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Actions: Book Now CTA & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href={SECTION_HREFS.CONTACT}
                onClick={(e) => handleNavClick(e, SECTION_HREFS.CONTACT)}
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-maroon to-maroon-dark px-5 py-2.5 text-xs sm:text-sm font-semibold text-gold shadow-sm hover:shadow-md hover:brightness-110 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Book Now</span>
              </a>

              {/* Hamburger Button for Mobile */}
              <button
                type="button"
                onClick={() => setIsMobileNavOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileNavOpen}
                className="flex lg:hidden items-center justify-center rounded-full p-2.5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200/60 dark:border-zinc-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        items={MAIN_NAV_ITEMS}
        activeSection={activeSection}
      />
    </>
  );
}
