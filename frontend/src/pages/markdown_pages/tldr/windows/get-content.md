---
title: "Get-Content - Display File Content | Online Free DevTools by Hexmos"
name: get-content
path: /freedevtools/tldr/windows/get-content
canonical: "https://hexmos.com/freedevtools/tldr/windows/get-content/"
description: "Display file content with Get-Content command in PowerShell. Read entire files, specific lines, or monitor changes in real-time. Free online tool, no registration required."
category: windows
keywords:
- PowerShell get-content
- Windows get-content
- File content reader
- Text file viewer
- Get file content Windows
- PowerShell file reader
- Windows command line tools
- PowerShell scripting
- File content stream
- Monitor file changes
features:
- Display the entire content of a file.
- Read a specified number of lines from a file.
- Monitor file changes in real-time.
- Get content from a specified file path.
- Display content using PowerShell command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Get-Content

> Get the content of the item at the specified location.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.management/get-content>.

- Display the content of a file:

`Get-Content -Path {{path\to\file}}`

- Display the first few lines of a file:

`Get-Content -Path {{path\to\file}} -TotalCount {{10}}`

- Display the content of the file and keep reading from it until `<Ctrl c>` is pressed:

`Get-Content -Path {{path\to\file}} -Wait`
