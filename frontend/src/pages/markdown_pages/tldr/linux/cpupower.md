---
title: "CPU Power Control - Manage CPU Frequency | Online Free DevTools by Hexmos"
name: cpupower
path: /freedevtools/tldr/linux/cpupower
canonical: "https://hexmos.com/freedevtools/tldr/linux/cpupower/"
description: "Control CPU frequency and power settings with cpupower. Manage governors, view core information, and optimize performance. Free online tool, no registration required."
category: linux
keywords:
  - cpu frequency control
  - linux cpupower commands
  - cpu governor management
  - cpupower frequency-set
  - cpupower info command
  - linux cpu performance tuning
  - command line cpu control
  - systemd cpu management
  - cpupower frequency-info
  - cpu power saving options
features:
  - Set CPU frequency governors for power saving or performance.
  - View detailed information about CPU cores and frequencies.
  - Manage CPU frequencies on individual cores or all cores.
  - Analyze available CPU governors and their characteristics.
  - Display hardware frequency information in human-readable format.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cpupower

> Tools regarding CPU power and tuning options.
> More information: <https://manned.org/cpupower>.

- List CPUs:

`sudo cpupower {{[-c|--cpu]}} {{all}} info`

- Print information about all cores:

`sudo cpupower {{[-c|--cpu]}} {{all}} info`

- Set all CPUs to a power-saving frequency governor:

`sudo cpupower {{[-c|--cpu]}} {{all}} frequency-set --governor {{powersave}}`

- Print CPU 0's available frequency governors:

`sudo cpupower {{[-c|--cpu]}} {{0}} frequency-info {{[-g|--governors]}} | grep "analyzing\|governors"`

- Print CPU 4's frequency from the hardware, in a human-readable format:

`sudo cpupower {{[-c|--cpu]}} {{4}} frequency-info {{[-w|--hwfreq]}} {{[-m|--human]}}`
