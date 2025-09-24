---
title: "FSUTIL - Control File System Volumes | Online Free DevTools by Hexmos"
name: fsutil
path: "/freedevtools/tldr/windows/fsutil"
canonical: "https://hexmos.com/freedevtools/tldr/windows/fsutil/"
description: "Control file system volumes with FSUTIL. Get volume information, manage dirty bit states, and check repair status on Windows. Free online tool, no registration required."
category: windows
keywords:
- file system volume control
- windows volume manager
- fsutil command line
- file system information query
- dirty bit management windows
- volume repair state check
- windows disk utilities
- command line file system tools
- volume metadata editor
- windows file system fsutil
features:
- Display file system volume information
- Check and set volume dirty bit states
- List all file system volumes
- Report file system auto-repair state
- Query volume information via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fsutil

> Display information about file system volumes.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/fsutil>.

- Display a list of volumes:

`fsutil volume list`

- Display information about a volume's file system:

`fsutil fsInfo volumeInfo {{drive_letter|volume_path}}`

- Display the current state of the file system auto-repair for all volumes:

`fsutil repair state`

- Display the dirty bit state of all volumes:

`fsutil dirty query`

- Set the dirty bit state of a volume:

`fsutil dirty set {{drive_letter|volume_path}}`
