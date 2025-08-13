"use client";

import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import React from "react";
import { WagmiProvider } from "wagmi";
import { rainbowKitConfig } from "@/config/rainbowKitConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css";

const queryClient = new QueryClient();

export function WalletProviders(props: { children: React.ReactNode }) {
    if (typeof window === 'undefined') {
        // Estamos en SSR → no inicializar
        return null;
    }
    return (
        <WagmiProvider config={rainbowKitConfig}> {/* for interactions with the blockchain */}
            <QueryClientProvider client={queryClient}> {/* for caching and fetching data */}
                <RainbowKitProvider theme={darkTheme()}>
                    {props.children} {/* . all website will be in here */}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}