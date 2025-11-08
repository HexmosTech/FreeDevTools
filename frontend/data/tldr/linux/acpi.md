---
title: "Control ACPI - Monitor System Power and Thermal Status | Online Free DevTools by Hexmos"
name: acpi
path: "/freedevtools/tldr/linux/acpi/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/acpi/"
description: "Monitor system power status with ACPI on Linux. Check battery levels, thermal conditions, and cooling devices easily. Free online tool, no registration required."
category: linux
keywords:
- linux power status
- linux thermal monitor
- acpi battery info
- acpi thermal data
- system health check linux
- power management linux
- battery status linux
- thermal information linux
- acpi command line
- cooling devices linux
features:
- Show battery charge percentage
- Display system thermal readings
- List available cooling devices
- Extract power data from /proc
- Present information in Fahrenheit
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# acpi

> Shows battery status or thermal information.
> More information: <https://manned.org/acpi>.

- Show battery information:

`acpi`

- Show thermal information:

`acpi {{[-t|--thermal]}}`

- Show cooling device information:

`acpi {{[-c|--cooling]}}`

- Show thermal information in Fahrenheit:

`acpi {{[-tf|--thermal --fahrenheit]}}`

- Show all information:

`acpi {{[-V|--everything]}}`

- Extract information from `/proc` instead of `/sys`:

`acpi {{[-p|--proc]}}`
