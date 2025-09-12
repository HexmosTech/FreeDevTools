---
title: "Compress Data - Lzip Archive and Compress Files | Free DevTools"
name: lzip
path: /freedevtools/tldr/common/lzip
canonical: "https://hexmos.com/freedevtools/tldr/common/lzip/"
description: "Compress data with Lzip, create and manage lz archives with this powerful command-line tool. Free online tool, no registration required. Optimize storage and transfer files efficiently."
category: common
keywords:
- lzip data compression
- lz archive creation
- linux file compression
- command line archive tool
- lossless data compression
- lzip archive management
- compress files linux
- compress files macos
- lzip integrity check
- decompress lzip archive
features:
- Compress files into LZ archives
- Decompress LZ archives back to original files
- Test the integrity of existing LZ archives
- List the contents and statistics of LZ archives
- Archive files using different compression levels
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lzip

> A lossless data compressor with a user interface similar to `gzip` or `bzip2`.
> Lzip uses a simplified form of the "Lempel-Ziv-Markovchain-Algorithm" (LZMA) stream format and provides 3-factor integrity checking to maximize interoperability and optimize safety.
> More information: <https://www.nongnu.org/lzip/manual/lzip_manual.html#Invoking-lzip>.

- Archive a file, replacing it with with a compressed version:

`lzip {{path/to/file}}`

- Archive a file, keeping the input file:

`lzip {{[-k|--keep]}} {{path/to/file}}`

- Archive a file with the best compression (level=9):

`lzip {{[-k|--keep]}} {{path/to/file}} --best`

- Archive a file at the fastest speed (level=0):

`lzip {{[-k|--keep]}} {{path/to/file}} --fast`

- Test the integrity of compressed file:

`lzip {{[-t|--test]}} {{path/to/archive.lz}}`

- Decompress a file, replacing it with the original uncompressed version:

`lzip {{[-d|--decompress]}} {{path/to/archive.lz}}`

- Decompress a file, keeping the archive:

`lzip {{[-d|--decompress]}} {{[-k|--keep]}} {{path/to/archive.lz}}`

- List files which are in an archive and show compression stats:

`lzip {{[-l|--list]}} {{path/to/archive.lz}}`
