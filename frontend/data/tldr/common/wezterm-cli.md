---
title: "Wezterm CLI - Control Wezterm Sessions | Online Free DevTools by Hexmos"
name: wezterm-cli
path: "/freedevtools/tldr/common/wezterm-cli/"
canonical: "https://hexmos.com/freedevtools/tldr/common/wezterm-cli/"
description: "Control Wezterm terminal sessions with Wezterm CLI. Manage windows, panes, and tabs directly from the command line. Free online tool, no registration required."
category: common
keywords:
- wezterm cli
- wezterm command line
- terminal multiplexer control
- wezterm session manager
- wezterm window management
- wezterm pane control
- wezterm tab management
- linux terminal control
- macos terminal control
- cross platform terminal cli
features:
- List active wezterm windows, tabs and panes.
- Split panes within a wezterm window.
- Activate a specific wezterm pane.
- Kill a specific wezterm pane.
- Automate terminal session management.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wezterm cli

> Interact with a running Wezterm GUI or multiplexer.
> More information: <https://wezterm.org/cli/cli/index.html>.

- List windows, tabs, and panes:

`wezterm cli list`

- Split the current pane and print the new pane's ID to `stdout`:

`wezterm cli split-pane --{{left|right|top|bottom}} --{{cells|percent}} {{n}}`

- Activate (focus) a pane:

`wezterm cli activate-pane --pane-id {{id}}`

- Kill a pane:

`wezterm cli kill-pane --pane-id {{id}}`
