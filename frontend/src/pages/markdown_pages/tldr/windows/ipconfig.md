---
title: "IP Configuration - Manage Network Settings | Online Free DevTools by Hexmos"
name: ipconfig
path: /freedevtools/tldr/windows/ipconfig
canonical: "https://hexmos.com/freedevtools/tldr/windows/ipconfig/"
description: "Manage IP configuration with ipconfig, a command-line tool to display and modify network settings on Windows systems. Free online tool, no registration required."
category: windows
keywords:
  - ip configuration tool
  - network adapter settings
  - windows ipconfig command
  - renew ip address windows
  - release ip address windows
  - display dns cache
  - flush dns cache
  - network configuration manager
  - windows network troubleshooting
  - command line ipconfig
features:
  - Display detailed network adapter information
  - Renew IP addresses for specific adapters
  - Release IP addresses for specific adapters
  - Show local DNS cache contents
  - Clear and reset the local DNS cache
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ipconfig

> Display and manage the network configuration of Windows.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/ipconfig>.

- List all network adapters:

`ipconfig`

- Show a detailed list of network adapters:

`ipconfig /all`

- Renew the IP addresses for a network adapter:

`ipconfig /renew {{adapter}}`

- Free up the IP addresses for a network adapter:

`ipconfig /release {{adapter}}`

- Show the local DNS cache:

`ipconfig /displaydns`

- Remove all data from the local DNS cache:

`ipconfig /flushdns`
