---
title: "Airport - Configure Wireless Networks | Online Free DevTools by Hexmos"
name: airport
path: /freedevtools/tldr/osx/airport
canonical: "https://hexmos.com/freedevtools/tldr/osx/airport/"
description: "Configure wireless networks with Airport, the macOS command-line tool. Manage Wi-Fi connections, scan for networks, and monitor signal strength. Free online tool, no registration required."
category: osx
keywords:
- wifi configuration osx
- wireless network manager macos
- airport command line
- macos network tools
- wireless lan utility
- airport network scanner
- wifi signal strength
- disconnect wifi mac
- wireless traffic sniffer
- osx wireless diagnostics
features:
- Display current wireless network status
- Sniff wireless network traffic on specified channels
- Scan for available wireless networks
- Disassociate from the currently connected network
- Configure various wireless network settings (requires root privileges)
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# airport

> Wireless network configuration utility.
> More information: <https://ss64.com/mac/airport.html>.

- Show current wireless status information:

`airport --getinfo`

- Sniff wireless traffic on channel 1:

`airport sniff {{1}}`

- Scan for available wireless networks:

`airport --scan`

- Disassociate from current airport network:

`sudo airport --disassociate`
