---
title: "NTP Control - Display NTP Information | Online Free DevTools by Hexmos"
name: ntpctl
path: /freedevtools/tldr/common/ntpctl
canonical: "https://hexmos.com/freedevtools/tldr/common/ntpctl/"
description: "Display NTP information with NTP Control. Monitor NTP peers, sensors, and system clock synchronization. Free online tool, no registration required."
category: common
keywords:
- NTP information display
- OpenNTPD control
- Time synchronization status
- Peer monitoring
- Sensor information
- NTP server diagnostics
- Network time protocol
- NTP client status
- NTP debugging
- OpenBSD ntpctl
features:
- Show all NTP data
- Display information about each peer
- Show status of peers and sensors
- Indicate system clock synchronization
- Display information about each sensor
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ntpctl

> Display information about the running instance of OpenNTPD.
> More information: <https://man.openbsd.org/ntpctl>.

- Show all data:

`ntpctl -s {{[a|all]}}`

- Show information about each peer:

`ntpctl -s {{[p|peers]}}`

- Show the status of peers and sensors, and whether the system clock is synced:

`ntpctl -s {{[s|status]}}`

- Show information about each sensor:

`ntpctl -s {{[S|Sensors]}}`
