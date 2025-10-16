---
title: "Format String - Output String with PowerShell | Online Free DevTools by Hexmos"
name: out-string
path: "/freedevtools/tldr/windows/out-string/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/out-string/"
description: "Format string data with Out-String in PowerShell. Stream output as a string and control width to prevent truncation. Free online tool, no registration required."
category: windows
keywords:
- PowerShell string formatting
- Windows command line string
- String output PowerShell command
- Format data as string PowerShell
- PowerShell stream string conversion
- String truncation prevention PowerShell
- PowerShell object to string
- Windows Out-String command
- PowerShell string manipulation
- Console output string PowerShell
features:
- Converts PowerShell objects into formatted strings
- Streams output data as single string object
- Controls the width of the output string to avoid truncation
- Enables precise string formatting in PowerShell scripts
- Captures console output as a string for further processing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Out-String

> Outputs input objects as a string.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/out-string>.

- Print host information as string:

`Get-Alias | Out-String`

- Convert each object to a string rather than concatenating all the objects into a single string:

`Get-Alias | Out-String -Stream`

- Use the `Width` parameter to prevent truncation:

`@{TestKey = ('x' * 200)} | Out-String -Width {{250}}`
