---
title: "Systemd Analyze - Debug System Manager | Online Free DevTools by Hexmos"
name: systemd-analyze
path: /freedevtools/tldr/linux/systemd-analyze
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-analyze/"
description: "Debug system performance with Systemd Analyze. Analyze boot process, service initialization, and unit dependencies. Free online tool, no registration required."
category: linux
keywords:
- linux system manager analysis
- system boot time analyzer
- systemd service debugger
- unit initialization timing
- critical chain analysis linux
- system security score checker
- udev rules viewer linux
- systemd performance monitor
- linux service dependency graph
- system startup analysis tool
features:
- Analyze system boot process timing
- List units ordered by initialization time
- Print time-critical unit dependency chain
- Create SVG plots of service startup times
- Plot dependency graphs and convert to SVG
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# systemd-analyze

> Analyze and debug system manager.
> Show timing details about the boot process of units (services, mount points, devices, sockets).
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-analyze.html>.

- Print the last system startup time:

`systemd-analyze`

- List all running units, ordered by the time they took to initialize:

`systemd-analyze blame`

- Print a tree of the time-critical chain of units:

`systemd-analyze critical-chain`

- Create an SVG file showing when each system service started, highlighting the time that they spent on initialization:

`systemd-analyze plot > {{path/to/file.svg}}`

- Plot a dependency graph and convert it to an SVG file:

`systemd-analyze dot | dot -T {{svg}} > {{path/to/file.svg}}`

- Show security scores of running units:

`systemd-analyze security`

- View all udev rules together:

`systemd-analyze cat-config udev/rules.d`
