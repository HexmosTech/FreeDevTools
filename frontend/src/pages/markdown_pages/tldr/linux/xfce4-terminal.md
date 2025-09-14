---
title: "XFCE4 Terminal - Control Linux Terminal | Free DevTools"
name: xfce4-terminal
path: /freedevtools/tldr/linux/xfce4-terminal
canonical: "https://hexmos.com/freedevtools/tldr/linux/xfce4-terminal/"
description: "Control Linux terminal sessions with XFCE4 Terminal. Manage tabs, execute commands and customize titles with ease. Free online tool, no registration required."
category: linux
keywords:
- linux terminal control
- xfce4-terminal command
- linux command execution
- terminal tab manager
- shell command launcher
- linux session manager
- xfce4 terminal emulator
- terminal command hold
- initial title terminal
- linux command line
features:
- Open new terminal windows
- Set custom terminal titles
- Execute commands in new tabs
- Keep terminals open after command completion
- Open multiple tabs with command execution
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xfce4-terminal

> The XFCE4 terminal emulator.
> More information: <https://docs.xfce.org/apps/xfce4-terminal/start>.

- Open a new terminal window:

`xfce4-terminal`

- Set the initial title:

`xfce4-terminal --initial-title "{{initial_title}}"`

- Open a new tab in the current terminal window:

`xfce4-terminal --tab`

- Execute a command in a new terminal window:

`xfce4-terminal --command "{{command_with_args}}"`

- Keep the terminal around after the executed command finishes executing:

`xfce4-terminal --command "{{command_with_args}}" --hold`

- Open multiple new tabs, executing a command in each:

`xfce4-terminal --tab --command "{{command1}}" --tab --command "{{command2}}"`
