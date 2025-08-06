import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import NFTBox from "./NFTBox"
import Link from "next/link"
import { BoughtCancelled, NFTItem, NFTItemShort, NFTQueryResponse } from "@/app/interfaces/indexer";
import { LayoutList, LoaderPinwheel, ShieldAlert } from "lucide-react";
import { request, gql } from 'graphql-request';
import { Button } from "./ui/button";

const GRAPHQL_API_URL = 'http://localhost:4001/graphql';

const query = gql`
    query {
        allItemListeds {
            nodes {
                seller
                price
                network
                contractAddress
                rindexerId
                nftAddress
                tokenId
                txHash
                blockNumber
                blockHash
                txIndex
                logIndex
            }
        }
        allItemBoughts {
            nodes {
            buyer
            price
            network
            contractAddress
            rindexerId
            nftAddress
            tokenId
            txHash
            blockNumber
            blockHash
            txIndex
            logIndex
            }
        }
        allItemCanceleds {
            nodes {
            contractAddress
            seller
            nftAddress
            tokenId
            txHash
            blockNumber
            blockHash
            network
            txIndex
            logIndex
            }
        }
    }
`;

async function fetchNFTs(): Promise<NFTQueryResponse> {
    try {
        const response: NFTQueryResponse = await request(`${GRAPHQL_API_URL}`, query);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error('Network response was not ok');
    }
}

function useRecentlyListedNFTs() {
    const { data, error, isLoading } = useQuery<NFTQueryResponse>({
        queryKey: ['recentNFTs'],
        queryFn: fetchNFTs,
    });

    const nftDataList: NFTItemShort[] = useMemo(() => {
        if (!data) return [];

        const boughtNFTs = new Set<string>();
        const cancelledNFTs = new Set<string>();

        data.allItemBoughts.nodes.forEach((item: NFTItem) => {
            const key = `${item.nftAddress}-${item.tokenId}`;
            boughtNFTs.add(key);
        });

        data.allItemCanceleds.nodes.forEach((item: BoughtCancelled) => {
            const key = `${item.nftAddress}-${item.tokenId}`;
            cancelledNFTs.add(key);
        });

        const availsNFTs = data.allItemListeds.nodes.filter((item: NFTItem) => {
            if (!item.nftAddress || !item.tokenId) return false;
            const key = `${item.nftAddress}-${item.tokenId}`;
            return !boughtNFTs.has(key) && !cancelledNFTs.has(key);
        });

        const recent = availsNFTs.slice(0, 100); // Limit to 100 items

        return recent.map((item: NFTItem) => ({
            tokenId: item.tokenId,
            contractAddress: item.nftAddress,
            price: item.price,
            seller: item.seller,
            buyer: item.buyer,
        }));

    }, [data]);

    return {
        nftDataList,
        isLoading,
        error,
    };
}


// Main component that uses the custom hook
export default function RecentlyListedNFTs() {
    
    const { nftDataList, isLoading, error } = useRecentlyListedNFTs();    

    if (isLoading) return (
        <div className="flex flex-col items-center justify-center py-20">
            <LoaderPinwheel className="animate-spin  h-12 w-12 " />
            <span className="text-lg text-gray-300">Loading recent Nfts...</span>
        </div>
    );

    if (error) return (
        <div className="flex flex-col items-center justify-center py-20 text-red-100">
            <ShieldAlert className="h-12 w-12 mb-2 animate-pulse" />
            <span className="text-lg font-semibold">¡Ups! Ocurrió un error al cargar los NFTs.</span>
            <span className="text-sm text-red-400 mt-1">{error.message}</span>
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <Link
                href="/list-nft"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors float-right"
            >
                <span>List NFT</span>
                {/* Lucide: PlusCircle */}
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8M8 12h8" />
                </svg>
            </Link>
            <h2 className="text-2xl font-bold mb-6">Recently Listed NFTs</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                { nftDataList.length > 0 ? (
                        nftDataList.map((nft) => (
                            
                            <Link
                                key={`${nft.tokenId}-${nft.contractAddress}`}
                                href={`/buynft/${nft.contractAddress}/${nft.tokenId}`}
                                className="hover:scale-105 transition-transform"
                            >
                                <NFTBox
                                    key={`${nft.tokenId}-${nft.contractAddress}`}
                                    tokenId={nft.tokenId}
                                    contractAddress={nft.contractAddress}
                                    price={nft.price}
                                />
                            </Link>
                        ))
                    
                    ) : (
                        <div className="flex flex-col items-center justify-center col-span-full py-12">
                            <svg className="h-16 w-16 text-gray-400 mb-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                {/* Lucide: ImageOff */}
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2 2l20 20M21 21H3a1 1 0 01-1-1V4.41M21 21V3a1 1 0 00-1-1H4.41M21 21l-5.34-5.34a2 2 0 00-2.83 0l-1.13 1.13a2 2 0 01-2.83 0L3 10.41" />
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-300 mb-2">¡Nada por aquí todavía!</h3>
                            <p className="text-gray-400 mb-4">Aún no hay NFTs listados recientemente.<br />¡Sé el primero en listar el tuyo!</p>
                            
                            <Button variant="default">
                                <LayoutList className="animate-pulse" />
                                <Link href="/list-nft">List NFTs</Link>
                            </Button>
                        </div>
                    )       
                }
            </div>
        </div>
    )
}