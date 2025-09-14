---
title: "Control Path - Manage System Paths | Free DevTools"
name: path
path: /freedevtools/tldr/windows/path
canonical: "https://hexmos.com/freedevtools/tldr/windows/path/"
description: "Control system paths with Path, the command line tool. Set executable search directories and modify system environment variables. Free online tool, no registration required."
category: windows
keywords:
- system path manager
- windows path configuration
- executable path editor
- environment variable path
- command line path tool
- windows command path
- dos path configuration
- batch script path
- windows path variable
- system environment path
features:
- Display the current system path
- Set the path to specific directories
- Append new directories to the path
- Modify the system environment path
- Restrict command execution to current directory
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# path

> Display or set the search path for executable files.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/path>.

- Display the current path:

`path`

- Set the path to one or more semicolon-separated directories:

`path {{path\to\directory1 path\to\directory2 ...}}`

- Append a new directory to the original path:

`path {{path\to\directory}};%path%`

- Set command prompt to only search the current directory for executables:

`path ;`
