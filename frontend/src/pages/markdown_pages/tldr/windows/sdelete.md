---
title: "Secure Delete - Erase Files Securely | Free DevTools"
name: sdelete
path: "/freedevtools/tldr/windows/sdelete"
canonical: "https://hexmos.com/freedevtools/tldr/windows/sdelete/"
description: "Securely erase files with SDelete. Delete files and clean free space on Windows securely. Free online tool, no registration required."
category: windows
keywords:
- secure delete windows
- sdelete windows command
- file deletion tool
- windows file eraser
- secure data removal
- disk cleaning utility
- data sanitization tool
- secure file shredder
- windows disk eraser
- sdelete secure erase
features:
- Securely delete files with multiple passes
- Erase directories and subdirectories recursively
- Clean free space on volumes securely
- Zero out physical disks for secure deletion
- Overwrite data to prevent recovery
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sdelete

> Securely delete file/directory from disk, or clean the free space on a volume/physical disk.
> More information: <https://learn.microsoft.com/en-us/sysinternals/downloads/sdelete>.

- Delete files with 3 [p]asses:

`sdelete -p 3 {{path\to\file1 path\to\file2 ...}}`

- Delete folders and its [s]ubdirectories with 1 pass (default):

`sdelete -s {{path\to\directory1 path\to\directory2 ...}}`

- Clean the free space of volume D: with 3 [p]asses:

`sdelete -p 3 D:`

- Clean the free space with [z]eros of physical disk 2, which should not contain any volumes to be cleaned:

`sdelete -z 2`
