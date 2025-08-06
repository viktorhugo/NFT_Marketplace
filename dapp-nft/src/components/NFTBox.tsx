import React, { useState, useEffect } from "react"
import Image from "next/image"
import { useReadContract } from "wagmi"
import { cakeNftAbi } from "@/app/constants"
import formatPrice from "@/lib/utils"
import { BanknoteX } from "lucide-react"
import { Address } from "viem"

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
        abi: cakeNftAbi,
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
                    const uri = tokenURIData as string
                    const url = uri
                    const response = await fetch(url)
                    const metadata = await response.json()
                    const imageUrl = metadata.image;
                    
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

        <div className="group relative overflow-hidden rounded-xl border bg-card shadow-nft transition-all duration-300 hover:shadow-nft-hover hover:-translate-y-1">
            {/* Gradient overlay for premium look */}
            <div className="absolute inset-0 bg-nft-card-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            
            {/* Image container */}
            <div className="aspect-square relative bg-muted overflow-hidden">
                {isLoadingImage || isTokenURILoading ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center space-y-2">
                        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                        <span className="text-sm text-muted-foreground animate-pulse">Loading...</span>
                        </div>
                    </div>
                ) : imageError || tokenURIError || !nftImageUrl ? (
                    <div className="relative">
                        <Image
                        src="/no-image-found.png"
                        alt={`NFT ${tokenId}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* <BanknoteX className="absolute top-3 left-3 h-40 w-40 text-muted-foreground " /> */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                ) : (
                    <div>
                        <Image
                            data-slot="nft-image"
                            src={nftImageUrl}
                            alt={`NFT ${tokenId}`}
                            fill
                            className="object-cover"
                            onError={() => setImageError(true)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                )}
                
                {/* Corner accent */}
                <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Content */}
            <div className="p-5 space-y-3">
                <div className="flex justify-between items-start">
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg text-card-foreground truncate group-hover:text-primary transition-colors duration-200">
                            Token #{tokenId}
                        </h3>
                    </div>
                    <span className="inline-flex float-end px-3 py-1.5 rounded-md text-sm font-semibold bg-[#798EF0] shadow-sm">
                        {formatPrice(price)}
                    </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1" title={contractAddress}>
                    {contractAddress.substring(0, 5)}...{contractAddress.substring(contractAddress.length - 5)}
                </p>
                {/* Price badge */}
                
                {/* Bottom action area */}
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-nft-success" />
                        <span className="text-xs text-muted-foreground">Available</span>
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            </div>

    )
}
