---
title: "PiVPN OpenVPN Setup - Manage VPN Connections | Online Free DevTools by Hexmos"
name: pivpn
path: /freedevtools/tldr/linux/pivpn
canonical: "https://hexmos.com/freedevtools/tldr/linux/pivpn/"
description: "Manage OpenVPN connections easily with PiVPN.  Securely add, list, and revoke client devices. Free online tool, no registration required."
category: linux
keywords:
  - OpenVPN server setup
  - Linux VPN manager
  - Raspberry Pi VPN
  - pivpn command line
  - OpenVPN client management
  - secure VPN configuration
  - network security tool
  - pivpn commands
  - linux openvpn setup
  - vpn server administration
features:
  - Add new OpenVPN client devices securely.
  - List all configured OpenVPN client devices.
  - Display statistics of currently connected clients.
  - Revoke access for specific client devices.
  - Uninstall PiVPN completely from the system.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pivpn

> Easy security-hardened OpenVPN setup and manager.
> Originally designed for the Raspberry Pi, but works on other Linux devices too.
> More information: <https://docs.pivpn.io/openvpn/>.

- Add a new client device:

`sudo pivpn add`

- List all client devices:

`sudo pivpn list`

- List currently connected devices and their statistics:

`sudo pivpn clients`

- Revoke a previously authenticated device:

`sudo pivpn revoke`

- Uninstall PiVPN:

`sudo pivpn uninstall`
