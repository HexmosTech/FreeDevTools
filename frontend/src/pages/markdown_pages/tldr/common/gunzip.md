---
title: "Gunzip - Extract GZIP Archives | Online Free DevTools by Hexmos"
name: gunzip
path: /freedevtools/tldr/common/gunzip
canonical: "https://hexmos.com/freedevtools/tldr/common/gunzip/"
description: "Extract GZIP archives with Gunzip, a command-line tool for decompressing files. Unzip archives quickly and efficiently. Free online tool, no registration required."
category: common
keywords:
- gzip archive extraction
- gunzip decompression
- command line unzip
- gz file extractor
- gzip decompress linux
- gzip decompress macos
- tar.gz extractor
- decompress archive file
- gzip file recovery
- gunzip command example
features:
- Extract files from gzip archives
- Decompress to a specified output file
- Keep the original compressed archive
- List the contents of a gzip archive
- Decompress gzip data from standard input
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gunzip

> Extract files from a `gzip` (`.gz`) archive.
> More information: <https://manned.org/gunzip>.

- Extract a file from an archive, replacing the original file if it exists:

`gunzip {{archive.tar.gz}}`

- Extract a file to a target destination:

`gunzip {{[-c|--stdout]}} {{archive.tar.gz}} > {{archive.tar}}`

- Extract a file and keep the archive file:

`gunzip {{[-k|--keep]}} {{archive.tar.gz}}`

- List the contents of a compressed file:

`gunzip {{[-l|--list]}} {{file.txt.gz}}`

- Decompress an archive from `stdin`:

`cat {{path/to/archive.gz}} | gunzip`
