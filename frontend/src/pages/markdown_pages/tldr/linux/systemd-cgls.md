---
title: "Systemd-Cgls - Control Linux Control Groups | Online Free DevTools by Hexmos"
name: systemd-cgls
path: /freedevtools/tldr/linux/systemd-cgls
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-cgls/"
description: "Control Linux control groups easily with Systemd-Cgls. Analyze resource usage and manage system processes effectively. Free online tool, no registration required."
category: linux
keywords:
- linux control groups
- systemd cgls command
- control group analyzer
- process resource usage
- linux system analysis
- cgroup hierarchy viewer
- systemd unit management
- resource controller monitoring
- system performance analysis
- linux process control
features:
- Display the entire control group hierarchy
- Show control group tree for specific resource controllers
- Display the hierarchy of specified systemd units
- Analyze resource usage by control group
- Monitor system processes within control groups
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-cgls

> Show the contents of the selected Linux control group hierarchy in a tree.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-cgls.html>.

- Display the whole control group hierarchy on your system:

`systemd-cgls`

- Display a control group tree of a specific resource controller:

`systemd-cgls {{cpu|memory|io}}`

- Display the control group hierarchy of one or more systemd units:

`systemd-cgls {{[-u|--unit]}} {{unit1 unit2 ...}}`
