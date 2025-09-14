---
title: "Control IPFS Files - Manage Decentralized Storage | Free DevTools"
name: ipfs
path: /freedevtools/tldr/common/ipfs
canonical: "https://hexmos.com/freedevtools/tldr/common/ipfs/"
description: "Manage IPFS files with IPFS command. Add, pin, and retrieve decentralized storage content. Free online tool, no registration required."
category: common
keywords:
- IPFS file management
- decentralized storage management
- IPFS pinning
- IPFS get command
- IPFS add command
- IPFS repository garbage collection
- interplanetary file system
- peer-to-peer hypermedia
- file system hash
- content addressing
features:
- Add files to the IPFS network
- Pin files to local IPFS storage
- Retrieve files from the IPFS network using their hash
- Remove pinned files from local IPFS storage
- Perform garbage collection to remove unpinned files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ipfs

> Inter Planetary File System.
> A peer-to-peer hypermedia protocol. Aims to make the web more open.
> More information: <https://ipfs.io>.

- Add a file from local to the filesystem, pin it and print the relative hash:

`ipfs add {{path/to/file}}`

- Add a directory and its files recursively from local to the filesystem and print the relative hash:

`ipfs add -r {{path/to/directory}}`

- Save a remote file and give it a name but not pin it:

`ipfs get {{hash}} -o {{path/to/file}}`

- Pin a remote file locally:

`ipfs pin add {{hash}}`

- Display pinned files:

`ipfs pin ls`

- Unpin a file from the local storage:

`ipfs pin rm {{hash}}`

- Remove unpinned files from local storage:

`ipfs repo gc`
