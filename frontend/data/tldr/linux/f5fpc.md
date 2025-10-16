---
title: "F5fpc - Control SSL VPN Connections | Online Free DevTools by Hexmos"
name: f5fpc
path: "/freedevtools/tldr/linux/f5fpc/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/f5fpc/"
description: "Control SSL VPN connections efficiently with F5fpc. Manage, start, stop, and get status updates for your VPN on Linux. Free online tool, no registration required."
category: linux
keywords:
- linux ssl vpn client
- f5fpc vpn control
- ssl vpn connection manager
- linux f5fpc command
- big-ip edge client linux
- vpn connection status check
- f5fpc command line tool
- secure vpn linux
- start vpn connection
- stop vpn connection
features:
- Establish secure SSL VPN connections on Linux
- Connect to specific VPN hosts
- Authenticate with a username (password prompted)
- Display the current VPN connection status
- Terminate existing VPN connections
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# f5fpc

> A proprietary commercial SSL VPN client by BIG-IP Edge.
> More information: <https://my.f5.com/manage/s/article/K47922841>.

- Open a new VPN connection:

`sudo f5fpc --start`

- Open a new VPN connection to a specific host:

`sudo f5fpc --start --host {{host.example.com}}`

- Specify a username (user will be prompted for a password):

`sudo f5fpc --start --host {{host.example.com}} --username {{user}}`

- Show the current VPN status:

`sudo f5fpc --info`

- Shutdown the VPN connection:

`sudo f5fpc --stop`
