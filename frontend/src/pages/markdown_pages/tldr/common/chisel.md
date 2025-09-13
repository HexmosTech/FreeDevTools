---
title: "Create Secure Tunnels - Chisel | Free DevTools"
name: chisel
path: "/freedevtools/tldr/common/chisel"
canonical: "https://hexmos.com/freedevtools/tldr/common/chisel/"
description: "Create secure tunnels with Chisel, transporting data over HTTP and securing it with SSH. Free online tool, no registration required. Ideal for port forwarding."
category: common
keywords:
- secure tunnel creation
- chisel port forwarding
- http tunnel over ssh
- tcp tunnel tool
- udp tunnel utility
- ssh tunneling software
- reverse ssh tunnel
- socks5 proxy tunneling
- chisel server configuration
- chisel client connection
features:
- Create TCP/UDP tunnels over HTTP.
- Secure tunnels with SSH encryption.
- Configure reverse tunnels for secure access.
- Enable SOCKS5 proxy for anonymized connections.
- Authenticate connections with username and password.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# chisel

> Create TCP/UDP tunnels, transported over HTTP, secured via SSH.
> Includes both client and server in the same `chisel` executable.
> More information: <https://github.com/jpillora/chisel>.

- Run a Chisel server:

`chisel server`

- Run a Chisel server listening to a specific port:

`chisel server {{[-p|--port]}} {{server_port}}`

- Run a chisel server that accepts authenticated connections using username and password:

`chisel server --auth {{username}}:{{password}}`

- Connect to a Chisel server and tunnel a specific port to a remote server and port:

`chisel client {{server_ip}}:{{server_port}} {{local_port}}:{{remote_server}}:{{remote_port}}`

- Connect to a Chisel server and tunnel a specific host and port to a remote server and port:

`chisel client {{server_ip}}:{{server_port}} {{local_host}}:{{local_port}}:{{remote_server}}:{{remote_port}}`

- Connect to a Chisel server using username and password authentication:

`chisel client --auth {{username}}:{{password}} {{server_ip}}:{{server_port}} {{local_port}}:{{remote_server}}:{{remote_port}}`

- Initialize a Chisel server in reverse mode on a specific port, also enabling SOCKS5 proxy (on port 1080) functionality:

`chisel server {{[-p|--port]}} {{server_port}} --reverse --socks5`

- Connect to a Chisel server at specific IP and port, creating a reverse tunnel mapped to a local SOCKS proxy:

`chisel client {{server_ip}}:{{server_port}} R:socks`
