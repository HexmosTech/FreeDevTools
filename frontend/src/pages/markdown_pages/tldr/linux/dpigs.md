---
title: "DPigs - Analyze Disk Usage on Linux | Online Free DevTools by Hexmos"
name: dpigs
path: /freedevtools/tldr/linux/dpigs
canonical: "https://hexmos.com/freedevtools/tldr/linux/dpigs/"
description: "Analyze disk usage effectively with DPigs on Linux systems. Identify large packages consuming space and optimize your system. Free online tool, no registration required."
category: linux
keywords:
- linux disk usage analyzer
- apt package size analysis
- large package identifier linux
- dpkg disk space usage
- linux system optimization
- deb package size finder
- package management linux
- disk space analyzer linux
- debian package size checker
- linux large package list
features:
- Display the largest installed packages
- Analyze disk space consumed by packages
- Show source package sizes of installed binaries
- Output package sizes in human-readable format
- Use an alternative dpkg status file for analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dpigs

> Show which installed packages occupy the most space on `apt` based systems.
> More information: <https://manned.org/dpigs>.

- Display the `n` largest packages on the system:

`dpigs {{[-n|--lines]}} {{n}}`

- Use the specified file instead of the default dpkg status file:

`dpigs {{[-s|--status]}} {{path/to/file}}`

- Display the largest source packages of binary packages installed on the system:

`dpigs {{[-S|--source]}}`

- Display package sizes in human-readable format:

`dpigs {{[-H|--human-readable]}}`

- Display help:

`dpigs {{[-h|--help]}}`
