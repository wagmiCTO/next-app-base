import type { HeaderNavigationLink } from "@/lib/types";

export const NAVIGATION_LINKS = [
  {
    name: "Trade",
    href: "/",
  },
] as const;

export enum NavigationLabels {
  Trade = "Trade",
}

export const HEADER_NAVIGATION_LINKS: HeaderNavigationLink[] = [
  { label: NavigationLabels.Trade, address: "/" },
];

export type SocialMedia = "twitter" | "discord" | "tg";

export const SOCIAL_MEDIA_LINKS: Record<SocialMedia, string> = {
  twitter: "",
  discord: "",
  tg: "",
};
