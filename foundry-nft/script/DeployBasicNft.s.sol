// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import { BasicNft } from "../src/BasicNft.sol";
import { Script } from "forge-std/Script.sol";

contract DeployBasicNft is Script {

    BasicNft public basicNft;

    function run() external returns (BasicNft) {
        vm.startBroadcast();
        basicNft = new BasicNft();
        vm.stopBroadcast();
        return basicNft;
    }
}