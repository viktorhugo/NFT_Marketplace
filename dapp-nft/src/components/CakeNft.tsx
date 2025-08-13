"use client"

import { useState, useMemo, useEffect } from "react"
import {
    useChainId,
    useWriteContract,
    useAccount,
    useWaitForTransactionReceipt,
    useReadContract,
} from "wagmi"
import { cakeNftAbi, chainsToContracts } from "../app/constants"
import { Cake, CheckCircle2Icon, CircleCheckBig, CircleSlash, LoaderCircle } from "lucide-react"
import { Input } from "./ui/input"
import { Address } from "viem"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import Loading from '../app/loading';
import { Skeleton } from "./ui/skeleton"

interface NFTContractFormProps {
    // If you want to pass a contract address directly (optional)
    contractAddress?: Address
}

export default function NFTContractForm({ contractAddress }: NFTContractFormProps) {
    const account = useAccount()
    const chainId = useChainId()

    // If. change chainId or contractAddress, cakeContractAddress has updated
    const cakeContractAddress = useMemo(() => {
        if (contractAddress) return contractAddress
        return (chainsToContracts[chainId]?.cakeNft as Address) || null
    }, [chainId, contractAddress]);

    const [tokenId, setTokenId] = useState("");
    const [myTokenIds, setMyTokenIds] = useState<string[]>([]);
    const [nftImageUrl, setNftImageUrl] = useState<string | null>(null);
    const [lastMintedTokenId, setLastMintedTokenId] = useState<string | null>(null);

    // Contract writing for baking a cake (minting NFT)
    const {
        data: bakeCakeHash,
        isPending: isBakePending,
        isSuccess: onSuccess,
        error: bakeCakeError,
        writeContractAsync: writeBakeCakeAsync,
    } = useWriteContract(); 

    // Function to bake a cake (mint NFT)
    async function handleBakeCake() {
        try {
            const txHash = await writeBakeCakeAsync({
                abi: cakeNftAbi,
                address: cakeContractAddress as Address,
                functionName: "bakeCake",
                args: [],
            })
            console.log("Bake cake transaction submitted:", txHash);
        } catch (error) {
            console.error("Error baking cake:", error)
        }
    }

    // Transaction receipt for cake baking
    const {
        isLoading: isBakeConfirming,
        isSuccess: isBakeConfirmed,
        isError: isBakeError,
        error: bakeError,
        data: dataFromBakeReceipt,
    } = useWaitForTransactionReceipt({ // wait the transaction execute in blockchain and returns the dataTx
        confirmations: 1,
        hash: bakeCakeHash,
    });

    // Read contract for tokenURI
    const {
        data: tokenURIData,
        isLoading: isTokenURILoading,
        error: tokenURIError,
    } = useReadContract({
        abi: cakeNftAbi,
        address: cakeContractAddress as Address,
        functionName: "tokenURI",
        args: [tokenId ? BigInt(tokenId) : undefined],
        query: {
            enabled: !!tokenId,
        },
    })

    // Function to fetch all NFTs owned by this wallet
    async function fetchMyNFTs() {
        // Logic to fetch NFTs owned by the wallet
        // This is left blank as requested
        console.log("Fetching NFTs for address:", account.address)

        // Mock implementation - would be replaced with actual logic
        setMyTokenIds(["Sample implementation - Replace with actual NFT fetching logic"])
    }

    // Effect to process tokenURI data when it changes
    useEffect(() => {
        if (tokenURIData && !isTokenURILoading) {
            console.info("tokenURIData", tokenURIData)
            console.info("TokenURILoading", !isTokenURILoading)
            const fetchMetadata = async () => {
                try {
                    // Handle both HTTP and IPFS URIs
                    const uri = tokenURIData as string
                    let url = uri

                    const response = await fetch(url);
                    console.info("response", response)
                    const metadata = await response.json();

                    // Get image URL from metadata
                    let imageUrl = metadata.image

                    setNftImageUrl(imageUrl)
                } catch (error) {
                    console.error("Error fetching metadata:", error)
                }
            }

            fetchMetadata()
        }
    }, [tokenURIData, isTokenURILoading])

    // Effect to persist input values in localStorage
    useEffect(() => {
        const savedTokenId = localStorage.getItem("nftTokenId");
        if (savedTokenId) setTokenId(savedTokenId)
        console.log("nftTokenId", tokenId);
    }, [])

    useEffect(() => {
        console.log("Change tokenID", tokenId);
        localStorage.setItem("nftTokenId", tokenId)
    }, [tokenId])

    // Effect to track the minted NFT from transaction receipt
    useEffect(() => {
        console.dir(dataFromBakeReceipt)
        if (isBakeConfirmed && bakeCakeHash) {
            const hexTokenIdFromReceipt = dataFromBakeReceipt.logs[1].topics[1]
            const intTokenIdFromReceipt = parseInt(hexTokenIdFromReceipt!, 16)
            setLastMintedTokenId(`TokenID: ${intTokenIdFromReceipt}`)
            setTokenId(`${intTokenIdFromReceipt}`);
        }
    }, [isBakeConfirmed, bakeCakeHash])

    // Helper function for button content
    function getBakeCakeButtonContent() {
        if (isBakePending || isBakeConfirming && (!bakeCakeError || !isBakeError))
        return true;
        return false;
    }

    return (
        <div className="max-w-2xl min-w-full xl:min-w-lg w-full lg:mx-auto p-6 flex flex-col gap-6  rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-semibold text-white flamenco-font">Cake NFT Bakery</h2>
            </div>

            <div className="space-y-6">
                <div className="bg-background border border-zinc-800 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-white mb-3">Bake a New Cake NFT</h3>

                    <button
                        
                        className={
                            getBakeCakeButtonContent()
                                ? `cursor-pointer flex items-center justify-center w-full py-3 rounded-[9px] text-white font-semibold relative 
                                bg-gradient-to-br from-purple-500 to-cyan-500`
                                : `cursor-pointer flex items-center justify-center w-full py-3 rounded-[9px] text-white transition-all font-semibold relative 
                                bg-gradient-to-br from-purple-500 to-cyan-500 duration-300 
                                hover:scale-103 hover:shadow-lg hover:from-purple-600 hover:to-cyan-600`
                        }
                        onClick={handleBakeCake}
                        disabled={isBakePending || isBakeConfirming}
                    >
                        {/* Gradient */}
                        <div className="absolute w-full inset-0 bg-gradient-to-b from-white/25 via-80% to-transparent mix-blend-overlay z-10 rounded-lg" />
                        {/* Inner shadow */}
                        <div className="absolute w-full inset-0 mix-blend-overlay z-10 inner-shadow rounded-lg" />
                        {/* White inner border */}
                        <div className="absolute w-full inset-0 mix-blend-overlay z-10 border-[1.5px] border-white/20 rounded-lg" />

                        {
                            getBakeCakeButtonContent() 
                            ? (
                                <div className="flex items-center justify-center gap-2">
                                    <LoaderCircle className="animate-spin text-xl text-white" size={25} />
                                </div>
                            ) 
                            : (
                                <div className="flex items-center justify-center gap-2">
                                    <Cake size={25} />
                                    <span>Bake a Cake NFT</span>
                                </div>
                            )
                        }
                    </button>

                    { lastMintedTokenId && isBakeConfirmed && (
                        <Alert className=" bg-green-600/80 mt-4 border-green-400 rounded-md">
                            <AlertDescription className="text-stone-100 text-md font-semibold flex items-center justify-center gap-2">
                                <CircleCheckBig className="text-xl text-white" size={25} />
                                <p>Cake NFT baked successfully!</p>
                                Minted:
                                <p className="text-white">{ lastMintedTokenId }</p>
                            </AlertDescription >
                        </Alert>
                    )}

                    {/* { isBakeConfirmed && (
                        <Alert className=" bg-green-600/80 mt-4">
                            <AlertDescription className="text-stone-100 text-md font-semibold flex items-center justify-center gap-2">
                                <CheckCircle2Icon className="text-xl text-white" size={25} />
                                Cake NFT baked successfully!
                            </AlertDescription >
                        </Alert>
                    )}  */}

                    { (bakeCakeError || isBakeError) && (
                        <Alert className=" bg-red-600/80 mt-4 border border-red-300 rounded-md">
                            <CircleSlash  className="text-xl text-white" size={25} />
                            <AlertTitle className="text-zinc-200 " >Error baking cake.</AlertTitle>
                            {
                                bakeError && (
                                    <AlertDescription className="text-stone-100">
                                        bakeError: { bakeCakeError?.message || ""}
                                    </AlertDescription>
                                )
                            }
                        </Alert>
                    )}

                    { isBakePending && (
                        <Alert className=" bg-transparent border-2 border-[#6B98EC] rounded-lg mt-4">
                            <AlertDescription className="text-white text-md font-semibold flex items-center justify-center gap-2">
                                <LoaderCircle className="animate-spin text-[#6B98EC]" size={25} />
                                Confirming in wallet...
                            </AlertDescription >
                        </Alert>
                    )}

                    { isBakeConfirming && (
                        <Alert className=" bg-transparent border-2 border-[#6B98EC] rounded-lg mt-4">
                            <AlertDescription className="text-white text-md font-semibold flex items-center justify-center gap-2">
                                <LoaderCircle className="animate-spin text-[#6B98EC]" size={25} />
                                Baking your cake NFT...
                            </AlertDescription >
                        </Alert>

                    )}
                </div>

                {/* Section 3: Show NFT by tokenId */}
                <div className="bg-background border border-zinc-800 rounded-lg p-4">
                    <h3 className="text-sm font-bold text-white mb-3">View an NFT</h3>

                    <div className="flex gap-3">
                        <div className="flex-grow">
                            <Input
                                // label="Token ID"
                                placeholder="Enter token ID"
                                className=" border border-[#6B98EC] text-white"
                                value={tokenId}
                                onChange={e => setTokenId(e.target.value)}
                            />
                        </div>
                    </div>

                    { tokenId && nftImageUrl && !isTokenURILoading && !tokenURIError && (
                        <div className="mt-4 flex flex-col items-center justify-center gap-2">
                            <img
                                src={nftImageUrl}
                                alt={`NFT #${tokenId}`}
                                className="w-70 h-auto max-h-70 object-contain bg-white/5 backdrop-blur-xl border border-[#6B98EC]  rounded-lg"
                                onError={() => {
                                    console.error("Error loading NFT image")
                                }}
                            />
                            <p className="text-sm text-zinc-300 mt-2 text-center">
                                NFT #{tokenId}
                            </p>
                        </div>
                    )}

                    { tokenURIError && (
                        <Alert className=" bg-red-600/80 mt-4">
                            <AlertDescription className="text-zinc-300 text-sm flex items-center justify-baseline gap-2">
                                <CircleSlash size={40}/>
                                Error: could not find NFT with token ID #{tokenId} 
                            </AlertDescription>
                        </Alert>
                        
                    )}

                    { isTokenURILoading && (
                        <AlertDescription className="text-white text-md flex items-center justify-center gap-2 h-80 w-full">
                            <LoaderCircle className="animate-spin text-[blueviolet]" size={35} />
                            <p> Loading NFT... </p>
                        </AlertDescription >
                    )}

                </div>
            </div>
        </div>
    )
}
