---
title: "nmcli Connection - Manage Network Connections | Free DevTools"
name: nmcli-connection
path: /freedevtools/tldr/unknown/nmcli-connection
canonical: "https://hexmos.com/freedevtools/tldr/unknown/nmcli-connection/"
description: "Manage network connections with nmcli Connection, a powerful command-line tool. Easily activate, deactivate, and create network profiles. Free online tool, no registration required."
category: unknown
keywords:
- network connection manager
- nmcli connection configuration
- network profile management
- linux network settings
- command line network tool
- network interface control
- connection activation
- connection deactivation
- vpn connection import
- static ip configuration
features:
- List all NetworkManager connections
- Activate or deactivate network connections
- Create auto-configured dual-stack connections
- Configure static IPv4 or IPv6 network connections
- Import OpenVPN configurations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nmcli connection

> Manage connections with NetworkManager.
> More information: <https://networkmanager.pages.freedesktop.org/NetworkManager/NetworkManager/nmcli.html#connection>.

- List all NetworkManager connections (shows name, UUID, type and device):

`nmcli {{[c|connection]}}`

- Activate a connection:

`nmcli {{[c|connection]}} {{[u|up]}} {{uuid}}`

- Deactivate a connection:

`nmcli {{[c|connection]}} {{[d|down]}} {{uuid}}`

- Create an auto-configured dual stack connection:

`nmcli {{[c|connection]}} {{[a|add]}} ifname {{interface_name}} type {{ethernet}} ipv4.method {{auto}} ipv6.method {{auto}}`

- Create a static IPv6-only connection:

`nmcli {{[c|connection]}} {{[a|add]}} ifname {{interface_name}} type {{ethernet}} ip6 {{2001:db8::2/64}} gw6 {{2001:db8::1}} ipv6.dns {{2001:db8::1}} ipv4.method {{ignore}}`

- Create a static IPv4-only connection:

`nmcli {{[c|connection]}} {{[a|add]}} ifname {{interface_name}} type {{ethernet}} ip4 {{10.0.0.7/8}} gw4 {{10.0.0.1}} ipv4.dns {{10.0.0.1}} ipv6.method {{ignore}}`

- Create a VPN connection using OpenVPN from an OVPN file:

`nmcli {{[c|connection]}} {{[i|import]}} type {{openvpn}} file {{path/to/vpn_config.ovpn}}`
