---
title: "Control CEC Devices with cec-ctl | Online Free DevTools by Hexmos"
name: cec-ctl
path: /freedevtools/tldr/linux/cec-ctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/cec-ctl/"
description: "Control kernel CEC devices with cec-ctl. Monitor CEC traffic, list devices, and show CEC topology. Free online tool, no registration required."
category: linux
keywords:
  - cec control linux
  - cec monitor command
  - cec list devices
  - cec topology viewer
  - cec-ctl linux command
  - kernel cec control
  - cec device management
  - linux cec tools
  - cec-ctl troubleshooting
  - command line cec
features:
  - List all connected CEC devices
  - Monitor real-time CEC communication
  - Display the CEC device topology
  - Control CEC devices via command line
  - Troubleshoot CEC connectivity issues
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cec-ctl

> Control kernel CEC devices.
> See also: `cec-client`.
> More information: <https://manned.org/cec-ctl>.

- List CEC devices:

`cec-ctl --list-devices`

- Monitor CEC traffic:

`sudo cec-ctl {{[-m|--monitor]}}`

- Show CEC topology:

`cec-ctl {{[-S|--show-topology]}}`
