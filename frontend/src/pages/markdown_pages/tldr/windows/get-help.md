---
title: "Get-Help - Display PowerShell Help Information | Online Free DevTools by Hexmos"
name: get-help
path: /freedevtools/tldr/windows/get-help
canonical: "https://hexmos.com/freedevtools/tldr/windows/get-help/"
description: "Display PowerShell help information with Get-Help command in Windows. Access detailed cmdlet documentation and examples. Free online tool, no registration required."
category: windows
keywords:
- powershell help information
- get-help command
- windows powershell commands
- powershell cmdlet documentation
- powershell function help
- powershell alias help
- powershell command examples
- powershell parameter documentation
- powershell module documentation
- powershell command reference
features:
- Display help information for PowerShell cmdlets
- Show detailed documentation for PowerShell commands
- List available cmdlet help pages
- Update PowerShell help content
- View PowerShell documentation online
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Get-Help

> Display help information and documentation for PowerShell commands (aliases, cmdlets, and functions).
> This command can only be run through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.core/get-help>.

- Display general help information for a specific PowerShell command:

`Get-Help {{command}}`

- Display a more detailed documentation for a specific PowerShell command:

`Get-Help {{command}} -Detailed`

- Display the full technical documentation for a specific PowerShell command:

`Get-Help {{command}} -Full`

- Print only the documentation for a specific parameter of the PowerShell command (use `*` to show all parameters), if available:

`Get-Help {{command}} -Parameter {{parameter}}`

- Print only the examples of the cmdlet, if available:

`Get-Help {{command}} -Examples`

- List all available cmdlet help pages:

`Get-Help *`

- Update the current help and documentation knowledge base using `Update-Help`:

`Update-Help`

- View an online version of PowerShell command documentation in the default web browser:

`Get-Help {{command}} -Online`
