"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ABOUT_CONFIG } from "@/constants/about";

export function AboutHighlights() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
      {ABOUT_CONFIG.highlights.map((highlight, idx) => (
        <motion.div
          key={highlight.id}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: 0.08 * idx, ease: "easeOut" }}
          className="group relative flex items-start gap-3 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 p-4 border border-zinc-200/70 dark:border-zinc-800/80 backdrop-blur-sm transition-all duration-300 hover:border-gold/50 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-md"
        >
          {/* Checkmark icon container */}
          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark dark:text-gold border border-gold/30 group-hover:bg-gold group-hover:text-zinc-950 transition-colors duration-200">
            <Check className="h-3.5 w-3.5 stroke-[2.5]" />
          </div>

          <div className="flex flex-col space-y-0.5">
            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-sans tracking-tight">
              {highlight.title}
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              {highlight.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
