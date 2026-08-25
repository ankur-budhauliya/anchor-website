"use client";

import { Section, Container } from "@/components/layout";
import { SECTION_IDS } from "@/constants/routes";
import { AboutMedia } from "./about-media";
import { AboutContent } from "./about-content";

export function About() {
  return (
    <Section
      id={SECTION_IDS.ABOUT}
      spacing="default"
      containerSize={false}
      className="relative overflow-hidden bg-zinc-50/50 dark:bg-zinc-950/40 border-y border-zinc-200/50 dark:border-zinc-800/50"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-[450px] w-[450px] rounded-full bg-gold/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/4 h-[450px] w-[450px] rounded-full bg-maroon/10 blur-[130px]"
        aria-hidden="true"
      />

      <Container size="2xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Portrait Media (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <AboutMedia />
          </div>

          {/* Right Column: Section Narrative & Highlights (7 cols) */}
          <div className="lg:col-span-7">
            <AboutContent />
          </div>
        </div>
      </Container>
    </Section>
  );
}
