---
title: "Tee-Object - Save Command Output | Online Free DevTools by Hexmos"
name: tee-object
path: /freedevtools/tldr/windows/tee-object
canonical: "https://hexmos.com/freedevtools/tldr/windows/tee-object/"
description: "Save command output with Tee-Object and send it down the pipeline. Enhance PowerShell scripting efficiency. Free online tool, no registration required."
category: windows
keywords:
- command output saving
- powershell tee object
- windows tee object
- tee object command
- powershell pipeline output
- powershell variable assignment
- powershell output redirection
- windows command line tools
- powershell scripting
- tee-object example
features:
- Save command output to a file
- Redirect command output to a variable
- Send output down the PowerShell pipeline
- View output on the console simultaneously
- Combine file saving and pipeline redirection
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Tee-Object

> Saves command output in a file or variable and also sends it down the pipeline.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/tee-object>.

- Output processes to a file and to the console:

`Get-Process | Tee-Object -FilePath {{path\to\file}}`

- Output processes to a variable and `Select-Object`:

`Get-Process notepad | Tee-Object -Variable {{proc}} | Select-Object processname,handles`
