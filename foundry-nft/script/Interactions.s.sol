// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { Script } from "forge-std/Script.sol";
import { BasicNft } from "../src/BasicNft.sol";


contract MintBasicNft is Script{

    string public constant CAPY_URI = "ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json";

    function run() external {
        // simpre queremos trabajar con en NFT  mas reciente implementado
        address mostRecentlyDeployed = address(0x02fe85ae1BfBa6ad90487b62dAd7183506399f86);
        mintNftOnContract(mostRecentlyDeployed);
    }

    function mintNftOnContract(address contractAddress) public {
        vm.startBroadcast();
        BasicNft(contractAddress).mintNft(CAPY_URI);
        vm.stopBroadcast();
    }

}