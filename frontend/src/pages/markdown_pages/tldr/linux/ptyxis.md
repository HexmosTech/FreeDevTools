---
title: "Ptyxis Terminal - Control GNOME Sessions | Free DevTools"
name: ptyxis
path: /freedevtools/tldr/linux/ptyxis
canonical: "https://hexmos.com/freedevtools/tldr/linux/ptyxis/"
description: "Control GNOME terminal sessions with Ptyxis Terminal, a container-oriented terminal for Linux. Manage windows, tabs, and execute commands easily. Free online tool, no registration required."
category: linux
keywords:
- linux terminal emulator
- gnome terminal manager
- container terminal linux
- ptyxis command line
- linux shell manager
- session manager linux
- gnome shell commands
- linux tab manager
- ptyxis window control
- ptyxis terminal commands
features:
- Open new Ptyxis terminal windows
- Execute commands in new terminal sessions
- Open new tabs in existing windows
- Set custom titles for terminal tabs and windows
- Specify working directories for new terminal sessions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ptyxis

> A container-oriented terminal for GNOME.
> More information: <https://gitlab.gnome.org/chergert/ptyxis#basic-usage--command-line-options>.

- Open a new Ptyxis window:

`ptyxis --new-window`

- Execute a specific command in a new terminal window:

`ptyxis {{[-x|--execute]}} {{command}}`

- Open new tab in the last opened window:

`ptyxis --tab`

- Set the title for a new:

`ptyxis --tab {{[-T|--title]}} {{title}}`

- Specify the working directory for a new tab, window, or command execution:

`ptyxis {{[-d|--working-directory]}} {{path/to/directory}} --tab`
