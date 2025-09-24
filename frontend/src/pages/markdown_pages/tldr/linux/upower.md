---
title: "UPower Battery Monitor - Control Power Status | Online Free DevTools by Hexmos"
name: upower
path: /freedevtools/tldr/linux/upower
canonical: "https://hexmos.com/freedevtools/tldr/linux/upower/"
description: "Control power status with UPower Battery Monitor, a system utility for power and battery information. Monitor power devices and status changes. Free online tool, no registration required."
category: linux
keywords:
  - upower battery monitor
  - linux power management
  - battery status check
  - power device enumeration
  - upower command line
  - system power statistics
  - battery health monitoring
  - power consumption analysis
  - device power information
  - linux battery information
features:
  - Display detailed power and battery information.
  - List all available power devices on the system.
  - Monitor and report real-time power status changes.
  - Show detailed power status change events.
  - Output the installed upower version number.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# upower

> System utility to provide power and battery information and statistics.
> More information: <https://upower.freedesktop.org/docs/upower.1.html>.

- Display power and battery information:

`upower {{[-d|--dump]}}`

- List all power devices:

`upower {{[-e|--enumerate]}}`

- Watch for and print power status changes:

`upower {{[-m|--monitor]}}`

- Watch for and print detailed power status changes:

`upower --monitor-detail`

- Display version:

`upower {{[-v|--version]}}`
