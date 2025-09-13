---
title: "Compress Files - Zstd Compression Tool | Free DevTools"
name: zstd
path: /freedevtools/tldr/common/zstd
canonical: "https://hexmos.com/freedevtools/tldr/common/zstd/"
description: "Compress files efficiently with Zstd. Achieve faster data compression and decompression using the Zstandard algorithm. Free online tool, no registration required."
category: common
keywords:
- zstd compression
- zstd decompress
- zstd command line
- zstandard algorithm
- file compression
- data compression
- linux compression
- macos compression
- compress file zst
- decompress file zst
features:
- Compress files to the .zst format
- Decompress .zst files to their original form
- Compress files with specified compression levels
- Decompress files directly to standard output
- Utilize ultra mode for higher compression levels
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zstd

> Compress or decompress files with Zstandard compression.
> More information: <https://github.com/facebook/zstd>.

- Compress a file into a new file with the `.zst` suffix:

`zstd {{path/to/file}}`

- Decompress a file:

`zstd --decompress {{path/to/file.zst}}`

- Decompress to `stdout`:

`zstd --decompress --stdout {{path/to/file.zst}}`

- Compress a file specifying the compression level, where 1=fastest, 19=slowest and 3=default:

`zstd -{{level}} {{path/to/file}}`

- Unlock higher compression levels (up to 22) using more memory (both for compression and decompression):

`zstd --ultra -{{level}} {{path/to/file}}`
