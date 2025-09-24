---
title: "Zipinfo - List Zip File Details | Online Free DevTools by Hexmos"
name: zipinfo
path: /freedevtools/tldr/common/zipinfo
canonical: "https://hexmos.com/freedevtools/tldr/common/zipinfo/"
description: "List detailed information about zip archives with Zipinfo. Inspect contents, check permissions, and verify integrity. Free online tool, no registration required."
category: common
keywords:
- zip file inspector
- zip archive details
- zip file metadata
- zip file listing
- archive file analyzer
- zipinfo command
- linux zipinfo
- macos zipinfo
- common zip
- compressed file info
features:
- Display detailed zip file information
- List all files within a zip archive
- Show file permissions within a zip
- Present compressed and uncompressed file sizes
- Extract file modification dates
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zipinfo

> List detailed information about the contents of a Zip file.
> More information: <https://manned.org/zipinfo>.

- List all files in a Zip file in long format (permissions, ownership, size, and modification date):

`zipinfo {{path/to/archive.zip}}`

- List all files in a Zip file:

`zipinfo -1 {{path/to/archive.zip}}`
