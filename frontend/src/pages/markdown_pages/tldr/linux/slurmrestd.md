---
title: "Slurm REST API - Control Slurm via REST | Free DevTools"
name: slurmrestd
path: /freedevtools/tldr/linux/slurmrestd
canonical: "https://hexmos.com/freedevtools/tldr/linux/slurmrestd/"
description: "Control Slurm workload manager via REST API with Slurmrestd. Manage clusters, submit jobs, and monitor status. Free online tool, no registration required."
category: linux
keywords:
- slurm rest api
- slurmrestd linux
- slurm rest controller
- slurm job management
- rest api linux
- slurm cluster management
- linux rest interface
- slurm automation
- workload manager rest
- slurm http interface
features:
- Change group ID before processing requests
- Load authentication plugins for secure access
- Read Slurm configuration from a specified file
- Change user ID before processing requests
- Display Slurmrestd version information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# slurmrestd

> Interface to Slurm via REST API. It can be used in two modes: *Inetd Mode* & *Listen Mode*.
> More information: <https://slurm.schedmd.com/slurmrestd.html>.

- Change the group ID (and drop supplemental groups) before processing client requests:

`slurmrestd -g {{group_id}} {{[host]:port | unix:/path/to/socket}}`

- Comma-delimited list of authentication plugins to load:

`slurmrestd -a {{authentication_plugins}} {{[host]:port | unix:/path/to/socket}}`

- Read Slurm configuration from the specified file:

`slurmrestd -f {{path/to/file}}`

- Change user ID before processing client request:

`slurmrestd -u {{user_id}}`

- Display help:

`slurmrestd -h`

- Display version:

`slurmrestd -V`
