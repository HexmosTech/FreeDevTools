---
title: "Ubus Control - Interact with OpenWrt Ubus Daemon | Online Free DevTools by Hexmos"
name: ubus
path: "/freedevtools/tldr/linux/ubus/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ubus/"
description: "Control ubus daemons with Ubus Control, a command-line tool for interacting with OpenWrt's ubusd.  List objects, retrieve system info in JSON. Free online tool, no registration required."
category: linux
keywords:
- ubus control
- openwrt ubus
- linux ubus command
- ubusd server interaction
- openwrt daemon control
- ubus list objects
- ubus call system board
- ubus subscribe events
- command-line ubus tool
- linux system information retrieval
features:
- List available ubus objects.
- Retrieve system information in JSON format.
- Subscribe to ubus events.
- Execute commands on the ubus daemon.
- Interact with OpenWrt services via command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ubus

> Interact with an OpenWrt ubusd server.
> More information: <https://openwrt.org/docs/techref/ubus>.

- List available objects:

`ubus list`

- Retrieve system information in JSON format:

`ubus call system board`

- Listen to events:

`ubus subscribe {{event_name}}`

- Display help:

`ubus`
