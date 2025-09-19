---
title: "Lrztar - Compress Directories | Online Free DevTools by Hexmos"
name: lrztar
path: /freedevtools/tldr/linux/lrztar
canonical: "https://hexmos.com/freedevtools/tldr/linux/lrztar/"
description: "Compress directories easily with Lrztar, a wrapper for lrzip. Enhance file compression and archiving on Linux systems using command line. Free online tool, no registration required."
category: linux
keywords:
- Linux directory compression
- Lrzip archive tool
- Command line archiving
- File compression Linux
- Lrztar command examples
- Tar archive compression
- ZPAQ extreme compression
- Linux file archiver
- Lrzip directory wrapper
- Lrztar usage guide
features:
- Compress directories using lrzip
- Specify output file for the archive
- Override processor thread count
- Force overwrite existing files
- Utilize ZPAQ for extreme compression
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lrztar

> A wrapper for `lrzip` to simplify compression of directories.
> See also: `tar`, `lrzuntar`, `lrunzip`.
> More information: <https://manned.org/lrztar>.

- Archive a directory with tar, then compress:

`lrztar {{path/to/directory}}`

- Same as above, with ZPAQ - extreme compression, but very slow:

`lrztar -z {{path/to/directory}}`

- Specify the output file:

`lrztar -o {{path/to/file}} {{path/to/directory}}`

- Override the number of processor threads to use:

`lrztar -p {{8}} {{path/to/directory}}`

- Force overwriting of existing files:

`lrztar -f {{path/to/directory}}`
