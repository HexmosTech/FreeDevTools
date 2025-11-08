---
title: "Slurm Database Daemon - Control Slurm Database | Online Free DevTools by Hexmos"
name: slurmdbd
path: "/freedevtools/tldr/linux/slurmdbd/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/slurmdbd/"
description: "Control Slurm database daemon with slurmdbd. Manage job scheduling data and ensure secure access to your Slurm cluster information. Free online tool, no registration required."
category: linux
keywords:
- slurm database daemon
- slurmdbd linux command
- slurm scheduling data control
- slurm cluster management
- linux database interface
- slurm accounting tool
- slurm job history
- slurm database access
- slurm monitoring tool
- slurm resource management
features:
- Set daemon's nice value for priority control
- Change working directory for logging flexibility
- Display help information for command usage
- Display version information for debugging
- Secure access to enterprise-wide Slurm database
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# slurmdbd

> A secure enterprise-wide interface to a database for Slurm.
> More information: <https://slurm.schedmd.com/slurmdbd.html>.

- Set the daemon's nice value to the specified value, typically a negative number:

`slurmdbd -n {{value}}`

- Change the working directory of `slurmdbd` to the LogFile path or to `/var/tmp`:

`slurmdbd -s`

- Display help:

`slurmdbd -h`

- Display version:

`slurmdbd -V`
