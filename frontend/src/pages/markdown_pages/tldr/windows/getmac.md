---
title: "Getmac - Display MAC Addresses | Online Free DevTools by Hexmos"
name: getmac
path: "/freedevtools/tldr/windows/getmac"
canonical: "https://hexmos.com/freedevtools/tldr/windows/getmac/"
description: "Display MAC addresses with Getmac, a command-line tool for Windows. Quickly retrieve network interface MAC addresses for system configuration. Free online tool, no registration required."
category: windows
keywords:
- MAC Address Display
- Windows Getmac Command
- Network Interface Card MAC
- Ethernet MAC Address
- Wireless MAC Address
- Command Line MAC Tool
- Windows Network Info
- MAC Address Retrieval
- System MAC Address
- Getmac Windows
features:
- Display MAC addresses for local systems
- Display MAC addresses for remote systems
- Format output as table, list, or CSV
- Exclude header information from output
- Display verbose information about MAC addresses
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# getmac

> Display the MAC addresses of a system.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/getmac>.

- Display the MAC addresses for the current system:

`getmac`

- Display the details in a specific format:

`getmac /fo {{table|list|csv}}`

- Exclude the header in the output list:

`getmac /nh`

- Display the MAC addresses for a remote machine:

`getmac /s {{hostname}} /u {{username}} /p {{password}}`

- Display the MAC addresses with verbose information:

`getmac /v`

- Display help:

`getmac /?`
