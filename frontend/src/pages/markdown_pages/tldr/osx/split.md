---
title: "Split File - Create File Splits | Free DevTools"
name: split
path: "/freedevtools/tldr/osx/split"
canonical: "https://hexmos.com/freedevtools/tldr/osx/split/"
description: "Create file splits easily with Split File command. Divide large files into smaller, manageable pieces. Free online tool, no registration required."
category: osx
keywords:
  - file splitting
  - file splitter command
  - split large file
  - split file linux
  - split file macos
  - split file into chunks
  - split file by lines
  - split file by size
  - split file by regex
  - split file command line
features:
  - Split files by line count
  - Split files by regular expression matching
  - Split files by byte size
  - Split files into a specified number of output files
  - Divide files into smaller segments for easier handling
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# split

> Split a file into pieces.
> More information: <https://keith.github.io/xcode-man-pages/split.1.html>.

- Split a file, each split having 10 lines (except the last split):

`split -l 10 {{path/to/file}}`

- Split a file by a `regex`. The matching line will be the first line of the next output file:

`split -p {{cat|^[dh]og}} {{path/to/file}}`

- Split a file with 512 bytes in each split (except the last split; use 512k for kilobytes and 512m for megabytes):

`split -b 512 {{path/to/file}}`

- Split a file into 5 files. File is split such that each split has same size (except the last split):

`split -n 5 {{path/to/file}}`
