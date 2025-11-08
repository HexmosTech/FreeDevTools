---
title: "Uncompress - Extract Compressed Files | Online Free DevTools by Hexmos"
name: uncompress
path: "/freedevtools/tldr/linux/uncompress/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/uncompress/"
description: "Extract compressed files with Uncompress. Quickly decompress .Z archives on Linux, restoring original files with ease. Free online tool, no registration required."
category: linux
keywords:
- uncompress files
- compress archive extractor
- linux uncompress
- z file extraction
- unix compress
- decompress z archives
- command line uncompress
- linux archive utilities
- file decompression tool
- uncompress command linux
features:
- Extract .Z compressed files
- Ignore non-existent files during extraction
- Write decompressed output to stdout
- Display verbose percentage reduction or expansion
- Force extraction even if files already exist
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# uncompress

> Uncompress files compressed using the Unix `compress` command.
> More information: <https://manned.org/uncompress.1>.

- Uncompress specific files:

`uncompress {{path/to/file1.Z path/to/file2.Z ...}}`

- Uncompress specific files while ignoring non-existent ones:

`uncompress -f {{path/to/file1.Z path/to/file2.Z ...}}`

- Write to `stdout` (no files are changed and no `.Z` files are created):

`uncompress -c {{path/to/file1.Z path/to/file2.Z ...}}`

- Verbose mode (write to `stderr` about percentage reduction or expansion):

`uncompress -v {{path/to/file1.Z path/to/file2.Z ...}}`
