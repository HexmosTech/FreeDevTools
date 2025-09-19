---
title: "Takeown - Control File Ownership | Online Free DevTools by Hexmos"
name: takeown
path: "/freedevtools/tldr/windows/takeown"
canonical: "https://hexmos.com/freedevtools/tldr/windows/takeown/"
description: "Control file ownership with Takeown, the Windows command-line tool. Gain access and manage permissions effortlessly. Free online tool, no registration required."
category: windows
keywords:
- windows file ownership
- takeown command
- windows directory permissions
- file system access control
- windows takeown utility
- command-line file ownership
- NTFS permissions manager
- takeown administrator
- windows server permissions
- change file owner
features:
- Take ownership of individual files
- Take ownership of entire directories recursively
- Change ownership to the Administrator group
- Force ownership transfer with minimal user interaction
- Grant access permissions to files and folders
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# takeown

> Take ownership of a file or directory.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/takeown>.

- Take ownership of the specified file:

`takeown /f {{path\to\file}}`

- Take ownership of the specified directory:

`takeown /d {{path\to\directory}}`

- Take ownership of the specified directory and all subdirectories:

`takeown /r /d {{path\to\directory}}`

- Change ownership to the Administrator group instead of the current user:

`takeown /a /f {{path\to\file}}`
