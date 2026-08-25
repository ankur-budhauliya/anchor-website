"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { ABOUT_CONFIG } from "@/constants/about";
import { useSmoothScroll } from "@/components/providers";
import { AboutHighlights } from "./about-highlights";

export function AboutContent() {
  const { scrollTo } = useSmoothScroll();

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollTo(ABOUT_CONFIG.cta.href);
    window.history.pushState(null, "", ABOUT_CONFIG.cta.href);
  };

  return (
    <div className="flex flex-col justify-center space-y-6">
      {/* Section Label / Badge */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.4 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-gold/30 px-3.5 py-1 text-xs font-semibold text-gold-dark dark:text-gold uppercase tracking-wider font-mono">
          <Sparkles className="h-3 w-3" />
          <span>{ABOUT_CONFIG.badge}</span>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.18]">
          {ABOUT_CONFIG.heading.prefix}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold to-gold-light">
            {ABOUT_CONFIG.heading.highlight}
          </span>{" "}
          {ABOUT_CONFIG.heading.suffix}
        </h2>
      </motion.div>

      {/* Narrative Lead & Body Paragraphs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base"
      >
        <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-base sm:text-lg leading-snug">
          {ABOUT_CONFIG.narrative.lead}
        </p>
        {ABOUT_CONFIG.narrative.paragraphs.map((p, idx) => (
          <p key={idx} className="text-sm sm:text-base">
            {p}
          </p>
        ))}
      </motion.div>

      {/* Highlights Grid */}
      <div className="pt-2">
        <AboutHighlights />
      </div>

      {/* Primary Action Button: "Let's Talk" */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="pt-4"
      >
        <a
          href={ABOUT_CONFIG.cta.href}
          onClick={handleCtaClick}
          className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-maroon via-maroon-light to-maroon px-7 py-3.5 text-sm font-bold text-gold shadow-lg shadow-maroon/20 hover:shadow-xl hover:shadow-maroon/30 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          <MessageCircle className="h-4 w-4 text-gold" />
          <span>{ABOUT_CONFIG.cta.label}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </div>
  );
}
