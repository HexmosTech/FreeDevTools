---
title: "Control Linux Terminal - Open LXTerminal Windows | Free DevTools"
name: lxterminal
path: /freedevtools/tldr/linux/lxterminal
canonical: "https://hexmos.com/freedevtools/tldr/linux/lxterminal/"
description: "Control Linux terminal windows with LXTerminal. Open multiple tabs, set custom titles, and specify working directories. Free online tool, no registration required."
category: linux
keywords:
  - linux terminal emulator
  - lxterminal command
  - linux command line
  - terminal tab manager
  - shell scripting linux
  - linux terminal title
  - working directory linux
  - lxde terminal
  - linux command exit
  - ubuntu terminal control
features:
  - Open a new LXTerminal window
  - Execute commands and exit automatically
  - Open multiple tabs within a single window
  - Set a custom title for the terminal window
  - Specify a working directory for the terminal session
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lxterminal

> Terminal emulator for LXDE.
> More information: <https://github.com/lxde/lxterminal>.

- Open an LXTerminal window:

`lxterminal`

- Open an LXTerminal window, run a command, and then exit:

`lxterminal {{[-e|--command]}} "{{command}}"`

- Open an LXTerminal window with multiple tabs:

`lxterminal --tabs={{tab_name1,tab_name2,...}}`

- Open an LXTerminal window with a specific title:

`lxterminal --title={{title_name}}`

- Open an LXTerminal window with a specific working directory:

`lxterminal --working-directory={{path/to/directory}}`
