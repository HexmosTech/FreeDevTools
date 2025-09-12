---
title: "nmcli Radio - Control Network Radios in Linux | Free DevTools"
name: nmcli-radio
path: /freedevtools/tldr/linux/nmcli-radio
canonical: "https://hexmos.com/freedevtools/tldr/linux/nmcli-radio/"
description: "Control network radio devices with nmcli radio. Easily manage Wi-Fi and WWAN radio states in Linux using NetworkManager. Free online tool, no registration required."
category: linux
keywords:
- nmcli radio control
- linux network manager
- wifi radio status
- wwan radio status
- command line network management
- linux network configuration
- enable wifi linux
- disable wifi linux
- nmcli wifi wwan
- radio switch management
features:
- Show the current status of Wi-Fi radio.
- Enable or disable Wi-Fi radio via command line.
- Display the status of WWAN (cellular) radio.
- Turn WWAN radio on or off using nmcli.
- Manage all radio switches (Wi-Fi and WWAN) simultaneously.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nmcli radio

> Show the status of radio switches or enable/disable them using NetworkManager.
> More information: <https://networkmanager.pages.freedesktop.org/NetworkManager/NetworkManager/nmcli.html#radio>.

- Show status of Wi-Fi:

`nmcli {{[r|radio]}} {{[w|wifi]}}`

- Turn Wi-Fi on or off:

`nmcli {{[r|radio]}} {{[w|wifi]}} {{on|off}}`

- Show status of WWAN:

`nmcli {{[r|radio]}} {{[ww|wwan]}}`

- Turn WWAN on or off:

`nmcli {{[r|radio]}} {{[ww|wwan]}} {{on|off}}`

- Show status of both switches:

`nmcli {{[r|radio]}}`

- Turn both switches on or off:

`nmcli {{[r|radio]}} {{[a|all]}} {{on|off}}`
