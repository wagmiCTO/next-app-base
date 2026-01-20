import Image from "next/image";
import SocialButtons from "@/components/social-buttons/social-buttons";

const Footer = () => {
  return (
    <footer className="border-t pl-2 2xl:px-10 flex flex-row items-center z-20 justify-between">
      <div className="flex flex-row gap-1 items-center">
        <Image src="/logo.png" alt="Berachain" width={16} height={16} />
        <p className="text-[10px] ml-2 text-white font-light uppercase">
          Bandit
        </p>
      </div>

      <p className="text-[6px] lg:text-[10px]">
        Charts powered by{" "}
        <a
          href="https://www.tradingview.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          TradingView
        </a>
      </p>

      <SocialButtons size={20} />
    </footer>
  );
};

export default Footer;
