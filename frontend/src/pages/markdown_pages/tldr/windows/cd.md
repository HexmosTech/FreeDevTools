---
title: "Control Directory - Navigate Filesystems with CD | Online Free DevTools by Hexmos"
name: cd
path: /freedevtools/tldr/windows/cd
canonical: "https://hexmos.com/freedevtools/tldr/windows/cd/"
description: "Control file system navigation with CD command. Change directories, access parent folders, and manage paths efficiently. Free online tool, no registration required."
category: windows
keywords:
  - directory navigation command
  - change directory cmd
  - filesystem cd command
  - windows cd command
  - command prompt cd
  - powershell set-location
  - parent directory traversal
  - absolute path navigation
  - relative path navigation
  - user profile directory access
features:
  - Navigate to specific directories by path
  - Traverse to parent directories easily
  - Access user profile or home directory
  - Change directory across different drives
  - Return to the root of the current drive
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cd

> Display the current working directory or move to a different directory.
> In PowerShell, this command is an alias of `Set-Location`. This documentation is based on the Command Prompt (`cmd`) version of `cd`.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/cd>.

- View documentation of the equivalent PowerShell command:

`tldr set-location`

- Display the path of the current directory:

`cd`

- Go to a specific directory in the same drive:

`cd {{path\to\directory}}`

- Go to a specific directory in a different [d]rive:

`cd /d {{C}}:{{path\to\directory}}`

- Go up to the parent of the current directory:

`cd ..`

- Go to the home directory of the current user:

`cd %userprofile%`

- Go to root of current drive:

`cd \`
