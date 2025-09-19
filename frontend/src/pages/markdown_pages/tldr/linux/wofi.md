---
title: "Wofi App Launcher - Launch Apps with Wayland | Online Free DevTools by Hexmos"
name: wofi
path: /freedevtools/tldr/linux/wofi
canonical: "https://hexmos.com/freedevtools/tldr/linux/wofi/"
description: "Launch applications quickly with Wofi, a Wayland app launcher.  Similar to rofi and dmenu, it offers flexible searching and selection. Free online tool, no registration required."
category: linux
keywords:
  - wayland app launcher
  - wlroots application launcher
  - wofi command line
  - linux application launcher
  - wayland dmenu alternative
  - wofi drun commands
  - wofi stdin input
  - command-line application launcher
  - wayland compositor tool
  - rofi alternative
features:
  - Launch applications from the command line.
  - Filter applications using a search query.
  - Select applications using keyboard navigation.
  - Pipe a list of items to wofi for selection.
  - Works with wlroots-based Wayland compositors.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wofi

> An application launcher for wlroots-based Wayland compositors, similar to `rofi` and `dmenu`.
> More information: <https://manned.org/wofi>.

- Show the list of apps:

`wofi {{[-S|--show]}} drun`

- Show the list of all commands:

`wofi {{[-S|--show]}} run`

- Pipe a list of items to `stdin` and print the selected item to `stdout`:

`printf "{{Choice1\nChoice2\nChoice3}}" | wofi {{[-d|--dmenu]}}`
