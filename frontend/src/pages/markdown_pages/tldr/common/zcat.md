---
title: "Zcat - Print Gzip Files | Online Free DevTools by Hexmos"
name: zcat
path: "/freedevtools/tldr/common/zcat"
canonical: "https://hexmos.com/freedevtools/tldr/common/zcat/"
description: "Print gzip files easily with Zcat. Decompress and view the contents of compressed archives directly in your terminal. Free online tool, no registration required."
category: common
keywords:
- gzip file viewer
- compress archive extractor
- compressed data printer
- linux file decompression
- command line gzip tool
- zcat command tutorial
- gzip archive reader
- text file decompression
- data stream unzipping
- file archive manipulation
features:
- Print decompressed contents to stdout
- Display compression details of gzip archives
- Test the integrity of compressed files
- Suppress warnings during decompression
- Ensure system stability during decompression
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zcat

> Print data from `gzip` compressed files to `stdout`.
> More information: <https://www.gnu.org/software/gzip/manual/gzip.html>.

- Print the uncompressed contents of a `gzip` archive to `stdout`:

`zcat {{path/to/file.txt.gz}}`

- Print compression details of a `gzip` archive to `stdout`:

`zcat {{[-l|--list]}} {{path/to/file.txt.gz}}`

- Test the integrity of a compressed file verbosely:

`zcat {{[-v|--verbose]}} {{[-t|--test]}} {{path/to/file.txt.gz}}`

- Suppress all warnings when decompressing a file:

`zcat {{[-q|--quiet]}} {{path/to/file.txt.gz}}`

- Avoid any system crashes when decompressing a file (slower output):

`zcat --synchronous {{path/to/file.txt.gz}}`
