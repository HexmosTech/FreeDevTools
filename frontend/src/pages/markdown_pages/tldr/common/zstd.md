---
title: "Zstd Command Syntax & Examples | Online Free DevTools by Hexmos"
name: zstd
path: /freedevtools/tldr/common/zstd
canonical: "https://hexmos.com/freedevtools/tldr/common/zstd/"
description: "Learn zstd command syntax and usage examples. Complete reference for Zstandard compression commands with practical examples for Linux, macOS, and Windows."
category: common
keywords:
  - zstd command
  - zstd syntax
  - zstd examples
  - zstandard commands
  - compression commands
  - file compression syntax
  - linux commands
  - macos commands
  - zstd reference
  - zstd tutorial
features:
  - Complete zstd command syntax
  - Practical usage examples
  - Compression and decompression commands
  - Command line reference
  - Cross-platform examples
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
