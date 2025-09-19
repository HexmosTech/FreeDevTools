---
title: "Manage Files - Dolphin File Manager on Linux | Online Free DevTools by Hexmos"
name: dolphin
path: /freedevtools/tldr/linux/dolphin
canonical: "https://hexmos.com/freedevtools/tldr/linux/dolphin/"
description: "Manage files with Dolphin file manager on Linux. Navigate directories, select files, and open multiple windows. Free online tool, no registration required."
category: linux
keywords:
- Linux file manager
- KDE file manager
- Dolphin file browser
- Linux directory navigation
- Graphical file management Linux
- Linux file selection tool
- Dolphin split view
- Command line file management
- Linux GUI file manager
- Linux file organization
features:
- Launch the Dolphin file manager.
- Open specific directories using the command line.
- Select specific files or directories when opening.
- Open new Dolphin windows.
- Open directories in a split view for easy comparison.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dolphin

> KDE's file manager to manage files and directories.
> See also: `nautilus`, `caja`, `thunar`, `ranger`.
> More information: <https://apps.kde.org/dolphin/>.

- Launch the file manager:

`dolphin`

- Open specific directories:

`dolphin {{path/to/directory1 path/to/directory2 ...}}`

- Open with specific files or directories selected:

`dolphin --select {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Open a new window:

`dolphin --new-window`

- Open specific directories in split view:

`dolphin --split {{path/to/directory1}} {{path/to/directory2}}`

- Launch the daemon (only required to use the D-Bus interface):

`dolphin --daemon`

- Display help:

`dolphin {{[-h|--help]}}`
