---
title: "Slurmctld Control - Manage Slurm Resources | Online Free DevTools by Hexmos"
name: slurmctld
path: "/freedevtools/tldr/linux/slurmctld/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/slurmctld/"
description: "Control Slurm resources with Slurmctld. Manage jobs, allocate resources, and monitor Slurm daemons effectively. Free online tool, no registration required."
category: linux
keywords:
- slurm resource manager
- linux slurmctld command
- slurm cluster management
- slurm job scheduler
- slurm daemon control
- slurm workload management
- slurm resource allocation
- linux cluster administration
- slurm configuration management
- slurm process monitoring
features:
- Clear previous slurmctld states
- Set the daemon's nice value
- Write log messages to a file
- Display slurmctld help information
- Display slurmctld version information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# slurmctld

> Monitor all other Slurm daemons and resources, accept work (jobs), and allocate resources to those jobs.
> More information: <https://slurm.schedmd.com/slurmctld.html>.

- Clear all previous `slurmctld` states from its last checkpoint:

`slurmctld -c`

- Set the daemon's nice value to the specified value, typically a negative number:

`slurmctld -n {{value}}`

- Write log messages to the specified file:

`slurmctld -L {{path/to/output_file}}`

- Display help:

`slurmctld -h`

- Display version:

`slurmctld -V`
