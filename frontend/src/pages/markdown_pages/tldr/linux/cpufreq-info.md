---
title: "CPU Frequency Info - Check CPU Speed | Free DevTools"
name: cpufreq-info
path: /freedevtools/tldr/linux/cpufreq-info
canonical: "https://hexmos.com/freedevtools/tldr/linux/cpufreq-info/"
description: "Check CPU frequency information with cpufreq-info.  Get details on CPU speed, governors, and limits. Free online tool, no registration required."
category: linux
keywords:
  - cpu frequency information
  - linux cpu frequency
  - cpufreq-info command
  - cpu speed checker
  - cpu governor control
  - cpu frequency limits
  - system performance monitoring
  - command line cpu info
  - linux system tools
  - cpu frequency analysis
features:
  - Display current CPU frequency for all CPUs.
  - Show minimum and maximum CPU frequency limits.
  - List available CPU frequency governors.
  - View CPU frequency policies and settings.
  - Display CPU frequency in human-readable format.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cpufreq-info

> Show CPU frequency information.
> More information: <https://manned.org/cpufreq-info>.

- Show CPU frequency information for all CPUs:

`cpufreq-info`

- Show CPU frequency information for the specified CPU:

`cpufreq-info {{[-c|--cpu]}} {{cpu_number}}`

- Show the allowed minimum and maximum CPU frequency:

`cpufreq-info {{[-l|--hwlimits]}}`

- Show the current minimum and maximum CPU frequency and policy in table format:

`cpufreq-info {{[-o|--proc]}}`

- Show available CPU frequency policies:

`cpufreq-info {{[-g|--governors]}}`

- Show current CPU work frequency in a human-readable format, according to the cpufreq kernel module:

`cpufreq-info {{[-f|--freq]}} {{[-m|--human]}}`

- Show current CPU work frequency in a human-readable format, by reading it from hardware (only available to root):

`sudo cpufreq-info {{[-w|--hwfreq]}} {{[-m|--human]}}`
