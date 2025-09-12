---
title: "SRun - Create Slurm Jobs | Free DevTools"
name: srun
path: /freedevtools/tldr/linux/srun
canonical: "https://hexmos.com/freedevtools/tldr/linux/srun/"
description: "Create Slurm jobs and manage resources with SRun. Submit interactive jobs and connect to worker nodes on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- slurm job creation
- linux srun command
- slurm interactive job
- slurm resource allocation
- slurm job submission
- srun job control
- slurm worker node connection
- linux cluster management
- high performance computing linux
- srun slurm command line
features:
- Submit interactive Slurm jobs
- Allocate resources to Slurm jobs
- Connect to worker nodes in a Slurm cluster
- Specify tasks and memory for Slurm jobs
- Manage Slurm jobs through the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# srun

> Create an interactive slurm job or connect to an existing job.
> More information: <https://slurm.schedmd.com/srun.html>.

- Submit a basic interactive job:

`srun --pty /bin/bash`

- Submit an interactive job with different attributes:

`srun --ntasks-per-node {{num_cores}} --mem-per-cpu {{memory_MB}} --pty /bin/bash`

- Connect to a worker node with a job running:

`srun --jobid {{job_id}} --pty /bin/bash`
