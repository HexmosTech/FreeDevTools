---
title: "Powerstat - Measure Power Consumption | Free DevTools"
name: powerstat
path: /freedevtools/tldr/linux/powerstat
canonical: "https://hexmos.com/freedevtools/tldr/linux/powerstat/"
description: "Measure power consumption with Powerstat. Analyze battery usage and system power states. Free online tool, no registration required."
category: linux
keywords:
  - power consumption measurement
  - battery usage analysis
  - system power states
  - power monitoring linux
  - rapl power analysis
  - intel rapl interface
  - power statistics tool
  - energy consumption analysis
  - linux power profiling
  - powerstat command
features:
  - Measure power consumption over specified intervals
  - Display a histogram of power measurements
  - Utilize Intel's RAPL interface for power analysis
  - Enable comprehensive statistics gathering
  - Analyze battery usage and system power behavior
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# powerstat

> Measures the power consumption of a computer that has a battery power source or supports the RAPL interface.
> More information: <https://manned.org/powerstat>.

- Measure power with the default of 10 samples with an interval of 10 seconds:

`powerstat`

- Measure power with custom number of samples and interval duration:

`powerstat {{interval}} {{number_of_samples}}`

- Measure power using Intel's RAPL interface:

`powerstat -R {{interval}} {{number_of_samples}}`

- Show a histogram of the power measurements:

`powerstat -H {{interval}} {{number_of_samples}}`

- Enable all statistics gathering options:

`powerstat -a {{interval}} {{number_of_samples}}`
