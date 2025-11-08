---
title: "Tailscale Control - Manage WireGuard Networks | Online Free DevTools by Hexmos"
name: tailscale
path: "/freedevtools/tldr/tailscale/tailscale/"
canonical: "https://hexmos.com/freedevtools/tldr/tailscale/tailscale/"
description: "Control WireGuard network connections with Tailscale. Configure private networks, check network conditions, and diagnose issues. Free online tool, no registration required."
category: common
keywords:
- tailscale network control
- wireguard network manager
- private network configuration
- secure network setup
- tailscale cli tools
- network diagnostic tool
- linux tailscale
- macos tailscale
- windows tailscale
- tailscale bug reporting
features:
- Connect to a Tailscale network
- Disconnect from a Tailscale network
- Check the status of connected devices
- Ping a peer node for network testing
- Analyze local network conditions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tailscale

> A private WireGuard network service.
> Some subcommands such as `up` have their own usage documentation.
> More information: <https://tailscale.com/kb/1080/cli>.

- Allow the current user to operate on the Tailscale daemon:

`sudo tailscale set --operator $USER`

- Connect to Tailscale:

`tailscale up`

- Disconnect from Tailscale:

`tailscale down`

- Display all devices connected to Tailscale (with their IP addresses):

`tailscale status`

- Ping a peer node at the Tailscale layer and display which route it took for each response:

`tailscale ping {{ip|hostname}}`

- Analyze the local network conditions and display the result:

`tailscale netcheck`

- Start a web server for controlling the Tailscale daemon:

`tailscale web`

- Display a shareable identifier to help diagnose issues:

`tailscale bugreport`
