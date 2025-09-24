---
title: "Configure Wireless Networks with iwconfig | Online Free DevTools by Hexmos"
name: iwconfig
path: /freedevtools/tldr/linux/iwconfig
canonical: "https://hexmos.com/freedevtools/tldr/linux/iwconfig/"
description: "Configure and manage wireless network interfaces with iwconfig.  View network parameters and statistics, set ESSID, and control operating modes. Free online tool, no registration required."
category: linux
keywords:
  - iwconfig network configuration
  - linux wireless configuration
  - iwconfig ESSID setting
  - wireless interface management
  - linux network management
  - iwconfig operating mode
  - network parameter viewing
  - wireless network statistics
  - iwconfig command line
  - linux command line tools
features:
  - Show wireless interface parameters and statistics.
  - Set the ESSID (network name) of a wireless interface.
  - Configure the operating mode (e.g., Managed, Ad-Hoc, Monitor).
  - Manage multiple wireless interfaces simultaneously.
  - Troubleshoot wireless network connectivity issues.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# iwconfig

> Configure and show the parameters of a wireless network interface.
> More information: <https://manned.org/iwconfig>.

- Show the parameters and statistics of all the interfaces:

`iwconfig`

- Show the parameters and statistics of the specified interface:

`iwconfig {{interface}}`

- Set the ESSID (network name) of the specified interface (e.g. eth0 or wlp2s0):

`iwconfig {{interface}} {{new_network_name}}`

- Set the operating mode of the specified interface:

`iwconfig {{interface}} mode {{Ad-Hoc|Managed|Master|Repeater|Secondary|Monitor|Auto}}`
