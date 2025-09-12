---
title: "Remove Directory - Erase Folders with Rmdir | Free DevTools"
name: rmdir
path: /freedevtools/tldr/unknown/rmdir
canonical: "https://hexmos.com/freedevtools/tldr/unknown/rmdir/"
description: "Remove directories easily with Rmdir. Delete empty or non-empty folders recursively and suppress prompts for quicker directory management. Free online tool, no registration required."
category: unknown
keywords:
- directory removal cmd
- rmdir command prompt
- delete folder command line
- remove directory recursively
- cmd rmdir options
- windows rmdir command
- rmdir /s /q
- command line directory management
- folder eraser windows
- delete directory force cmd
features:
- Recursively remove directories and their contents
- Delete empty directories
- Suppress prompts during recursive removal
- Force deletion of folders without confirmation
- Utilize command prompt to remove directories
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rmdir

> Remove a directory and its contents.
> In PowerShell, this command is an alias of `Remove-Item`. This documentation is based on the Command Prompt (`cmd`) version of `rmdir`.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/rmdir>.

- View the documentation of the equivalent PowerShell command:

`tldr remove-item`

- Remove an empty directory:

`rmdir {{path\to\directory}}`

- Remove a directory and its contents recursively:

`rmdir {{path\to\directory}} /s`

- Remove a directory and its contents recursively without prompting:

`rmdir {{path\to\directory}} /s /q`
