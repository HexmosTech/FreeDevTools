---
title: "Tailscale File - Send Files Across Tailscale | Online Free DevTools by Hexmos"
name: tailscale-file
path: /freedevtools/tldr/tailscale/tailscale-file
canonical: "https://hexmos.com/freedevtools/tldr/tailscale/tailscale-file/"
description: "Send files quickly with Tailscale File, a secure file transfer tool. Easily transfer files between devices on your Tailscale network. Free online tool, no registration required."
category: common
keywords:
- tailscale file transfer
- tailscale secure file
- tailscale network file sharing
- tailscale file send
- tailscale file receive
- linux file transfer
- macos file transfer
- windows file transfer
- command line file transfer
- secure network file copy
features:
- Send files to specific Tailscale nodes
- Receive files into designated directories
- Transfer files securely across your network
- Copy files using hostname or IP address
- Manage file transfers via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tailscale file

> Send files across connected devices on a Tailscale network.
> It currently does not support sending files to devices owned by other users even on the same Tailscale network.
> More information: <https://tailscale.com/kb/1106/taildrop/>.

- Send a file to a specific node:

`tailscale file cp {{path/to/file}} {{hostname|ip}}:`

- Store files that were sent to the current node into a specific directory:

`tailscale file get {{path/to/directory}}`
