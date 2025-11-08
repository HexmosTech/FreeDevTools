---
title: "Recompress Files - Convert .Z to gzip | Online Free DevTools by Hexmos"
name: znew
path: "/freedevtools/tldr/common/znew/"
canonical: "https://hexmos.com/freedevtools/tldr/common/znew/"
description: "Recompress files with znew, easily converting legacy .Z files to the more efficient gzip format. Achieve smaller file sizes and faster decompression. Free online tool, no registration required."
category: common
keywords:
- recompress .Z files
- .Z to gzip converter
- compress files linux
- gzip file compression
- file compression tool
- recompress legacy files
- compress .Z archive
- znew command
- linux file compressor
- optimize file size
features:
- Converts .Z files to gzip format.
- Recompresses single or multiple files.
- Displays file size reduction percentage.
- Uses the slowest compression method for optimal results.
- Keeps the original .Z file if it is smaller after conversion.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# znew

> Recompress files from `.Z` to gzip format.
> More information: <https://manned.org/znew>.

- Recompress a file from `.Z` to gzip format:

`znew {{path/to/file1.Z}}`

- Recompress multiple files and display the achieved size reduction % per file:

`znew -v {{path/to/file1.Z path/to/file2.Z ...}}`

- Recompress a file using the slowest compression method (for optimal compression):

`znew -9 {{path/to/file1.Z}}`

- Recompress a file, [K]eeping the `.Z` file if it is smaller than the gzip file:

`znew -K {{path/to/file1.Z}}`
