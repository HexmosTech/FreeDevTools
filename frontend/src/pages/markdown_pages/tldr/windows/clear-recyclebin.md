---
title: "Clear Recycle Bin - Delete Files on Windows | Online Free DevTools by Hexmos"
name: clear-recyclebin
path: /freedevtools/tldr/windows/clear-recyclebin
canonical: "https://hexmos.com/freedevtools/tldr/windows/clear-recyclebin/"
description: "Clear Recycle Bin files easily with Clear-RecycleBin. Delete all items or target specific drives. Free online tool, no registration required."
category: windows
keywords:
- clear recycle bin windows
- windows recycle bin cleaner
- powershell clear recycle bin
- delete recycle bin contents
- empty recycle bin command line
- clear-recyclebin command windows
- windows file deletion
- recycle bin management
- powershell file management
- force delete recycle bin
features:
- Clears all items from the Recycle Bin.
- Clears the Recycle Bin for a specific drive letter.
- Forces deletion without confirmation prompts.
- Integrates with PowerShell for scripting and automation.
- Provides a command-line interface for Recycle Bin management.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Clear-RecycleBin

> Clear items from the Recycle Bin.
> This command can only be used through PowerShell versions 5.1 and below, or 7.1 and above.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.management/clear-recyclebin>.

- Clear and delete all items inside the Recycle Bin:

`Clear-RecycleBin`

- Clear the Recycle Bin for a specific drive:

`Clear-RecycleBin -DriveLetter {{C}}`

- Clear the Recycle Bin without further confirmation:

`Clear-RecycleBin -Force`
