import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import InfoTooltip from "@/components/info-tooltip/info-tooltip";
import type { HeaderNavigationLink } from "@/lib/types";

type NavigationLinkProps = {
  active?: boolean;
  classes?: string;
  imgSize?: number;
  imgClasses?: string;
  link: HeaderNavigationLink;
};

const NavigationLink = ({
  active,
  classes,
  imgSize,
  imgClasses,
  link,
}: NavigationLinkProps) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row gap-1 px-3">
      <Link
        href={link.isDisabled ? "#" : link.address}
        onClick={
          pathname === link.address ? () => window.location.reload() : undefined
        }
        className={`h-[32px] leading-[32px] px-[12px] rounded-full ${classes ? `${classes} ` : ""}${active ? "text-white bg-primary" : "text-purple "} px-3 hover:opacity-80 cursor-pointer text-sm font-light flex flex-row items-center`}
      >
        {link.startImg && (
          <Image
            src={link.startImg}
            alt={link.label}
            width={imgSize ?? 20}
            height={imgSize ?? 20}
            className={"mr-1"}
          />
        )}
        <p>{link.label}</p>
        {link.imgSrc && (
          <Image
            src={link.imgSrc}
            alt={link.label}
            width={imgSize ?? 20}
            height={imgSize ?? 20}
            className={`ml-1 ${imgClasses}`}
          />
        )}
      </Link>
      {link.infoTooltip && (
        <InfoTooltip
          text={link.infoTooltip}
          size={16}
          textClasses="text-[12px] text-purple"
          cardContentClasses="p-2!"
        />
      )}
    </div>
  );
};

export default NavigationLink;
