"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type InfoTooltipProps = {
  size?: number;
  text?: string;
  link?: string;
  textClasses?: string;
  imgClasses?: string;
  header?: string;
  align?: "start" | "end" | "center" | undefined;
  cardContentClasses?: string;
};

const InfoTooltip = ({
  size,
  text,
  link,
  textClasses,
  imgClasses,
  header,
  align = "start",
  cardContentClasses,
}: InfoTooltipProps) => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(undefined);

  const handleHoverTriggerClick = () => {
    if (isOpen) {
      setIsOpen(undefined);
    } else {
      setIsOpen(true);
    }
  };

  if (text)
    return (
      <HoverCard openDelay={100} open={isOpen}>
        <HoverCardTrigger
          style={{
            height: size ?? 20,
            width: size ?? 20,
            lineHeight: `${size ?? 20}px`,
          }}
          onClick={handleHoverTriggerClick}
          onMouseOut={() => setIsOpen(undefined)}
          className={imgClasses}
        >
          <Image
            src="/icons/info.svg"
            alt="info"
            width={size ?? 20}
            height={size ?? 20}
            className="cursor-pointer"
          />
        </HoverCardTrigger>
        <HoverCardContent align={align} className={cardContentClasses}>
          {header && <h4 className="text-white text-[15px]">{header}</h4>}
          <p className={textClasses}>{text}</p>
        </HoverCardContent>
      </HoverCard>
    );

  if (link)
    return (
      <Link href={link} target="_blank">
        <div
          style={{
            height: size ?? 20,
            width: size ?? 20,
            lineHeight: `${size ?? 20}px`,
          }}
        >
          <Image
            src="icons/info.svg"
            alt="info"
            width={size ?? 20}
            height={size ?? 20}
            className="cursor-pointer"
          />
        </div>
      </Link>
    );

  return null;
};

export default InfoTooltip;
