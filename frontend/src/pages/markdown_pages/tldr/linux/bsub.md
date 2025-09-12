---
title: "Submit LSF Jobs - Schedule Batch Tasks | Free DevTools"
name: bsub
path: /freedevtools/tldr/unknown/bsub
canonical: "https://hexmos.com/freedevtools/tldr/unknown/bsub/"
description: "Schedule batch tasks with LSF bsub command. Submit jobs, manage queues, and allocate resources effectively. Free online tool, no registration required."
category: unknown
keywords:
- LSF job submission
- batch job scheduler
- LSF command line
- job queue management
- resource allocation LSF
- LSF task scheduling
- bsub LSF scheduler
- HPC workload management
- cluster job submission
- bsub command reference
features:
- Submit batch jobs to an LSF scheduler
- Specify queue for job execution
- Redirect output and error streams
- Request specific CPU cores and memory allocation
- Set runtime limits for job execution
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bsub

> Submit batch jobs to LSF (Load Sharing Facility) scheduler.
> More information: <https://www.ibm.com/docs/spectrum-lsf/latest?topic=reference-bsub>.

- Submit a script file as a job:

`bsub {{path/to/script.sh}}`

- Submit a job to a specific queue:

`bsub -q {{queue_name}} make all`

- Submit a job with a name and redirect output and error:

`bsub -J {{job_name}} --output {{path/to/output.log}} --error {{path/to/error.log}} {{path/to/script.sh}}`

- Request 8 CPU cores and 16GB memory for a command:

`bsub -n 8 -M 16G cargo build --release`

- Run an interactive shell in the current session:

`bsub -I bash`

- Submit a job with a runtime limit of 45 minutes:

`bsub -W 45 {{path/to/script.sh}}`
