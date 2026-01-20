import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { createStorage, noopStorage } from "wagmi";
import { mainnet } from "wagmi/chains";

const storage = createStorage({
  storage: typeof window !== "undefined" ? localStorage : noopStorage,
});

export const config = getDefaultConfig({
  appName: "Bandit",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "",
  chains: [mainnet],
  ssr: true,
  storage,
});
