"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { HERO_CONFIG } from "@/constants/hero";

export function HeroMedia() {
  const { media } = HERO_CONFIG;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
      className="relative flex items-center justify-center"
    >
      {/* Ambient background glow ring behind image */}
      <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-maroon/30 via-gold/25 to-maroon-dark/20 blur-2xl opacity-75" />

      {/* Main Framed Container */}
      <div className="relative w-full max-w-[460px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-gold/40 via-zinc-800/20 to-maroon/40 shadow-2xl ring-1 ring-gold/30">
        {/* Inner Card Container */}
        <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden bg-zinc-900">
          {media.type === "video" && media.videoSrc ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={media.imageSrc}
              className="w-full h-full object-cover"
            >
              <source src={media.videoSrc} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={media.imageSrc}
              alt={media.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 460px"
              priority
              className="object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          )}

          {/* Luxury dark gradient overlay at bottom of image */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Floating Badge: Top-Right (Availability status) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute top-4 right-4 z-10"
          >
            <div className="flex items-center gap-2 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-700/80 px-3.5 py-1.5 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-semibold text-zinc-200">
                {media.badgeTop}
              </span>
            </div>
          </motion.div>

          {/* Floating Badge: Bottom-Left (Specialties / Tag) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute bottom-4 left-4 right-4 z-10"
          >
            <div className="flex items-center gap-2.5 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-gold/30 p-3 shadow-xl">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-maroon text-gold">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-gold font-mono font-medium">
                  Signature Specialty
                </span>
                <span className="text-xs font-semibold text-zinc-100 line-clamp-1">
                  {media.badgeBottom}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
