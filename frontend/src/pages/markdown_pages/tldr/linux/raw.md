---
title: "Raw Bind - Control Device Binding on Linux | Free DevTools"
name: raw
path: /freedevtools/tldr/linux/raw
canonical: "https://hexmos.com/freedevtools/tldr/linux/raw/"
description: "Control raw device bindings with raw on Linux. Query existing bindings and manage raw character devices. Free online tool, no registration required."
category: linux
keywords:
- raw device binding
- linux raw character device
- block device binding
- raw device query
- character device control
- linux device manager
- raw command
- device mapping linux
- raw device tools
- linux command line tools
features:
- Bind a raw character device to a block device
- Query an existing raw device binding
- List all bound raw devices
- Manage device mappings
- Control raw device access
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# raw

> Bind a Unix raw character device.
> More information: <https://manned.org/raw.8>.

- Bind a raw character device to a block device:

`raw /dev/raw/raw{{1}} {{/dev/block_device}}`

- Query an existing binding instead of setting a new one:

`raw /dev/raw/raw{{1}}`

- Query all bound raw devices:

`raw {{[-qa|--query --all]}}`
