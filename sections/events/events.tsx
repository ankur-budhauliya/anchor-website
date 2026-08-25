"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/layout";
import { SECTION_IDS, SECTION_HREFS } from "@/constants/routes";
import { useSmoothScroll } from "@/components/providers";
import { EventsHeader } from "./events-header";
import { EventsGrid } from "./events-grid";

export function Events() {
  const { scrollTo } = useSmoothScroll();

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollTo(SECTION_HREFS.CONTACT);
    window.history.pushState(null, "", SECTION_HREFS.CONTACT);
  };

  return (
    <Section
      id={SECTION_IDS.EVENTS}
      spacing="default"
      containerSize={false}
      className="relative overflow-hidden bg-background"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/3 -left-32 h-[500px] w-[500px] rounded-full bg-maroon/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 -right-32 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[140px]"
        aria-hidden="true"
      />

      <Container size="2xl" className="relative z-10">
        {/* Section Header */}
        <EventsHeader />

        {/* Dynamic Category Cards Grid */}
        <EventsGrid />

        {/* Bottom Custom Inquiry Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl bg-zinc-950 text-white p-6 sm:p-8 border border-zinc-800 shadow-xl"
        >
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold uppercase tracking-widest text-gold font-mono">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Custom & Curated Formats</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
              Have a Unique or Multi-Day Event Concept?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              From intimate private anniversaries to 3-day luxury palace weddings and televised conclaves, custom scripts and formats are crafted from scratch.
            </p>
          </div>

          <a
            href={SECTION_HREFS.CONTACT}
            onClick={handleCtaClick}
            className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-gradient-to-r from-maroon to-maroon-dark px-7 py-3.5 text-sm font-bold text-gold shadow-lg shadow-maroon/20 hover:shadow-xl hover:shadow-maroon/30 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <span>Plan Your Event</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}
