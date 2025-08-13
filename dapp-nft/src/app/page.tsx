'use client'

import { DashboardLayout } from "@/components/DashboardLayout";
import { useEffect, useState } from "react";
import { useAccount, useChainId } from "wagmi";
import { WalletConnect } from '../components/wallet-connect';
import { Ban } from "lucide-react";
import { getRequestCompliance } from "./api-compliance/route";
import RecentlyListedNFTs from "@/components/RecentlyListed";

export default function Home() {

  const { address,isConnected } = useAccount()
  const [isCompliant, setCompliant] = useState<boolean>(true);
  const checkCompliance = async (address: string): Promise<void> => {
    try {
        const response = await getRequestCompliance(address);
        const result = await response.json();
        console.log("Compliance result:", result);
        setCompliant(result.success && result.isApproved);
    } catch (error) {
        console.error("Error checking compliance:", error);
        setCompliant(false);
    }
  }

  // Check compliance when changing address
  useEffect(() => {
      if (address) checkCompliance(address);
  },[address])
    

  return (
    <DashboardLayout>
      { !isConnected ? (
          <WalletConnect />
        ) : (
          isCompliant ? (
            <RecentlyListedNFTs />
          ) : (
            <div className="flex flex-col items-center justify-center h-screen">
              <Ban className="text-red-500 w-16 h-16 mb-6 animate-bounce" />
              <h1 className="text-2xl font-bold mb-4">You are denied!!</h1>
              <p className="text-lg mb-4">Please ensure your wallet is compliant to access the marketplace.</p>
            </div>
          )
      )}
    </DashboardLayout>
  );
}
