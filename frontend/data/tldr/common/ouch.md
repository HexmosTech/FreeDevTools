---
title: "Compress Files - Archive and Decompress with Ouch | Online Free DevTools by Hexmos"
name: ouch
path: "/freedevtools/tldr/common/ouch/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ouch/"
description: "Compress files easily with Ouch. Archive and decompress files and directories with this command-line utility. Free online tool, no registration required."
category: common
keywords:
- archive files
- decompress files
- compress directories
- decompress directories
- file compression
- file decompression
- tar xz
- zip archive
- command line archive
- terminal compression
features:
- Decompress single files
- Decompress files to a specific directory
- Decompress multiple files simultaneously
- Compress multiple files into an archive
- Create compressed archives from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ouch

> Utility for compressing and decompressing files and directories.
> More information: <https://crates.io/crates/ouch>.

- Decompress a specific file:

`ouch decompress {{path/to/archive.tar.xz}}`

- Decompress a file to a specific location:

`ouch decompress {{path/to/archive.tar.xz}} --dir {{path/to/directory}}`

- Decompress multiple files:

`ouch decompress {{path/to/archive1.tar path/to/archive2.tar.gz ...}}`

- Compress files:

`ouch compress {{path/to/file1 path/to/file2 ...}} {{path/to/archive.zip}}`
