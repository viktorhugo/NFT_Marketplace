"use client"

import { useAccount, useChainId } from "wagmi"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { chainsToContracts } from "../constants"
import CakeNft from '@/components/CakeNft';


export default function CakeNftPage() {
    const account = useAccount()
    const chainId = useChainId()
    const chainSupported =
        chainId in chainsToContracts && chainsToContracts[chainId]?.cakeNft !== undefined

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Connection Status */}
                    {!account.isConnected ? (
                        <div className="max-w-2xl min-w-full xl:min-w-lg w-full lg:mx-auto p-6 mt-15 flex flex-col gap-6  rounded-xl ring-[4px] border-2 border-[#6B98EC] ring-blue-400/25">
                            <div className="flex items-center justify-between">
                                <h2 className="text-3xl font-semibold text-white flamenco-font">Cake NFT Bakery</h2>
                            </div>
                            <div className="p-8 bg-white rounded-xl shadow-sm border border-zinc-200 text-center">
                                <p className="text-lg text-zinc-600 mb-4">
                                    Connect your wallet to interact with the Cake NFT contract
                                </p>
                                <div className="flex justify-center">
                                    <ConnectButton />
                                </div>
                            </div>
                        </div>
                    ) : !chainSupported ? (
                        <div className="max-w-2xl min-w-full xl:min-w-lg w-full lg:mx-auto p-6 flex flex-col gap-6  rounded-xl ring-[4px] border-2 border-[#6B98EC] ring-blue-400/25">
                            <div className="flex items-center justify-between">
                                <h2 className="text-3xl font-semibold text-white flamenco-font">Cake NFT Bakery</h2>
                            </div>
                            <div className="p-8 bg-white rounded-xl shadow-sm border border-zinc-200 text-center">
                                <p className="text-lg text-red-600 mb-4">
                                    The current network is not supported. Please switch to a supported
                                    network.
                                </p>
                                <div className="flex justify-center">
                                    <ConnectButton />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <CakeNft />
                    )}
                </div>
            </main>

            <footer className="border-t border-[#8880F5] py-4">
                <div className="container mx-auto px-4">
                    <p className="text-center text-zinc-500 text-sm">
                        Cake NFT Bakery • Built with Next.js, Wagmi, and Rainbow Kit
                    </p>
                </div>
            </footer>
        </div>
    )
}
