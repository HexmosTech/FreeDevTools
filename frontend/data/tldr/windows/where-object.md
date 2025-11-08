---
title: "Where-Object - Filter Objects | Online Free DevTools by Hexmos"
name: where-object
path: "/freedevtools/tldr/windows/where-object/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/where-object/"
description: "Filter objects with Where-Object on Windows. Quickly select data based on properties. Free online tool, no registration required."
category: windows
keywords:
- powershell where-object
- windows where-object
- powershell object filter
- windows object selection
- powershell data selection
- powershell pipeline filter
- command line object filter
- windows command selection
- powershell object property
- where-object command
features:
- Select objects based on property values
- Filter aliases by name
- List services based on status
- Use multiple conditions for filtering
- Utilize the $_ automatic variable
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Where-Object

> Selects objects from a collection based on their property values.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.core/where-object>.

- Filter aliases by its name:

`Get-Alias | Where-Object -{{Property}} {{Name}} -{{eq}} {{name}}`

- List all services that are currently stopped. The `$_` automatic variable represents each object that is passed to the `Where-Object` cmdlet:

`Get-Service | Where-Object {$_.Status -eq "Stopped"}`

- Use multiple conditions:

`Get-Module -ListAvailable | Where-Object { $_.Name -NotLike "Microsoft*" -And $_.Name -NotLike "PS*" }`
