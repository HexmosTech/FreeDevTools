---
title: "OpenVPN3 Control - Manage VPN Sessions | Free DevTools"
name: openvpn3
path: /freedevtools/tldr/unknown/openvpn3
canonical: "https://hexmos.com/freedevtools/tldr/unknown/openvpn3/"
description: "Control VPN sessions with OpenVPN3. Manage configurations, start/stop sessions, and list imported VPN settings. Free online tool, no registration required."
category: unknown
keywords:
- openvpn3 session management
- openvpn3 configuration import
- openvpn3 linux client
- openvpn3 command line
- vpn session control
- openvpn linux configuration
- vpn client manager
- linux openvpn control
- openvpn3 network utility
- openvpn3 cli tool
features:
- Start new VPN sessions from the command line
- List currently established OpenVPN3 sessions
- Disconnect existing VPN sessions by configuration
- Import OpenVPN configuration files for quick access
- List all imported OpenVPN configurations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# openvpn3

> OpenVPN 3 Linux client.
> More information: <https://community.openvpn.net/openvpn/wiki/OpenVPN3Linux>.

- Start a new VPN session:

`openvpn3 session-start {{[-c|--config]}} {{path/to/config.conf}}`

- List established sessions:

`openvpn3 sessions-list`

- Disconnect the currently established session started with given configuration:

`openvpn3 session-manage {{[-c|--config]}} {{path/to/config.conf}} {{[-D|--disconnect]}}`

- Import VPN configuration:

`openvpn3 config-import {{[-c|--config]}} {{path/to/config.conf}}`

- List imported configurations:

`openvpn3 configs-list`
