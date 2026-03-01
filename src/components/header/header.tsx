"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import MobileNavigation from "@/components/header/navigation/mobile-navigation";
import { Navigation } from "@/components/header/navigation/navigation";
import { CONFIG } from "@/lib/env";

export function Header() {
  return (
    <header className="lg:border-b px-4 py-2 lg:py-3 2xl:px-20 flex flex-row items-center z-30 justify-center">
      <div className="w-full max-w-(--breakpoint-xl) flex flex-row justify-between items-center">
        <div className="flex flex-row gap-6 items-center">
          <Link href={CONFIG.LP_URL ?? "/"} className="hover:opacity-80">
            <div className="ml-1 w-10 h-10 rounded-lg bg-white flex items-center justify-center cursor-pointer">
              <span className="text-black text-2xl font-bold leading-none">N</span>
            </div>
          </Link>
          <div className="h-[50px] rounded-lg justify-start items-center lg:p-2 flex">
            <Navigation />
          </div>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <ConnectButton />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
