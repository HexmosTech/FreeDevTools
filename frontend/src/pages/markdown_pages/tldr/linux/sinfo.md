---
title: "View Slurm Info - Control Cluster Status | Free DevTools"
name: sinfo
path: /freedevtools/tldr/linux/sinfo
canonical: "https://hexmos.com/freedevtools/tldr/linux/sinfo/"
description: "View Slurm cluster information with Sinfo. Monitor partition status, node availability, and resource allocation effectively with this Slurm command. Free online tool, no registration required."
category: linux
keywords:
  - Slurm cluster info
  - Slurm node status
  - Slurm partition status
  - Slurm resource management
  - Slurm workload manager
  - Slurm sinfo command
  - Linux cluster management
  - HPC cluster monitoring
  - Slurm node allocation
  - Slurm job scheduling
features:
  - Display detailed status of Slurm partitions
  - Show information about idle nodes
  - Summarize the status of dead nodes
  - List reasons for node failures
  - Provide a quick summary overview of the cluster
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sinfo

> View information about Slurm nodes and partitions.
> See also: `squeue`, `sbatch`, which are also part of the Slurm workload manager.
> More information: <https://slurm.schedmd.com/sinfo.html>.

- Show a quick summary overview of the cluster:

`sinfo {{[-s|--summarize]}}`

- View the detailed status of all partitions across the entire cluster:

`sinfo`

- View the detailed status of a specific partition:

`sinfo {{[-p|--partition]}} {{partition_name}}`

- View information about idle nodes:

`sinfo {{[-t|--states]}} {{idle}}`

- Summarise dead nodes:

`sinfo {{[-d|--dead]}}`

- List dead nodes and the reasons why:

`sinfo {{[-R|--list-reasons]}}`
