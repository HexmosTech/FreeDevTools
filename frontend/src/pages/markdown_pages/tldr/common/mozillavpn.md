---
title: "Control MozillaVPN - Secure Your Connection | Online Free DevTools by Hexmos"
name: mozillavpn
path: /freedevtools/tldr/common/mozillavpn
canonical: "https://hexmos.com/freedevtools/tldr/common/mozillavpn/"
description: "Secure your connection with MozillaVPN using command line. Manage your VPN, connect to servers, and protect your privacy. Free online tool, no registration required."
category: common
keywords:
- mozilla vpn control
- vpn command line
- secure connection linux
- mozilla vpn macos
- network security command
- vpn server selection
- privacy protection vpn
- mozilla vpn configuration
- network tunnel management
- vpn server listing
features:
- Activate a MozillaVPN connection from the command line.
- Select a specific server for VPN connection.
- Display current connection status of the VPN.
- Deactivate the active VPN connection.
- List available VPN servers for connection.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mozillavpn

> A Virtual Private Network from the makers of Firefox.
> See also: `fastd`, `ivpn`, `mullvad`, `warp-cli`.
> More information: <https://github.com/mozilla-mobile/mozilla-vpn-client/wiki/Command-line-interface>.

- Log in with an interactive prompt:

`mozillavpn login`

- Connect to Mozilla VPN:

`mozillavpn activate`

- Display the connection status:

`mozillavpn status`

- List available servers:

`mozillavpn servers`

- Select a specific server:

`mozillavpn select {{server_name}}`

- Disconnect from Mozilla VPN:

`mozillavpn deactivate`

- Log out:

`mozillavpn logout`

- Display help for a subcommand:

`mozillavpn {{subcommand}} --help`
