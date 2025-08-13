import React, { useState, useEffect } from "react"
import Image from "next/image"
import { useReadContract } from "wagmi"
import { cakeNftAbi, nftAbi } from "@/app/constants"
import formatPrice from "@/lib/utils"
import { Address } from "viem"
import { Sparkles } from "lucide-react"

// Type for the NFT data
interface NFTBoxProps {
    tokenId: string
    contractAddress: string
    price: string
}

export default function NFTBox({ tokenId, contractAddress, price }: NFTBoxProps) {
    const [nftImageUrl, setNftImageUrl] = useState<string | null>(null)
    const [isLoadingImage, setIsLoadingImage] = useState(false)
    const [imageError, setImageError] = useState(false)

    // Fetch the tokenURI from the contract
    const {
        data: tokenURIData,
        isLoading: isTokenURILoading,
        error: tokenURIError,
    } = useReadContract({
        abi: nftAbi,
        address: contractAddress as Address,
        functionName: "tokenURI",
        args: [tokenId ? BigInt(tokenId) : undefined],
        query: {
            enabled: !!tokenId && !!contractAddress,
        },
    });

    // Fetch the metadata and extract image URL when tokenURI is available
    useEffect(() => {
        if (tokenURIData && !isTokenURILoading) {
            const fetchMetadata = async () => {
                setIsLoadingImage(true);
                try {
                    // Handle both HTTP and IPFS URIs
                    let url = tokenURIData as string
                    if (url.startsWith("ipfs://")) {
                        url = url.replace("ipfs://", "https://ipfs.io/ipfs/");
                    }

                    const response = await fetch(url)
                    const metadata = await response.json()
                    let imageUrl = metadata.image;

                    if (imageUrl && imageUrl.startsWith("ipfs://")) {
                        imageUrl = imageUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
                    }

                    setNftImageUrl(imageUrl)
                } catch (error) {
                    console.error("Error fetching metadata:", error)
                    setImageError(true)
                } finally {
                    setIsLoadingImage(false)
                }
            }

            fetchMetadata()
        }
    }, [tokenURIData, isTokenURILoading, tokenId, contractAddress])

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-500 
            ease-in-out hover:shadow-cyan-400/20 hover:shadow-2xl hover:-translate-y-2">
            {/* Animated gradient glow on hover */}
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-transparent via-cyan-500/30 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />

            {/* Image container */}
            <div className="aspect-square relative overflow-hidden">
                {
                    isLoadingImage || isTokenURILoading ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50">
                            <div className="flex flex-col items-center space-y-2">
                                <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
                                <span className="text-sm text-slate-400">Loading...</span>
                            </div>
                        </div>
                    ) : imageError || tokenURIError || !nftImageUrl ? (
                        <div className="relative w-full h-full bg-slate-800 flex items-center justify-center">
                            <Image
                                src="/no-image-found.png"
                                alt={`NFT ${tokenId}`}
                                width={300}
                                height={300}
                                className="object-cover opacity-50"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                    ) : (
                        <Image
                            data-slot="nft-image"
                            src={nftImageUrl}
                            alt={`NFT ${tokenId}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110 mask-b-from-50% "
                            onError={() => setImageError(true)}
                        />
                    )
                }
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex justify-between items-end">
                    <div className="flex-1 min-w-0">
                        <p className="text-xs text-cyan-300 font-mono" title={contractAddress}>
                            {contractAddress.substring(0, 6)}...
                            {contractAddress.substring(contractAddress.length - 4)}
                        </p>
                        <h3 className="font-bold text-lg truncate">
                            Token #{tokenId}
                        </h3>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-xs text-slate-400">Price</span>
                        <span className="font-bold text-lg text-cyan-400">{formatPrice(price)}</span>
                    </div>
                </div>
                <div className="mt-4 pt-2 border-t border-white/10 flex justify-between items-center">
                    <div className="flex items-center gap-1.5 text-xs text-slate-300">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span>Collectible</span>
                    </div>
                    <div className="text-xs font-mono bg-white/10 px-2 py-1 rounded">
                        Buy Now
                    </div>
                </div>
            </div>
        </div>
    )
}
