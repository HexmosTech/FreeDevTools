---
title: "Control Rofi - Application Launcher | Online Free DevTools by Hexmos"
name: rofi
path: /freedevtools/tldr/linux/rofi
canonical: "https://hexmos.com/freedevtools/tldr/linux/rofi/"
description: "Control applications with Rofi, a versatile application launcher. Quickly switch windows and execute commands. Free online tool, no registration required."
category: linux
keywords:
  - rofi application launcher
  - application launcher linux
  - window switcher linux
  - command launcher
  - rofi command execution
  - linux application runner
  - rofi menu
  - command line launcher
  - application selector
  - rofi window management
features:
  - Launch applications quickly from the command line
  - Switch between active windows
  - Execute shell commands
  - Pipe input to `stdin` and print the selected output
  - Create custom menus with selectable items
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rofi

> An application launcher and window switcher.
> More information: <https://github.com/davatorium/rofi#manpage>.

- Show the list of apps:

`rofi -show drun`

- Show the list of all commands:

`rofi -show run`

- Switch between windows:

`rofi -show window`

- Pipe a list of items to `stdin` and print the selected item to `stdout`:

`printf "{{Choice1\nChoice2\nChoice3}}" | rofi -dmenu`
