---
title: "Read NTFS Files - Explore NTFS Volumes | Online Free DevTools by Hexmos"
name: ntfs-read.py
path: /freedevtools/tldr/common/ntfs-read-py
canonical: "https://hexmos-com/freedevtools/tldr/common/ntfs-read-py/"
description: "Read NTFS files easily with ntfs-read.py. Explore NTFS volumes and extract specific files. Access Windows partitions on other operating systems. Free online tool, no registration required."
category: common
keywords:
- NTFS volume reader
- NTFS file extractor
- Windows partition access
- NTFS data recovery
- Cross-platform NTFS reader
- Linux NTFS reader
- macOS NTFS reader
- Impacket NTFS tools
- Disk image exploration
- File system explorer
features:
- Explore NTFS volume structure
- Extract files from NTFS partitions
- Access NTFS partitions read-only
- Debug NTFS volume issues
- Display NTFS volume information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ntfs-read.py

> A read-only NTFS explorer for accessing and extracting files from NTFS volumes.
> Part of the Impacket suite.
> More information: <https://github.com/fortra/impacket>.

- Open an NTFS volume for exploration (e.g., `C:\.\\` or `/dev/disk1s1`):

`ntfs-read.py {{volume}}`

- Extract a specific file from an NTFS volume (e.g., `\windows\system32\config\sam`):

`ntfs-read.py -extract {{\windows\system32\config\sam}} {{volume}}`

- Enable debug output:

`ntfs-read.py -debug {{volume}}`

- Display help:

`ntfs-read.py --help`
