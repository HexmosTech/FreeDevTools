---
title: "Submit Qsub Scripts - Manage Jobs | Online Free DevTools by Hexmos"
name: qsub
path: /freedevtools/tldr/linux/qsub
canonical: "https://hexmos.com/freedevtools/tldr/linux/qsub/"
description: "Submit scripts with Qsub and manage jobs in TORQUE queue management system. Control resource allocation and efficiently schedule tasks. Free online tool, no registration required."
category: linux
keywords:
  - Qsub script submission
  - TORQUE job management
  - HPC resource allocation
  - Cluster job scheduler
  - Command line job submission
  - Qsub walltime control
  - Parallel processing jobs
  - Queue-specific job submission
  - Node and core allocation
  - Linux job management
features:
  - Submit scripts to the TORQUE queue management system.
  - Specify wallclock runtime limits for job execution.
  - Allocate jobs to specific nodes and cores.
  - Submit scripts to a particular queue.
  - Control resource usage for submitted jobs.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qsub

> Submits a script to the queue management system TORQUE.
> More information: <https://manned.org/qsub.1>.

- Submit a script with default settings (depends on TORQUE settings):

`qsub {{script.sh}}`

- Submit a script with a specified wallclock runtime limit of 1 hour, 2 minutes and 3 seconds:

`qsub -l walltime={{1}}:{{2}}:{{3}} {{script.sh}}`

- Submit a script that is executed on 2 nodes using 4 cores per node:

`qsub -l nodes={{2}}:ppn={{4}} {{script.sh}}`

- Submit a script to a specific queue. Note that different queues can have different maximum and minimum runtime limits:

`qsub -q {{queue_name}} {{script.sh}}`
