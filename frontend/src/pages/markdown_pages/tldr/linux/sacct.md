---
title: "Sacct Command - Display Slurm Accounting Data | Online Free DevTools by Hexmos"
name: sacct
path: /freedevtools/tldr/linux/sacct
canonical: "https://hexmos.com/freedevtools/tldr/linux/sacct/"
description: "Display and manage Slurm job accounting data with the sacct command.  Filter jobs by time, state, and resource usage. Free online tool, no registration required."
category: linux
keywords:
  - slurm accounting data
  - sacct command
  - slurm job information
  - linux cluster accounting
  - slurm job reporting
  - high performance computing
  - hpc accounting
  - slurm resource usage
  - job state analysis
  - slurm command line
features:
  - Display job details including ID, name, state, and resource usage.
  - Filter jobs based on time, state, and other criteria.
  - Output customized reports with selected attributes.
  - Analyze job allocation and resource consumption.
  - Retrieve detailed job exit codes and reasons for failure.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sacct

> Display accounting data from the Slurm service.
> More information: <https://slurm.schedmd.com/sacct.html>.

- Display job ID, job name, partition, account, number of allocated cpus, job state, and job exit codes for recent jobs:

`sacct`

- Display job ID, job state, job exit code for recent jobs:

`sacct {{[-b|--brief]}}`

- Display the allocations of a job:

`sacct {{[-j|--jobs]}} {{job_id}} {{[-X|--allocations]}}`

- Display elapsed time, job name, number of requested CPUs, and memory requested of a job:

`sacct {{[-j|--jobs]}} {{job_id}} {{[-o|--format]}} Elapsed,JobName,ReqCPUS,ReqMem`

- Display recent jobs that occurred from one week ago up to the present day:

`sacct {{[-S|--starttime]}} $(date {{[-d|--date]}} "1 week ago" +'%F')`

- Output a larger number of characters for an attribute:

`sacct {{[-o|--format]}} JobID,JobName%100`
