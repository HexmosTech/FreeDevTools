---
title: "Create Delta Patches - xdelta File Differencing | Online Free DevTools by Hexmos"
name: xdelta
path: "/freedevtools/tldr/common/xdelta/"
canonical: "https://hexmos.com/freedevtools/tldr/common/xdelta/"
description: "Create delta patches with xdelta for efficient file differencing. Reduce file sizes by generating compact patches for software updates. Free online tool, no registration required."
category: common
keywords:
- delta patch creator
- xdelta patch generator
- binary diff tool
- file differencing utility
- patch creation linux
- patch application macos
- xdelta compression tool
- delta encoding software
- binary patch creation
- xdelta file patching
features:
- Create delta patches from two files
- Apply delta patches to reconstruct files
- Generate compact patches for efficient distribution
- Support binary and text file differencing
- Reduce file size for software updates
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xdelta

> Delta encoding utility.
> Often used for applying patches to binary files.
> More information: <https://github.com/jmacd/xdelta>.

- Apply a patch:

`xdelta -d -s {{path/to/input_file}} {{path/to/delta_file.xdelta}} {{path/to/output_file}}`

- Create a patch:

`xdelta -e -s {{path/to/old_file}} {{path/to/new_file}} {{path/to/output_file.xdelta}}`
