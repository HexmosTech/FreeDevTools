---
title: "Set-Location - Change Directory | Free DevTools"
name: set-location
path: /freedevtools/tldr/windows/set-location
canonical: "https://hexmos.com/freedevtools/tldr/windows/set-location/"
description: "Change current directory with Set-Location. Navigate file system paths, move between drives, and manage working directories in PowerShell. Free online tool, no registration required."
category: windows
keywords:
- PowerShell set-location
- Windows set-location command
- Change directory Windows
- PowerShell directory navigation
- Windows file system navigation
- Set location PowerShell script
- Windows change current directory
- PowerShell change working directory
- Set location path manipulation
- Windows PowerShell directory management
features:
- Navigate to a specified directory
- Change drives and navigate to directories on different drives
- Display the location of the specified directory
- Move to the parent directory
- Navigate to the user's home directory
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Set-Location

> Display the current working directory or move to a different directory.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.management/set-location>.

- Go to the specified directory:

`Set-Location {{path\to\directory}}`

- Go to a specific directory in a different drive:

`Set-Location {{C}}:{{path\to\directory}}`

- Go and display the location of specified directory:

`Set-Location {{path\to\directory}} -PassThru`

- Go up to the parent of the current directory:

`Set-Location ..`

- Go to the home directory of the current user:

`Set-Location ~`

- Go back/forward to the previously chosen directory:

`Set-Location {{-|+}}`

- Go to root of current drive:

`Set-Location \`
