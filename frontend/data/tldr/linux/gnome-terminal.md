---
title: "Gnome Terminal - Control Linux Shell Sessions | Online Free DevTools by Hexmos"
name: gnome-terminal
path: "/freedevtools/tldr/linux/gnome-terminal/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/gnome-terminal/"
description: "Control Linux shell sessions with Gnome Terminal. Open new windows, run commands, and manage tabs directly from the command line. Free online tool, no registration required."
category: linux
keywords:
- linux terminal emulator
- gnome-terminal command
- linux command line
- shell session manager
- terminal window control
- linux tab management
- command execution linux
- linux command prompt
- gnome shell commands
- terminal customization linux
features:
- Open new terminal windows from the command line
- Execute specific commands in a new terminal window
- Create new tabs in existing terminal sessions
- Set custom titles for terminal tabs
- Automate terminal tasks with command line arguments
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gnome-terminal

> The GNOME Terminal emulator.
> More information: <https://help.gnome.org/users/gnome-terminal/stable/>.

- Open a new GNOME terminal window:

`gnome-terminal`

- Run a specific command in a new terminal window:

`gnome-terminal -- {{command}}`

- Open a new tab in the last opened window instead:

`gnome-terminal --tab`

- Set the title of the new tab:

`gnome-terminal --tab {{[-t|--title]}} "{{title}}"`
