---
title: "Measure Object - Calculate File Metrics | Online Free DevTools by Hexmos"
name: measure-object
path: "/freedevtools/tldr/windows/measure-object/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/measure-object/"
description: "Calculate metrics with Measure-Object. Determine the count, average, sum, minimum, and maximum values of objects. Free online tool, no registration required."
category: windows
keywords:
- powershell measure object
- windows powershell measure
- file size calculator powershell
- line counter powershell
- word counter powershell
- character counter powershell
- powershell script metrics
- powershell measure performance
- powershell object analysis
- powershell statistics calculation
features:
- Calculate the number of objects in a collection
- Determine average, sum, minimum, and maximum numeric properties
- Count characters, words, and lines in string objects
- Analyze file contents for statistical data
- Measure script performance by timing execution
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Measure-Object

> Calculates the numeric properties of objects, and the characters, words, and lines in string objects, such as files of text.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/measure-object>.

- Count the files and folders in a directory:

`Get-ChildItem | Measure-Object`

- Pipe input to Measure-Command (objects that are piped to `Measure-Command` are available to the script block that is passed to the Expression parameter):

`"One", "Two", "Three", "Four" | Set-Content -Path "{{path\to\file}}"; Get-Content "{{path\to\file}}"; | Measure-Object -Character -Line -Word`
