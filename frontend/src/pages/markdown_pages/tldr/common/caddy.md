---
title: "Caddy Server - Control Web Server with Automatic HTTPS | Online Free DevTools by Hexmos"
name: caddy
path: /freedevtools/tldr/common/caddy
canonical: "https://hexmos.com/freedevtools/tldr/common/caddy/"
description: "Control your web server easily with Caddy Server. Manage HTTPS certificates automatically and reverse proxy configurations effortlessly. Free online tool, no registration required."
category: common
keywords:
- web server control
- automatic https server
- caddy configuration
- reverse proxy server
- golang web server
- caddyfile editor
- file server caddy
- linux caddy server
- macos caddy server
- windows caddy server
features:
- Start Caddy server in the foreground
- Configure Caddy server with a Caddyfile
- Run a file server with browsable interface
- Create reverse proxy configurations quickly
- Stop background Caddy server processes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# caddy

> An enterprise-ready open source web server with automatic HTTPS, written in Go.
> More information: <https://caddyserver.com>.

- Start Caddy in the foreground:

`caddy run`

- Start Caddy with the specified Caddyfile:

`caddy run --config {{path/to/Caddyfile}}`

- Start Caddy in the background:

`caddy start`

- Stop a background Caddy process:

`caddy stop`

- Run a simple file server on the specified port with a browsable interface:

`caddy file-server --listen :{{8000}} --browse`

- Run a reverse proxy server:

`caddy reverse-proxy --from :{{80}} --to localhost:{{8000}}`
