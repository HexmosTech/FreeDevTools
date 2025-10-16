---
title: "Invoke-Item - Open Files | Online Free DevTools by Hexmos"
name: invoke-item
path: "/freedevtools/tldr/windows/invoke-item/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/invoke-item/"
description: "Open files with Invoke-Item, effortlessly accessing files using PowerShell commands. Open multiple files or specific file types quickly. Free online tool, no registration required."
category: windows
keywords:
- PowerShell invoke-item
- Windows file opener
- command line file launch
- open file from PowerShell
- PowerShell wildcard file open
- open PNG files PowerShell
- exclude files PowerShell
- PowerShell file explorer
- PowerShell open files
- invoke-item PowerShell
features:
- Open files with default programs
- Open multiple files using wildcards
- Open specific file types (e.g., PNG, TXT)
- Exclude files based on keywords
- Perform dry runs to preview actions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Invoke-Item

> Open files in their respective default programs.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.management/invoke-item>.

- Open a file in its default program:

`Invoke-Item -Path {{path\to\file}}`

- Open all files inside a directory:

`Invoke-Item -Path {{path\to\directory}}\*`

- Open all PNGs inside a directory:

`Invoke-Item -Path {{path\to\directory}}\*.png`

- Open all files inside a directory containing a specific keyword:

`Invoke-Item -Path {{path\to\directory}}\* -Include {{*keyword*}}`

- Open all files inside a directory except those containing a specific keyword:

`Invoke-Item -Path {{path\to\directory}}\* -Exclude {{*keyword*}}`

- Perform a dry run to determine which files will be opened inside a directory through `Invoke-Item`:

`Invoke-Item -Path {{path\to\directory}}\* -WhatIf`
