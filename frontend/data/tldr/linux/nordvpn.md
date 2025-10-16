---
title: "NordVPN CLI - Manage VPN Connections | Online Free DevTools by Hexmos"
name: nordvpn
path: "/freedevtools/tldr/linux/nordvpn/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/nordvpn/"
description: "Manage VPN connections easily with the NordVPN command-line interface.  Connect to servers worldwide, check status, and configure autoconnect. Free online tool, no registration required for CLI usage."
category: linux
keywords:
  - vpn command line
  - nordvpn connection
  - vpn server management
  - vpn cli linux
  - vpn status check
  - nordvpn login cli
  - vpn autoconnect
  - secure vpn connection
  - command line vpn
  - nordvpn cli commands
features:
  - Connect to NordVPN servers worldwide.
  - Check your current VPN connection status.
  - Log in to your NordVPN account via the command line.
  - List available countries and cities for connection.
  - Configure autoconnect settings for seamless VPN access.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nordvpn

> Command-line interface for NordVPN.
> More information: <https://support.nordvpn.com/hc/en-us/articles/20196094470929-Installing-NordVPN-on-Linux-distributions>.

- Interactively log into a NordVPN account:

`nordvpn login`

- Display the connection status:

`nordvpn status`

- Connect to the nearest NordVPN server:

`nordvpn {{[c|connect]}}`

- List all available countries:

`nordvpn countries`

- Connect to a NordVPN server in a specific country:

`nordvpn {{[c|connect]}} {{Germany}}`

- Connect to a NordVPN server in a specific country and city:

`nordvpn {{[c|connect]}} {{Germany}} {{Berlin}}`

- Set autoconnect option:

`nordvpn {{[s|set]}} autoconnect on`
