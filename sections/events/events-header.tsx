"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { EVENTS_CONFIG } from "@/constants/events";
import { MaxWidth } from "@/components/layout";

export function EventsHeader() {
  return (
    <MaxWidth size="narrow" className="text-center space-y-4 mb-12 sm:mb-16">
      {/* Section Badge */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.4 }}
        className="flex justify-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-gold/30 px-3.5 py-1 text-xs font-semibold text-gold-dark dark:text-gold uppercase tracking-wider font-mono">
          <Sparkles className="h-3 w-3" />
          <span>{EVENTS_CONFIG.badge}</span>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.15]"
      >
        {EVENTS_CONFIG.title.prefix}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold to-gold-light">
          {EVENTS_CONFIG.title.highlight}
        </span>{" "}
        {EVENTS_CONFIG.title.suffix}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl mx-auto"
      >
        {EVENTS_CONFIG.description}
      </motion.p>
    </MaxWidth>
  );
}
