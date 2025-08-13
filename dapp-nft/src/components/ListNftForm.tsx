// components/ListNftForm.tsx
"use client"

import { useState } from "react"
import {
    useAccount,
    useChainId,
    useWriteContract,
    useReadContract,
    useWaitForTransactionReceipt,
} from "wagmi"
import { chainsToContracts, nftAbi, marketplaceAbi } from "@/app/constants"
import NFTBox from "@/components/NFTBox";
import { addDecimalsToPrice } from "@/lib/utils";
import { Address } from "viem";
import { Button } from "./ui/button";
import { ArrowBigLeftDash, CircleCheckBig, CircleSlash, ListChecks, LoaderCircle, PanelLeftOpen, Repeat2 } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";
import Image from "next/image";

export default function ListNftForm() {
    const { address } = useAccount();
    const chainId = useChainId();
    const marketplaceAddress = (chainsToContracts[chainId]?.nftMarketplace as Address) || "0x"

    const [nftAddress, setNftAddress] = useState("")
    const [tokenId, setTokenId] = useState("")
    const [price, setPrice] = useState("")
    const [step, setStep] = useState(1) // 1: Form Input, 2: Preview, 3: Approval, 4: Listing

    // For NFT owner verification
    const { data: ownerData, isLoading: isOwnerLoading, error: ownerError } = useReadContract({
        abi: nftAbi,
        address: nftAddress as Address,
        functionName: "ownerOf",
        args: tokenId ? [BigInt(tokenId)] : undefined,
    })

    // For NFT approval
    const {
        data: approvalHash,
        isPending: isApprovalPending,
        status: approvalStatus,
        writeContract: approveNft,
        error: approvalError,
    } = useWriteContract()

    // For listing NFT
    const {
        data: listingHash,
        isPending: isListingPending,
        writeContract: listNft,
        status: listingStatus,
        error: listingError,
    } = useWriteContract()

    // Transaction receipts
    const { isSuccess: isApprovalSuccess } = useWaitForTransactionReceipt({
        hash: approvalHash,
    })

    const { isSuccess: isListingSuccess } = useWaitForTransactionReceipt({
        hash: listingHash,
    })

    // Check if user owns the NFT
    const isOwner = ownerData === address

    if (ownerData && price) {
        if (!isOwner) {
            console.log("You are not the owner, the owner is: ", ownerData)
        } else {
            console.log("You are the owner")
        }
    }

    // Handle form submission to proceed to preview
    const handlePreview = (e: React.FormEvent) => {
        e.preventDefault()
        if (nftAddress && tokenId && price) {
            setStep(2)
        }
    }

    // Handle approve NFT for marketplace
    const handleApprove = async () => {
        if (!nftAddress || !tokenId) return

        try {
            await approveNft({
                abi: nftAbi,
                address: nftAddress as Address,
                functionName: "approve",
                args: [
                    marketplaceAddress, 
                    BigInt(tokenId)
                ],
            })
        } catch (error) {
            console.error("Error approving NFT:", error)
        }
    }

    // Handle list NFT
    const handleList = async () => {
        if (!nftAddress || !tokenId || !price) return

        try {
            const formattedPrice = addDecimalsToPrice(price)
            await listNft({
                abi: marketplaceAbi,
                address: marketplaceAddress,
                functionName: "listItem",
                args: [
                    nftAddress as Address, 
                    BigInt(tokenId), 
                    formattedPrice
                ],
            })
        } catch (error) {
            console.error("Error listing NFT:", error)
        }
    }

    if (approvalError) {
        console.log("Error approving NFT:", approvalError.message);
    }

    console.log("ApprovalStatus:", approvalStatus);
    if (approvalStatus === "success") {
        console.log("NFT approved for marketplace", approvalStatus)
        if (step === 2) setStep(3);
    }

    console.log("ListingStatus:", listingStatus);
    if (listingStatus === "success") {
        console.log("NFT listing success", listingStatus)
        if (step === 3) setStep(4);
    }
    
    if (listingError) {
        console.log("Error listing NFT:", listingError)
    }

    return (
        <div className="bg-background rounded-xl shadow-sm p-6">
            {step === 1 && (
                <form onSubmit={handlePreview} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-white-700 mb-1">
                            NFT Contract Address
                        </label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-white-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-900"
                            placeholder="0x..."
                            value={nftAddress}
                            onChange={e => setNftAddress(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white-700 mb-1">
                            Token ID
                        </label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-white-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-900"
                            placeholder="1"
                            value={tokenId}
                            onChange={e => setTokenId(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white-700 mb-1">
                            Price (CAPY Token)
                        </label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-white-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-900"
                            placeholder="0.1"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="cursor-pointer flex items-center justify-center w-full py-3 rounded-md text-white 
                        transition-all font-semibold relative  bg-gradient-to-br from-purple-500 to-cyan-500 duration-300 
                        hover:scale-105 hover:shadow-lg hover:from-purple-600 hover:to-cyan-600" 
                    >
                        <div className="flex items-center justify-center gap-2">
                            <PanelLeftOpen size={25}/>
                            <span></span> Preview Listing
                        </div>
                    </button>
                </form>
            )}

            {step === 2 && (
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold">Preview your listing</h2>
                    <div className="w-75 mx-auto">
                        {
                            !isOwner
                                ? (
                                    <Image
                                        src="/no-image-found.png"
                                        alt={`NFT ${tokenId}`}
                                        width={300}
                                        height={300}
                                        className="object-cover opacity-50 border border-white-300 rounded-md"
                                    />
                                ): (
                                    <NFTBox
                                        tokenId={tokenId}
                                        contractAddress={nftAddress}
                                        price={addDecimalsToPrice(price)}
                                    />
                                ) 
                        }
                    </div>

                    <div className="flex space-x-4">
                        <button
                            onClick={() => setStep(1)}
                            className="cursor-pointer flex-1 py-2 px-4 bg-gray-400 text-gray-100 rounded-md hover:bg-gray-300 focus:outline-none 
                            focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                            <div className="flex items-center justify-center gap-2">
                                <ArrowBigLeftDash className="color-white"/>
                                Back
                            </div>
                        </button>
                        <button
                            onClick={handleApprove}
                            className="cursor-pointer flex-1 py-2 px-4 bg-gradient-to-br rounded-md from-purple-500 to-cyan-500 duration-300 
                                hover:scale-105 hover:shadow-md hover:from-purple-600 hover:to-cyan-600"
                            disabled={ approvalStatus === "pending" ? true : false }
                        >
                            {
                                approvalStatus === "pending"
                                    ? (
                                        <div className="flex items-center justify-center gap-2">  
                                            <LoaderCircle className="animate-spin text-xl text-white" size={25} />
                                            Approving...
                                        </div>
                                    )
                                    : (
                                        <div className="flex items-center justify-center gap-2">  
                                            <ListChecks size={25} className="color-white"/>
                                            Approve NFT
                                        </div>
                                    )
                            }
                        </button>
                    </div>

                    { 
                        approvalError && (
                            <Alert className=" bg-red-600/80 mt-4">
                                <AlertDescription className="text-zinc-300 text-sm flex items-center justify-baseline gap-2">
                                    <CircleSlash size={40}/>
                                    Error: {approvalError.name}, please try again 
                                </AlertDescription>
                            </Alert>
                            
                        )
                    }
                    { 
                        !isOwner && (
                            <Alert className=" bg-red-600/80 mt-4">
                                <AlertDescription className="text-zinc-300 text-sm flex items-center justify-baseline gap-2">
                                    <CircleSlash size={40}/>
                                    You don&apos;t own this NFT. Please make sure you entered the correct
                                    contract address and token ID. 
                                </AlertDescription>
                            </Alert>
                        ) 
                    }
                </div>
            )}

            {step === 3 && (
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold">List Your NFT</h2>
                    { isApprovalSuccess ? (
                        <>
                            <Alert className=" bg-green-600/80 border-2 rounded-lg mt-0">
                                <AlertDescription className="grid grid-cols-12 text-white text-md  items-center justify-center gap-2">
                                    <div className="col-span-1">
                                        <CircleCheckBig className="text-xl text-white" size={25} />
                                    </div>
                                    <div className="col-span-11">
                                        <p className="font-semibold">Approval successful</p>
                                        <p>You can now list your NFT on the marketplace.</p>
                                    </div>
                                </AlertDescription >
                            </Alert>

                            <div className="w-75 mx-auto">
                                <NFTBox
                                    tokenId={tokenId}
                                    contractAddress={nftAddress}
                                    price={addDecimalsToPrice(price)}
                                />
                            </div>

                            <button
                                    onClick={handleList}
                                    className="w-full cursor-pointer flex-1 py-2 px-4 bg-gradient-to-br rounded-md from-purple-500 to-cyan-500 duration-300 
                                        hover:scale-105 hover:shadow-md hover:from-purple-600 hover:to-cyan-600"
                                    disabled={listingStatus === "pending"}
                                >
                                {
                                    listingStatus === "pending" 
                                        ? (
                                            <div className="flex items-center justify-center gap-2">  
                                                <LoaderCircle className="animate-spin text-xl text-white" size={25} />
                                                Listing...
                                            </div>
                                        )
                                        : (
                                            <div className="flex items-center justify-center gap-2">  
                                                <ListChecks size={25} className="color-white"/>
                                                List NFT for Sale
                                            </div>
                                        )
                                }
                            </button>

                            { listingError && (
                                <Alert className=" bg-red-600/80 mt-4">
                                    <AlertDescription className="text-zinc-300 text-sm flex items-center justify-baseline gap-2">
                                        <CircleSlash size={40}/>
                                        Error: {listingError.name}, please try again 
                                    </AlertDescription>
                                </Alert>
                            )}
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center space-y-4 p-8 bg-blue-50/50 border-2 border-dashed border-purple-200 rounded-lg">
                            <LoaderCircle className="h-10 w-10 animate-spin text-purple-600" />
                            <div className="text-center">
                                <p className="font-semibold text-blue-800">Waiting for confirmation</p>
                                <p className="text-sm text-blue-700">
                                    Your approval transaction is being processed on the blockchain...
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {step === 4 && (
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold">NFT Listed</h2>
                    { isListingSuccess ? (
                        <>
                            <Alert className=" bg-green-600/80 border-2 rounded-lg mt-0">
                                <AlertDescription className="grid grid-cols-12 text-white text-md  items-center justify-center gap-2">
                                    <div className="col-span-1">
                                        <CircleCheckBig className="text-xl text-white" size={25} />
                                    </div>
                                    <div className="col-span-11">
                                        <p className="font-semibold">Listing successful</p>
                                        <p>Your NFT has been successfully listed on the marketplace!</p>
                                    </div>
                                </AlertDescription >
                            </Alert>

                            <div className="w-75 mx-auto">
                                <NFTBox
                                    tokenId={tokenId}
                                    contractAddress={nftAddress}
                                    price={addDecimalsToPrice(price)}
                                />
                            </div>

                            <div className="flex space-x-4">
                                <button
                                    onClick={() => {
                                        setNftAddress("")
                                        setTokenId("")
                                        setPrice("")
                                        setStep(1)
                                    }}
                                    className="cursor-pointer flex-1 py-2 px-4 bg-gradient-to-br rounded-md from-purple-500 to-cyan-500 duration-300 
                                        hover:scale-105 hover:shadow-md hover:from-purple-600 hover:to-cyan-600"
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <Repeat2 size={25} className="color-white" />
                                        <span>List Another NFT</span>
                                    </div>
                                </button>
                            </div>
                        </>
                    ) : (

                        <div className="flex flex-col items-center justify-center space-y-4 p-8 bg-blue-50/50 border-2 border-dashed border-purple-200 rounded-lg">
                            <LoaderCircle className="h-10 w-10 animate-spin text-purple-600" />
                            <div className="text-center">
                                <p className="font-semibold text-blue-800">Waiting for confirmation</p>
                                <p className="text-sm text-blue-700">
                                    Your listing transaction is being processed on the blockchain...
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
