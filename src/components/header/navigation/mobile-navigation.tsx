"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SocialButtons from "@/components/social-buttons/social-buttons";
import { Button } from "@/components/ui/button";
import { HEADER_NAVIGATION_LINKS } from "@/lib/constants";

const MobileNavigation = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <div className="flex lg:hidden">
      <Button
        variant="ghost"
        size="sm"
        className="text-white px-2 focus-visible:ring-offset-0"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <Image src="/icons/close.svg" alt="Manu" width={20} height={20} />
        ) : (
          <Image src="/icons/menu.svg" alt="Manu" width={20} height={20} />
        )}
      </Button>

      <div
        className={`${showMenu ? "flex" : "hidden"} p-[25px] flex-col justify-between bg-[#2b2349] min-h-[calc(100vh-66px)] w-full absolute top-[66px] left-0 border-t`}
      >
        <div className="flex flex-col gap-2">
          {HEADER_NAVIGATION_LINKS.filter((link) => !link.isDisabled).map(
            (link, i) => (
              <Link
                key={link.address}
                href={link.isDisabled ? "#" : link.address}
                onClick={() => setShowMenu(false)}
              >
                <p className="text-white text-[24px] leading-[48px]">
                  {link.label}
                  {link.imgSrc && (
                    <Image
                      src={link.imgSrc}
                      alt="img"
                      width={20}
                      height={20}
                      className="ml-1"
                    />
                  )}
                </p>
              </Link>
            ),
          )}
        </div>
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="flex flex-row justify-center">
            <SocialButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
