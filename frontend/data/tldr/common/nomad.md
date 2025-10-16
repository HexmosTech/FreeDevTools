---
title: "Nomad - Schedule Tasks | Online Free DevTools by Hexmos"
name: nomad
path: "/freedevtools/tldr/common/nomad/"
canonical: "https://hexmos.com/freedevtools/tldr/common/nomad/"
description: "Schedule tasks with Nomad, a distributed scheduler. Validate jobs, plan executions, and manage cluster resources. Free online tool, no registration required."
category: common
keywords:
- Nomad scheduler
- distributed scheduler
- Nomad job management
- Nomad cluster management
- Nomad allocation logs
- Nomad job validation
- Nomad job planning
- Nomad node status
- Nomad volume status
- datacenter scheduler
features:
- Show status of nodes in a Nomad cluster
- Validate a Nomad job file
- Plan a job execution on a Nomad cluster
- Display status information about a specific job
- Follow the logs of a specific allocation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nomad

> Distributed, highly available, datacenter-aware scheduler.
> More information: <https://www.nomadproject.io/docs/commands/>.

- Show the status of nodes in the cluster:

`nomad node status`

- Validate a job file:

`nomad job validate {{path/to/file.nomad}}`

- Plan a job for execution on the cluster:

`nomad job plan {{path/to/file.nomad}}`

- Run a job on the cluster:

`nomad job run {{path/to/file.nomad}}`

- Show the status of jobs currently running on the cluster:

`nomad job status`

- Show the detailed status information about a specific job:

`nomad job status {{job_name}}`

- Follow the logs of a specific allocation:

`nomad alloc logs {{alloc_id}}`

- Show the status of storage volumes:

`nomad volume status`
