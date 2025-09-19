---
title: "Create Cloudflare Tunnel - Secure Connections | Online Free DevTools by Hexmos"
name: cloudflared
path: /freedevtools/tldr/common/cloudflared
canonical: "https://hexmos.com/freedevtools/tldr/common/cloudflared/"
description: "Create secure connections with Cloudflare Tunnel. Establish persistent connections to the Cloudflare network using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- cloudflare tunnel
- cloudflared tunnel
- cloudflare argo tunnel
- secure tunnel
- persistent connection
- cloudflare proxy
- cloudflare origin
- command-line tunneling
- cloudflare access
- cloudflare firewall
features:
- Establish persistent connections to Cloudflare's network.
- Create named tunnels for organized management.
- Route traffic from localhost to Cloudflare hosts.
- Bypass TLS verification for local servers (with caution).
- Log activity for debugging and auditing.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cloudflared

> Create a persistent connection to the Cloudflare network.
> More information: <https://developers.cloudflare.com/argo-tunnel/>.

- Authenticate and associate the connection to a domain in the Cloudflare account:

`cloudflared tunnel login`

- Create a tunnel with a specific name:

`cloudflared tunnel create {{name}}`

- Establish a tunnel to a host in Cloudflare from the local server:

`cloudflared tunnel --hostname {{hostname}} localhost:{{port_number}}`

- Establish a tunnel to a host in Cloudflare from the local server, without verifying the local server's certificate:

`cloudflared tunnel --hostname {{hostname}} localhost:{{port_number}} --no-tls-verify`

- Save logs to a file:

`cloudflared tunnel --hostname {{hostname}} http://localhost:{{port_number}} --loglevel {{panic|fatal|error|warn|info|debug}} --logfile {{path/to/file}}`

- Install cloudflared as a system service:

`cloudflared service install`
