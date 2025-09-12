---
title: "Submit Batch Jobs - Control SLURM with sbatch | Free DevTools"
name: sbatch
path: /freedevtools/tldr/linux/sbatch
canonical: "https://hexmos.com/freedevtools/tldr/linux/sbatch/"
description: "Submit and control batch jobs efficiently with the sbatch command. Manage job names, time limits, and node requests easily. Free online tool, no registration required."
category: linux
keywords:
  - sbatch job submission
  - sbatch cluster management
  - slurm batch job
  - slurm job scheduler
  - linux batch processing
  - high-performance computing
  - sbatch time limits
  - sbatch resource allocation
  - sbatch job control
  - parallel processing sbatch
features:
  - Submit batch jobs to the SLURM scheduler.
  - Specify custom job names for easy identification.
  - Set time limits to manage job execution duration.
  - Request multiple nodes for parallel processing.
  - Control various aspects of job submission through command-line options.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sbatch

> Submit a batch job to the SLURM scheduler.
> More information: <https://manned.org/sbatch>.

- Submit a batch job:

`sbatch {{path/to/job.sh}}`

- Submit a batch job with a custom name:

`sbatch --job-name={{myjob}} {{path/to/job.sh}}`

- Submit a batch job with a time limit of 30 minutes:

`sbatch --time={{00:30:00}} {{path/to/job.sh}}`

- Submit a job and request multiple nodes:

`sbatch --nodes={{3}} {{path/to/job.sh}}`
