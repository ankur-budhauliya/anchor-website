"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import {
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  FacebookIcon,
} from "@/components/ui/icons";
import { SITE_CONFIG } from "@/constants/site";
import { MAIN_NAV_ITEMS } from "@/constants/navigation";
import { SECTION_HREFS } from "@/constants/routes";
import { useSmoothScroll } from "@/components/providers";
import { Container } from "../container";

export function Footer() {
  const { scrollTo } = useSmoothScroll();
  const currentYear = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollTo(href);
    window.history.pushState(null, "", href);
  };

  return (
    <footer className="relative bg-zinc-950 text-zinc-300 pt-16 pb-12 border-t border-zinc-800/80 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-maroon/20 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <Container size="2xl" className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-zinc-800/60">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-5">
            <Link
              href={SECTION_HREFS.HOME}
              onClick={(e) => handleNavClick(e, SECTION_HREFS.HOME)}
              className="inline-flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-xl"
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-gold/40 transition-transform duration-300 group-hover:scale-105 group-hover:ring-gold">
                <Image
                  src="/images/logo.png"
                  alt={SITE_CONFIG.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white font-sans">
                  Anchor Nikhil Gupta
                </span>
                <span className="text-xs uppercase tracking-widest text-gold font-medium">
                  The Voice of the Moment
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Transforming luxury destination weddings, corporate summits, galas, and live stages into unforgettable, high-energy celebrations across India.
            </p>

            {/* WhatsApp Booking Card */}
            <div className="pt-2">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 px-4 py-2 text-xs font-medium text-emerald-400 hover:bg-emerald-900/60 hover:border-emerald-500/50 transition-all group"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Instant WhatsApp Inquiry: +91 91701 65570</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100" />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {SITE_CONFIG.socials.instagram && (
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Anchor Nikhil Gupta on Instagram"
                  className="h-9 w-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-pink-500 hover:border-pink-500/40 hover:bg-zinc-800 transition-all"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              )}
              {SITE_CONFIG.socials.youtube && (
                <a
                  href={SITE_CONFIG.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to Anchor Nikhil Gupta on YouTube"
                  className="h-9 w-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-red-500 hover:border-red-500/40 hover:bg-zinc-800 transition-all"
                >
                  <YoutubeIcon className="h-4 w-4" />
                </a>
              )}
              {SITE_CONFIG.socials.linkedin && (
                <a
                  href={SITE_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with Anchor Nikhil Gupta on LinkedIn"
                  className="h-9 w-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:border-blue-400/40 hover:bg-zinc-800 transition-all"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              )}
              {SITE_CONFIG.socials.facebook && (
                <a
                  href={SITE_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Anchor Nikhil Gupta on Facebook"
                  className="h-9 w-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-blue-500 hover:border-blue-500/40 hover:bg-zinc-800 transition-all"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold font-mono">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {MAIN_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold font-mono">
              Direct Contact & Booking
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="flex items-start gap-3 text-zinc-400 hover:text-white transition-colors group"
                >
                  <div className="mt-0.5 p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-gold group-hover:border-gold/50 transition-colors">
                    <Phone className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Phone</p>
                    <p className="font-medium text-zinc-200">{SITE_CONFIG.creator.phone}</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${SITE_CONFIG.creator.email}`}
                  className="flex items-start gap-3 text-zinc-400 hover:text-white transition-colors group"
                >
                  <div className="mt-0.5 p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-gold group-hover:border-gold/50 transition-colors">
                    <Mail className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Email</p>
                    <p className="font-medium text-zinc-200">{SITE_CONFIG.creator.email}</p>
                  </div>
                </a>
              </li>

              <li>
                <div className="flex items-start gap-3 text-zinc-400">
                  <div className="mt-0.5 p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-gold">
                    <MapPin className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Availability</p>
                    <p className="font-medium text-zinc-200">
                      Pan-India & Worldwide Destination Events
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            {/* Direct CTA */}
            <div className="pt-2">
              <a
                href={SECTION_HREFS.CONTACT}
                onClick={(e) => handleNavClick(e, SECTION_HREFS.CONTACT)}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-maroon to-maroon-dark px-4 py-2.5 text-xs font-semibold text-gold shadow-md hover:brightness-110 transition-all"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Inquire Event Dates</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-zinc-500">
          <p>
            &copy; {currentYear} {SITE_CONFIG.creator.name}. All rights reserved.
          </p>
          <p className="text-zinc-500 flex items-center gap-1">
            <span>Official Event Host & Emcee</span>
            <span>&bull;</span>
            <span className="text-gold font-medium">Pan India</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
