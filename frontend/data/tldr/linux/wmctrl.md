---
title: "Control Windows with wmctrl - Manage X Window Manager | Online Free DevTools by Hexmos"
name: wmctrl
path: "/freedevtools/tldr/linux/wmctrl/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/wmctrl/"
description: "Control X Window Manager windows efficiently with wmctrl. List, switch, move, and manage windows via command line. Free online tool, no registration required."
category: linux
keywords:
  - window manager control
  - wmctrl commands
  - x window management
  - linux window manager
  - window manipulation linux
  - list windows wmctrl
  - switch windows wmctrl
  - move windows wmctrl
  - fullscreen wmctrl
  - workspace management wmctrl
features:
  - List all windows managed by the window manager.
  - Switch to a window based on its title.
  - Move a window to a specific workspace.
  - Toggle fullscreen mode for a selected window.
  - Manage workspaces by switching between them.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wmctrl

> CLI for X Window Manager.
> More information: <https://manned.org/wmctrl>.

- List all windows, managed by the window manager:

`wmctrl -l`

- Switch to the first window whose (partial) title matches:

`wmctrl -a {{window_title}}`

- Move a window to the current workspace, raise it and give it focus:

`wmctrl -R {{window_title}}`

- Switch to a workspace:

`wmctrl -s {{workspace_number}}`

- Select a window and toggle fullscreen:

`wmctrl -r {{window_title}} -b toggle,fullscreen`

- Select a window and move it to a workspace:

`wmctrl -r {{window_title}} -t {{workspace_number}}`
