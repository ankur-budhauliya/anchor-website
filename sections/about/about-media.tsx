"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { ABOUT_CONFIG } from "@/constants/about";

export function AboutMedia() {
  const { media } = ABOUT_CONFIG;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative flex items-center justify-center"
    >
      {/* Subtle ambient glow behind portrait */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-maroon/20 via-gold/20 to-maroon-dark/15 blur-2xl opacity-70"
        aria-hidden="true"
      />

      {/* Main Luxury Framed Container */}
      <div className="relative w-full max-w-[440px] aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden p-2.5 bg-gradient-to-b from-gold/30 via-zinc-800/10 to-maroon/30 shadow-2xl ring-1 ring-gold/25">
        {/* Inner Card Container */}
        <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden bg-zinc-900">
          <Image
            src={media.imageSrc}
            alt={media.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 440px"
            className="object-cover object-top transition-transform duration-700 hover:scale-105"
          />

          {/* Dark gradient overlay at the base for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Floating Academic Badge (Top-Left) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-4 left-4 z-10"
          >
            <div className="flex items-center gap-2 rounded-full bg-zinc-950/85 backdrop-blur-md border border-gold/40 px-3.5 py-1.5 shadow-lg">
              <GraduationCap className="h-4 w-4 text-gold shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-mono font-medium text-gold leading-tight">
                  {media.floatingBadge.title}
                </span>
                <span className="text-xs font-semibold text-zinc-100 leading-tight">
                  {media.floatingBadge.subtitle}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Floating Experience Chip (Bottom-Right) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute bottom-4 right-4 z-10"
          >
            <div className="flex items-center gap-2.5 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-gold/30 p-3 shadow-xl">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-maroon text-gold">
                <Award className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold text-white font-sans">
                  {media.experienceBadge.years}
                </span>
                <span className="text-[11px] font-medium text-gold font-mono">
                  {media.experienceBadge.label}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
