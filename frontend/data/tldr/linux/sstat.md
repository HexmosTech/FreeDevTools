---
title: "sstat Command - View Job Status | Online Free DevTools by Hexmos"
name: sstat
path: "/freedevtools/tldr/linux/sstat/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/sstat/"
description: "View and manage Slurm job status with the sstat command.  Check job IDs, CPU usage, and memory consumption easily. Free online tool, no registration required."
category: linux
keywords:
  - slurm job status
  - sstat command
  - slurm job monitoring
  - linux cluster management
  - high performance computing
  - slurm job information
  - job id lookup
  - slurm resource usage
  - command line job status
  - system administration
features:
  - Display the status of Slurm jobs.
  - Show detailed job information including ID, CPU usage, and memory.
  - Filter jobs by ID for specific status checks.
  - Provide parsable output for scripting and automation.
  - List available fields for customized output formatting.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sstat

> View information about running jobs.
> More information: <https://slurm.schedmd.com/sstat.html>.

- Display status information of a comma-separated list of jobs:

`sstat {{[-j|--jobs]}} {{job_id}}`

- Display job ID, average CPU and average virtual memory size of a comma-separated list of jobs, with pipes as column delimiters:

`sstat {{[-p|--parsable]}} {{[-j|--jobs]}} {{job_id}} {{[-o|--format]}} {{JobID,AveCPU,AveVMSize}}`

- Display list of fields available:

`sstat {{[-e|--helpformat]}}`
