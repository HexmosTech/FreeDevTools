---
title: "Port Forwarding - Configure Netsh Interface Portproxy | Free DevTools"
name: netsh-interface-portproxy
path: /freedevtools/tldr/windows/netsh-interface-portproxy
canonical: "https://hexmos.com/freedevtools/tldr/windows/netsh-interface-portproxy/"
description: "Configure port forwarding with Netsh Interface Portproxy.  Manage IPv4 connections and display network status. Free online tool, no registration required."
category: windows
keywords:
- Netsh port forwarding
- Interface portproxy configuration
- Windows port forwarding
- IPv4 port forwarding
- Network address translation
- Port proxy management
- Netsh command line
- Windows networking
- TCP port forwarding
- Port redirection
features:
- Configure IPv4 port forwarding rules
- Display current port forwarding setup
- Delete existing port forwarding configurations
- Manage network interface settings via command line
- Show help for netsh interface portproxy commands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# netsh interface portproxy

> Configure and display the status of various network components.
> More information: <https://learn.microsoft.com/windows-server/networking/technologies/netsh/netsh-interface-portproxy>.

- Display the current port forwarding setup:

`netsh interface portproxy show all`

- Set up IPv4 port forwarding (run in elevated console):

`netsh interface portproxy add v4tov4 listenaddress={{192.168.0.1}} listenport={{8080}} connectaddress={{10.0.0.1}} connectport={{80}}`

- Remove IPv4 port forwarding (run in elevated console):

`netsh interface portproxy delete v4tov4 listenaddress={{192.168.0.1}} listenport={{8080}}`

- Display help:

`netsh interface portproxy`
