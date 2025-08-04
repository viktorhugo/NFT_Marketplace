import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"

import Link from "next/link"
import NFTBox from "./NFTBox";

interface NFTItem {
    rindexer_id: string;
    contract_address: string;
    seller: string;
    nft_address: string;
    token_id: string;
    price: string;
    tx_hash: string;
    block_number: number;
    block_hash: string;
    network: string;
    tx_index: number;
    log_index: number;
}

interface BoughtCancelled {
    nft_address: string;
    token_id: string;
    tx_hash: string;
    block_number: number;
}

interface NFTQueryResponse {
    data: {
        allItemListed: {
            nodes: NFTItem[];
        },
        allItemBoughts: {
            nodes: NFTItem[];
        },
        allItemCancelleds: {
            nodes: NFTItem[];
        },
    }
}

const GET_RECENT_NFTS_QUERY = `
    query {
        allItemListed {
            nodes {
                rindexer_id
                contract_address
                seller
                nft_address
                token_id
                price
                tx_hash
                block_number
                block_hash
                network
                tx_index
                log_index
            }
        }
        allItemBought {
            nodes {
                rindexer_id
                contract_address
                seller
                nft_address
                token_id
                price
                tx_hash
                block_number
                block_hash
                network
                tx_index
                log_index
            }
        }
        allItemCancelled {
            nodes {
                nft_address
                token_id
                tx_hash
                block_number
            }
        }
    }
`;

async function fetchNFTs(): Promise<NFTQueryResponse> {
    const response = await fetch('/api/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: GET_RECENT_NFTS_QUERY
        }),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const result: NFTQueryResponse = await response.json();
    return result;
}

function useRecentlyListedNFTs() {
    const { data, error, isLoading } = useQuery({
        queryKey: ['recentNFTs'],
        queryFn: fetchNFTs,
        // refetchInterval: 10000, // Refetch every 10 seconds
    });

    let nftDataList: NFTItem[] = [];

    useMemo(() => {
        if (!data) return [];

        const boughtNFTs = new Set<string>();
        const cancelledNFTs = new Set<string>();
    
        data.data.allItemBoughts.nodes.forEach((item: NFTItem) => {
            const key = `${item.nft_address}-${item.token_id}`;
            boughtNFTs.add(key);
        });
    
        data.data.allItemCancelleds.nodes.forEach((item: NFTItem) => {
            const key = `${item.nft_address}-${item.token_id}`;
            cancelledNFTs.add(key);
        });
    
        nftDataList = data.data.allItemListed.nodes.filter((item: NFTItem) => {
            if (!item.nft_address || !item.token_id) return false;
            const key = `${item.nft_address}-${item.token_id}`;
            return !boughtNFTs.has(key) && !cancelledNFTs.has(key);
        });

        nftDataList = nftDataList.slice(0, 100); // Limit to 100 items

        nftDataList.map( (item: NFTItem) => {
            tokenId: item.token_id;
            contractAddress: item.contract_address;
            price: item.price;
            seller: item.seller;
        });

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

    if (isLoading) return <div>Loading...</div>;
    if (error) return (
        <div className="container mx-auto px-4 py-8">
            Error: {error.message}
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mt-8 text-center">
                <Link
                    href="/list-nft"
                    className="inline-block py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    List Your NFT
                </Link>
            </div>
            <h2 className="text-2xl font-bold mb-6">Recently Listed NFTs</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                { nftDataList.length > 0 ? (
                    nftDataList.map((nft) => (
                        
                        <Link
                            key={`${nft.token_id}-${nft.contract_address}`}
                            href={`/buynft/${nft.contract_address}/${nft.token_id}`}
                            className="hover:scale-105 transition-transform"
                        >
                            <NFTBox
                                key={`${nft.token_id}-${nft.contract_address}`}
                                tokenId={nft.token_id}
                                contractAddress={nft.contract_address}
                                price={nft.price}
                            />
                        </Link>
                    ))
                ) : (
                    <p>No NFTs listed recently.</p>
                )       

                }
            </div>
        </div>
    )
}