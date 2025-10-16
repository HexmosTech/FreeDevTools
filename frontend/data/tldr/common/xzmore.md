---
title: "Display XZ Files - View Compressed Text | Online Free DevTools by Hexmos"
name: xzmore
path: "/freedevtools/tldr/common/xzmore/"
canonical: "https://hexmos.com/freedevtools/tldr/common/xzmore/"
description: "Display XZ compressed files with XZmore. Read and view text within compressed archives, leveraging your system's pager. Free online tool, no registration required."
category: common
keywords:
- xz file viewer
- lzma file reader
- compressed text display
- linux file extraction
- command-line file viewer
- pager environment variable
- xz archive viewer
- more command alternative
- text file decompression
- terminal file viewer
features:
- View compressed text files in the terminal.
- Utilize the system's pager for navigation.
- Display content from xz or lzma compressed archives.
- Respect the PAGER environment variable.
- Read compressed files directly from the command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xzmore

> Display text from `xz` or `lzma` compressed files.
> Almost equivalent to `xzless`, except it respects the `PAGER` environment variable, uses `more` by default and you cannot pass options to the pager.
> More information: <https://manned.org/xzmore>.

- View a compressed file:

`xzmore {{path/to/file}}`
