---
title: "Synchronize Time - SNTP Client | Online Free DevTools by Hexmos"
name: sntp
path: /freedevtools/tldr/osx/sntp
canonical: "https://hexmos.com/freedevtools/tldr/osx/sntp/"
description: "Synchronize system time accurately with SNTP. Use Simple Network Time Protocol to query time servers and adjust the system clock. Free online tool, no registration required."
category: osx
keywords:
  - Network Time Protocol client
  - SNTP time synchronization
  - system clock adjustment
  - NTP query command
  - time server synchronization
  - command-line NTP client
  - SNTP debug logging
  - SNTP server address
  - system time update
  - SNTP client program
features:
  - Query specified SNTP servers for current time
  - Synchronize the system clock with an SNTP server
  - Enable debug logging for SNTP client operations
  - Display the current time received from SNTP servers
  - Update system time based on SNTP server response
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sntp

> A very Simple Network Time Protocol client program.
> More information: <https://keith.github.io/xcode-man-pages/sntp.1>.

- Query a specified SNTP server and display the time:

`sntp {{pool.ntp.org}}`

- Synchronize the system clock with a specified SNTP server:

`sudo sntp -S {{pool.ntp.org}}`

- Enable debug logging:

`sntp -d {{pool.ntp.org}}`
