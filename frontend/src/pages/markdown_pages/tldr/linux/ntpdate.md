---
title: "Synchronize Time - Set Date via NTP | Free DevTools"
name: ntpdate
path: "/freedevtools/tldr/linux/ntpdate"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ntpdate/"
description: "Synchronize time with NTP using ntpdate. Correct system clock drift and ensure accurate timestamps across your network. Free online tool, no registration required."
category: linux
keywords:
  - NTP time synchronization
  - network time protocol
  - date and time synchronization
  - ntpdate command line
  - system clock correction
  - time server synchronization
  - NTP client configuration
  - network time accuracy
  - linux time sync
  - command line time tools
features:
  - Synchronize system clock with NTP server
  - Query NTP server for time information
  - Force time update using settimeofday
  - Use unprivileged port for time synchronization
  - Correct time discrepancies on network
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ntpdate

> Synchronize and set the date and time via NTP.
> More information: <https://manned.org/ntpdate>.

- Synchronize and set date and time:

`sudo ntpdate {{host}}`

- Query the host without setting the time:

`ntpdate -q {{host}}`

- Use an unprivileged port in case a firewall is blocking privileged ports:

`sudo ntpdate -u {{host}}`

- Force time to be stepped using `settimeofday` instead of `slewed`:

`sudo ntpdate -b {{host}}`
