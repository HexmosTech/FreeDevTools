---
title: "Powertop - Optimize Battery Usage | Online Free DevTools by Hexmos"
name: powertop
path: /freedevtools/tldr/linux/powertop
canonical: "https://hexmos.com/freedevtools/tldr/linux/powertop/"
description: "Optimize battery usage with Powertop, a power analysis tool for Linux. Extend battery life and reduce power consumption. Free online tool, no registration required."
category: linux
keywords:
- powertop usage
- linux power optimization
- battery usage analysis
- powertop calibration
- linux battery life
- power consumption report
- powertop auto tune
- linux system tuning
- powertop reporting
- battery power management
features:
- Calibrate power usage measurements
- Generate HTML power usage reports
- Tune system to optimal power settings
- Report power consumption over a specific time
- Analyze and identify power-hungry processes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# powertop

> Optimize battery power usage.
> More information: <https://github.com/fenrus75/powertop>.

- Calibrate power usage measurements:

`sudo powertop --calibrate`

- Generate HTML power usage report in the current directory:

`sudo powertop --html={{power_report.html}}`

- Tune to optimal settings:

`sudo powertop --auto-tune`

- Generate a report for a specified number of seconds (instead of 20 by default):

`sudo powertop --time={{5}}`
