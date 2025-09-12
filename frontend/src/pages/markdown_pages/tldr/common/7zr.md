---
title: "Archive Files - Create 7zr Archives | Free DevTools"
name: 7zr
path: /freedevtools/tldr/common/7zr
canonical: "https://hexmos.com/freedevtools/tldr/common/7zr/"
description: "Create 7z archives with 7zr, a high-compression file archiver. Compress files, encrypt archives, and extract content. Free online tool, no registration required."
category: common
keywords:
- 7z archiver
- 7z file compression
- 7z archive extraction
- 7z command line
- 7zr archive
- 7zr compression
- 7zr extraction
- file archiving
- data compression
- 7z encryption
features:
- Create highly compressed 7z archives.
- Encrypt existing archives with password protection.
- Extract archive contents to a specified directory.
- List the contents of a 7z archive.
- Set the compression level for 7z archives.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# 7zr

> File archiver with a high compression ratio.
> Similar to `7z` except that it only supports 7z files.
> More information: <https://manned.org/7zr>.

- [a]rchive a file or directory:

`7zr a {{path/to/archive.7z}} {{path/to/file_or_directory}}`

- Encrypt an existing archive (including file names):

`7zr a {{path/to/encrypted.7z}} -p{{password}} -mhe={{on}} {{path/to/archive.7z}}`

- E[x]tract an archive preserving the original directory structure:

`7zr x {{path/to/archive.7z}}`

- E[x]tract an archive to a specific directory:

`7zr x {{path/to/archive.7z}} -o{{path/to/output}}`

- E[x]tract an archive to `stdout`:

`7zr x {{path/to/archive.7z}} -so`

- [l]ist the contents of an archive:

`7zr l {{path/to/archive.7z}}`

- Set the level of compression (higher means more compression, but slower):

`7zr a {{path/to/archive.7z}} -mx={{0|1|3|5|7|9}} {{path/to/file_or_directory}}`
