import type { NavigationLabels } from "@/lib/constants";

export type HeaderNavigationLink = {
  label: NavigationLabels;
  address: string;
  imgSrc?: string;
  isDisabled?: boolean;
  infoTooltip?: string;
  startImg?: string;
};

export type FootLink = {
  text: string;
  subText: string;
  link: string;
};
