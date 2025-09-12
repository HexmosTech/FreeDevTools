---
title: "NTP Query - Control NTP Daemon | Free DevTools"
name: ntpq
path: "/freedevtools/tldr/linux/ntpq"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ntpq/"
description: "Control NTP daemon with NTP Query. Inspect NTP peers, system variables, and debug network time protocol issues. Free online tool, no registration required."
category: linux
keywords:
- ntp query
- ntp daemon control
- linux ntp
- network time protocol query
- ntp peer list
- ntp system variables
- ntp debugging
- linux network troubleshooting
- ntp server status
- command line ntp
features:
- Query NTP server status and synchronization
- List and monitor NTP peers
- Inspect NTP system variables values
- Display network time protocol statistics
- Debug NTP daemon issues using debug mode
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ntpq

> Query the Network Time Protocol (NTP) daemon.
> More information: <https://manned.org/ntpq.1>.

- Start `ntpq` in interactive mode:

`ntpq`

- Print a list of NTP peers:

`ntpq {{[-p|--peers]}}`

- Print a list of NTP peers without resolving hostnames from IP addresses:

`ntpq {{[-n|--numeric]}} {{[-p|--peers]}}`

- Use `ntpq` in debugging mode:

`ntpq {{[-d|--debug-level]}}`

- Print NTP system variables values:

`ntpq {{[-c|--command]}} {{rv}}`
