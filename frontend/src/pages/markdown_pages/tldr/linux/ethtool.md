---
title: "ethtool - Control Network Interfaces | Free DevTools"
name: ethtool
path: /freedevtools/tldr/linux/ethtool
canonical: "https://hexmos.com/freedevtools/tldr/linux/ethtool/"
description: "Control network interface parameters with ethtool.  View network statistics, configure link settings, and troubleshoot network issues. Free online tool, no registration required."
category: linux
keywords:
  - network interface control linux
  - ethtool network configuration
  - linux network settings ethtool
  - network driver information ethtool
  - ethtool network statistics
  - command-line network management
  - ethtool link speed configuration
  - linux system administration ethtool
  - network troubleshooting ethtool
  - interface settings ethtool
features:
  - Display and modify network interface settings.
  - View driver information and supported features.
  - Monitor network usage statistics.
  - Configure link speed, duplex mode, and auto-negotiation.
  - Control interface LEDs for identification.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ethtool

> Display and modify Network Interface Controller (NIC) parameters.
> More information: <https://manned.org/ethtool>.

- Display the current settings for an interface:

`ethtool {{eth0}}`

- Display the driver information for an interface:

`ethtool {{[-i|--driver]}} {{eth0}}`

- Display all supported features for an interface:

`ethtool {{[-k|--show-features]}} {{eth0}}`

- Display the network usage statistics for an interface:

`ethtool {{[-S|--statistics]}} {{eth0}}`

- Blink one or more LEDs on an interface for 10 seconds:

`ethtool {{[-p|--identify]}} {{eth0}} {{10}}`

- Set the link speed, duplex mode, and parameter auto-negotiation for a given interface:

`ethtool {{[-s|--change]}} {{eth0}} speed {{10|100|1000}} duplex {{half|full}} autoneg {{on|off}}`
