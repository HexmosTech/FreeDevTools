---
title: "Create 7Zip Archives - Compress Files with p7zip | Online Free DevTools by Hexmos"
name: p7zip
path: "/freedevtools/tldr/common/p7zip"
canonical: "https://hexmos.com/freedevtools/tldr/common/p7zip/"
description: "Create 7Zip archives with p7zip. Compress and decompress files using the command line archiver. Free online tool, no registration required."
category: common
keywords:
- 7Zip Archiver
- File Compression
- 7z Archive
- p7zip compression
- p7zip decompression
- command line archive
- file archiver linux
- file archiver macos
- 7z file extractor
- archive file management
features:
- Compress files into 7z archives
- Decompress 7z archives to original files
- Preserve original files during archiving
- Force compression or decompression
- Utilize command-line interface for archiving
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# p7zip

> Wrapper of 7-Zip file archiver with high compression ratio.
> Internally executes either 7za or 7zr command.
> More information: <https://p7zip.sourceforge.net>.

- Archive a file, replacing it with a 7zipped compressed version:

`p7zip {{path/to/file}}`

- Archive a file keeping the input file:

`p7zip {{[-k|--keep]}} {{path/to/file}}`

- Decompress a file, replacing it with the original uncompressed version:

`p7zip {{[-d|--decompress]}} {{compressed.ext}}.7z`

- Decompress a file keeping the input file:

`p7zip {{[-d|--decompress]}} {{[-k|--keep]}} {{compressed.ext}}.7z`

- Skip some checks and force compression or decompression:

`p7zip {{[-f|--force]}} {{path/to/file}}`
