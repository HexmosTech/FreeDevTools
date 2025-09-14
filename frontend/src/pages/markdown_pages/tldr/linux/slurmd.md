---
title: "Slurmd Control - Manage Slurm Compute Nodes | Free DevTools"
name: slurmd
path: /freedevtools/tldr/linux/slurmd
canonical: "https://hexmos.com/freedevtools/tldr/linux/slurmd/"
description: "Control Slurm compute node tasks with Slurmd. Monitor, launch, and manage tasks on your Slurm cluster. Free online tool, no registration required."
category: linux
keywords:
  - slurm compute node management
  - slurm task monitoring
  - slurm job control
  - slurmd command line
  - linux slurm daemon
  - slurm cluster administration
  - slurm task launcher
  - slurm node controller
  - slurmd configuration
  - slurm resource manager
features:
  - Monitor tasks running on Slurm compute nodes
  - Accept and launch tasks on demand
  - Terminate running tasks upon request
  - Report node reboots for testing purposes
  - Configure Slurmd using specified configuration files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# slurmd

> Monitors all tasks running on the compute node, accepts tasks, launches tasks, and kills running tasks upon request.
> More information: <https://slurm.schedmd.com/slurmd.html>.

- Report node rebooted when daemon restarted (Used for testing purposes):

`slurmd -b`

- Run the daemon with the given nodename:

`slurmd -N {{nodename}}`

- Write log messages to the specified file:

`slurmd -L {{path/to/output_file}}`

- Read configuration from the specified file:

`slurmd -f {{path/to/file}}`

- Display help:

`slurmd -h`
