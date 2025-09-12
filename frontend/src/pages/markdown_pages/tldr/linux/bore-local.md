---
title: "Bore Local - Expose Local Ports | Free DevTools"
name: bore-local
path: /freedevtools/tldr/linux/bore-local
canonical: "https://hexmos.com/freedevtools/tldr/linux/bore-local/"
description: "Expose local ports securely with Bore Local. Easily create tunnels to remote servers for development and testing. Free online tool, no registration required."
category: linux
keywords:
- bore local proxy
- linux port forwarding
- tcp tunnel
- ssh tunnel alternative
- reverse proxy linux
- expose localhost linux
- remote server access linux
- secure tunnel linux
- bore tunnel
- local port exposure
features:
- Expose local ports to a remote server.
- Specify a local host to expose.
- Define a specific remote server port.
- Use a secret key for authentication.
- Display help information for the command.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bore local

> Start a local proxy to a remote server using Bore.
> More information: <https://github.com/ekzhang/bore#detailed-usage>.

- Expose a local port to a remote Bore server:

`bore local {{[-t|--to]}} {{remote_server_address}} {{local_port}}`

- Expose a specific local host instead of `localhost`:

`bore local {{[-l|--local-host]}} {{host}} {{[-t|--to]}} {{remote_server_address}} {{local_port}}`

- Specify a remote server port explicitly:

`bore local {{[-t|--to]}} {{remote_server_address}} {{[-p|--port]}} {{remote_port}} {{local_port}}`

- Use a secret for authentication:

`bore local {{[-t|--to]}} {{remote_server_address}} {{[-s|--secret]}} {{your_secret}} {{local_port}}`

- Display help:

`bore local {{[-h|--help]}}`
