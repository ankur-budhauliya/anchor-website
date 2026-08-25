"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Crown,
  Music,
  Briefcase,
  Trophy,
  Sparkles,
  Rocket,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { useSmoothScroll } from "@/components/providers";
import { SECTION_HREFS } from "@/constants/routes";
import type { EventCategoryItem, EventIconType } from "@/constants/events";

const ICON_MAP: Record<EventIconType, LucideIcon> = {
  Crown,
  Music,
  Briefcase,
  Trophy,
  Sparkles,
  Rocket,
};

export interface EventCardProps {
  event: EventCategoryItem;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  const { scrollTo } = useSmoothScroll();
  const IconComponent = ICON_MAP[event.iconName] || Sparkles;

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo(SECTION_HREFS.CONTACT);
    window.history.pushState(null, "", SECTION_HREFS.CONTACT);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollTo(SECTION_HREFS.CONTACT);
      window.history.pushState(null, "", SECTION_HREFS.CONTACT);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: 0.08 * index, ease: "easeOut" }}
      className="h-full"
    >
      <div
        role="button"
        tabIndex={0}
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        aria-label={`Inquire about ${event.title}`}
        className="group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 shadow-md hover:shadow-xl hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 cursor-pointer"
      >
        {/* Top Image Preview with Gradient Overlay */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
          <Image
            src={event.imageSrc}
            alt={event.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Luxury dark bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Floating Pill Badge */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="inline-flex items-center rounded-full bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1 text-[11px] font-semibold text-zinc-100 shadow-sm">
              {event.badge}
            </span>
          </div>

          {/* Category Icon */}
          <div className="absolute bottom-3.5 left-3.5 z-10 flex h-10 w-10 items-center justify-center rounded-2xl bg-maroon/90 text-gold border border-gold/30 shadow-lg backdrop-blur-md group-hover:bg-maroon group-hover:scale-110 transition-all duration-300">
            <IconComponent className="h-5 w-5" />
          </div>
        </div>

        {/* Card Body & Description */}
        <div className="flex flex-col flex-1 justify-between p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans group-hover:text-gold-dark dark:group-hover:text-gold transition-colors duration-200">
              {event.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3 font-normal">
              {event.description}
            </p>
          </div>

          {/* Interactive CTA Link Row */}
          <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-gold-dark dark:group-hover:text-gold transition-colors">
            <span className="flex items-center gap-1">Inquire For Event</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 group-hover:bg-maroon group-hover:text-gold transition-colors duration-200">
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
