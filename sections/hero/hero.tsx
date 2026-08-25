"use client";

import { Section, Container } from "@/components/layout";
import { SECTION_IDS } from "@/constants/routes";
import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { HeroMedia } from "./hero-media";
import { HeroStats } from "./hero-stats";
import { HeroScrollIndicator } from "./hero-scroll-indicator";

export function Hero() {
  return (
    <Section
      id={SECTION_IDS.HOME}
      spacing="none"
      containerSize={false}
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-16 overflow-hidden"
    >
      {/* Ambient Lighting & Glow Layer */}
      <HeroBackground />

      <Container size="2xl" className="relative z-10 my-auto">
        {/* 2-Column Grid: Content & Media */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Narrative & CTAs (7 cols on desktop) */}
          <div className="lg:col-span-7">
            <HeroContent />
          </div>

          {/* Right Column: Framed Portrait Media (5 cols on desktop) */}
          <div className="lg:col-span-5">
            <HeroMedia />
          </div>
        </div>

        {/* Full-width Animated Statistics Counter Bar */}
        <HeroStats />

        {/* Interactive Scroll Down Prompt */}
        <HeroScrollIndicator />
      </Container>
    </Section>
  );
}
