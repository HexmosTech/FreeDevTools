---
title: "Cisco IP Command - Manage Network Configurations | Online Free DevTools by Hexmos"
name: ip
path: /freedevtools/tldr/cisco-ios/ip
canonical: "https://hexmos.com/freedevtools/tldr/cisco-ios/ip/"
description: "Manage network configurations with Cisco IP Command. Configure IP addresses, DHCP, and domain names on Cisco devices. Free online tool, no registration required."
category: cisco-ios
keywords:
- cisco ios ip configuration
- cisco ip address assignment
- cisco dhcp configuration
- cisco domain name setup
- ios ip ssh version
- cisco interface ip address
- cisco ip routing configuration
- cisco network address translation
- cisco ip access lists
- cisco ip parameter map
features:
- Configure static IP addresses on interfaces
- Enable DHCP for dynamic IP address assignment
- Define a domain name for the device
- Set the SSH version for secure access
- Manage IP configurations on Cisco IOS devices
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ip

> Manage IP configurations.
> Accessed in configuration mode.
> More information: <https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr/command/ipaddr-cr-book.html>.

- Set the SSH version:

`ip ssh version {{2}}`

- Set the address of the device (This is done under `interface command`):

`ip address {{10.0.0.1}} {{255.255.255.0}}`

- Set the address to be determined with DHCP (This is done under `interface command`):

`ip address dhcp`

- Define a domain name:

`ip domain-name {{example.com}}`
