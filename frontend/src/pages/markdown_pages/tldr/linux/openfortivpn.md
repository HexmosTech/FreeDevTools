---
title: "OpenFortivpn VPN Client - Connect Securely | Online Free DevTools by Hexmos"
name: openfortivpn
path: /freedevtools/tldr/linux/openfortivpn
canonical: "https://hexmos.com/freedevtools/tldr/linux/openfortivpn/"
description: "Connect securely with OpenFortivpn VPN client.  Manage VPN connections using username/password, config files, or host/port. Free online tool, no registration required."
category: linux
keywords:
  - openfortivpn vpn client
  - fortinet vpn connection
  - vpn configuration linux
  - openfortivpn command line
  - secure vpn connection
  - ppp ssl vpn client
  - openfortivpn username password
  - openfortivpn config file
  - openfortivpn host port
  - trusted certificate vpn
features:
  - Connect to Fortinet VPN using username and password.
  - Connect via a configuration file for advanced settings.
  - Specify host and port for direct connection.
  - Manage trusted certificates for enhanced security.
  - Establish secure VPN connections using PPP+SSL protocol.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# openfortivpn

> A VPN client, for Fortinet's proprietary PPP+SSL VPN solution.
> More information: <https://manned.org/openfortivpn>.

- Connect to a VPN with a username and password:

`openfortivpn {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}}`

- Connect to a VPN using a specific configuration file (defaults to `/etc/openfortivpn/config`):

`sudo openfortivpn {{[-c|--config]}} {{path/to/config}}`

- Connect to a VPN by specifying the host and port:

`openfortivpn {{host}}:{{port}}`

- Trust a given gateway by passing in its certificate's sha256 sum:

`openfortivpn --trusted-cert {{sha256_sum}}`
