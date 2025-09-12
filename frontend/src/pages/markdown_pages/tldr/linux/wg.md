---
title: "WireGuard Control - Manage VPN Interfaces | Free DevTools"
name: wg
path: /freedevtools/tldr/linux/wg
canonical: "https://hexmos.com/freedevtools/tldr/linux/wg/"
description: "Manage WireGuard VPN interfaces with wg. Generate keys and view configurations securely. Free online tool, no registration required."
category: linux
keywords:
- wireguard configuration
- vpn interface manager
- linux network configuration
- wg key generator
- wireguard status check
- wireguard private key
- wireguard public key
- secure network configuration
- linux vpn tool
- wireguard command line
features:
- Check the status of WireGuard interfaces
- Generate new private keys
- Generate public keys from private keys
- Display the current configuration of an interface
- Manage WireGuard VPN connections
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wg

> Manage the configuration of WireGuard interfaces.
> More information: <https://www.wireguard.com/quickstart/>.

- Check status of currently active interfaces:

`sudo wg`

- Generate a new private key:

`wg genkey`

- Generate a public key from a private key:

`wg pubkey < {{path/to/private_key}} > {{path/to/public_key}}`

- Generate a public and private key:

`wg genkey | tee {{path/to/private_key}} | wg pubkey > {{path/to/public_key}}`

- Show the current configuration of a wireguard interface:

`sudo wg showconf {{wg0}}`
