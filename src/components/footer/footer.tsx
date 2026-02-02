import Image from "next/image";
import SocialButtons from "@/components/social-buttons/social-buttons";

const Footer = () => {
  return (
    <footer className="border-t pl-2 2xl:px-10 flex flex-row items-center z-20 justify-between">
      <div className="flex flex-row gap-1 items-center">
        <Image src="/logo.png" alt="Logo" width={16} height={16} />
        <p className="text-[10px] ml-2 text-white font-light uppercase">App</p>
      </div>

      <SocialButtons size={20} />
    </footer>
  );
};

export default Footer;
