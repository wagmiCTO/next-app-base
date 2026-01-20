import Image from "next/image";
import Link from "next/link";
import { SOCIAL_MEDIA_LINKS } from "@/lib/constants";

type SocialButtonsProps = {
  size?: number;
  containerClasses?: string;
};

const SocialButtons = ({ size, containerClasses }: SocialButtonsProps) => {
  const socialMediaLinks = Object.keys(SOCIAL_MEDIA_LINKS) as Array<
    keyof typeof SOCIAL_MEDIA_LINKS
  >;
  return (
    <div
      className={`flex flex-row items-center justify-center ${containerClasses}`}
    >
      {socialMediaLinks.map((media, i) => (
        <Link
          href={SOCIAL_MEDIA_LINKS[media]}
          key={media}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={` hover:opacity-80 p-2 px-4 border-l ${i === socialMediaLinks.length - 1 ? "border-r" : ""}`}
          >
            <Image
              width={size ? size - 6 : 24}
              height={size ? size - 6 : 24}
              src={`/icons/socials/${media}.svg`}
              alt="Funny bear"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialButtons;
