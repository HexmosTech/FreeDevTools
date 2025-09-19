---
title: "Watchdog Control - Display Watchdog Status | Online Free DevTools by Hexmos"
name: wdctl
path: /freedevtools/tldr/linux/wdctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/wdctl/"
description: "Display watchdog status with wdctl. Monitor system health and identify hardware issues easily using command-line interface. Free online tool, no registration required."
category: linux
keywords:
  - watchdog status display
  - wdctl command line tool
  - hardware watchdog monitor
  - system health check
  - linux watchdog utility
  - watchdog flag control
  - command line watchdog tool
  - kernel watchdog status
  - system monitoring command
  - hardware monitoring tool
features:
  - Display current watchdog status
  - Output watchdog status in a single line
  - Show specific watchdog flags
  - Monitor system hardware health
  - Control watchdog functionality from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wdctl

> Show the hardware watchdog status.
> More information: <https://manned.org/wdctl>.

- Display the watchdog status:

`wdctl`

- Display the watchdog status in a single line in key-value pairs:

`wdctl {{[-O|--oneline]}}`

- Display only specific watchdog flags (list is driver specific):

`wdctl {{[-f|--flags]}} {{flag_list}}`
