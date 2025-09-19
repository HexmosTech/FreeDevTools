---
title: "LLDP Control - Inspect Network Neighbors | Online Free DevTools by Hexmos"
name: lldpctl
path: /freedevtools/tldr/linux/lldpctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/lldpctl/"
description: "Control Link Layer Discovery Protocol with lldpctl. Inspect network neighbor data, manage lldpd daemon, and troubleshoot network connectivity. Free online tool, no registration required."
category: linux
keywords:
  - lldp data control
  - network discovery data
  - lldp neighbor information
  - link layer protocol inspection
  - network topology analysis
  - lldpd daemon management
  - network device discovery
  - lldp protocol analyzer
  - linux network commands
  - command line network tools
features:
  - Display collected neighbor data
  - Start and stop the lldpd daemon
  - Inspect link layer protocol information
  - Troubleshoot network connectivity issues
  - Analyze network topology
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lldpctl

> Print link layer discovery protocol information.
> More information: <https://manned.org/lldpctl>.

- Start the lldp daemon:

`systemctl start lldpd`

- Display collected neighbor data:

`sudo lldpctl`

- Display help:

`lldpctl {{[-h|--help]}}`
