---
title: "Monitor System - Analyze System Performance with Glances | Online Free DevTools by Hexmos"
name: glances
path: /freedevtools/tldr/common/glances
canonical: "https://hexmos.com/freedevtools/tldr/common/glances/"
description: "Analyze system performance metrics with Glances, a cross-platform system monitoring tool. Monitor CPU, memory, disk I/O, and network usage in real-time. Free online tool, no registration required."
category: common
keywords:
- system performance monitoring
- cross platform system monitor
- linux system monitoring
- windows system monitoring
- macos system monitoring
- glances system analysis
- system resource usage
- cpu monitor command line
- memory monitor command line
- network monitor command line
features:
- Display real-time CPU usage statistics
- Monitor memory consumption and swap usage
- Analyze disk I/O and file system performance
- Track network interface bandwidth usage
- Visualize system metrics in a web browser
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# glances

> A cross-platform system monitoring tool.
> More information: <https://nicolargo.github.io/glances/>.

- Run in terminal:

`glances`

- Run in web server mode to show results in browser:

`glances {{[-w|--webserver]}}`

- Run in server mode to allow connections from other Glances clients:

`glances {{[-s|--server]}}`

- Connect to a Glances server:

`glances {{[-c|--client]}} {{hostname}}`

- Require a password in (web) server mode:

`glances {{[-s|--server]}} --password`

- Exit Glances:

`<q>`

- Display help:

`glances {{[-h|--help]}}`
