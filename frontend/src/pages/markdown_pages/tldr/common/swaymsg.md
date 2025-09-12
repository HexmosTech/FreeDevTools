---
title: "Swaymsg - Control Sway Window Manager via IPC | Free DevTools"
name: swaymsg
path: /freedevtools/tldr/common/swaymsg
canonical: "https://hexmos.com/freedevtools/tldr/common/swaymsg/"
description: "Control your Sway window manager with Swaymsg. Send commands, manage workspaces, and query window information. Free online tool, no registration required."
category: common
keywords:
- sway window manager control
- ipc command sender
- swaymsg command line
- sway workspace manager
- linux window manager
- sway config utility
- sway input device query
- sway output device query
- sway layout tree view
- sway command runner
features:
- Send commands to a running Sway instance
- Retrieve a list of workspaces
- Query connected input devices
- Query connected output devices
- View a layout tree of windows and containers
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# swaymsg

> Send messages to a running instance of Sway using IPC.
> See <https://github.com/swaywm/sway/blob/master/sway/sway.5.scd> for available commands.
> More information: <https://github.com/swaywm/sway/blob/master/swaymsg/swaymsg.1.scd>.

- Run a Sway command:

`swaymsg {{command}}`

- Display a list of workspaces:

`swaymsg {{[-t|--type]}} get_workspaces`

- Display a list of input devices:

`swaymsg {{[-t|--type]}} get_inputs`

- Display a list of output devices:

`swaymsg {{[-t|--type]}} get_outputs`

- Display a layout tree of all open windows, containers, outputs, and workspaces:

`swaymsg {{[-t|--type]}} get_tree`
