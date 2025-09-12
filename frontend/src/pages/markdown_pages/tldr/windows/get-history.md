---
title: "Get-History - Display PowerShell Command History | Free DevTools"
name: get-history
path: /freedevtools/tldr/windows/get-history
canonical: "https://hexmos.com/freedevtools/tldr/windows/get-history/"
description: "Display PowerShell command history with Get-History. View command history by ID or count, and manage past commands. Free online tool, no registration required."
category: windows
keywords:
- powershell command history
- windows command history
- get-history powershell
- powershell history management
- display powershell history
- powershell command tracking
- windows powershell commands
- powershell history id
- powershell command line history
- powershell session history
features:
- Display the entire command history list
- Retrieve a specific command history item by ID
- Show the last N commands executed
- Filter command history by count
- Manage and review PowerShell command execution history
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Get-History

> Display PowerShell command history.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.core/get-history>.

- Display the commands history list with ID:

`Get-History`

- Get PowerShell history item by ID:

`Get-History -Id {{id}}`

- Display the last N commands:

`Get-History -Count {{10}}`
