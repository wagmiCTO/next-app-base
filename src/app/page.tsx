"use client";

import { useAccount } from "wagmi";

export default function Home() {
  const { address } = useAccount();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        Your address: {address}, smth coming soon...
    </div>
  );
}
