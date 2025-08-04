"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, mainnet, zksync, celoAlfajores } from "wagmi/chains";

export const rainbowKitConfig = getDefaultConfig({
    appName: "T-Sender",
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
    chains: [celoAlfajores, anvil, zksync, mainnet],
    ssr: false,
});