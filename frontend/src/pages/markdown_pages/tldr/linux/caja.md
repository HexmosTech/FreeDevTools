---
title: "Caja - Manage Files and Directories | Online Free DevTools by Hexmos"
name: caja
path: /freedevtools/tldr/linux/caja
canonical: "https://hexmos.com/freedevtools/tldr/linux/caja/"
description: "Manage files with Caja, the MATE file manager for Linux. Navigate directories, open in tabs, and customize window sizes. Free online tool, no registration required."
category: linux
keywords:
- linux file manager
- caja file manager
- mate desktop environment
- linux directory navigation
- file system management linux
- linux file browser
- caja open directory
- caja tabs
- linux file explorer
- command line file management
features:
- Open directories in separate windows
- Open directories in tabs
- Specify window size for directory display
- Close all Caja windows
- Navigate file systems from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# caja

> Manage files and directories in the MATE desktop environment.
> See also: `nautilus`, `dolphin`, `thunar`, `ranger`.
> More information: <https://manned.org/caja>.

- Open the current user home directory:

`caja`

- Open specific directories in separate windows:

`caja {{path/to/directory1 path/to/directory2 ...}}`

- Open specific directories in tabs:

`caja {{[-t|--tabs]}} {{path/to/directory1 path/to/directory2 ...}}`

- Open a directory with a specific window size:

`caja {{[-g|--geometry]}} {{600}}x{{400}} {{path/to/directory}}`

- Close all windows:

`caja {{[-q|--quit]}}`
