"use client";

import { usePathname } from "next/navigation";
import NavigationLink from "@/components/header/navigation-link";
import { HEADER_NAVIGATION_LINKS } from "@/lib/constants";

export function Navigation() {
  const path = usePathname();

  return (
    <div className="hidden lg:flex flex-row gap-0">
      {HEADER_NAVIGATION_LINKS.map((link, i) => {
        const isActive = path === link.address;

        return (
          <NavigationLink
            link={link}
            key={link.address}
            active={isActive}
            imgSize={14}
            imgClasses="relative top-[-10px] left-[0px]"
          />
        );
      })}
    </div>
  );
}
