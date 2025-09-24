---
title: "Dunst Control - Manage Desktop Notifications | Online Free DevTools by Hexmos"
name: dunstctl
path: /freedevtools/tldr/common/dunstctl
canonical: "https://hexmos.com/freedevtools/tldr/common/dunstctl/"
description: "Control Dunst notifications with Dunstctl. Pause, close, and manage your desktop notifications easily using the command line. Free online tool, no registration required."
category: common
keywords:
- dunst control
- notification manager
- desktop notifications
- linux notifications
- command line notifications
- dunstctl commands
- pause notifications
- close notifications
- notification history
- dunst configuration
features:
- Pause and unpause desktop notifications
- Close all current notifications
- Clear the notification history
- Display the latest notification from history
- Reload the Dunst configuration file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dunstctl

> Control the `dunst` notification daemon.
> More information: <https://dunst-project.org/documentation/dunstctl>.

- Pause/Unpause/Toggle desktop notifications:

`dunstctl set-paused {{true|false|toggle}}`

- Close all notifications:

`dunstctl close-all`

- Delete all notifications from history:

`dunstctl history-clear`

- Display the latest notification from history:

`dunstctl history-pop`

- Reload the configuration file:

`dunstctl reload`

- Display help:

`dunstctl {{[-h|--help]}}`
