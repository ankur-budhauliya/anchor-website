"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Primary Deep Maroon Radial Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-32 -left-32 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-maroon/25 via-maroon-dark/15 to-transparent blur-[120px] dark:from-maroon/35 dark:via-maroon-dark/20"
      />

      {/* Secondary Soft Gold Accent Glow on the right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
        className="absolute top-1/4 -right-24 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-gold/15 via-gold-dark/10 to-transparent blur-[130px] dark:from-gold/20 dark:via-gold-dark/10"
      />

      {/* Subtle Bottom Ambient Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Subtle luxury micro-grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
    </div>
  );
}
