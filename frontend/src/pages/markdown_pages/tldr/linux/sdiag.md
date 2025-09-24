---
title: "Slurm Diagnose - Inspect Slurmctld | Online Free DevTools by Hexmos"
name: sdiag
path: /freedevtools/tldr/linux/sdiag
canonical: "https://hexmos.com/freedevtools/tldr/linux/sdiag/"
description: "Inspect slurmctld execution with Slurm Diagnose. Analyze performance counters, reset metrics, and format output. Free online tool, no registration required."
category: linux
keywords:
- slurm diagnose
- slurmctld diagnose
- linux slurm
- slurm performance
- slurm cluster monitoring
- slurm command line tool
- slurm diagnostic tool
- slurm troubleshooting
- linux cluster management
- slurm job scheduler
features:
- Show all slurmctld performance counters
- Reset slurmctld performance counters
- Specify output format as JSON or YAML
- Target a specific slurm cluster
- Analyze slurm scheduler execution
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sdiag

> Show information about the execution of `slurmctld`.
> More information: <https://slurm.schedmd.com/sdiag.html>.

- Show all performance counters related to the execution of `slurmctld`:

`sdiag {{[-a|--all]}}`

- Reset performance counters related to the execution of `slurmctld`:

`sdiag {{[-r|--reset]}}`

- Specify the output format:

`sdiag {{[-a|--all]}} --{{json|yaml}}`

- Specify the cluster to send commands to:

`sdiag {{[-a|--all]}} {{[-M|--cluster]}} {{cluster_name}}`
