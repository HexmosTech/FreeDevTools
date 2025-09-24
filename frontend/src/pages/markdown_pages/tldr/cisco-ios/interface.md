---
title: "Control Cisco Interface - Manage Network Interfaces | Online Free DevTools by Hexmos"
name: interface
path: /freedevtools/tldr/cisco-ios/interface
canonical: "https://hexmos.com/freedevtools/tldr/cisco-ios/interface/"
description: "Control Cisco network interfaces effortlessly with this tool. Configure VLANs and manage interface status using Cisco IOS commands. Free online tool, no registration required."
category: cisco-ios
keywords:
- cisco ios interface configuration
- cisco interface vlan
- cisco ios shutdown interface
- network interface management
- cisco ios interface status
- cisco ios network configuration
- cisco interface command reference
- cisco interface troubleshooting
- cisco ios command line interface
- cisco vlan configuration
features:
- Configure VLAN interfaces on Cisco IOS devices.
- Set interface state to active or inactive (shutdown/no shutdown).
- Manage network interface parameters via command line.
- Automate interface configuration tasks on Cisco devices.
- Control interface status for network troubleshooting.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# interface

> Manage interfaces.
> Accessed in configuration mode.
> More information: <https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/interface/command/ir-cr-book/ir-i1.html>.

- Configure a VLAN:

`interface vlan {{1}}`

- Set an interface to be active or inactive (this is run inside the interface command):

`{{no shutdown|shutdown}}`
