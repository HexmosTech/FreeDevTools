---
title: "Mullvad VPN - Control Privacy with CLI | Free DevTools"
name: mullvad
path: /freedevtools/tldr/common/mullvad
canonical: "https://hexmos.com/freedevtools/tldr/common/mullvad/"
description: "Control online privacy with Mullvad VPN CLI. Secure your connection, manage account, and configure server locations. Free online tool, no registration required."
category: common
keywords:
- mullvad vpn command line
- vpn configuration cli
- privacy control linux
- secure connection macos
- mullvad account management
- vpn server location selector
- internet security command
- network anonymity tool
- linux vpn client
- privacy enhancement cli
features:
- Connect to Mullvad VPN servers
- Manage Mullvad account details
- Configure server locations by city
- Enable or disable LAN access
- Check VPN connection status
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mullvad

> CLI client for Mullvad VPN.
> See also: `fastd`, `ivpn`, `mozillavpn`, `warp-cli`.
> More information: <https://mullvad.net/en/help/how-use-mullvad-cli>.

- Link your Mullvad account with the specified account number:

`mullvad account set {{account_number}}`

- Enable LAN access while VPN is on:

`mullvad lan set allow`

- Select a server in a specific city:

`mullvad relay set location {{se}} {{mma}}`

- Select a specific server:

`mullvad relay set location {{se-mma-wg-001}}`

- Establish the VPN tunnel:

`mullvad connect`

- Check status of VPN tunnel:

`mullvad status`

- Check the account expiration date and obtain the device name:

`mullvad account get`
