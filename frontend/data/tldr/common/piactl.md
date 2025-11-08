---
title: "PIA Control - Manage Private Internet Access via Command Line | Online Free DevTools by Hexmos"
name: piactl
path: "/freedevtools/tldr/common/piactl/"
canonical: "https://hexmos.com/freedevtools/tldr/common/piactl/"
description: "Control Private Internet Access VPN with PIACTL. Securely manage connections, regions, and background settings via the command line. Free online tool, no registration required."
category: common
keywords:
- piactl command
- private internet access control
- vpn command line
- piactl linux
- piactl macos
- piactl windows
- pia vpn cli
- piactl connect
- piactl region selection
- vpn configuration tool
features:
- Connect and disconnect from Private Internet Access VPN
- Manage VPN server region selection
- Enable or disable the background daemon
- Authenticate with a login file
- Display available VPN regions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# piactl

> The tool for Private Internet Access, a commercial VPN provider.
> More information: <https://helpdesk.privateinternetaccess.com/kb/articles/pia-desktop-command-line-interface-part-1>.

- Log in to Private Internet Access:

`piactl login {{path/to/login_file}}`

- Connect to Private Internet Access:

`piactl connect`

- Disconnect from Private Internet Access:

`piactl disconnect`

- Enable or disable the Private Internet Access daemon in the background:

`piactl background {{enable|disable}}`

- List all available VPN regions:

`piactl get regions`

- Display the current VPN region:

`piactl get region`

- Set your VPN region:

`piactl set region {{region}}`

- Log out of Private Internet Access:

`piactl logout`
