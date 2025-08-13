import type { Metadata } from "next";
import "./globals.css";
import { WalletProviders } from "./providers/wallets.providers";
import { ReactNode } from "react";
import { Header } from "@/components/Header";


export const metadata: Metadata = {
  title: "NFT Marketplace",
  description: "Marketplace for NFTs",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[url('/bg.png')]">
        <WalletProviders>
          <Header />
          { props.children }
        </WalletProviders>
      </body>
    </html>
  );
}
