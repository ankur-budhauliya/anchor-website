export interface SiteConfig {
  name: string;
  title: string;
  titleTemplate: string;
  description: string;
  url: string;
  ogImage: string;
  locale: string;
  creator: {
    name: string;
    role: string;
    tagline: string;
    email: string;
    phone?: string;
    location: string;
  };
  socials: {
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    twitter?: string;
    facebook?: string;
  };
  keywords: string[];
}

export interface SeoMetadataOptions {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
  keywords?: string[];
  type?: "website" | "profile" | "article";
}

export interface PersonJsonLd {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image?: string;
  email?: string;
  telephone?: string;
  address?: {
    "@type": "PostalAddress";
    addressLocality: string;
  };
  sameAs?: string[];
  knowsAbout?: string[];
}
