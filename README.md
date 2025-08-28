# NFT Marketplace

This is a full-stack NFT marketplace project that includes smart contracts, a decentralized application (dApp), and an event indexer for a complete and efficient user experience.

<p align="center">
  <img src="https://raw.githubusercontent.com/viktorhugo/time-lock-vault/refs/heads/master/dapp-nft/public/nft-marketplace.webp" alt="nft marketplace dApp Screenshot" width="700">
</p>

## Table of Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Smart Contracts (Foundry)](#smart-contracts-foundry)
  - [Decentralized Application (Next.js)](#decentralized-application-nextjs)
  - [Marketplace Indexer](#marketplace-indexer)

## Project Overview

This project implements an NFT marketplace where users can list, buy, and view NFTs. The architecture is divided into three main components:

1.  **Smart Contracts**: The blockchain backend, which manages the logic for NFTs and marketplace transactions.
2.  **dApp Frontend**: The web user interface that users interact with.
3.  **Indexer**: A service that listens for blockchain events and stores them so the dApp can query them efficiently.

## Project Structure

The repository is organized as a monorepo containing the following packages:

-   `foundry-nft/`: Contains the Solidity smart contracts developed with [Foundry](https://github.com/foundry-rs/foundry). This is where the NFTs and marketplace logic are defined.
-   `dapp-nft/`: A [Next.js](https://nextjs.org/) application that serves as the frontend. It allows users to connect their wallets, view NFTs, list them for sale, and purchase them.
-   `marketplaceIndexer/`: The indexing service configured with [Rindexer](https://github.com/Rindexer/rindexer) to track and record events from the smart contracts, such as `ItemListed`, `ItemBought`, and `ItemCanceled`.

## Technologies Used

-   **Blockchain**:
    -   [Solidity](https://soliditylang.org/): For writing smart contracts.
    -   [Foundry](https://github.com/foundry-rs/foundry): For contract compilation, testing, and deployment.
    -   [OpenZeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts): For implementing token standards (ERC721) and security utilities.

-   **Frontend**:
    -   [Next.js](https://nextjs.org/): React framework for server-side rendering and static site generation.
    -   [TypeScript](https://www.typescriptlang.org/): For static typing in the dApp's codebase.
    -   [RainbowKit](https://www.rainbowkit.com/): for easy wallet integration.
    -   [Tailwind CSS](https://tailwindcss.com/): For UI design.
    -   [pnpm](https://pnpm.io/): Efficient package manager for the monorepo.

-   **Indexer**:
    -   [Rindexer](https://github.com/Rindexer/rindexer): A high-performance tool for indexing blockchain data.
    -   [Docker](https://www.docker.com/): For running the indexer service in a container.

## Prerequisites

Before you begin, ensure you have the following tools installed:

-   [Node.js](https://nodejs.org/en/) (v18 or higher)
-   [pnpm](https://pnpm.io/installation)
-   [Foundry (Forge & Anvil)](https://book.getfoundry.sh/getting-started/installation)
-   [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <REPOSITORY_URL>
    cd nft-marketplace
    ```

2.  **Install dApp dependencies:**
    ```bash
    cd dapp-nft
    pnpm install
    cd ..
    ```

3.  **Initialize Foundry submodules and build the contracts:**
    ```bash
    cd foundry-nft
    make install
    make build
    cd ..
    ```

## Usage

To run the full project, you will need to have each component running in separate terminals.

### Smart Contracts (Foundry)

1.  **Start a local Anvil network:**
    ```bash
    anvil
    ```

2.  **Run contract tests:**
    ```bash
    cd foundry-nft
    forge test
    ```

3.  **Deploy the contracts to the local network (or your chosen network):**
    ```bash
    cd foundry-nft
    forge script script/DeployBasicNft.s.sol --rpc-url <RPC_URL> --private-key <PRIVATE_KEY> --broadcast
    forge script script/DeployMoodNFT.s.sol --rpc-url <RPC_URL> --private-key <PRIVATE_KEY> --broadcast
    ```
    *Replace `<RPC_URL>` and `<PRIVATE_KEY>` with the corresponding values.*

### Decentralized Application (Next.js)

1.  **Navigate to the dApp directory:**
    ```bash
    cd dapp-nft
    ```

2.  **Create a `.env.local` file** and configure the necessary environment variables (contract addresses, indexer API URL, etc.).

3.  **Start the development server:**
    ```bash
    pnpm dev
    ```
    The application will be available at [http://localhost:3000](http://localhost:3000).

### Marketplace Indexer

1.  **Ensure the contract ABIs are up-to-date** in the `marketplaceIndexer/abis` directory.

2.  **Configure `rindexer.yaml`** with the deployed contract addresses and the RPC node URL.

3.  **Start the indexer service with Docker Compose:**
    ```bash
    cd marketplaceIndexer
    docker-compose up
    ```
    The indexer will start listening for blockchain events and storing them.