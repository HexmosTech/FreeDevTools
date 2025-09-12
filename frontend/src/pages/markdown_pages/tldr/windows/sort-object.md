---
title: "Sort Object - Control Data Output | Free DevTools"
name: sort-object
path: /freedevtools/tldr/windows/sort-object
canonical: "https://hexmos.com/freedevtools/tldr/windows/sort-object/"
description: "Control data output with Sort-Object, a powerful PowerShell command. Order objects by properties and remove duplicates easily. Free online tool, no registration required."
category: windows
keywords:
- powershell sort object
- windows sort object
- sort data by property
- sort data powershell
- powershell sort unique
- powershell object sorting
- command line sort
- powershell sort ascending descending
- powershell sort by name
- powershell sort by length
features:
- Sort objects by specified property values
- Remove duplicate entries during sorting
- Sort in ascending or descending order
- Sort output based on file length
- Sort processes based on memory usage
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Sort-Object

> Sorts objects by property values.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/sort-object>.

- Sort the current directory by name:

`Get-ChildItem | Sort-Object`

- Sort the current directory by name descending:

`Get-ChildItem | Sort-Object -Descending`

- Sort items removing duplicates:

`"a", "b", "a" | Sort-Object -Unique`

- Sort the current directory by file length:

`Get-ChildItem | Sort-Object -Property Length`

- Sort processes with the highest memory usage based on their working set (WS) size:

`Get-Process | Sort-Object -Property WS`
