---
title: "Queue View - Monitor SLURM Jobs | Free DevTools"
name: squeue
path: /freedevtools/tldr/unknown/squeue
canonical: "https://hexmos.com/freedevtools/tldr/unknown/squeue/"
description: "View queued SLURM jobs with squeue. Monitor job status and manage resources efficiently using the SLURM scheduler. Free online tool, no registration required."
category: unknown
keywords:
- SLURM job queue
- SLURM scheduler status
- squeue job monitoring
- Linux job scheduler
- HPC job management
- Cluster workload view
- SLURM job control
- squeue user jobs
- squeue start time
- HPC queue analysis
features:
- View all jobs queued in the SLURM scheduler.
- Filter jobs by a specific user.
- Refresh the queue view at a specified interval.
- Display expected start times for queued jobs.
- Monitor resource utilization of queued jobs.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# squeue

> View the jobs queued in the SLURM scheduler.
> More information: <https://manned.org/squeue>.

- View the queue:

`squeue`

- View jobs queued by a specific user:

`squeue {{[-u|--user]}} {{username}}`

- View the queue and refresh every 5 seconds:

`squeue {{[-i|--iterate]}} {{5}}`

- View the queue with expected start times:

`squeue --start`
