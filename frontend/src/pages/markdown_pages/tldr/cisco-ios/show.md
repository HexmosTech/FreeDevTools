---
title: "Cisco Show - Display System Info | Online Free DevTools by Hexmos"
name: show
path: /freedevtools/tldr/cisco-ios/show
canonical: "https://hexmos.com/freedevtools/tldr/cisco-ios/show/"
description: "Display Cisco system information with the Cisco Show command. Inspect network configurations, monitor interface status, and troubleshoot network issues. Free online tool, no registration required."
category: cisco-ios
keywords:
- cisco show command
- ios show configuration
- cisco ios command reference
- network configuration display
- interface status monitoring
- vlan configuration inspection
- cisco troubleshooting commands
- cisco running configuration
- cisco ip ssh configuration
- cisco ios network analysis
features:
- Display network interface information
- Show the running configuration of the Cisco device
- Inspect VLAN configuration details
- Display SSH server configuration
- Monitor IP addressing information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# show

> Show various system information.
> More information: <https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus5000/sw/command/reference/fund/n5k-fund-cr/n5k-fund_cmds_show.html>.

- Show switch IP addresses:

`{{[sh|show]}} ip interface brief`

- Show specific interface configuration:

`{{[sh|show]}} ip interface {{vlan1}}`

- Show vlan configuration:

`{{[sh|show]}} vlan`

- Show currently running configuration:

`{{[sh|show]}} running-config`

- Show SSH configuration:

`{{[sh|show]}} ip ssh`
