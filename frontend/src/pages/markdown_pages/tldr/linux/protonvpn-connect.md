---
title: "ProtonVPN Connect - Control VPN Connection | Online Free DevTools by Hexmos"
name: protonvpn-connect
path: /freedevtools/tldr/linux/protonvpn-connect
canonical: "https://hexmos.com/freedevtools/tldr/linux/protonvpn-connect/"
description: "Control ProtonVPN connections with ProtonVPN Connect. Secure your internet traffic and bypass censorship using command line. Free online tool, no registration required."
category: linux
keywords:
  - protonvpn connect
  - vpn connect command
  - linux vpn client
  - command line vpn
  - secure vpn connection
  - protonvpn terminal
  - network privacy tool
  - censorship bypass
  - fastest vpn server
  - tor vpn connection
features:
  - Connect to ProtonVPN interactively
  - Connect to the fastest available server
  - Connect using a specific server and protocol
  - Connect to a random server with a specified protocol
  - Connect through the fastest Tor-supporting server
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# protonvpn connect

> Connect to ProtonVPN.
> More information: <https://github.com/Rafficer/linux-cli-community>.

- Connect to ProtonVPN interactively:

`protonvpn {{[c|connect]}}`

- Connect to ProtonVPN using the fastest server available:

`protonvpn {{[c|connect]}} {{[-f|--fastest]}}`

- Connect to ProtonVPN using a specific server with a specific protocol:

`protonvpn {{[c|connect]}} {{server_name}} -p {{udp|tcp}}`

- Connect to ProtonVPN using a random server with a specific protocol:

`protonvpn {{[c|connect]}} {{[-r|--random]}} -p {{udp|tcp}}`

- Connect to ProtonVPN using the fastest Tor-supporting server:

`protonvpn {{[c|connect]}} --tor`

- Display help:

`protonvpn {{[c|connect]}} --help`
