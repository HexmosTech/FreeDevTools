---
title: "Scancel Jobs - Cancel Slurm Jobs | Online Free DevTools by Hexmos"
name: scancel
path: /freedevtools/tldr/linux/scancel
canonical: "https://hexmos.com/freedevtools/tldr/linux/scancel/"
description: "Cancel Slurm jobs efficiently with scancel. Manage your job queue and terminate processes instantly using this command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - slurm job cancellation
  - scancel command
  - slurm job control
  - linux job management
  - cancel slurm jobs by id
  - cancel slurm jobs by user
  - slurm task management
  - high-performance computing job control
  - slurm command line tools
  - hpc job cancellation
features:
  - Cancel individual Slurm jobs by ID.
  - Terminate all jobs submitted by a specific user.
  - Provides immediate cancellation of running jobs.
  - Integrates seamlessly with the Slurm workload manager.
  - Offers a simple and efficient command-line interface.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# scancel

> Cancel a Slurm job.
> More information: <https://slurm.schedmd.com/scancel.html>.

- Cancel a job using its ID:

`scancel {{job_id}}`

- Cancel all jobs from a user:

`scancel {{user_name}}`
