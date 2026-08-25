"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useSmoothScroll } from "@/components/providers";
import { SECTION_HREFS } from "@/constants/routes";

export function HeroScrollIndicator() {
  const { scrollTo } = useSmoothScroll();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo(SECTION_HREFS.ABOUT);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="flex flex-col items-center justify-center pt-8 sm:pt-12"
    >
      <a
        href={SECTION_HREFS.ABOUT}
        onClick={handleClick}
        aria-label="Scroll down to About section"
        className="group flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full p-2"
      >
        <span className="text-[11px] font-mono uppercase tracking-widest group-hover:text-gold transition-colors">
          Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-zinc-300 dark:border-zinc-700 p-1 group-hover:border-gold transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1 rounded-full bg-gold"
          />
        </motion.div>
        <ChevronDown className="h-3.5 w-3.5 -mt-1 opacity-60 group-hover:opacity-100 transition-opacity" />
      </a>
    </motion.div>
  );
}
