// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import { Test } from "forge-std/Test.sol";
import { console } from "forge-std/console.sol";
import { DeployBasicNft } from "../../script/DeployBasicNft.s.sol";
import { BasicNft } from "../../src/BasicNft.sol";

// INTEGRATION TEST FOR COMBINE FUNCTIONS

contract BasicNfTest is Test {
    DeployBasicNft public deployer;
    BasicNft public basicNft;
    address USER = makeAddr("user");
    string public constant CAPPY = "ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json";

    function setUp() public {
        deployer = new DeployBasicNft();
        basicNft = deployer.run();
    }

    function testNameIsCorrect() public view {
        string memory expectedName = "Cappy";
        string memory actualName = basicNft.name();
        console.log("expectedName", expectedName);
        console.log("actualName", actualName);

        // * compare two strings
        // 1. transform to bytes32
        // 2. make hash
        // 3. compare
        assertEq(keccak256(abi.encodePacked(expectedName)), keccak256(abi.encodePacked(actualName)));
    }

    function testCanMintAndHaveABalance() public {
        vm.prank(USER);
        basicNft.mintNft(CAPPY);
        assertEq(basicNft.balanceOf(USER), 1); // verificar que el balance sea de 1 (un mint token)
        assertEq(
            keccak256(abi.encodePacked(basicNft.tokenURI(0))),
            keccak256(abi.encodePacked(CAPPY))
        ); // verificar que el URI del token sea de CAPPY
    }
}