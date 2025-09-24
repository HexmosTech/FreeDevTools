---
title: "Control Parallel Ports - tunelp Configuration | Online Free DevTools by Hexmos"
name: tunelp
path: /freedevtools/tldr/linux/tunelp
canonical: "https://hexmos.com/freedevtools/tldr/linux/tunelp/"
description: "Control parallel port devices with tunelp. Optimize device performance, troubleshoot issues, and manage IRQ settings. Free online tool, no registration required."
category: linux
keywords:
- parallel port control
- tunelp configuration
- linux device management
- printer port settings
- parallel port troubleshooting
- IRQ configuration linux
- device parameter setting
- lp device status
- parallel port reset
- util-linux tunelp
features:
- Check the status of parallel port devices
- Reset specified parallel port devices
- Configure IRQ settings for devices
- Control output attempts and sleep time
- Enable/disable abort on error functionality
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tunelp

> Set various parameters for parallel port devices for troubleshooting or for better performance.
> Part of `util-linux`.
> More information: <https://manned.org/tunelp>.

- Check the status of a parallel port device:

`tunelp {{[-s|--status]}} {{/dev/lp0}}`

- Reset a given parallel port:

`tunelp {{[-r|--reset]}} {{/dev/lp0}}`

- Use a given IRQ for a device, each one representing an interrupt line:

`tunelp {{[-i|--irq]}} 5 {{/dev/lp0}}`

- Try a given number of times to output a character to the printer before sleeping for a given time:

`tunelp {{[-c|--chars]}} {{times}} {{[-t|--time]}} {{time_in_centiseconds}} {{/dev/lp0}}`

- Enable or disable aborting on error (disabled by default):

`tunelp {{[-a|--abort]}} {{on|off}}`
