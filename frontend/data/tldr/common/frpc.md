---
title: "Frpc - Proxy Connections Securely | Online Free DevTools by Hexmos"
name: frpc
path: "/freedevtools/tldr/common/frpc/"
canonical: "https://hexmos.com/freedevtools/tldr/common/frpc/"
description: "Proxy connections securely with Frpc, enabling remote access and port forwarding through Frps. Free online tool, no registration required."
category: common
keywords:
- frpc proxy
- frpc port forwarding
- frps connection
- secure tunnel
- remote access server
- frp client
- configuration file validation
- linux proxy
- windows proxy
- toml configuration
features:
- Establish secure tunnels to remote servers
- Forward local ports via frps
- Validate configuration files for errors
- Generate shell autocompletion scripts
- Display version information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# frpc

> Connect to a `frps` server to start proxying connections on the current host.
> Part of `frp`.
> More information: <https://github.com/fatedier/frp>.

- Start the service, using the default configuration file (assumed to be `frps.ini` in the current directory):

`frpc`

- Start the service, using the newer TOML configuration file (`frps.toml` instead of `frps.ini`) in the current directory:

`frpc {{[-c|--config]}} ./frps.toml`

- Start the service, using a specific configuration file:

`frpc {{[-c|--config]}} {{path/to/file}}`

- Check if the configuration file is valid:

`frpc verify {{[-c|--config]}} {{path/to/file}}`

- Print autocompletion setup script for Bash, fish, PowerShell, or Zsh:

`frpc completion {{bash|fish|powershell|zsh}}`

- Display version:

`frpc {{[-v|--version]}}`
