---
title: "cbatticon - Monitor Battery Status | Online Free DevTools by Hexmos"
name: cbatticon
path: "/freedevtools/tldr/linux/cbatticon/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/cbatticon/"
description: "Monitor battery status and customize notifications with cbatticon.  Display battery information in your system tray with customizable intervals and icons. Free online tool, no registration required."
category: linux
keywords:
  - battery icon monitor
  - system tray battery
  - customizable battery display
  - battery level indicator
  - command line battery
  - battery notification customization
  - system tray application
  - real-time battery status
  - linux battery monitor
  - cross-platform battery tool
features:
  - Displays battery status in the system tray.
  - Configurable update interval for real-time monitoring.
  - Supports various icon types for visual customization.
  - Allows specifying a specific battery to monitor.
  - Executes a custom command when critical battery level is reached.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cbatticon

> A lightweight and fast battery icon that sits in your system tray.
> More information: <https://github.com/valr/cbatticon>.

- Show the battery icon in the system tray:

`cbatticon`

- Show the battery icon and set the update interval to 20 seconds:

`cbatticon {{[-u|--update-interval]}} {{20}}`

- List available icon types:

`cbatticon {{[-t|--list-icon-types]}}`

- Show the battery icon with a specific icon type:

`cbatticon {{[-i|--icon-type]}} {{standard|notification|symbolic}}`

- List available power supplies:

`cbatticon {{[-p|--list-power-supplies]}}`

- Show the battery icon for a specific battery:

`cbatticon {{BAT0}}`

- Show the battery icon and which command to execute when the battery level reaches the set critical level:

`cbatticon {{[-r|--critical-level]}} {{5}} {{[-c|--command-critical-level]}} {{poweroff}}`
