---
title: "Get PowerShell Version - Check PSVersionTable | Free DevTools"
name: psversiontable
path: /freedevtools/tldr/windows/psversiontable
canonical: "https://hexmos.com/freedevtools/tldr/windows/psversiontable/"
description: "Get PowerShell version information with PSVersionTable. Inspect PowerShell edition, Git commit ID, and supported script versions easily. Free online tool, no registration required."
category: windows
keywords:
- PowerShell version information
- PSVersionTable details
- PowerShell edition check
- Windows PowerShell version
- PowerShell Core version
- PowerShell Git commit ID
- PowerShell script versions
- PowerShell compatibility check
- Windows system version
- PowerShell environment data
features:
- Display installed PowerShell version details
- Retrieve PowerShell edition information (Core or Windows)
- List compatible PowerShell script versions
- Obtain the Git commit ID of the PowerShell build
- Provide comprehensive PowerShell environment information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# PSVersionTable

> A read-only variable (as `$PSVersionTable`) to get the current PowerShell version.
> This command can only be run under PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_automatic_variables#psversiontable>.

- Print a summary of the currently installed PowerShell version and edition:

`$PSVersionTable`

- Get the detailed (major, minor, build, and revision) version number of PowerShell:

`$PSVersionTable.PSVersion`

- List all supported PowerShell script versions that this PowerShell version supports:

`$PSVersionTable.PSCompatibleVersions`

- Get the latest Git commit ID where the currently-installed PowerShell version is based on (works on PowerShell 6.0 and later):

`$PSVersionTable.GitCommitId`

- Check whether the user is running PowerShell Core (6.0 or later) or the original "Windows PowerShell" (version 5.1 or below):

`$PSVersionTable.PSEdition`
