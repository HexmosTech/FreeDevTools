---
title: "Bitcoin Daemon - Control Bitcoin Node | Online Free DevTools by Hexmos"
name: bitcoind
path: "/freedevtools/tldr/common/bitcoind/"
canonical: "https://hexmos.com/freedevtools/tldr/common/bitcoind/"
description: "Control Bitcoin node operations with Bitcoin Daemon. Configure networks, manage data directories, and run background processes. Free online tool, no registration required."
category: common
keywords:
- bitcoin daemon control
- bitcoin node management
- bitcoin configuration
- bitcoin network setup
- bitcoin data directory
- bitcoind linux
- bitcoind macos
- bitcoind cli
- bitcoin command line
- bitcoin blockchain
features:
- Start the Bitcoin Core daemon in foreground or background.
- Specify the network to connect to (main, test, signet, regtest).
- Define custom configuration files.
- Set a custom data directory for the blockchain.
- Stop the daemon using bitcoin-cli.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bitcoind

> Bitcoin Core daemon.
> Uses the configuration defined in `bitcoin.conf`.
> More information: <https://manned.org/bitcoind>.

- Start the Bitcoin Core daemon (in the foreground):

`bitcoind`

- Start the Bitcoin Core daemon in the background (use `bitcoin-cli stop` to stop):

`bitcoind -daemon`

- Start the Bitcoin Core daemon on a specific network:

`bitcoind -chain={{main|test|signet|regtest}}`

- Start the Bitcoin Core daemon using specific configuration file and data directory:

`bitcoind -conf={{path/to/bitcoin.conf}} -datadir={{path/to/directory}}`
