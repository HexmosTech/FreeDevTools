---
title: "dhcpcd - Manage Network Leases with DHCP Client | Online Free DevTools by Hexmos"
name: dhcpcd
path: "/freedevtools/tldr/linux/dhcpcd/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/dhcpcd/"
description: "Manage network leases using dhcpcd. Release address leases and request new ones with this command line utility. Get new IP addresses quickly. Free online tool, no registration required."
category: linux
keywords:
  - DHCP Client Lease Management
  - Network Configuration Tool
  - Linux Network Configuration
  - dhcpcd Command Line
  - IP Address Renewal
  - DHCP Release Request
  - Network Interface Control
  - Command-line DHCP Client
  - macOS Network Setup
  - Dynamic Host Configuration Protocol
features:
  - Release existing DHCP address leases.
  - Request new DHCP leases from the server.
  - Control network interface DHCP configuration.
  - Configure network settings via command line.
  - Manage network IP address assignments dynamically.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dhcpcd

> DHCP client.
> More information: <https://roy.marples.name/projects/dhcpcd>.

- Release all address leases:

`sudo dhcpcd {{[-k|--release]}}`

- Request the DHCP server for new leases:

`sudo dhcpcd {{[-n|--rebind]}}`
