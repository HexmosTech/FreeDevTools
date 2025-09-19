---
title: "NTP Control - Synchronize Time | Online Free DevTools by Hexmos"
name: ntpd
path: /freedevtools/tldr/linux/ntpd
canonical: "https://hexmos.com/freedevtools/tldr/linux/ntpd/"
description: "Synchronize system time with NTP Control using ntpd, the Network Time Protocol daemon. Keep your clock accurate with remote time servers. Free online tool, no registration required."
category: linux
keywords:
- ntp synchronization
- network time protocol
- ntpd linux
- linux time server
- system clock synchronization
- time daemon
- time server configuration
- ntpd command
- linux ntp client
- remote time synchronization
features:
- Synchronize system time with remote NTP servers
- Manually adjust system clock with large time adjustments
- Run ntpd daemon in the background
- Quit ntpd after a single synchronization
- Configure network time protocol settings
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ntpd

> The official NTP (Network Time Protocol) daemon to synchronize the system clock to remote time servers or local reference clocks.
> More information: <https://manned.org/ntpd>.

- Start the daemon:

`sudo ntpd`

- Synchronize system time with remote servers a single time (quit after synchronizing):

`sudo ntpd --quit`

- Synchronize a single time allowing "Big" adjustments:

`sudo ntpd --panicgate --quit`
