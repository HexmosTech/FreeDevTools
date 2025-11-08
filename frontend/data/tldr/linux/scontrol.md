---
title: "Scontrol - Control Slurm Jobs | Online Free DevTools by Hexmos"
name: scontrol
path: "/freedevtools/tldr/linux/scontrol/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/scontrol/"
description: "Control Slurm jobs with scontrol on Linux. Suspend, resume, hold, and release jobs with this free command-line interface tool. Free online tool, no registration required."
category: linux
keywords:
- slurm job control
- scontrol command line
- linux job management
- slurm job suspend
- slurm job resume
- slurm job hold
- slurm job release
- slurm job modify
- slurm job information
- slurm scheduler
features:
- Show information about Slurm jobs.
- Suspend running Slurm jobs.
- Resume suspended Slurm jobs.
- Hold queued Slurm jobs.
- Release held Slurm jobs.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# scontrol

> View information about and modify jobs.
> More information: <https://slurm.schedmd.com/scontrol.html>.

- Show information for job:

`scontrol show job {{job_id}}`

- Suspend a comma-separated list of running jobs:

`scontrol suspend {{job_id1,job_id2,...}}`

- Resume a comma-separated list of suspended jobs:

`scontrol resume {{job_id1,job_id2,...}}`

- Hold a comma-separated list of queued jobs (Use `release` command to permit the jobs to be scheduled):

`scontrol hold {{job_id1,job_id2,...}}`

- Release a comma-separated list of suspended job:

`scontrol release {{job_id1,job_id2,...}}`
