---
title: "Move Files - Rename and Relocate Files on Windows | Online Free DevTools by Hexmos"
name: move
path: /freedevtools/tldr/windows/move
canonical: "https://hexmos.com/freedevtools/tldr/windows/move/"
description: "Move files easily with this Windows command-line tool. Rename and relocate files and directories within and across drives. Free online tool, no registration required."
category: windows
keywords:
- windows move files
- cmd move files
- move files command prompt
- windows rename files
- cmd rename files
- move directory windows
- cmd move directory
- move files across drives
- windows file management
- cmd file operations
features:
- Move files to a specified directory
- Rename files and directories
- Move files across different drives
- Suppress overwrite prompts for existing files
- Force overwrite prompts for file move operations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# move

> Move or rename files and directories.
> In PowerShell, this command is an alias of `Move-Item`. This documentation is based on the Command Prompt (`cmd`) version of `move`.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/move>.

- View documentation of the equivalent PowerShell command:

`tldr move-item`

- Rename a file or directory when the target is not an existing directory:

`move {{path\to\source}} {{path\to\target}}`

- Move a file or directory into an existing directory:

`move {{path\to\source}} {{path\to\existing_directory}}`

- Move a file or directory across drives:

`move {{C:\path\to\source}} {{D:\path\to\target}}`

- Do not prompt for confirmation before overwriting existing files:

`move /Y {{path\to\source}} {{path\to\existing_directory}}`

- Prompt for confirmation before overwriting existing files, regardless of file permissions:

`move /-Y {{path\to\source}} {{path\to\existing_directory}}`
