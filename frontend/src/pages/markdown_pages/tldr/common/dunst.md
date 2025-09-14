---
title: "Control Dunst Notifications - Customize X11/Wayland | Free DevTools"
name: dunst
path: /freedevtools/tldr/common/dunst
canonical: "https://hexmos.com/freedevtools/tldr/common/dunst/"
description: "Control X11/Wayland notifications easily with Dunst. Configure notification appearance, behavior, and filtering. Free online tool, no registration required."
category: common
keywords:
- notification manager
- x11 notification daemon
- wayland notification daemon
- dunst configuration
- linux notifications
- desktop notifications
- notification customization
- notification filtering
- dunstrc configuration
- command-line notification
features:
- Start the Dunst notification daemon
- Display startup notifications using Dunst
- Print notification output to stdout
- Load a custom Dunst configuration file
- Customize notification behavior and appearance
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dunst

> A lightweight and customizable notification daemon for X11 and Wayland.
> If not started manually, D-Bus will automatically start `dunst` when a notification is sent.
> More information: <https://dunst-project.org/documentation/dunst>.

- Start `dunst`:

`dunst`

- Display a notification on startup:

`dunst -startup_notification`

- Print coming notifications to `stdout`:

`dunst -print`

- Use the specified configuration file (default: `$XDG_CONFIG_HOME/dunst/dunstrc`):

`dunst -config {{path/to/file}}`
