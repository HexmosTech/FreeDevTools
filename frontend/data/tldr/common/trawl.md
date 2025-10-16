---
title: "Trawl - Display Network Interfaces | Online Free DevTools by Hexmos"
name: trawl
path: "/freedevtools/tldr/common/trawl/"
canonical: "https://hexmos.com/freedevtools/tldr/common/trawl/"
description: "Display network interfaces with Trawl. Easily view network configuration, filter interfaces with regex, and list available connections. Free online tool, no registration required."
category: common
keywords:
- network interface information
- network configuration display
- network interface tool
- command line network information
- linux network interface
- macos network interface
- windows network interface
- interface regex filter
- network debugging
- network troubleshooting
features:
- Display detailed network interface information.
- Filter network interfaces by regex pattern.
- List available network interfaces.
- Include loopback interface in the display.
- Show column names for easier readability.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# trawl

> Print out network interface information to the console, much like ifconfig/ipconfig/ip/ifdata.
> More information: <https://github.com/robphoenix/trawl>.

- Show column names:

`trawl -n`

- Filter interface names using a case-insensitive `regex`:

`trawl -f wi`

- List available interfaces:

`trawl -i`

- Include the loopback interface:

`trawl -l`
