---
title: "Tailscale Up - Connect to Tailscale Network | Online Free DevTools by Hexmos"
name: tailscale-up
path: /freedevtools/tldr/tailscale/tailscale-up
canonical: "https://hexmos.com/freedevtools/tldr/tailscale/tailscale-up/"
description: "Connect to Tailscale network with Tailscale Up. Securely extend your private network using subnet router configurations. Free online tool, no registration required."
category: common
keywords:
- Tailscale connect
- WireGuard VPN
- network configuration
- subnet router setup
- exit node configuration
- secure network access
- CLI configuration tool
- Tailscale Linux
- Tailscale MacOS
- Tailscale command
features:
- Connect to the Tailscale network.
- Configure exit nodes for internet traffic.
- Block incoming connections with shields-up.
- Set up subnet routing for Tailscale.
- Reset settings to default values.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tailscale up

> Connect the client to the Tailscale network.
> Note: Run `sudo tailscale set --operator $USER` to allow the current user to run these commands.
> All options described here can be changed later using `tailscale set --option argument`. Use `--option=false` to disable options that don't require arguments.
> More information: <https://tailscale.com/kb/1080/cli/#up>.

- Connect to Tailscale:

`tailscale up`

- Connect and offer the current machine to be an exit node for internet traffic:

`tailscale up --advertise-exit-node`

- Connect using a specific node for internet traffic:

`tailscale up --exit-node {{exit_node_ip}}`

- Connect and block incoming connections to the current node:

`tailscale up --shields-up`

- Connect and don't accept DNS configuration from the admin panel (defaults to `true`):

`tailscale up --accept-dns=false`

- Connect and configure Tailscale as a subnet router:

`tailscale up --advertise-routes {{10.0.0.0/24,10.0.1.0/24,...}}`

- Connect and accept subnet routes from Tailscale:

`tailscale up --accept-routes`

- Reset unspecified settings to their default values and connect:

`tailscale up --reset`
