---
title: "Ngrok Tunnel - Create Secure Tunnels | Online Free DevTools by Hexmos"
name: ngrok
path: "/freedevtools/tldr/common/ngrok/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ngrok/"
description: "Create secure tunnels with Ngrok, reverse proxy for exposing local servers. Quickly expose web services and TCP ports. Free online tool, no registration required."
category: common
keywords:
- ngrok tunnel
- secure tunnel
- reverse proxy
- local server exposure
- localhost tunnel
- tcp tunnel
- tls tunnel
- ngrok https
- ngrok tcp
- ngrok tls
features:
- Expose local HTTP services to the internet.
- Create secure tunnels for TCP traffic.
- Securely expose HTTPS servers running locally.
- Specify custom hostnames for TLS tunnels.
- Create tunnels on specified ports.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ngrok

> Reverse proxy that creates a secure tunnel from a public endpoint to a locally running web service.
> More information: <https://ngrok.com>.

- Expose a local HTTP service on a given port:

`ngrok http {{80}}`

- Expose a local HTTP service on a specific host:

`ngrok http {{foo.dev}}:{{80}}`

- Expose a local HTTPS server:

`ngrok http https://localhost`

- Expose TCP traffic on a given port:

`ngrok tcp {{22}}`

- Expose TLS traffic for a specific host and port:

`ngrok tls -hostname={{example.com}} {{443}}`
