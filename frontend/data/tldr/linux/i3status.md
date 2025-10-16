---
title: "Control i3 Status Line - Monitor System Info | Online Free DevTools by Hexmos"
name: i3status
path: "/freedevtools/tldr/linux/i3status/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/i3status/"
description: "Control i3 status line output with i3status. Monitor system information, network status, and battery life directly in your i3 window manager. Free online tool, no registration required."
category: linux
keywords:
  - i3 status line
  - i3 window manager status
  - system monitor i3
  - linux status bar
  - i3 system information
  - status line configuration
  - i3 block output
  - i3wm status
  - i3status conf
  - i3 status script
features:
  - Display system information in the i3 status bar.
  - Configure the status line output format.
  - Monitor network status and battery life.
  - Periodically update the status line output.
  - Customize the displayed information using a configuration file.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# i3status

> Status line for the i3 window manager.
> This command is usually called from the i3 configuration file.
> More information: <https://i3wm.org/i3status/manpage.html>.

- Print the status line to `stdout` periodically, using the default configuration:

`i3status`

- Print the status line to `stdout` periodically, using a specific configuration:

`i3status -c {{path/to/i3status.conf}}`

- Display help and version:

`i3status -h`
