---
title: "Get-Alias - List PowerShell Aliases | Online Free DevTools by Hexmos"
name: get-alias
path: /freedevtools/tldr/windows/get-alias
canonical: "https://hexmos.com/freedevtools/tldr/windows/get-alias/"
description: "List PowerShell aliases with Get-Alias. Find command aliases, display definitions, and filter results in PowerShell. Free online tool, no registration required."
category: windows
keywords:
- powershell alias
- command alias
- powershell get-alias
- get-alias command
- powershell commands
- list aliases powershell
- powershell script
- windows powershell
- command line alias
- powershell function alias
features:
- List all aliases in the current PowerShell session
- Get the command name associated with a specific alias
- List all aliases assigned to a particular command
- Filter aliases based on starting characters
- Exclude aliases based on ending characters
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Get-Alias

> List and get command aliases in the current PowerShell session.
> This command can only be run under PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/get-alias>.

- List all aliases in the current session:

`Get-Alias`

- Get the aliased command name:

`Get-Alias {{command_alias}}`

- List all aliases assigned to a specific command:

`Get-Alias -Definition {{command}}`

- List aliases that begins with `abc`, excluding those which ends at `def`:

`Get-Alias {{abc}}* -Exclude *{{def}}`
