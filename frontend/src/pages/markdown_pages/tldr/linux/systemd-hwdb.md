---
title: "Hardware Database - Manage Hardware with systemd-hwdb | Online Free DevTools by Hexmos"
name: systemd-hwdb
path: /freedevtools/tldr/linux/systemd-hwdb
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-hwdb/"
description: "Manage hardware data with systemd-hwdb on Linux. Update udev hardware database and query device information efficiently. Free online tool, no registration required."
category: linux
keywords:
- udev hardware database
- systemd hardware management
- linux hardware information
- hardware modalias query
- systemd-hwdb update
- udev rule generation
- linux device enumeration
- hardware database query tool
- device configuration management
- systemd udevadm
features:
- Update the binary hardware database
- Query hardware information using modalias
- Perform strict updates with error checking
- Update database in specific root paths
- Manage hardware configurations through systemd
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# systemd-hwdb

> Hardware database management tool.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-hwdb.html>.

- Update the binary hardware database in `/etc/udev`:

`systemd-hwdb update`

- Query the hardware database and print the result for a specific modalias:

`systemd-hwdb query {{modalias}}`

- Update the binary hardware database, returning a non-zero exit value on any parsing error:

`systemd-hwdb {{[-s|--strict]}} update`

- Update the binary hardware database in `/usr/lib/udev`:

`systemd-hwdb --usr update`

- Update the binary hardware database in the specified root path:

`systemd-hwdb {{[-r|--root]}} {{path/to/root}} update`
