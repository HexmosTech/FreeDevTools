---
title: "Reverse Proxy - Setup Frps Server | Online Free DevTools by Hexmos"
name: frps
path: /freedevtools/tldr/common/frps
canonical: "https://hexmos.com/freedevtools/tldr/common/frps/"
description: "Setup reverse proxy servers quickly with Frps. Configure server settings, verify configurations, and manage network traffic securely. Free online tool, no registration required."
category: common
keywords:
- reverse proxy server
- frps configuration
- frp reverse proxy
- network tunneling
- port forwarding
- server management
- frps linux
- frps windows
- frps macos
- reverse proxy configuration file
features:
- Start Frps server with default configuration.
- Specify custom configuration file path.
- Verify configuration file for validity.
- Generate shell completion scripts.
- Display Frps version information.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# frps

> Quickly set up a reverse proxy service.
> Part of `frp`.
> More information: <https://github.com/fatedier/frp>.

- Start the service, using the default configuration file (assumed to be `frps.ini` in the current directory):

`frps`

- Start the service, using the newer TOML configuration file (`frps.toml` instead of `frps.ini`) in the current directory:

`frps {{[-c|--config]}} ./frps.toml`

- Start the service, using a specified configuration file:

`frps {{[-c|--config]}} {{path/to/file}}`

- Check if the configuration file is valid:

`frps verify {{[-c|--config]}} {{path/to/file}}`

- Print autocompletion setup script for Bash, fish, PowerShell, or Zsh:

`frps completion {{bash|fish|powershell|zsh}}`

- Display version:

`frps {{[-v|--version]}}`
