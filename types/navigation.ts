export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
}

export interface SocialLink {
  platform: "instagram" | "linkedin" | "youtube" | "twitter" | "facebook" | "email" | "phone";
  label: string;
  url: string;
  icon?: string;
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}
