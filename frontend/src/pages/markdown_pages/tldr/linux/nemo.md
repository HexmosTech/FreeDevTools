---
title: "Nemo File Manager - Manage Files in Cinnamon | Free DevTools"
name: nemo
path: /freedevtools/tldr/linux/nemo
canonical: "https://hexmos.com/freedevtools/tldr/linux/nemo/"
description: "Manage files and directories efficiently with Nemo File Manager. Open files and folders in tabs or separate windows, customize window size, and quit all windows. Free online tool, no registration required."
category: linux
keywords:
  - file manager cinnamon
  - directory manager linux
  - nemo file navigation
  - cinnamon desktop file management
  - linux file explorer nemo
  - open files nemo command
  - manage directories nemo
  - nemo tabbed browsing
  - customize nemo window
  - quit nemo windows
features:
  - Open files and directories in the Cinnamon desktop environment.
  - Open multiple directories in separate windows or tabs.
  - Customize the window size of opened directories.
  - Supports command-line arguments for enhanced functionality.
  - Allows for closing all active Nemo windows simultaneously.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nemo

> Manage files and directories in Cinnamon desktop environment.
> More information: <https://manned.org/nemo>.

- Open the current user home directory:

`nemo`

- Open specific directories in separate windows:

`nemo {{path/to/directory1 path/to/directory2 ...}}`

- Open specific directories in tabs:

`nemo --tabs {{path/to/directory1 path/to/directory2 ...}}`

- Open a directory with a specific window size:

`nemo --geometry={{600}}x{{400}} {{path/to/directory}}`

- Close all windows:

`nemo --quit`
