import type { Metadata } from "next";
import { SITE_CONFIG, SITE_METADATA_FALLBACKS } from "@/constants/site";
import type { SeoMetadataOptions, PersonJsonLd } from "@/types/site";

export function constructMetadata({
  title = SITE_CONFIG.title,
  description = SITE_CONFIG.description,
  image = SITE_CONFIG.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
  canonicalUrl = SITE_CONFIG.url,
  keywords = SITE_CONFIG.keywords,
  type = "website",
}: SeoMetadataOptions = {}): Metadata {
  return {
    title: {
      default: title,
      template: SITE_CONFIG.titleTemplate,
    },
    description,
    keywords,
    authors: [{ name: SITE_CONFIG.creator.name, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.creator.name,
    publisher: SITE_CONFIG.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.creator.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: SITE_CONFIG.socials.twitter ? `@${SITE_CONFIG.socials.twitter.split("/").pop()}` : undefined,
    },
    icons: {
      icon: icons,
      shortcut: icons,
      apple: icons,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : SITE_METADATA_FALLBACKS.robots,
  };
}

export function generatePersonJsonLd(): PersonJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.creator.name,
    jobTitle: SITE_CONFIG.creator.role,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    email: SITE_CONFIG.creator.email,
    telephone: SITE_CONFIG.creator.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.creator.location,
    },
    sameAs: Object.values(SITE_CONFIG.socials).filter(Boolean) as string[],
    knowsAbout: SITE_CONFIG.keywords,
  };
}
