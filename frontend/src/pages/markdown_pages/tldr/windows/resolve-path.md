---
title: "Resolve Path - Display Path Contents | Free DevTools"
name: resolve-path
path: /freedevtools/tldr/windows/resolve-path
canonical: "https://hexmos.com/freedevtools/tldr/windows/resolve-path/"
description: "Resolve paths with Resolve-Path. Display file and directory contents, navigate UNC paths, and get relative path information. Free online tool, no registration required."
category: windows
keywords:
- windows resolve path
- powershell resolve path
- powershell file path
- powershell directory path
- unc path resolution
- relative path calculation
- path wildcard expansion
- windows path tools
- powershell scripting
- powershell path management
features:
- Resolve wildcard characters in file paths
- Display the contents of a path
- Resolve UNC network paths
- Calculate relative paths from specified locations
- Expand paths using environment variables
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Resolve-Path

> Resolves the wildcard characters in a path, and displays the path contents.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.management/resolve-path>.

- Resolve the home folder path:

`Resolve-Path {{~}}`

- Resolve a UNC path:

`Resolve-Path -Path "\\{{hostname}}\{{path\to\file}}"`

- Get relative paths:

`Resolve-Path -Path {{path\to\file_or_directory}} -Relative`
