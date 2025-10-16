---
title: "Launch Steam - Control Gaming Platform | Online Free DevTools by Hexmos"
name: steam
path: "/freedevtools/tldr/st/steam/"
canonical: "https://hexmos.com/freedevtools/tldr/st/steam/"
description: "Launch Steam and manage your games with Steam Command Line. Control application debugging, login credentials, and start in Big Picture Mode. Free online tool, no registration required."
category: common
keywords:
- steam command line
- steam console commands
- steam debugging tools
- steam big picture mode
- steam login credentials
- steam game launcher
- steam platform control
- valve steam commands
- windows steam control
- linux steam commands
features:
- Launch Steam with debug output
- Enable and open the in-app Steam console
- Log into Steam with username and password
- Start Steam in Big Picture Mode
- Shut down a running Steam instance
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# steam

> Video game platform by Valve.
> More information: <https://developer.valvesoftware.com/wiki/Command_Line_Options>.

- Launch Steam, printing debug messages to `stdout`:

`steam`

- Launch Steam and enable its in-app debug console tab:

`steam -console`

- Enable and open the Steam console tab in a running Steam instance:

`steam steam://open/console`

- Log into Steam with the specified credentials:

`steam -login {{username}} {{password}}`

- Launch Steam in Big Picture Mode:

`steam -tenfoot`

- Exit Steam:

`steam -shutdown`
