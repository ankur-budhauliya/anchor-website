import { Section, Container } from "@/components/layout";
import { SECTION_IDS } from "@/constants/routes";

const SECTIONS = [
  { id: SECTION_IDS.HOME, label: "Hero & Introduction" },
  { id: SECTION_IDS.ABOUT, label: "About & Journey" },
  { id: SECTION_IDS.EVENTS, label: "Events & Experience" },
  { id: SECTION_IDS.GALLERY, label: "Gallery & Moments" },
  { id: SECTION_IDS.REELS, label: "Reels & Showreel" },
  { id: SECTION_IDS.CONTACT, label: "Booking & Inquiries" },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {SECTIONS.map((section, index) => (
        <Section
          key={section.id}
          id={section.id}
          spacing={index === 0 ? "hero" : "default"}
          className={index % 2 === 0 ? "bg-background" : "bg-zinc-50/50 dark:bg-zinc-900/30"}
        >
          <Container size="lg" className="min-h-[50vh] flex items-center justify-center border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl p-8">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-gold">
                Section Placeholder
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {section.label}
              </h2>
              <p className="text-xs text-muted-foreground font-mono">
                id: #{section.id}
              </p>
            </div>
          </Container>
        </Section>
      ))}
    </main>
  );
}
