---
title: "ASAR Archiver - Package Files for Electron | Online Free DevTools by Hexmos"
name: asar
path: "/freedevtools/tldr/common/asar/"
canonical: "https://hexmos.com/freedevtools/tldr/common/asar/"
description: "Package Electron app files with ASAR Archiver. Create, extract, and manage archives to optimize your application. Free online tool, no registration required."
category: common
keywords:
- ASAR archiver
- Electron file packaging
- ASAR archive extractor
- ASAR archive manager
- Electron app deployment
- File archiving tool
- Directory packaging
- ASAR list contents
- Cross platform packaging
- Archive extraction
features:
- Archive files and directories into an ASAR package.
- Extract the complete contents of an ASAR archive.
- Extract specific files from an ASAR archive.
- List the contents of an ASAR archive.
- Package files for Electron applications.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# asar

> A file archiver for the Electron platform.
> More information: <https://github.com/electron/asar>.

- Archive a file or directory:

`asar pack {{path/to/input_file_or_directory}} {{path/to/output_archive.asar}}`

- Extract an archive:

`asar extract {{path/to/archive.asar}}`

- Extract a specific file from an archive:

`asar extract-file {{path/to/archive.asar}} {{file}}`

- List the contents of an archive file:

`asar list {{path/to/archive.asar}}`
