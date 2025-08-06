
export interface NFTItemShort {
    tokenId: string;
    contractAddress: string;
    price: string;
    seller?: string;
    buyer?: string;
}

export interface NFTQueryResponse {
    allItemListeds:   AllNfts;
    allItemBoughts:   AllNfts;
    allItemCanceleds: AllNftsCanceled;
}

export interface AllNfts {
    nodes: NFTItem[];
}

export interface AllNftsCanceled {
    nodes: BoughtCancelled[];
}

export interface BoughtCancelled {
    contractAddress: string;
    nftAddress: string;
    tokenId: string;
    txHash: string;
    blockNumber: string;
    blockHash: string;
    network: string;
    txIndex: string;
    logIndex: string;
    seller: string;
}

export interface NFTItem {
    price:           string;
    network:         string;
    contractAddress: string;
    rindexerId:      number;
    nftAddress:      string;
    tokenId:         string;
    txHash:          string;
    blockNumber:     string;
    blockHash:       string;
    txIndex:         string;
    logIndex:        string;
    seller?:          string;
    buyer?:          string;
}
