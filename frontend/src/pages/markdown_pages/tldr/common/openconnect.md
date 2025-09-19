---
title: "OpenConnect VPN - Connect to VPN Servers | Online Free DevTools by Hexmos"
name: openconnect
path: /freedevtools/tldr/common/openconnect
canonical: "https://hexmos.com/freedevtools/tldr/common/openconnect/"
description: "Connect to VPN servers securely with OpenConnect VPN client. Establish secure connections, manage configurations, and authenticate with certificates. Free online tool, no registration required."
category: common
keywords:
- openconnect vpn client
- vpn connection manager
- secure vpn connection
- cisco anyconnect client
- linux vpn client
- command line vpn
- vpn configuration file
- ssl certificate authentication
- vpn background process
- terminate vpn connection
features:
- Establish secure VPN connections to servers
- Run VPN connections in the background
- Terminate existing VPN connections gracefully
- Read connection options from configuration files
- Authenticate using specific SSL client certificates
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# openconnect

> A VPN client, for Cisco AnyConnect VPNs and others.
> More information: <https://www.infradead.org/openconnect/manual.html>.

- Connect to a server:

`openconnect {{vpn.example.org}}`

- Connect to a server, forking into the background:

`openconnect --background {{vpn.example.org}}`

- Terminate the connection that is running in the background:

`killall -SIGINT openconnect`

- Connect to a server, reading options from a configuration file:

`openconnect --config={{path/to/file}} {{vpn.example.org}}`

- Connect to a server and authenticate with a specific SSL client certificate:

`openconnect --certificate={{path/to/file}} {{vpn.example.org}}`
