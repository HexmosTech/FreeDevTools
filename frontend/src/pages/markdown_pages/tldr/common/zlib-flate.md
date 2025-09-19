---
title: "Compress Zlib - Flate Files | Online Free DevTools by Hexmos"
name: zlib-flate
path: /freedevtools/tldr/common/zlib-flate
canonical: "https://hexmos.com/freedevtools/tldr/common/zlib-flate/"
description: "Compress files with Zlib-Flate, a versatile compression and decompression tool. Efficiently manage file sizes and reduce storage space. Free online tool, no registration required."
category: common
keywords:
- zlib compression
- zlib decompression
- flate compression
- flate decompression
- file compression linux
- file decompression linux
- zlib-flate command
- data compression tool
- lossless compression
- raw compression
features:
- Compress files using zlib format
- Decompress files using zlib format
- Specify compression levels for optimal results
- Stream data compression and decompression
- Integrate with shell scripts for automation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zlib-flate

> Raw zlib compression and decompression program.
> Part of `qpdf`.
> More information: <https://manned.org/zlib-flate>.

- Compress a file:

`zlib-flate -compress < {{path/to/input_file}} > {{path/to/compressed.zlib}}`

- Uncompress a file:

`zlib-flate -uncompress < {{path/to/compressed.zlib}} > {{path/to/output_file}}`

- Compress a file with a specified compression level. 0=Fastest (Worst), 9=Slowest (Best):

`zlib-flate -compress={{compression_level}} < {{path/to/input_file}} > {{path/to/compressed.zlib}}`
