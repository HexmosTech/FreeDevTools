---
title: "Archive Files - Create Archives with 7za | Online Free DevTools by Hexmos"
name: 7za
path: /freedevtools/tldr/common/7za
canonical: "https://hexmos.com/freedevtools/tldr/common/7za/"
description: "Create archives with 7za, a powerful file archiver supporting multiple formats. Compress, extract, and encrypt files easily. Free online tool, no registration required."
category: common
keywords:
- 7za archive creation
- 7za file compression
- 7z archive extraction
- cross-platform archiver
- command line archive
- 7za encryption
- 7za command examples
- 7za linux
- 7za windows
- file archiver
features:
- Create compressed archives in various formats
- Encrypt existing archives with password protection
- Extract archive contents to a specified directory
- List archive contents before extraction
- Set compression levels for optimal file size
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# 7za

> File archiver with a high compression ratio.
> Similar to `7z` except that it supports fewer file types but is cross-platform.
> More information: <https://manned.org/7za>.

- [a]rchive a file or directory:

`7za a {{path/to/archive.7z}} {{path/to/file_or_directory}}`

- Encrypt an existing archive (including file names):

`7za a {{path/to/encrypted.7z}} -p{{password}} -mhe={{on}} {{path/to/archive.7z}}`

- E[x]tract an archive preserving the original directory structure:

`7za x {{path/to/archive.7z}}`

- E[x]tract an archive to a specific directory:

`7za x {{path/to/archive.7z}} -o{{path/to/output}}`

- E[x]tract an archive to `stdout`:

`7za x {{path/to/archive.7z}} -so`

- [a]rchive using a specific archive type:

`7za a -t{{7z|bzip2|gzip|lzip|tar|...}} {{path/to/archive.7z}} {{path/to/file_or_directory}}`

- [l]ist the contents of an archive:

`7za l {{path/to/archive.7z}}`

- Set the level of compression (higher means more compression, but slower):

`7za a {{path/to/archive.7z}} -mx={{0|1|3|5|7|9}} {{path/to/file_or_directory}}`
