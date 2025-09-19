---
title: "Control AdGuardHome - Block Ads Network-Wide | Online Free DevTools by Hexmos"
name: adguardhome
path: /freedevtools/tldr/common/adguardhome
canonical: "https://hexmos.com/freedevtools/tldr/common/adguardhome/"
description: "Control ads network-wide with AdGuardHome. Block ads and tracking at the DNS level. Free online tool, no registration required."
category: common
keywords:
- AdGuardHome network ad blocker
- network-wide ad blocking software
- DNS-level ad filtering
- ad and tracking protection
- AdGuardHome configuration management
- AdGuardHome service management
- AdGuardHome YAML configuration
- AdGuardHome command line tool
- privacy protection software
- AdGuardHome Linux
features:
- Block ads and tracking across your entire network.
- Configure AdGuardHome with a custom YAML configuration file.
- Manage AdGuardHome as a system service (install, start, stop, restart).
- Specify a custom work directory for data storage.
- Reload the configuration without restarting the service.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# AdGuardHome

> A network-wide software for blocking ads & tracking.
> More information: <https://github.com/AdguardTeam/AdGuardHome>.

- Run AdGuard Home:

`AdGuardHome`

- Specify a configuration file:

`AdGuardHome --config {{path/to/AdGuardHome.yaml}}`

- Store the data in a specific work directory:

`AdGuardHome --work-dir {{path/to/directory}}`

- Install or uninstall AdGuard Home as a service:

`AdGuardHome --service {{install|uninstall}}`

- Start the AdGuard Home service:

`AdGuardHome --service start`

- Reload the configuration for the AdGuard Home service:

`AdGuardHome --service reload`

- Stop or restart the AdGuard Home service:

`AdGuardHome --service {{stop|restart}}`
