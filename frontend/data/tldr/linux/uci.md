---
title: "UCI - Manage OpenWrt Configuration | Online Free DevTools by Hexmos"
name: uci
path: "/freedevtools/tldr/linux/uci/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/uci/"
description: "Manage OpenWrt configuration files with UCI. Configure network settings, system parameters, and application configurations using command line. Free online tool, no registration required."
category: linux
keywords:
- OpenWrt configuration manager
- UCI command line interface
- Linux network configuration
- OpenWrt system settings
- UCI configuration editor
- Linux UCI utility
- OpenWrt UCI commands
- UCI configuration tool
- OpenWrt command line configuration
- Linux system configuration
features:
- Fetch configuration values from OpenWrt
- List all configuration options and values
- Set specific configuration values
- Add new configuration sections
- Delete sections or values from configuration
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# uci

> Manage OpenWrt configuration files.
> More information: <https://openwrt.org/docs/techref/uci>.

- Fetch a value:

`uci get {{network.lan.ipaddr}}`

- List all options and their values:

`uci show {{network}}`

- Set a value:

`uci set {{config}}.{{section}}.{{option}}={{value}}`

- Add a new section:

`uci add {{config}} {{section}}`

- Delete a section or value:

`uci delete {{config}}.{{section}}.{{option}}`

- Commit changes:

`uci commit {{config}}`

- Discard uncommitted changes:

`uci revert {{config}}`

- Display help:

`uci`
