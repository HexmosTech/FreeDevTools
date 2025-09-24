---
title: "Set-Volume - Change Volume Labels | Online Free DevTools by Hexmos"
name: set-volume
path: /freedevtools/tldr/windows/set-volume
canonical: "https://hexmos.com/freedevtools/tldr/windows/set-volume/"
description: "Change volume labels with Set-Volume. Modify file system properties and data deduplication modes on Windows volumes. Free online tool, no registration required."
category: windows
keywords:
- volume label changer
- set volume label windows
- windows volume management
- powershell set-volume
- file system label editor
- drive letter rename tool
- data deduplication mode
- volume properties modifier
- windows storage management
- disk label utility
features:
- Change the file system label of a volume by drive letter
- Modify volume properties using a volume object
- Specify the Data Deduplication mode for a volume
- Change the file system label of a volume by file system label
- Rename volume labels instantly from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Set-Volume

> Sets or changes the file system label of an existing volume.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/storage/set-volume>.

- Change the file system label of a volume identified by drive letter:

`Set-Volume -DriveLetter "D" -NewFileSystemLabel "DataVolume"`

- Change the file system label of a volume identified by the system label:

`Set-Volume -FileSystemLabel "OldLabel" -NewFileSystemLabel "NewLabel"`

- Modify the properties of a volume using a volume object:

`Set-Volume -InputObject $(Get-Volume -DriveLetter "E") -NewFileSystemLabel "Backup"`

- Specify the Data Deduplication mode for the volume:

`Set-Volume -DriveLetter "D" -DedupMode Backup`
