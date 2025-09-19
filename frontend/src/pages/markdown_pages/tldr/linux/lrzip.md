---
title: "Compress Files - lrzip Large File Compression | Online Free DevTools by Hexmos"
name: lrzip
path: /freedevtools/tldr/linux/lrzip
canonical: "https://hexmos.com/freedevtools/tldr/linux/lrzip/"
description: "Compress files with lrzip, a powerful large file compression tool. Achieve optimal compression ratios and efficient data storage. Free online tool, no registration required."
category: linux
keywords:
  - large file compression
  - lrzip compression
  - file archive tool
  - LZMA compression
  - BZIP2 compression
  - ZPAQ compression
  - LZO compression
  - data encryption
  - command line compression
  - linux file compression
features:
  - Compress files using LZMA, BZIP2, ZPAQ, or LZO algorithms.
  - Encrypt compressed files with password protection.
  - Specify the number of processor threads for compression.
  - Decompress files compressed with lrzip using lrunzip.
  - Create and extract compressed archives using lrztar and lrzuntar.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lrzip

> A large file compression program.
> See also: `lrunzip`, `lrztar`, `lrzuntar`.
> More information: <https://manned.org/lrzip>.

- Compress a file with LZMA - slow compression, fast decompression:

`lrzip {{path/to/file}}`

- Compress a file with BZIP2 - good middle ground for compression/speed:

`lrzip -b {{path/to/file}}`

- Compress with ZPAQ - extreme compression, but very slow:

`lrzip -z {{path/to/file}}`

- Compress with LZO - light compression, extremely fast decompression:

`lrzip -l {{path/to/file}}`

- Compress a file and password protect/encrypt it:

`lrzip -e {{path/to/file}}`

- Override the number of processor threads to use:

`lrzip -p {{8}} {{path/to/file}}`
