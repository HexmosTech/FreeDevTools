---
title: "SPRIO - View Job Scheduling Priority | Free DevTools"
name: sprio
path: "/freedevtools/tldr/linux/sprio"
canonical: "https://hexmos.com/freedevtools/tldr/linux/sprio/"
description: "View job scheduling priority with SPRIO. Analyze factors influencing job prioritization in Slurm. Free online tool, no registration required."
category: linux
keywords:
- Slurm job priority
- SPRIO scheduling factors
- Linux job management
- SPRIO command line
- Slurm workload manager
- Linux scheduling priority
- Job prioritization analysis
- SPRIO job weights
- Linux user jobs
- Slurm job diagnostics
features:
- View factors determining job scheduling priority
- Analyze job prioritization in Slurm
- Output additional job scheduling information
- View information for jobs of specified users
- Print weights for job scheduling factors
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sprio

> View the factors determining a job's scheduling priority.
> More information: <https://slurm.schedmd.com/sprio.html>.

- View the factors determining the scheduling priority of all jobs:

`sprio`

- View the factors determining the specified job's scheduling priority:

`sprio {{[-j|--jobs]}} {{job_id_1,job_id_2,...}}`

- Output additional information:

`sprio {{[-l|--long]}}`

- View information for the jobs of specified users:

`sprio {{[-u|--user]}} {{user_name_1,user_name_2,...}}`

- Print the weights for each factor determining job scheduling priority:

`sprio {{[-w|--weights]}}`
