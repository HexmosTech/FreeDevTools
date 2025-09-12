---
title: "File Split - Divide Files into Smaller Pieces | Free DevTools"
name: split
path: /freedevtools/tldr/common/split
canonical: "https://hexmos.com/freedevtools/tldr/common/split/"
description: "Split files easily with File Split command. Divide large files into smaller, manageable chunks using line count or byte size. Free online tool, no registration required."
category: common
keywords:
- file splitter
- split file command
- linux file split
- macos file split
- command line file split
- split file by lines
- split file by size
- split large file
- file chunking
- gnu split
features:
- Split files into smaller parts based on line count
- Divide files into equal parts based on number of files
- Split files by specified byte size
- Prevent line breaks when splitting by byte size
- Create multiple output files from a single input file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# split

> Split a file into pieces.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/split-invocation.html>.

- Split a file, each split having 10 lines (except the last split):

`split {{[-l|--lines]}} 10 {{path/to/file}}`

- Split a file into 5 files. File is split such that each split has same size (except the last split):

`split {{[-n|--number]}} 5 {{path/to/file}}`

- Split a file with 512 bytes in each split (except the last split; use 512k for kilobytes and 512m for megabytes):

`split {{[-b|--bytes]}} 512 {{path/to/file}}`

- Split a file with at most 512 bytes in each split without breaking lines:

`split {{[-C|--line-bytes]}} 512 {{path/to/file}}`
