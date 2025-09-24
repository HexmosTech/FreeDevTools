---
title: "Liquid Cooler Control - Manage Cooling Systems | Online Free DevTools by Hexmos"
name: liquidctl
path: /freedevtools/tldr/common/liquidctl
canonical: "https://hexmos.com/freedevtools/tldr/common/liquidctl/"
description: "Control liquid coolers with liquidctl. Monitor temperatures, adjust fan speeds, and optimize cooling performance. Free online tool, no registration required."
category: common
keywords:
- liquid cooler control
- cooler fan speed control
- liquid cooling monitor
- system temperature control
- liquidctl configuration
- linux cooler control
- windows cooler control
- fan control cli
- system cooling automation
- liquid cooler optimization
features:
- List available liquid cooling devices
- Initialize and configure cooling systems
- Print the status of connected liquid coolers
- Set custom fan speeds based on temperature
- Automate liquid cooler adjustments
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# liquidctl

> Control liquid coolers.
> More information: <https://github.com/liquidctl/liquidctl>.

- List available devices:

`liquidctl list`

- Initialize all supported devices:

`sudo liquidctl initialize all`

- Print the status of available liquid coolers:

`liquidctl status`

- Match a string in product name to pick a device and set its fan speed to 0% at 20°C, 50% at 50°C and 100% at 70°C:

`liquidctl --match {{string}} set fan speed {{20 0 50 50 70 100}}`
