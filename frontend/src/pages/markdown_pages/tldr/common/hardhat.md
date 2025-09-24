---
title: "Develop Ethereum Software - Hardhat Development | Online Free DevTools by Hexmos"
name: hardhat
path: "/freedevtools/tldr/common/hardhat"
canonical: "https://hexmos.com/freedevtools/tldr/common/hardhat/"
description: "Develop Ethereum software with Hardhat, a robust development environment. Compile smart contracts, run tests, and deploy decentralized apps. Free online tool, no registration required."
category: common
keywords:
- Ethereum development environment
- Hardhat smart contract compiler
- Javascript Ethereum testing
- Blockchain development tool
- Decentralized application development
- Solidity compilation
- Ethereum JSON-RPC node
- Hardhat test runner
- Smart contract artifact generation
- dApp development environment
features:
- Compile smart contracts and generate artifacts
- Run user-defined scripts after compilation
- Execute Mocha tests for smart contracts
- Start a local Ethereum JSON-RPC node
- Clean the cache and artifacts directories
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hardhat

> A development environment for Ethereum software.
> More information: <https://hardhat.org/hardhat-runner/docs/getting-started#quick-start>.

- List available subcommands (or create a new project if no configuration exists):

`hardhat`

- Compile the current project and build all artifacts:

`hardhat compile`

- Run a user-defined script after compiling the project:

`hardhat run {{path/to/script.js}}`

- Run Mocha tests:

`hardhat test`

- Run all given test files:

`hardhat test {{path/to/file1.js path/to/file2.js ...}}`

- Start a local Ethereum JSON-RPC node for development:

`hardhat node`

- Start a local Ethereum JSON-RPC node with a specific hostname and port:

`hardhat node --hostname {{hostname}} --port {{port}}`

- Clean the cache and all artifacts:

`hardhat clean`
