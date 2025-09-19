---
title: "Radeontop - Control AMD GPU Usage | Online Free DevTools by Hexmos"
name: radeontop
path: /freedevtools/tldr/linux/radeontop
canonical: "https://hexmos.com/freedevtools/tldr/linux/radeontop/"
description: "Control AMD GPU usage with Radeontop. Monitor performance metrics and identify bottlenecks in real-time. Free online tool, no registration required."
category: linux
keywords:
  - AMD GPU utilization
  - GPU performance monitoring
  - Linux GPU stats
  - Radeon GPU analysis
  - System resource monitor
  - Command line GPU tool
  - Open source GPU utility
  - Real-time GPU data
  - AMD driver statistics
  - Linux performance tuning
features:
  - Display real-time AMD GPU utilization
  - Enable color-coded output for easy visualization
  - Select a specific GPU by bus number
  - Customize display refresh rate
  - Monitor performance metrics in a terminal
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# radeontop

> Show utilization of AMD GPUs.
> May require root privileges depending on your system.
> More information: <https://github.com/clbr/radeontop>.

- Show the utilization of the default AMD GPU:

`radeontop`

- Enable colored output:

`radeontop --color`

- Select a specific GPU (the bus number is the first number in the output of `lspci`):

`radeontop --bus {{bus_number}}`

- Specify the display refresh rate (higher means more GPU overhead):

`radeontop --ticks {{samples_per_second}}`
