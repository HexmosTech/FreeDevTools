---
title: "Measure Command - Analyze Script Performance | Online Free DevTools by Hexmos"
name: measure-command
path: /freedevtools/tldr/windows/measure-command
canonical: "https://hexmos.com/freedevtools/tldr/windows/measure-command/"
description: "Analyze PowerShell script performance with Measure Command. Measure execution time and optimize code using this powerful command. Free online tool, no registration required."
category: windows
keywords:
- powershell measure command
- script execution time
- performance analysis
- cmdlet performance
- powershell performance tuning
- powershell timing command
- powershell script profiling
- measure script block
- powershell execution analysis
- windows powershell
features:
- Measures the execution time of script blocks.
- Analyzes cmdlet performance in PowerShell.
- Provides detailed timing information for script optimization.
- Supports piping input for complex measurement scenarios.
- Identifies performance bottlenecks in PowerShell scripts.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Measure-Command

> Measures the time it takes to run script blocks and cmdlets.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/measure-command>.

- Measure the time it takes to run a command:

`Measure-Command { {{command}} }`

- Pipe input to Measure-Command (objects that are piped to `Measure-Command` are available to the script block that is passed to the Expression parameter):

`10, 20, 50 | Measure-Command -Expression { for ($i=0; $i -lt $_; $i++) {$i} }`
