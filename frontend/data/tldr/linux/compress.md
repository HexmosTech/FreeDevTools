---
title: "Compress Files - Control File Size | Online Free DevTools by Hexmos"
name: compress
path: "/freedevtools/tldr/linux/compress/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/compress/"
description: "Compress files to reduce size with the Compress command. Manage file compression using Unix commands for efficient storage. Free online tool, no registration required."
category: linux
keywords:
  - file compression
  - compress files
  - unix compress
  - linux compress command
  - compress command examples
  - file archive
  - reduce file size
  - data compression
  - command line compress
  - file size optimization
features:
  - Compress specific files
  - Decompress files
  - Specify maximum compression bits
  - Write compressed output to stdout
  - Display compression percentage
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# compress

> Compress files using the Unix `compress` command.
> More information: <https://manned.org/compress.1>.

- Compress specific files:

`compress {{path/to/file1 path/to/file2 ...}}`

- Compress specific files, ignore non-existent ones:

`compress -f {{path/to/file1 path/to/file2 ...}}`

- Specify the maximum compression bits (9-16 bits):

`compress -b {{bits}}`

- Write to `stdout` (no files are changed):

`compress -c {{path/to/file}}`

- Decompress files (functions like `uncompress`):

`compress -d {{path/to/file}}`

- Display compression percentage:

`compress -v {{path/to/file}}`
