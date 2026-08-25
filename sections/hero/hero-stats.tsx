"use client";

import { motion } from "framer-motion";
import { HERO_CONFIG } from "@/constants/hero";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="mt-12 sm:mt-16 w-full pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {HERO_CONFIG.stats.map((stat, idx) => (
          <div
            key={stat.id}
            className={`flex flex-col space-y-1 ${
              idx > 0 ? "lg:border-l lg:border-zinc-200/60 dark:lg:border-zinc-800/60 lg:pl-6" : ""
            }`}
          >
            <div className="flex items-baseline gap-0.5">
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-sans"
              />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              {stat.label}
            </p>
            {stat.description && (
              <p className="text-[11px] sm:text-xs text-muted-foreground font-mono">
                {stat.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
