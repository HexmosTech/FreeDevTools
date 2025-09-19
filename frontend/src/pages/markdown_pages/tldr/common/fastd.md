---
title: "Fastd - Control VPN Daemon | Online Free DevTools by Hexmos"
name: fastd
path: /freedevtools/tldr/common/fastd
canonical: "https://hexmos.com/freedevtools/tldr/common/fastd/"
description: "Control your VPN daemon with Fastd, supporting various encryption methods. Securely manage network connections with a lightweight, configurable VPN tool. Free online tool, no registration required."
category: common
keywords:
- VPN daemon control
- Linux VPN configuration
- Fastd configuration manager
- Layer 2 VPN setup
- Layer 3 VPN setup
- Freifunk network management
- Encryption protocol manager
- Network tunnel configuration
- Keypair generation tool
- Fastd network security
features:
- Start VPN with custom configuration
- Verify VPN configuration files
- Generate new encryption keypairs
- Display public key from private key
- Configure Layer 3 VPN with custom MTU
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fastd

> VPN daemon.
> Works on Layer 2 or Layer 3, supports different encryption methods, used by Freifunk.
> See also: `ivpn`, `mozillavpn`, `mullvad`, `warp-cli`.
> More information: <https://fastd.readthedocs.io/en/stable/>.

- Start `fastd` with a specific configuration file:

`fastd {{[-c|--config]}} {{path/to/fastd.conf}}`

- Start a Layer 3 VPN with an MTU of 1400, loading the rest of the configuration parameters from a file:

`fastd {{[-m|--mode]}} {{tap}} {{[-M|--mtu]}} {{1400}} {{[-c|--config]}} {{path/to/fastd.conf}}`

- Validate a configuration file:

`fastd --verify-config {{[-c|--config]}} {{path/to/fastd.conf}}`

- Generate a new keypair:

`fastd --generate-key`

- Show the public key to a private key in a configuration file:

`fastd --show-key {{[-c|--config]}} {{path/to/fastd.conf}}`

- Show the current version:

`fastd {{[-v|--version]}}`
