import { SECTION_HREFS } from "./routes";

export interface AboutHighlight {
  id: string;
  title: string;
  description: string;
}

export interface AboutConfig {
  badge: string;
  heading: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  narrative: {
    lead: string;
    paragraphs: string[];
  };
  highlights: AboutHighlight[];
  media: {
    imageSrc: string;
    imageAlt: string;
    floatingBadge: {
      title: string;
      subtitle: string;
    };
    experienceBadge: {
      years: string;
      label: string;
    };
  };
  cta: {
    label: string;
    href: string;
  };
}

export const ABOUT_CONFIG: AboutConfig = {
  badge: "The Voice of the Moment",
  heading: {
    prefix: "Where Academic Foundation Meets",
    highlight: "High-Voltage",
    suffix: "Stage Mastery.",
  },
  narrative: {
    lead: "A unique blend of Mass Communication expertise, Masters-level Journalism insight, and 5+ years of live stage command.",
    paragraphs: [
      "Graduating in Mass Communication and earning a Masters from Asia's pioneering journalism university gave Anchor Nikhil Gupta an innate mastery of communication psychology, impromptu storytelling, and rapid audience connection. This academic grounding ensures every script is articulate, culturally nuanced, and tailored to the occasion.",
      "On stage, he transforms into an electrifying force—celebrated by clients as charismatic, witty, and genuine. With a diverse skill set spanning live crowd interaction, choreography, rhythm drumming, and unscripted humor, he ensures seamless pacing and unforgettable celebrations for destination weddings, luxury corporate galas, and live concerts across India.",
    ],
  },
  highlights: [
    {
      id: "academic-pedigree",
      title: "Masters in Journalism",
      description: "Graduate in Mass Comm & Journalism from Asia's first journalism university.",
    },
    {
      id: "event-frequency",
      title: "70+ Events Annually",
      description: "High-demand host trusted for high-stakes celebrations and corporate galas.",
    },
    {
      id: "multilingual",
      title: "Trilingual Host",
      description: "Flawless transitions across Hindi, English, and Hinglish tailored to your crowd.",
    },
    {
      id: "custom-experience",
      title: "50% Fresh Custom Content",
      description: "Every event features bespoke interactive games, unique activities, and zero stale scripts.",
    },
    {
      id: "pan-india",
      title: "Pan-India Presence",
      description: "Active across Delhi NCR, Bhopal, Khajuraho, and destination venues nationwide.",
    },
    {
      id: "versatile-skills",
      title: "Complete Entertainer",
      description: "Multi-talented performer combining stage hosting, rhythm, dance, and impromptu humor.",
    },
  ],
  media: {
    // Premium placeholder portrait of an elegant host with microphone
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Anchor Nikhil Gupta - Professional Host & Emcee Portrait",
    floatingBadge: {
      title: "Academic Pedigree",
      subtitle: "Mass Comm & Journalism Masters",
    },
    experienceBadge: {
      years: "5+",
      label: "Years Stage Mastery",
    },
  },
  cta: {
    label: "Let's Talk",
    href: SECTION_HREFS.CONTACT,
  },
};
