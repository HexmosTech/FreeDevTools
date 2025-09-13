---
title: "Control Jobs - Monitor Process Status | Free DevTools"
name: jobs
path: /freedevtools/tldr/common/jobs
canonical: "https://hexmos.com/freedevtools/tldr/common/jobs/"
description: "Control jobs running in your current session with the 'jobs' command. Monitor background processes and retrieve process IDs easily. Free online tool, no registration required."
category: common
keywords:
- process management
- background jobs
- session management
- jobs command
- process status linux
- process id linux
- shell jobs
- command line jobs
- terminal jobs
- jobs control
features:
- Display the status of all running jobs
- Show status of a specific job by ID
- List process IDs associated with jobs
- View detailed job status information
- Monitor processes in the current shell session
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jobs

> Display status of jobs in the current session.
> More information: <https://manned.org/jobs>.

- Show status of all jobs:

`jobs`

- Show status of a particular job:

`jobs %{{job_id}}`

- Show status and process IDs of all jobs:

`jobs -l`

- Show process IDs of all jobs:

`jobs -p`
