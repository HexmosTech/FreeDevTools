---
title: "Expose Localhost - Tunnel Local Port | Online Free DevTools by Hexmos"
name: lt
path: "/freedevtools/tldr/common/lt"
canonical: "https://hexmos.com/freedevtools/tldr/common/lt/"
description: "Tunnel your localhost with Localtunnel, exposing your local port for easy testing and sharing. Share local websites and APIs instantly. Free online tool, no registration required."
category: common
keywords:
- localhost tunnel
- expose localhost
- local port forwarding
- local development sharing
- test local website online
- remote access localhost
- localtunnel alternative
- share localhost API
- ngrok alternative
- local development server access
features:
- Expose local ports to the internet.
- Request specific subdomains for tunnels.
- Print detailed request information for debugging.
- Open the tunnel URL directly in your browser.
- Specify the upstream server for forwarding.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lt

> Localtunnel exposes your localhost to the world for easy testing and sharing.
> More information: <https://github.com/localtunnel/localtunnel>.

- Start tunnel from a specific port:

`lt {{[-p|--port]}} {{8000}}`

- Specify the upstream server doing the forwarding:

`lt {{[-p|--port]}} {{8000}} {{[-h|--host]}} {{host}}`

- Request a specific subdomain:

`lt {{[-p|--port]}} {{8000}} {{[-s|--subdomain]}} {{subdomain}}`

- Print basic request info:

`lt {{[-p|--port]}} {{8000}} --print-requests`

- Open the tunnel URL in the default web browser:

`lt {{[-p|--port]}} {{8000}} {{[-o|--open]}}`
