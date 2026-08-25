export type EventCategory =
  | "corporate"
  | "wedding"
  | "concert"
  | "sports"
  | "conference"
  | "gala"
  | "product-launch"
  | "award-show";

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export interface EventExperience {
  id: string;
  title: string;
  client: string;
  category: EventCategory;
  date?: string;
  location?: string;
  attendeesCount?: string;
  description?: string;
  featured?: boolean;
  image?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
  eventType?: string;
}

export interface ShowreelItem {
  id: string;
  title: string;
  description?: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration?: string;
  featured?: boolean;
}

export interface AnchorService {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription?: string;
  icon?: string;
  highlights?: string[];
  category: EventCategory;
}

export interface AnchorProfile {
  name: string;
  stageName?: string;
  title: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  metrics: MetricItem[];
  services: AnchorService[];
  showreels: ShowreelItem[];
  experiences: EventExperience[];
  testimonials: Testimonial[];
  clients: string[];
}
