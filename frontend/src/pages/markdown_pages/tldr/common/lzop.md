---
title: "LZOP Compress - Compress Files with LZO | Online Free DevTools by Hexmos"
name: lzop
path: "/freedevtools/tldr/common/lzop"
canonical: "https://hexmos.com/freedevtools/tldr/common/lzop/"
description: "Compress files with LZOP, an efficient LZO data compressor. Reduce file sizes quickly with this compression tool. Free online tool, no registration required."
category: common
keywords:
- LZO compression
- file compression
- data compression
- compress files
- LZO file compressor
- linux compression
- command line compression
- lzop linux
- lzop compress
- lzo file
features:
- Compress files using LZO algorithm
- Decompress LZO compressed files
- Specify compression level for optimization
- Achieve best or fastest compression
- Compress files via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lzop

> Compress or decompress files with LZO compression.
> More information: <https://www.lzop.org/lzop_man.php>.

- Compress a file into a new file with the `.lzo` suffix:

`lzop {{path/to/file}}`

- Decompress a file:

`lzop {{[-d|--decompress]}} {{path/to/file.lzo}}`

- Compress a file, while specifying the compression level. 0 = Worst, 9 = Best (Default level is 3):

`lzop -{{level}} {{path/to/file}}`

- Compress a file with the best compression level:

`lzop {{[-9|--best]}} {{path/to/file}}`

- Compress a file with the fastest compression level:

`lzop {{[-1|--fast]}} {{path/to/file}}`
