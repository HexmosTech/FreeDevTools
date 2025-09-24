---
title: "Inspect Peer Index - Analyze MRT Data | Online Free DevTools by Hexmos"
name: peerindex
path: "/freedevtools/tldr/common/peerindex"
canonical: "https://hexmos.com/freedevtools/tldr/common/peerindex/"
description: "Analyze MRT peer index tables with PeerIndex. Extract valuable routing insights from network data efficiently. Free online tool, no registration required."
category: common
keywords:
- MRT Data Analysis
- Peer Index Inspection
- Routing Table Analysis
- Network Data Extraction
- BGP Route Analysis
- MRT Table Parser
- Peer Information Lookup
- Network Routing Data
- peerindex command
- common command
features:
- Lists all peers in an MRT data file.
- Displays peers providing routing information.
- Reads gzip compressed MRT files.
- Reads bzip2 compressed MRT files.
- Reads xz compressed MRT files.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# peerindex

> Inspect MRT TABLE_DUMPV2 Peer Index Table.
> Can read files compressed with `gzip`, `bzip2` and `xz`.
> More information: <https://codeberg.org/1414codeforge/ubgpsuite>.

- List all peers:

`peerindex {{master6.mrt}}`

- Display all peers that have provided routing information:

`peerindex {{[-r|--only-refs]}} {{master6.mrt}}`
