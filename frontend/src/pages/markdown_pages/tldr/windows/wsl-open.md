---
title: "WSL Open - Open Files in Windows from WSL | Online Free DevTools by Hexmos"
name: wsl-open
path: /freedevtools/tldr/windows/wsl-open
canonical: "https://hexmos.com/freedevtools/tldr/windows/wsl-open/"
description: "Open files and URLs from WSL with WSL Open. Access Windows GUI applications from Linux environment seamlessly. Free online tool, no registration required."
category: windows
keywords:
- WSL file opener
- Windows GUI application launcher
- Linux file association
- WSL default browser
- Windows Explorer from WSL
- Command line URL opener
- WSL command line tool
- Linux Windows integration
- WSL open file
- Windows WSL integration
features:
- Open files in the default Windows application from WSL.
- Launch URLs in the default Windows web browser from WSL.
- Open the current directory in Windows Explorer from WSL.
- Set wsl-open as the shell's default web browser.
- Execute from the WSL command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wsl-open

> Open a file or URL from within Windows Subsystem for Linux in the user's default Windows GUI application.
> More information: <https://gitlab.com/4U6U57/wsl-open>.

- Open the current directory in Windows Explorer:

`wsl-open {{.}}`

- Open a URL in the user's default web browser in Windows:

`wsl-open {{https://example.com}}`

- Open a specific file in the user's default application in Windows:

`wsl-open {{path\to\file}}`

- Set `wsl-open` as the shell's web browser (open links with `wsl-open`):

`wsl-open -w`

- Display help:

`wsl-open -h`
