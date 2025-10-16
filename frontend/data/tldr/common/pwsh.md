---
title: "PowerShell Control - Manage System with PWSH | Online Free DevTools by Hexmos"
name: pwsh
path: "/freedevtools/tldr/common/pwsh/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pwsh/"
description: "Control your system with PowerShell PWSH, a cross-platform task automation and configuration management framework. Execute commands and scripts. Free online tool, no registration required."
category: common
keywords:
- powershell scripting
- pwsh command line
- cross-platform powershell
- system administration scripting
- task automation pwsh
- powershell core commands
- linux pwsh
- macos pwsh
- windows pwsh
- configuration management script
features:
- Start interactive PowerShell sessions
- Execute PowerShell commands and scripts
- Control PowerShell version selection
- Manage PowerShell input and output formats
- Prevent shell exit after startup commands
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pwsh

> Shell and scripting language designed especially for system administration.
> This command refers to PowerShell version 6 and above (also known as PowerShell Core and cross-platform PowerShell).
> To use the original Windows version (5.1 and below, also known as the legacy Windows PowerShell), use `powershell` instead of `pwsh`.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_pwsh>.

- Start an interactive shell session:

`pwsh`

- Start an interactive shell session without loading startup configs:

`pwsh -NoProfile`

- Execute specific commands:

`pwsh -Command "{{echo 'powershell is executed'}}"`

- Execute a specific script:

`pwsh -File {{path/to/script.ps1}}`

- Start a session with a specific version of PowerShell:

`pwsh -Version {{version}}`

- Prevent a shell from exit after running startup commands:

`pwsh -NoExit`

- Describe the format of data sent to PowerShell:

`pwsh -InputFormat {{Text|XML}}`

- Determine how an output from PowerShell is formatted:

`pwsh -OutputFormat {{Text|XML}}`
