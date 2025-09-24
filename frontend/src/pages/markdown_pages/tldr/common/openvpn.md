---
title: "OpenVPN - Create Secure VPN Tunnels | Online Free DevTools by Hexmos"
name: openvpn
path: /freedevtools/tldr/common/openvpn
canonical: "https://hexmos.com/freedevtools/tldr/common/openvpn/"
description: "Create secure VPN tunnels with OpenVPN. Configure client-server and peer-to-peer VPN connections easily using command line. Free online tool, no registration required."
category: common
keywords:
- OpenVPN client configuration
- VPN tunnel creation
- Secure network connection
- Linux VPN configuration
- Command-line VPN tool
- OpenVPN server setup
- Static key VPN
- VPN ifconfig configuration
- Network tunnel management
- OpenVPN peer-to-peer
features:
- Establish client-server VPN connections using configuration files.
- Create peer-to-peer VPN tunnels with optional static key encryption.
- Configure network interfaces and IP addresses for VPN tunnels.
- Generate cryptographic keys for secure VPN communication.
- Manage OpenVPN connections through command-line interface.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# openvpn

> OpenVPN client and daemon binary.
> More information: <https://openvpn.net/community-docs/community-articles/openvpn-2-6-manual.html>.

- Connect to server using a configuration file:

`sudo openvpn {{path/to/client.conf}}`

- Try to set up an insecure peer-to-peer tunnel on bob.example.com host:

`sudo openvpn --remote {{alice.example.com}} --dev {{tun1}} --ifconfig {{10.4.0.1}} {{10.4.0.2}}`

- Connect to the awaiting bob.example.com host without encryption:

`sudo openvpn --remote {{bob.example.com}} --dev {{tun1}} --ifconfig {{10.4.0.2}} {{10.4.0.1}}`

- Create a cryptographic key and save it to file:

`openvpn --genkey secret {{path/to/key}}`

- Try to set up a peer-to-peer tunnel on bob.example.com host with a static key:

`sudo openvpn --remote {{alice.example.com}} --dev {{tun1}} --ifconfig {{10.4.0.1}} {{10.4.0.2}} --secret {{path/to/key}}`

- Connect to the awaiting bob.example.com host with the same static key as on bob.example.com:

`sudo openvpn --remote {{bob.example.com}} --dev {{tun1}} --ifconfig {{10.4.0.2}} {{10.4.0.1}} --secret {{path/to/key}}`
