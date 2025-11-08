---
title: "HDD Temperature - Display Drive Temps | Online Free DevTools by Hexmos"
name: hddtemp
path: "/freedevtools/tldr/linux/hddtemp/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/hddtemp/"
description: "Display HDD temperature with hddtemp, a S.M.A.R.T. monitoring tool for Linux. Monitor hard drive health and prevent overheating. Free online tool, no registration required."
category: linux
keywords:
- linux hdd temperature
- hddtemp command
- smart monitoring linux
- hard drive temperature sensor
- sata temperature monitoring
- disk temperature linux
- linux drive health
- temperature monitoring tool linux
- smartctl alternative
- command line hddtemp
features:
- Display temperature for specific drives.
- Log drive temperatures to syslog.
- Print numeric temperature value.
- Define the unit used for temperature display.
- Wake up ATA drive before reading temperature.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hddtemp

> Display temperature of HDD via S.M.A.R.T.
> More information: <https://manned.org/hddtemp>.

- Display temperature of a specific drive:

`hddtemp {{type}}:{{/dev/sdX}}`

- Display temperature of a SATA drive assigned to `sda`:

`hddtemp SATA:/dev/sda`

- Log temperatures to syslog every `n` seconds:

`hddtemp {{[-S|--syslog]}} {{nseconds}} {{type}}:{{/dev/sdX}}`

- Print only numeric value of temperature without unit:

`hddtemp {{[-n|--numeric]}} {{type}}:{{/dev/sdX}}`

- Define the unit used to denote temperature:

`hddtemp {{[-u|--unit]}} {{C|F}} {{type}}:{{/dev/sdX}}`

- Wake ATA drive before attempting to read temperature:

`hddtemp {{[-w|--wake-up]}} {{type}}:{{/dev/sdX}}`

- Enter debug mode to show S.M.A.R.T. fields and their values:

`hddtemp {{[-D|--debug]}} {{type}}:{{/dev/sdX}}`

- Suppress compatibility check for drive types:

`hddtemp {{[-q|--quiet]}} {{type}}:{{/dev/sdX}}`
