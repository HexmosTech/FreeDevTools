---
title: "Unzip Archive - Extract Files From Zip | Online Free DevTools by Hexmos"
name: unzip
path: "/freedevtools/tldr/common/unzip/"
canonical: "https://hexmos.com/freedevtools/tldr/common/unzip/"
description: "Extract files from zip archives with Unzip command. Decompress and manage zipped files quickly and efficiently. Free online tool, no registration required."
category: common
keywords:
- zip archive extractor
- unzip command linux
- unzip files macos
- zip file decompression
- extract zip archive common
- unzip archive windows
- command line unzip
- decompress zip file
- zip archive manager
- unzip multiple files
features:
- Extract all files from zip archives
- Specify an output directory for extraction
- Extract files to standard output
- Extract archives with non-ASCII filenames
- List contents of a zip archive
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# unzip

> Extract files/directories from Zip archives.
> See also: `zip`.
> More information: <https://manned.org/unzip>.

- Extract all files/directories from specific archives into the current directory:

`unzip {{path/to/archive1.zip path/to/archive2.zip ...}}`

- Extract files/directories from archives to a specific path:

`unzip {{path/to/archive1.zip path/to/archive2.zip ...}} -d {{path/to/output}}`

- Extract files/directories from archives to `stdout` alongside the extracted file names:

`unzip -c {{path/to/archive1.zip path/to/archive2.zip ...}}`

- Extract an archive created on Windows, containing files with non-ASCII (e.g. Chinese or Japanese characters) filenames:

`unzip -O {{gbk}} {{path/to/archive1.zip path/to/archive2.zip ...}}`

- List the contents of a specific archive without extracting them:

`unzip -l {{path/to/archive.zip}}`

- Extract a specific file from an archive:

`unzip -j {{path/to/archive.zip}} {{path/to/file1_in_archive path/to/file2_in_archive ...}}`
