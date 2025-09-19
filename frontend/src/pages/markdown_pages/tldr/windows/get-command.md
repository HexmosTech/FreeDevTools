---
title: "Get-Command - List Commands in PowerShell | Online Free DevTools by Hexmos"
name: get-command
path: /freedevtools/tldr/windows/get-command
canonical: "https://hexmos.com/freedevtools/tldr/windows/get-command/"
description: "List commands easily with Get-Command in PowerShell. Discover cmdlets, functions, and aliases for Windows automation tasks. Free online tool, no registration required."
category: windows
keywords:
- powershell commands
- windows commands
- cmdlet discovery
- function listing
- alias enumeration
- powershell module commands
- get-command powershell
- powershell command explorer
- command line search
- path command discovery
features:
- List all available PowerShell commands in the current session.
- Filter commands by type (Alias, Cmdlet, Function, Application).
- Discover commands within specific PowerShell modules.
- Get detailed information about a specific command.
- Find commands available on the system's PATH.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Get-Command

> List and get available commands in the current PowerShell session.
> This command can only be run through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.core/get-command>.

- List all available PowerShell commands (aliases, cmdlets, functions) in the current computer:

`Get-Command`

- List all available PowerShell commands in the current session:

`Get-Command -ListImported`

- List only PowerShell aliases/cmdlets/functions available in the computer:

`Get-Command -Type {{Alias|Cmdlet|Function}}`

- List only programs or commands available on PATH in the current session:

`Get-Command -Type Application`

- List only PowerShell commands by the module name, e.g. `Microsoft.PowerShell.Utility` for utility-related commands:

`Get-Command -Module {{module}}`

- Get the command information (e.g. version number or module name) by its name:

`Get-Command {{command}}`
