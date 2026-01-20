import type { HeaderNavigationLink } from "@/lib/types";

export const NAVIGATION_LINKS = [
  {
    name: "Trade",
    href: "/",
  },
] as const;

export enum NavigationLabels {
  Trade = "Trade",
  Stake = "Stake",
  Analytics = "Analytics",
  Docs = "Docs",
}

export const HEADER_NAVIGATION_LINKS: HeaderNavigationLink[] = [
  { label: NavigationLabels.Trade, address: "/" },
  { label: NavigationLabels.Stake, address: "/stake" },
  { label: NavigationLabels.Analytics, address: "/analytics" },
  { label: NavigationLabels.Docs, address: "/docs" },
];

export type SocialMedia = "twitter" | "discord" | "tg";

export const SOCIAL_MEDIA_LINKS: Record<SocialMedia, string> = {
  twitter: "https://x.com/whynothigher",
  discord: "https://discord.com/invite/0xoogabooga",
  tg: "https://github.com/0xoogabooga/whynothigher",
};
