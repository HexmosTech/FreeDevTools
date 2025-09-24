---
title: "Bore - Expose Local Port | Online Free DevTools by Hexmos"
name: bore
path: /freedevtools/tldr/linux/bore
canonical: "https://hexmos.com/freedevtools/tldr/linux/bore/"
description: "Expose local ports with Bore. Create secure tunnels to a remote server and share your localhost. Free online tool, no registration required."
category: linux
keywords:
  - bore tunnel
  - reverse proxy
  - local port forwarding
  - tcp tunnel
  - ssh alternative
  - bore server
  - expose localhost
  - remote access
  - port forwarding
  - bore client
features:
  - Expose a local port to a remote Bore server.
  - Start a Bore server instance.
  - Create secure tunnels to a remote host.
  - Forward traffic from a remote server to a local port.
  - Run a Bore server.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bore

> Start a local proxy to a remote server using Bore.
> Some subcommands such as `local` have their own usage documentation.
> More information: <https://github.com/ekzhang/bore#detailed-usage>.

- Expose a local port to a remote Bore server:

`bore local {{[-t|--to]}} {{remote_server_address}} {{local_port}}`

- Start a Bore server:

`bore server`

- Display help:

`bore {{[-h|--help]}}`
