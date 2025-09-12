---
title: "OOM Control - Analyze System Memory with oomctl | Free DevTools"
name: oomctl
path: /freedevtools/tldr/linux/oomctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/oomctl/"
description: "Analyze system memory with oomctl, a powerful Linux command. Troubleshoot OOM issues and understand cgroup states. Free online tool, no registration required."
category: linux
keywords:
- linux oom control
- systemd-oomd analysis
- oom event analyzer
- cgroup state viewer
- memory pressure monitor
- linux memory management
- system context analysis
- oomctl command reference
- linux resource controller
- systemd memory usage
features:
- Dump the current state of systemd-oomd
- Analyze cgroup memory usage
- Inspect system context details
- Troubleshoot out-of-memory issues
- Monitor memory pressure levels
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# oomctl

> Analyze the state stored in `systemd-oomd`.
> More information: <https://www.freedesktop.org/software/systemd/man/oomctl.html>.

- Show the current state of the cgroups and system contexts stored by `systemd-oomd`:

`oomctl dump`
