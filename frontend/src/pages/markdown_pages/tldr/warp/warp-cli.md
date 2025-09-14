---
title: "Control WARP Connections - Manage Cloudflare WARP with CLI | Free DevTools"
name: warp-cli
path: /freedevtools/tldr/warp/warp-cli
canonical: "https://hexmos.com/freedevtools/tldr/warp/warp-cli/"
description: "Control WARP connections with warp-cli. Easily connect, disconnect, and switch modes for Cloudflare's WARP VPN service. Free online tool, no registration required."
category: common
keywords:
- WARP connection control
- Cloudflare WARP CLI
- VPN command-line interface
- WARP network manager
- Linux WARP client
- macOS WARP client
- WARP service manager
- WARP configuration tool
- Secure tunnel manager
- WARP mode switcher
features:
- Connect to the Cloudflare WARP service
- Disconnect from the Cloudflare WARP service
- Switch between different WARP connection modes
- Display the current WARP connection status
- Register a device for WARP usage
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# warp-cli

> Connect, disconnect and switch modes of a connection to Cloudflare's WARP service.
> WARP is a VPN that encrypts traffic for privacy, security, and speed.
> See also: `fastd`, `ivpn`, `mozillavpn`, `mullvad`.
> More information: <https://developers.cloudflare.com/warp-client/>.

- Register the current device to WARP (must be run before first connection):

`warp-cli registration new`

- Connect to WARP:

`warp-cli connect`

- Disconnect from WARP:

`warp-cli disconnect`

- Display the WARP connection status:

`warp-cli status`

- Switch to a specific mode:

`warp-cli set-mode {{mode}}`

- Display help:

`warp-cli help`

- Display help for a subcommand:

`warp-cli help {{subcommand}}`
