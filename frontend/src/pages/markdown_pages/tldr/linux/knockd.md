---
title: "Control Knockd - Secure Ports with Port Knocking | Free DevTools"
name: knockd
path: /freedevtools/tldr/linux/knockd
canonical: "https://hexmos.com/freedevtools/tldr/linux/knockd/"
description: "Control knockd security with Port Knocking. Configure knockd to listen for port sequences and execute custom scripts. Free online tool, no registration required."
category: linux
keywords:
  - port knocking
  - knockd configuration
  - port security
  - linux port knocking
  - daemon configuration
  - network security
  - port sequence listener
  - command line security
  - knockd daemon
  - secure shell access
features:
  - Start knockd as a system daemon
  - Specify a custom configuration file
  - Listen for port knocking sequences
  - Execute scripts upon successful knock
  - Enhance system security with port authentication
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# knockd

> Port knocking daemon to listen for port knocking and execute scripts.
> More information: <https://manned.org/knockd>.

- Start knockd system daemon:

`knockd {{[-d|--daemon]}}`

- Use specified configuration file for knockd:

`knockd {{[-c|--config]}} {{path/to/file}}.configuration`
