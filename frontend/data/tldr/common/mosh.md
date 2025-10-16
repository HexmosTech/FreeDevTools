---
title: "Mosh Shell - Connect Securely to Remote Servers | Online Free DevTools by Hexmos"
name: mosh
path: "/freedevtools/tldr/common/mosh/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mosh/"
description: "Connect securely with Mosh Shell, a robust SSH replacement. Persist connections, even while roaming. Free online tool, no registration required."
category: common
keywords:
- mosh shell
- persistent connection shell
- remote access tool
- mobile shell
- ssh alternative
- network roaming connection
- secure shell connection
- linux remote access
- macos remote access
- command line connection
features:
- Establish persistent SSH-like connections across networks
- Maintain connections during network changes and roaming
- Connect to remote servers using username and host
- Specify custom SSH configurations for connections
- Execute commands remotely via a persistent connection
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mosh

> Mobile Shell (`mosh`) is a robust and responsive replacement for SSH.
> `mosh` persists connections to remote servers while roaming between networks.
> More information: <https://manned.org/mosh>.

- Connect to a remote server:

`mosh {{username}}@{{remote_host}}`

- Connect to a remote server with a specific identity (private key):

`mosh --ssh="ssh -i {{path/to/key_file}}" {{username}}@{{remote_host}}`

- Connect to a remote server using a specific port:

`mosh --ssh="ssh -p {{2222}}" {{username}}@{{remote_host}}`

- Run a command on a remote server:

`mosh {{remote_host}} -- {{command -with -flags}}`

- Select Mosh UDP port (useful when `remote_host` is behind a NAT):

`mosh -p {{124}} {{username}}@{{remote_host}}`

- Usage when `mosh-server` binary is outside standard path:

`mosh --server={{path/to/mosh-server}} {{remote_host}}`
