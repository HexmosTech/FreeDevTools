---
title: "Monitor Network Bandwidth - nethogs Usage | Free DevTools"
name: nethogs
path: /freedevtools/tldr/linux/nethogs
canonical: "https://hexmos.com/freedevtools/tldr/linux/nethogs/"
description: "Monitor network bandwidth usage per process with nethogs.  Track bandwidth consumption in real-time and identify resource-intensive applications. Free online tool, no registration required."
category: linux
keywords:
  - network bandwidth monitor
  - linux network monitoring
  - process bandwidth usage
  - nethogs command
  - network traffic analysis
  - real-time bandwidth monitor
  - system bandwidth usage
  - network performance analysis
  - command line network tool
  - network resource monitoring
features:
  - Displays real-time bandwidth usage per process.
  - Monitors network usage on specified devices.
  - Allows monitoring multiple devices simultaneously.
  - Provides customizable refresh rate for continuous tracking.
  - Identifies bandwidth-intensive processes for optimization.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nethogs

> Monitor bandwidth usage per process.
> More information: <https://github.com/raboof/nethogs>.

- Start NetHogs as root (default device is `eth0`):

`sudo nethogs`

- Monitor bandwidth on specific device:

`sudo nethogs {{device}}`

- Monitor bandwidth on multiple devices:

`sudo nethogs {{device1 device2 ...}}`

- Specify refresh rate:

`sudo nethogs -t {{seconds}}`
