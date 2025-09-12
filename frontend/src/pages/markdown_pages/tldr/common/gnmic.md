---
title: "Manage gNMI Network Configuration | Free DevTools"
name: gnmic
path: /freedevtools/tldr/common/gnmic
canonical: "https://hexmos.com/freedevtools/tldr/common/gnmic/"
description: "Manage gNMI network configurations with gnmic. View operational data and request device capabilities easily. Free online tool, no registration required."
category: common
keywords:
- gNMI client
- gNMI network management
- network configuration management
- telemetry data collection
- network device monitoring
- gNMI path configuration
- gNMI subscribe updates
- gNMI get request
- gNMI set request
- gNMI capabilities discovery
features:
- Request device capabilities via gNMI
- Get snapshot of device state at a specific path
- Update device state at a specific path using gNMI
- Subscribe to target state updates at a specific path
- Manage network device configurations using gNMI
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gnmic

> A gNMI client.
> Manage gNMI network device configuration and view operational data.
> More information: <https://gnmic.kmrd.dev>.

- Request device capabilities:

`gnmic {{[-a|--address]}} {{ip:port}} capabilities`

- Provide a username and password to fetch device capabilities:

`gnmic {{[-a|--address]}} {{ip:port}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} capabilities`

- Get a snapshot of the device state at a specific path:

`gnmic {{[-a|--address]}} {{ip:port}} get --path {{path}}`

- Update device state at a specific path:

`gnmic {{[-a|--address]}} {{ip:port}} set --update-path {{path}} --update-value {{value}}`

- Subscribe to target state updates under the subtree at a specific path:

`gnmic {{[-a|--address]}} {{ip:port}} subscribe --path {{path}}`
