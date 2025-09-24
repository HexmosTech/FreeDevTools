---
title: "Manage Slurm Accounts - Control with sacctmgr | Online Free DevTools by Hexmos"
name: sacctmgr
path: /freedevtools/tldr/linux/sacctmgr
canonical: "https://hexmos.com/freedevtools/tldr/linux/sacctmgr/"
description: "Manage Slurm accounts efficiently with sacctmgr.  View, add, and modify cluster and account configurations using command-line interface. Free online tool, no registration required."
category: linux
keywords:
  - slurm account management
  - sacctmgr commands
  - slurm cluster configuration
  - slurm account creation
  - slurm database management
  - linux cluster management
  - slurm account details
  - high performance computing
  - hpc cluster tools
  - slurm command line
features:
  - View current Slurm configuration details.
  - Add new clusters to the Slurm database.
  - Create and manage Slurm accounts.
  - Show detailed information about users, associations, clusters, and accounts.
  - Utilize flexible formatting options for output customization.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sacctmgr

> View, setup, and manage Slurm accounts.
> More information: <https://slurm.schedmd.com/sacctmgr.html>.

- Show current configuration:

`sacctmgr show configuration`

- Add a cluster to the slurm database:

`sacctmgr add cluster {{cluster_name}}`

- Add an account to the slurm database:

`sacctmgr add account {{account_name}} cluster={{cluster_of_account}}`

- Show details of user/association/cluster/account using a specific format:

`sacctmgr show {{user|association|cluster|account}} format="Account%10" format="GrpTRES%30"`
