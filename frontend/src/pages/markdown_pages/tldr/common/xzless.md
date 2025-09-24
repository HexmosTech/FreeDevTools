---
title: "View XZ Compressed Files - Display Content | Online Free DevTools by Hexmos"
name: xzless
path: /freedevtools/tldr/common/xzless
canonical: "https://hexmos.com/freedevtools/tldr/common/xzless/"
description: "View XZ compressed files easily with xzless. Display content from xz and lzma archives using a command-line pager. Free online tool, no registration required."
category: common
keywords:
- xz compressed file viewer
- lzma compressed file viewer
- command line pager for xz
- linux xz file reader
- unix xz file viewer
- xzless text display
- xz file decompression display
- compressed text file viewer
- less command xz extension
- terminal xz file browser
features:
- Display content of xz compressed files
- Display content of lzma compressed files
- Support for command-line paging
- View compressed files directly in the terminal
- Quick exit option for single-screen files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xzless

> Display text from `xz` and `lzma` compressed files.
> See also: `less`.
> More information: <https://manned.org/xzless>.

- View a compressed file:

`xzless {{path/to/file}}`

- View a compressed file and display line numbers:

`xzless --LINE-NUMBERS {{path/to/file}}`

- View a compressed file and quit if the entire file can be displayed on the first screen:

`xzless --quit-if-one-screen {{path/to/file}}`
