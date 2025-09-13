---
title: "CPU Frequency Control - Modify CPU Settings | Free DevTools"
name: cpufreq-set
path: /freedevtools/tldr/linux/cpufreq-set
canonical: "https://hexmos.com/freedevtools/tldr/linux/cpufreq-set/"
description: "Control CPU frequency settings with cpufreq-set. Optimize CPU performance, adjust frequency limits and governor. Free online tool, no registration required."
category: linux
keywords:
  - CPU frequency control
  - CPU governor settings
  - Linux CPU configuration
  - cpufreq-set command
  - CPU performance tuning
  - CPU frequency scaling
  - Frequency management linux
  - CPU userspace control
  - Processor frequency adjustment
  - Linux power management
features:
  - Set CPU frequency policy
  - Adjust minimum CPU frequency
  - Adjust maximum CPU frequency
  - Configure CPU work frequency
  - Control CPU governor settings
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cpufreq-set

> A tool to modify CPU frequency settings.
> The frequency value should range between the output of command `cpufreq-info -l`.
> More information: <https://manned.org/cpufreq-set>.

- Set the CPU frequency policy of CPU 1 to "userspace":

`sudo cpufreq-set {{[-c|--cpu]}} {{1}} {{[-g|--governor]}} {{userspace}}`

- Set the current minimum CPU frequency of CPU 1:

`sudo cpufreq-set {{[-c|--cpu]}} {{1}} {{[-d|--min]}} {{min_frequency}}`

- Set the current maximum CPU frequency of CPU 1:

`sudo cpufreq-set {{[-c|--cpu]}} {{1}} {{[-u|--max]}} {{max_frequency}}`

- Set the current work frequency of CPU 1:

`sudo cpufreq-set {{[-c|--cpu]}} {{1}} {{[-f|--freq]}} {{work_frequency}}`
