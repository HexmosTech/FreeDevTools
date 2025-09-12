---
title: "Turbostat - Control Processor Stats | Free DevTools"
name: turbostat
path: /freedevtools/tldr/linux/turbostat
canonical: "https://hexmos.com/freedevtools/tldr/linux/turbostat/"
description: "Control processor performance stats with Turbostat. Monitor frequency, temperature, and power usage on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- processor statistics linux
- linux cpu monitoring
- turbostat frequency
- turbostat power usage
- linux system performance
- cpu temperature linux
- system diagnostics linux
- processor idle stats
- linux performance analysis
- turbostat command
features:
- Monitor CPU frequency in real-time
- Report processor temperature accurately
- Track CPU power consumption effectively
- Display processor idle states efficiently
- Customize output with specific CPU information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# turbostat

> Report processor topology, frequency, temperature, power, and idle statistics.
> More information: <https://manned.org/turbostat.8>.

- Display statistics every 5 seconds:

`sudo turbostat`

- Display statistics every specified amount of seconds:

`sudo turbostat {{[-i|--interval]}} {{n_seconds}}`

- Do not decode and print the system configuration header information:

`sudo turbostat --quiet`

- Display useful information about CPU every 1 second, without header information:

`sudo turbostat --quiet {{[-i|--interval]}} 1 --cpu 0-{{CPU_thread_count}} --show "PkgWatt","Busy%","Core","CoreTmp","Thermal"`

- Display help:

`turbostat --help`
