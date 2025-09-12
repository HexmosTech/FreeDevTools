---
title: "Monitor Bandwidth with bmon | Free DevTools"
name: bmon
path: /freedevtools/tldr/linux/bmon
canonical: "https://hexmos.com/freedevtools/tldr/linux/bmon/"
description: "Monitor network bandwidth usage with bmon, a powerful command-line tool providing detailed network statistics.  Free online tool, no registration required."
category: linux
keywords:
  - bandwidth monitor
  - network monitor bmon
  - bmon command-line
  - network statistics bmon
  - linux bandwidth monitor
  - bmon interface monitoring
  - bmon network usage
  - command-line bandwidth
  - monitor network traffic
  - bmon data transfer
features:
  - Displays real-time bandwidth usage across all interfaces.
  - Shows data transfer rates in bits or bytes per second.
  - Allows specifying which network interfaces to monitor.
  - Provides customizable rate calculation intervals.
  - Offers detailed statistics, including packets and errors.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bmon

> Monitor bandwidth and capture network related statistics.
> More information: <https://github.com/tgraf/bmon>.

- Display the list of all the interfaces:

`bmon {{[-a|--show-all]}}`

- Display data transfer rates in bits per second:

`bmon {{[-b|--use-bit]}}`

- Specify the policy to define which network interface(s) is/are displayed:

`bmon {{[-p|--policy]}} {{interface_1,interface_2,interface_3}}`

- Specify the interval (in seconds) in which rate per counter is calculated:

`bmon {{[-R|--rate-interval]}} {{2.0}}`
