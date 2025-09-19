---
title: "Remove-Item - Delete Files and Folders | Online Free DevTools by Hexmos"
name: remove-item
path: "/freedevtools/tldr/windows/remove-item"
canonical: "https://hexmos.com/freedevtools/tldr/windows/remove-item/"
description: "Delete files with Remove-Item command. Erase files, folders, registry keys on Windows using PowerShell. Free online tool, no registration required."
category: windows
keywords:
- Windows file deletion
- PowerShell Remove-Item
- Delete files command
- Remove folder Windows
- Erase registry key
- Windows PowerShell script
- Remove-Item force delete
- PowerShell delete directory
- Windows file removal
- Command-line file delete
features:
- Delete files and folders recursively
- Force removal of read-only files
- Interactive removal with confirmation prompts
- Remove Windows registry keys and subkeys
- Perform dry run deletion for testing
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Remove-Item

> Delete files, folders, as well as registry keys and subkeys.
> This command can only be run through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.management/remove-item>.

- Remove specific files or registry keys (without subkeys):

`Remove-Item {{path\to\file_or_key1 , path\to\file_or_key2 ...}}`

- Remove hidden or read-only files:

`Remove-Item -Force {{path\to\file1 , path\to\file2 ...}}`

- Remove specific files or registry keys interactively prompting before each removal:

`Remove-Item -Confirm {{path\to\file_or_key1 , path\to\file_or_key2 ...}}`

- Remove specific files and directories recursively (Windows 10 version 1909 or later):

`Remove-Item -Recurse {{path\to\file_or_directory1 , path\to\file_or_directory2 ...}}`

- Remove specific Windows registry keys and all its subkeys:

`Remove-Item -Recurse {{path\to\key1 , path\to\key2 ...}}`

- Perform a dry run of the deletion process:

`Remove-Item -WhatIf {{path\to\file1 , path\to\file2 ...}}`
