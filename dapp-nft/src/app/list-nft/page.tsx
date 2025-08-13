// app/list-nft/page.tsx
"use client"

import { useAccount, useChainId } from "wagmi"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import ListNftForm from "@/components/ListNftForm"
import { chainsToContracts } from "@/app/constants"

export default function ListNftPage() {
    const account = useAccount()
    const chainId = useChainId()
    const chainSupported =
        chainId in chainsToContracts && chainsToContracts[chainId]?.nftMarketplace !== undefined

    return (
        // bg-[url('/bg.png')]
        <div className="flex flex-col min-h-screen"> 
            <main className="flex-1 container mx-auto px-4 py-8 ">
                <div className="max-w-3xl min-w-full md:min-w-lg xl:min-w-lg w-full lg:mx-auto p-6 flex flex-col gap-6 mt-15 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <h1 className="text-3xl flamenco-font font-bold mb-6 text-white">
                        List your NFT for sale
                    </h1>

                    {/* Connection Status */}
                    {!account.isConnected ? (
                        <div className="p-8 bg-white rounded-xl shadow-sm border border-zinc-200 text-center">
                            <p className="text-lg text-zinc-600 mb-4">
                                Connect your wallet to list your NFT
                            </p>
                            <div className="flex justify-center">
                                <ConnectButton />
                            </div>
                        </div>
                    ) : !chainSupported ? (
                        <div className="p-8 bg-white rounded-xl shadow-sm border border-zinc-200 text-center">
                            <p className="text-lg text-red-600 mb-4">
                                The current network is not supported. Please switch to a supported
                                network.
                            </p>
                            <div className="flex justify-center">
                                <ConnectButton />
                            </div>
                        </div>
                    ) : (
                        <ListNftForm />
                    )}
                </div>
            </main>

            <footer className="bg-white border-t border-zinc-200 py-6">
                <div className="container mx-auto px-4">
                    <p className="text-center text-zinc-500 text-sm">
                        NFT Marketplace • Built with Next.js, Wagmi, and Rainbow Kit
                    </p>
                </div>
            </footer>
        </div>
    )
}
