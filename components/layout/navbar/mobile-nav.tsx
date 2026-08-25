"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, MessageCircle, Mail, Phone } from "lucide-react";
import {
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  FacebookIcon,
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site";
import { SECTION_HREFS } from "@/constants/routes";
import { useSmoothScroll } from "@/components/providers";
import type { NavItem } from "@/types/navigation";

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  activeSection: string;
}

export function MobileNav({
  isOpen,
  onClose,
  items,
  activeSection,
}: MobileNavProps) {
  const { scrollTo } = useSmoothScroll();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key & Lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleNavClick = (href: string) => {
    onClose();
    scrollTo(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation Menu">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <motion.div
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-zinc-950 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-zinc-200 dark:border-zinc-800"
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between p-5 border-b border-zinc-100 dark:border-zinc-900">
                <Link
                  href={SECTION_HREFS.HOME}
                  onClick={() => handleNavClick(SECTION_HREFS.HOME)}
                  className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg"
                >
                  <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-gold/40">
                    <Image
                      src="/images/logo.png"
                      alt={SITE_CONFIG.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-50">
                      Anchor Nikhil Gupta
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-gold font-medium">
                      Host & Emcee
                    </span>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="rounded-full p-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="px-5 py-6 space-y-1.5" aria-label="Mobile Navigation">
                {items.map((item, idx) => {
                  const targetId = item.href.replace("#", "");
                  const isActive = activeSection === targetId;

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    >
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "flex w-full items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all",
                          isActive
                            ? "bg-maroon text-gold font-semibold shadow-sm"
                            : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-zinc-50 dark:hover:bg-zinc-900"
                        )}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={cn(
                              "h-1.5 w-1.5 rounded-full transition-all",
                              isActive ? "bg-gold scale-125" : "bg-transparent"
                            )}
                          />
                          {item.label}
                        </span>
                        <ArrowRight
                          className={cn(
                            "h-4 w-4 transition-transform",
                            isActive ? "text-gold translate-x-0.5" : "opacity-0 -translate-x-2"
                          )}
                        />
                      </button>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer & Action */}
            <div className="p-5 border-t border-zinc-100 dark:border-zinc-900 space-y-4 bg-zinc-50/50 dark:bg-zinc-900/30">
              {/* CTA Button */}
              <button
                type="button"
                onClick={() => handleNavClick(SECTION_HREFS.CONTACT)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-maroon to-maroon-dark px-5 py-3.5 text-sm font-semibold text-gold shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <span>Book Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              {/* Direct Channels */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Direct WhatsApp Inquiry"
                  className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-green-600 hover:border-green-500/50 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-green-600" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  aria-label="Direct Phone Call"
                  className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-maroon hover:border-maroon/50 transition-colors"
                >
                  <Phone className="h-4 w-4 text-maroon" />
                  <span>Call</span>
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.creator.email}`}
                  aria-label="Direct Email"
                  className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-gold-dark hover:border-gold/50 transition-colors"
                >
                  <Mail className="h-4 w-4 text-gold-dark" />
                  <span>Email</span>
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center justify-center gap-3 pt-2 text-zinc-500 dark:text-zinc-400">
                {SITE_CONFIG.socials.instagram && (
                  <a
                    href={SITE_CONFIG.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="p-2 rounded-full hover:bg-zinc-200/60 dark:hover:bg-zinc-800 hover:text-pink-600 transition-colors"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                )}
                {SITE_CONFIG.socials.youtube && (
                  <a
                    href={SITE_CONFIG.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube Channel"
                    className="p-2 rounded-full hover:bg-zinc-200/60 dark:hover:bg-zinc-800 hover:text-red-600 transition-colors"
                  >
                    <YoutubeIcon className="h-4 w-4" />
                  </a>
                )}
                {SITE_CONFIG.socials.linkedin && (
                  <a
                    href={SITE_CONFIG.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2 rounded-full hover:bg-zinc-200/60 dark:hover:bg-zinc-800 hover:text-blue-600 transition-colors"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                )}
                {SITE_CONFIG.socials.facebook && (
                  <a
                    href={SITE_CONFIG.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Page"
                    className="p-2 rounded-full hover:bg-zinc-200/60 dark:hover:bg-zinc-800 hover:text-blue-700 transition-colors"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
