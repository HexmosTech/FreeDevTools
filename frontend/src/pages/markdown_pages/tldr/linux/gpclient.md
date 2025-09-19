---
title: "GlobalProtect VPN Client - Connect to VPN with gpclient | Online Free DevTools by Hexmos"
name: gpclient
path: /freedevtools/tldr/linux/gpclient
canonical: "https://hexmos.com/freedevtools/tldr/linux/gpclient/"
description: "Connect to GlobalProtect VPNs easily with the gpclient command-line tool. Manage your VPN connections, troubleshoot issues, and optimize your connection. Free online tool, no registration required."
category: linux
keywords:
  - globalprotect vpn client
  - gpclient linux
  - openconnect vpn
  - linux vpn connection
  - globalprotect command line
  - vpn connection manager
  - gpclient disconnect
  - gpclient connect
  - globalprotect troubleshooting
  - openconnect configuration
features:
  - Connect to GlobalProtect VPN servers using a portal URL.
  - Disconnect from currently active VPN sessions.
  - Launch a graphical user interface for managing VPN connections.
  - Bypass legacy OpenSSL renegotiation errors.
  - Ignore TLS errors for problematic connections.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gpclient

> Connect to a GlobalProtect VPN on Linux via OpenConnect.
> More information: <https://github.com/yuezk/GlobalProtect-openconnect>.

- Connect to a GlobalProtect VPN using a portal server:

`gpclient connect {{vpn_gateway_url}}`

- Disconnect from the currently connected VPN server:

`gpclient disconnect`

- Launch the graphical user interface (GUI) for VPN management:

`gpclient launch-gui`

- Use OpenSSL workaround to bypass legacy renegotiation errors:

`gpclient connect --fix-openssl {{vpn_gateway_url}}`

- Ignore TLS errors during connection:

`gpclient connect --ignore-tls-errors {{vpn_gateway_url}}`

- Display version:

`gpclient --version`

- Display help for any command:

`gpclient help {{command}}`
