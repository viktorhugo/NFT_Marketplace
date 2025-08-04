// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "../src/MoodNFT.sol";

import { MoodNFT } from "../src/MoodNFT.sol";
import { Script, console } from "forge-std/Script.sol";
// import { Base64 } from "forge-std/Base64.sol";

contract DeployMoodNFT is Script {

    function run() external returns (MoodNFT) {
        // read svg files
        string memory sadSvg = vm.readFile("./img/sad.svg");
        string memory happySvg = vm.readFile("./img/happy.svg");
        console.log("happySvg", happySvg);
        console.log("sadSvg", sadSvg);
        // convert svg to uri
        string memory imageSad = svgToImageURI(sadSvg);
        string memory imageHappy = svgToImageURI(happySvg);
        vm.broadcast();
        // create NFT contract mood
        MoodNFT moodNFT = new MoodNFT(imageSad, imageHappy);
        vm.stopBroadcast();
        return moodNFT;
    }

    function svgToImageURI(string memory svg) public pure returns (string memory) {
        // example
        //  <svg viewBox="0 0 200 200" width="400"  height="400" x....>
        //  data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjQwMCIgIGhlaW...
        string memory baseURL = "data:image/svg+xml;base64,";
        // use openzeppelin's Base64 library
        string memory svgBase64Encoded = Base64.encode(
            bytes( // convert string to bytes
                string( // convert string to bytes
                    abi.encodePacked(svg) // encode svg to bytes
                )
            )
        );

        return string(abi.encodePacked(baseURL, svgBase64Encoded));
    }
}