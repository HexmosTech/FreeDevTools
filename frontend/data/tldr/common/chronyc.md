---
title: "Chrony Control - Query NTP Daemon | Online Free DevTools by Hexmos"
name: chronyc
path: "/freedevtools/tldr/common/chronyc/"
canonical: "https://hexmos.com/freedevtools/tldr/common/chronyc/"
description: "Control time synchronization with Chronyc, the NTP daemon client. Query server stats, adjust clock and analyze sources. Free online tool, no registration required."
category: common
keywords:
- NTP client control
- Chrony daemon query
- Time server statistics
- System clock adjustment
- NTP source analysis
- Linux time synchronization
- Chrony command line tool
- Network time protocol
- Clock drift management
- Chrony server monitoring
features:
- Query NTP server status
- Display Chrony tracking statistics
- Analyze NTP time sources
- Force immediate clock synchronization
- View detailed NTP source information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# chronyc

> Query the Chrony NTP daemon.
> More information: <https://chrony-project.org/doc/4.6.1/chronyc.html>.

- Start `chronyc` in interactive mode:

`chronyc`

- Display tracking stats for the Chrony daemon:

`chronyc tracking`

- Print the time sources that Chrony is currently using:

`chronyc sources`

- Display stats for sources currently used by chrony daemon as a time source:

`chronyc sourcestats`

- Step the system clock immediately, bypassing any slewing:

`chronyc makestep`

- Display verbose information about each NTP source:

`chronyc ntpdata`
