---
title: "Slurm Trigger - Control Cluster Actions | Free DevTools"
name: strigger
path: /freedevtools/tldr/unknown/strigger
canonical: "https://hexmos.com/freedevtools/tldr/unknown/strigger/"
description: "Control Slurm cluster actions with Slurm Trigger. Automate tasks, monitor events, and manage jobs through command line triggers. Free online tool, no registration required."
category: unknown
keywords:
- slurm trigger control
- slurm event management
- slurm job automation
- linux cluster trigger
- slurm command line tool
- slurm trigger configuration
- cluster event monitoring
- slurm scheduler automation
- slurm trigger management
- slurm job event trigger
features:
- Register new event triggers for Slurm cluster
- Execute programs upon job termination
- View active Slurm triggers
- View triggers for a specific job
- Clear specific Slurm triggers
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# strigger

> View or modify Slurm trigger information.
> Triggers are actions that are automatically run when an event occurs on a Slurm cluster.
> More information: <https://slurm.schedmd.com/strigger.html>.

- Register a new trigger. Execute the specified program when the specified event occurs:

`strigger --set --{{primary_database_failure|primary_slurmdbd_failure|primary_slurmctld_acct_buffer_full|primary_slurmctld_failure|...}} {{[-p|--program]}} {{path/to/executable}}`

- Execute the specified program when the specified job terminated:

`strigger --set {{[-j|--jobid]}} {{job_id}} {{[-f|--fini]}} {{[-p|--program]}} "{{path/to/executable}} {{argument1 argument2 ...}}"`

- View active triggers:

`strigger --get`

- View active triggers regarding the specified job:

`strigger --get {{[-j|--jobid]}} {{job_id}}`

- Clear the specified trigger:

`strigger --clear {{trigger_id}}`
