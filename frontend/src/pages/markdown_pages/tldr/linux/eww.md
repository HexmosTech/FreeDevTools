---
title: "Eww Widget Manager - Control Window Manager Widgets | Online Free DevTools by Hexmos"
name: eww
path: /freedevtools/tldr/linux/eww
canonical: "https://hexmos.com/freedevtools/tldr/linux/eww/"
description: "Control custom widgets in your window manager with Eww.  Manage and customize widgets easily using command-line interface. Free online tool, no registration required."
category: linux
keywords:
  - eww widget manager
  - eww window manager
  - eww command line
  - eww configuration
  - eww daemon control
  - custom widget management
  - window manager widgets
  - linux window manager tools
  - desktop customization tools
  - widget configuration commands
features:
  - Start and manage an Eww daemon process.
  - Open and close individual widgets by name.
  - Reload Eww configuration without restarting the daemon.
  - View and monitor Eww logs for debugging purposes.
  - Control multiple widgets simultaneously from the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# eww

> Implement your own custom widgets in any window manager.
> More information: <https://elkowar.github.io/eww>.

- Start the daemon:

`eww daemon`

- Open a widget:

`eww {{[-c|--config]}} {{path/to/source_code_directory}} open {{window_name}}`

- Close a widget:

`eww {{[-c|--config]}} {{path/to/source_code_directory}} close {{window_name}}`

- Reload the configuration:

`eww reload`

- Kill the daemon:

`eww kill`

- Print and watch logs:

`eww logs`
