---
title: "Tailscale SSH - Secure Shell Access | Free DevTools"
name: tailscale-ssh
path: /freedevtools/tldr/tailscale/tailscale-ssh
canonical: "https://hexmos.com/freedevtools/tldr/tailscale/tailscale-ssh/"
description: "Secure shell access with Tailscale SSH. Easily connect to your Tailscale machines using SSH, streamlining remote access. Free online tool, no registration required."
category: common
keywords:
- tailscale ssh access
- secure shell tailscale
- remote access linux
- tailscale network ssh
- ssh client tailscale
- tailscale ssh configuration
- tailscale secure connection
- tailscale linux ssh
- private network ssh
- tailscale zero trust ssh
features:
- Securely SSH to Tailscale connected machines
- Configure SSH access via Tailscale up command
- Access machines without public IP addresses
- Manage SSH connections through Tailscale network
- Authenticate using Tailscale's built-in security
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tailscale ssh

> SSH to a Tailscale machine (Linux Only).
> More information: <https://tailscale.com/kb/1193/tailscale-ssh>.

- Advertise/Disable SSH on the host:

`tailscale up --ssh={{true|false}}`

- SSH to a specific host which has Tailscale-SSH enabled:

`tailscale ssh {{username}}@{{host}}`
