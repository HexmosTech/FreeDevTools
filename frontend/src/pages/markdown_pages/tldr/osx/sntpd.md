---
title: "Control SNTP Daemon - Manage Time Synchronization | Online Free DevTools by Hexmos"
name: sntpd
path: /freedevtools/tldr/osx/sntpd
canonical: "https://hexmos.com/freedevtools/tldr/osx/sntpd/"
description: "Control time synchronization with SNTP Daemon. Configure the Simple Network Time Protocol daemon, set local clock, and manage SNTP state. Free online tool, no registration required."
category: osx
keywords:
- SNTP Daemon Control
- OSX Time Synchronization
- SNTP Server Configuration
- Network Time Protocol OSX
- SNTP State Management
- Time Server OSX
- macOS SNTP Client
- SNTP Command Line
- sntpd macOS
- Simple Network Time Protocol
features:
- Start the SNTP daemon
- Overwrite existing SNTP state
- Specify a custom state file
- Configure as a stratum 1 server
- Manage time synchronization on macOS
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sntpd

> An SNTP server.
> It should not be invoked manually.
> More information: <https://keith.github.io/xcode-man-pages/sntpd.8.html>.

- Start the daemon:

`sntpd`

- Overwrite existing state with the local clock (stratum 1), for running a master/primary server, without synchronizing with another (higher stratum) server:

`sntpd -L`

- Use a custom file for the SNTP state:

`sntpd -z {{path/to/state.bin}}`
