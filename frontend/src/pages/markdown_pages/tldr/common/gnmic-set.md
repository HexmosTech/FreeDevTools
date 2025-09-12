---
title: "GNMI Set - Modify Network Configuration | Free DevTools"
name: gnmic-set
path: /freedevtools/tldr/common/gnmic-set
canonical: "https://hexmos.com/freedevtools/tldr/common/gnmic-set/"
description: "Modify network configurations with GNMI Set. Update, replace, and delete network device settings using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- gnmi network configuration
- modify network settings
- gnmi set command
- network device configuration
- update network path
- replace network value
- delete network node
- gnmi configuration management
- network configuration tool
- command line configuration
features:
- Update network device configuration values
- Replace network device configuration values
- Delete network nodes on network devices
- Set configuration parameters via command line
- Read configuration from JSON file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gnmic set

> Modify gnmi network device configuration.
> More information: <https://gnmic.kmrd.dev/cmd/set>.

- Update the value of a path:

`gnmic {{[-a|--address]}} {{ip:port}} set --update-path {{path}} --update-value {{value}}`

- Update the value of a path to match the contents of a JSON file:

`gnmic {{[-a|--address]}} {{ip:port}} set --update-path {{path}} --update-file {{filepath}}`

- Replace the value of a path to match the contents of a JSON file:

`gnmic {{[-a|--address]}} {{ip:port}} set --replace-path {{path}} --replace-file {{filepath}}`

- Delete the node at a given path:

`gnmic {{[-a|--address]}} {{ip:port}} set --delete {{path}}`
