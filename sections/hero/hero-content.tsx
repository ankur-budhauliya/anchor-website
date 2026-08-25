"use client";

import { motion } from "framer-motion";
import { Sparkles, Play, ArrowRight } from "lucide-react";
import { HERO_CONFIG } from "@/constants/hero";
import { useSmoothScroll } from "@/components/providers";

export function HeroContent() {
  const { scrollTo } = useSmoothScroll();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollTo(href);
    window.history.pushState(null, "", href);
  };

  return (
    <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
      {/* Premium Badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 dark:bg-zinc-900/80 border border-gold/40 px-4 py-1.5 shadow-sm backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-gold animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-zinc-800 dark:text-zinc-200">
            {HERO_CONFIG.badge.label}
          </span>
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="space-y-2"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.12]">
          {HERO_CONFIG.headline.prefix}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold to-gold-light">
            {HERO_CONFIG.headline.highlight}
          </span>{" "}
          {HERO_CONFIG.headline.suffix}
        </h1>
      </motion.div>

      {/* Supporting Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl leading-relaxed font-normal"
      >
        {HERO_CONFIG.description}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="flex flex-wrap items-center gap-4 pt-2"
      >
        {/* Primary CTA */}
        <a
          href={HERO_CONFIG.cta.primary.href}
          onClick={(e) => handleNavClick(e, HERO_CONFIG.cta.primary.href)}
          className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-maroon via-maroon-light to-maroon px-7 py-3.5 text-sm font-bold text-gold shadow-lg shadow-maroon/20 hover:shadow-xl hover:shadow-maroon/30 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          <span>{HERO_CONFIG.cta.primary.label}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>

        {/* Secondary CTA */}
        <a
          href={HERO_CONFIG.cta.secondary.href}
          onClick={(e) => handleNavClick(e, HERO_CONFIG.cta.secondary.href)}
          className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-zinc-100/90 dark:bg-zinc-900/90 border border-zinc-300/80 dark:border-zinc-700/80 px-6 py-3.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200 backdrop-blur-sm hover:bg-zinc-200/80 dark:hover:bg-zinc-800 hover:border-gold/50 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-zinc-950 group-hover:scale-110 transition-transform">
            <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
          </div>
          <span>{HERO_CONFIG.cta.secondary.label}</span>
        </a>
      </motion.div>
    </div>
  );
}
