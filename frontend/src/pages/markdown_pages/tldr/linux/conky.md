---
title: "Conky System Monitor - Control System Resources | Online Free DevTools by Hexmos"
name: conky
path: /freedevtools/tldr/linux/conky
canonical: "https://hexmos.com/freedevtools/tldr/linux/conky/"
description: "Monitor system resources effectively with Conky.  Customize your system information display with various configuration options. Free online tool, no registration required."
category: linux
keywords:
  - system monitor linux
  - conky configuration
  - system resource monitor
  - lightweight system monitor
  - linux system monitoring tool
  - conky daemonize
  - customize conky
  - conky alignment options
  - x window system monitor
  - conky startup pause
features:
  - Display real-time system information (CPU, memory, etc.)
  - Highly customizable display via configuration files
  - Run as a background daemon for persistent monitoring
  - Control screen alignment for optimal placement
  - Adjustable startup delay for smoother integration
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# conky

> Light-weight system monitor for X.
> More information: <https://github.com/brndnmtthws/conky>.

- Launch with default, built-in config:

`conky`

- Create a new default config:

`conky {{[-C|--print-config]}} > ~/.conkyrc`

- Launch Conky with a given configuration file:

`conky {{[-c|--config]}} {{path/to/config}}`

- Start in the background (daemonize):

`conky {{[-d|--daemonize]}}`

- Align Conky on the desktop:

`conky {{[-a|--alignment]}} {{top|bottom|middle}}_{{left|right|middle}}`

- Pause for 5 seconds at startup before launching:

`conky {{[-p|--pause]}} {{5}}`
