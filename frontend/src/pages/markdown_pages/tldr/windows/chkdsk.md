---
title: "Check Disk - Control File System Errors | Free DevTools"
name: chkdsk
path: /freedevtools/tldr/windows/chkdsk
canonical: "https://hexmos.com/freedevtools/tldr/windows/chkdsk/"
description: "Check disk errors and repair file system corruption with CHKDSK. Analyze volume metadata and fix disk issues on Windows. Free online tool, no registration required."
category: windows
keywords:
- disk check
- file system check
- volume repair
- windows disk repair
- chkdsk command
- ntfs repair
- disk error correction
- windows file system
- disk integrity check
- command line disk utility
features:
- Scan disks for errors in file system metadata
- Repair file system errors on specified volumes
- Dismount a volume prior to checking it
- Change the NTFS log file size
- Report disk health and identify potential issues
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# chkdsk

> Check file system and volume metadata for errors.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/chkdsk>.

- Specify the drive letter (followed by a colon), mount point, or volume name to check:

`chkdsk {{volume}}`

- Fix errors on a specific volume:

`chkdsk {{volume}} /f`

- Dismount a specific volume before checking:

`chkdsk {{volume}} /x`

- Change the log file size to the specified size (only for NTFS):

`chkdsk /l{{size}}`
