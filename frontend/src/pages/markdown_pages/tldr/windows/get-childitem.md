---
title: "List Directory Items - Explore Files with Get-ChildItem | Online Free DevTools by Hexmos"
name: get-childitem
path: /freedevtools/tldr/windows/get-childitem
canonical: "https://hexmos.com/freedevtools/tldr/windows/get-childitem/"
description: "List directory items with Get-ChildItem. Explore files and folders easily using PowerShell on Windows. Discover hidden items too! Free online tool, no registration required."
category: windows
keywords:
- directory listing windows
- powershell list files
- get-childitem command
- windows file explorer powershell
- list hidden files windows
- directory traversal windows
- file enumeration powershell
- file system navigation windows
- powershell directory contents
- get-childitem examples
features:
- List files and directories
- Filter items by type (file or directory)
- Include or exclude hidden items
- Specify a target directory path
- Enumerate files recursively
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Get-ChildItem

> List items in a directory.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.management/get-childitem>.

- List all non-hidden items in the current directory:

`Get-ChildItem`

- List only directories in the current directory:

`Get-ChildItem -Directory`

- List only files in the current directory:

`Get-ChildItem -File`

- List items in the current directory, including hidden items:

`Get-ChildItem -Hidden`

- List items in a directory other than the current one:

`Get-ChildItem -Path {{path\to\directory}}`
