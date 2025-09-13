---
title: "ProtonVPN Client - Control VPN Connections | Free DevTools"
name: protonvpn
path: /freedevtools/tldr/linux/protonvpn
canonical: "https://hexmos.com/freedevtools/tldr/linux/protonvpn/"
description: "Control VPN connections with ProtonVPN Client. Manage connection status, reconnect to servers, and refresh configurations. Free online tool, no registration required."
category: linux
keywords:
  - protonvpn client
  - vpn control
  - linux protonvpn
  - command line vpn
  - protonvpn connect
  - vpn configuration
  - openvpn refresh
  - vpn status
  - protonvpn reconnect
  - command line protonvpn client
features:
  - Initialize ProtonVPN profiles for quick setup.
  - Connect to VPN servers interactively via command line.
  - Display real-time connection status information.
  - Disconnect from ProtonVPN servers to end sessions.
  - Reconnect to the last used server for convenience.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# protonvpn

> Unofficial third-party ProtonVPN client.
> See also: `protonvpn-connect`.
> More information: <https://github.com/Rafficer/linux-cli-community>.

- Initialize ProtonVPN profile:

`protonvpn init`

- Connect to ProtonVPN interactively:

`protonvpn {{c|connect}}`

- Display connection status:

`protonvpn {{s|status}}`

- Disconnect from ProtonVPN:

`protonvpn {{d|disconnect}}`

- Reconnect or connect to the last server used:

`protonvpn {{r|reconnect}}`

- Refresh OpenVPN configuration and server data:

`protonvpn refresh`

- Display help for a subcommand:

`protonvpn {{subcommand}} --help`
