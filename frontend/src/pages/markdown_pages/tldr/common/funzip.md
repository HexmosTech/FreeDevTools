---
title: "Unzip Content - View Archive Contents | Online Free DevTools by Hexmos"
name: funzip
path: /freedevtools/tldr/common/funzip
canonical: "https://hexmos.com/freedevtools/tldr/common/funzip/"
description: "View archive contents instantly with Funzip. Extract file information and inspect compressed data without decompression. Free online tool, no registration required."
category: common
keywords:
- zip archive viewer
- gzip file inspector
- archive content display
- compressed file analysis
- linux zip tool
- macos gzip tool
- command line unzip
- password protected zip
- file content preview
- data extraction tool
features:
- Display contents of a ZIP archive without extracting.
- Show contents of a GZIP archive without decompressing.
- Decrypt and display password-protected archives.
- Support both ZIP and GZIP archive formats.
- Provide a quick preview of archived data.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# funzip

> Print the content of the first (non-directory) member in an archive without extraction.
> More information: <https://manned.org/funzip>.

- Print the content of the first member in a Zip archive:

`funzip {{path/to/archive.zip}}`

- Print the content in a gzip archive:

`funzip {{path/to/archive.gz}}`

- Decrypt a Zip or gzip archive and print the content:

`funzip -password {{password}} {{path/to/archive}}`
