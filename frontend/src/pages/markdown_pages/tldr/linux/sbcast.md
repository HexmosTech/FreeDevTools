---
title: "Send Slurm Job Files - Transfer Files | Online Free DevTools by Hexmos"
name: sbcast
path: /freedevtools/tldr/linux/sbcast
canonical: "https://hexmos.com/freedevtools/tldr/linux/sbcast/"
description: "Transfer Slurm job files with sbcast. Streamline job execution by distributing necessary files to allocated nodes. Free online tool, no registration required."
category: linux
keywords:
  - Slurm file transfer
  - Slurm job file distribution
  - Slurm cluster file send
  - sbcast file transfer
  - sbcast Slurm command
  - Linux file transfer
  - HPC file distribution
  - Parallel computing file transfer
  - Cluster management file send
  - Scientific computing file distribution
features:
  - Send files to all nodes allocated to a Slurm job
  - Automatically detect and send required shared libraries
  - Transfer executables to allocated nodes
  - Distribute configuration files to Slurm nodes
  - Simplify file distribution within a Slurm batch job
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sbcast

> Send a file to a job's allocated nodes.
> This command should only be used from within a Slurm batch job.
> More information: <https://slurm.schedmd.com/sbcast.html>.

- Send a file to all nodes allocated to the current job:

`sbcast {{path/to/file}} {{path/to/destination}}`

- Autodetect shared libraries the transmitted file depends upon and transmit them as well:

`sbcast --send-libs={{yes}} {{path/to/executable}} {{path/to/destination}}`
