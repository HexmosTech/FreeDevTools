---
title: "Delete Files - Manage Files on Windows with DEL | Online Free DevTools by Hexmos"
name: del
path: /freedevtools/tldr/windows/del
canonical: "https://hexmos.com/freedevtools/tldr/windows/del/"
description: "Manage files efficiently with DEL, the Windows command-line tool. Delete, force removal, and recursively remove files with attribute control. Free online tool, no registration required."
category: windows
keywords:
- file deletion windows
- windows del command
- cmd delete files
- command line file removal
- delete read-only files windows
- batch file delete command
- recursive file deletion windows
- windows file management
- del command examples
- windows file attributes delete
features:
- Delete single or multiple files using patterns.
- Force deletion of read-only files.
- Recursively delete files in subdirectories.
- Prompt for confirmation before deleting each file.
- Delete files based on specified attributes.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# del

> Delete one or more files.
> In PowerShell, this command is an alias of `Remove-Item`. This documentation is based on the Command Prompt (`cmd`) version of `del`.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/del>.

- View the documentation of the equivalent PowerShell command:

`tldr remove-item`

- Delete one or more files or patterns:

`del {{file_pattern1 file_pattern2 ...}}`

- Prompt for confirmation before deleting each file:

`del {{file_pattern}} /p`

- Force the deletion of read-only files:

`del {{file_pattern}} /f`

- Recursively delete file(s) from all subdirectories:

`del {{file_pattern}} /s`

- Do not prompt when deleting files based on a global wildcard:

`del {{file_pattern}} /q`

- Display the help and list available attributes:

`del /?`

- Delete files based on specified attributes:

`del {{file_pattern}} /a {{attribute}}`
