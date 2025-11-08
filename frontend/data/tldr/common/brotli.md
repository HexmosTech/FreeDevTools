---
title: "Brotli Compress - Create Brotli Archives | Online Free DevTools by Hexmos"
name: brotli
path: "/freedevtools/tldr/common/brotli/"
canonical: "https://hexmos.com/freedevtools/tldr/common/brotli/"
description: "Compress files with Brotli using Brotli command-line tool. Create and decompress Brotli archives efficiently. Free online tool, no registration required."
category: common
keywords:
- Brotli archive
- Brotli compression
- Brotli decompress
- Brotli file compressor
- Brotli command
- Linux Brotli
- macOS Brotli
- Brotli archive creator
- Brotli file compression tool
- Brotli high compression
features:
- Compress files into Brotli archives
- Decompress Brotli archives
- Specify the output filename for compressed files
- Define compression quality for optimal results
- Compress and decompress from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# brotli

> Compress/uncompress files with Brotli compression.
> More information: <https://manned.org/brotli>.

- Compress a file, creating a compressed version next to the file:

`brotli {{path/to/file}}`

- Decompress a file, creating an uncompressed version next to the file:

`brotli {{[-d|--decompress]}} {{path/to/file.br}}`

- Compress a file specifying the output filename:

`brotli {{path/to/file}} {{[-o|--output]}} {{path/to/compressed_output_file.br}}`

- Decompress a Brotli file specifying the output filename:

`brotli {{[-d|--decompress]}} {{path/to/compressed_file.br}} {{[-o|--output]}} {{path/to/output_file}}`

- Specify the compression quality (1=fastest (worst), 11=slowest (best)):

`brotli {{[-q|--quality]}} {{11}} {{path/to/file}} {{[-o|--output]}} {{path/to/compressed_output_file.br}}`
